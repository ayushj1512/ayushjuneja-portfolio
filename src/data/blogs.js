import "server-only";
import fs from "node:fs";
import path from "node:path";

const blogsDirectory = path.join(process.cwd(), "src", "data", "blogs");

function parseMarkdownContent(markdown = "") {
  const lines = markdown.split("\n");
  const blocks = [];
  let paragraph = [];
  let listItems = [];
  let codeLines = [];
  let codeLanguage = "";
  let inCodeBlock = false;

  const flushParagraph = () => {
    if (!paragraph.length) return;
    blocks.push({
      type: "paragraph",
      text: paragraph.join(" ").trim()
    });
    paragraph = [];
  };

  const flushList = () => {
    if (!listItems.length) return;
    blocks.push({
      type: "list",
      items: [...listItems]
    });
    listItems = [];
  };

  const flushCode = () => {
    if (!codeLines.length) return;
    blocks.push({
      type: "code",
      language: codeLanguage,
      code: codeLines.join("\n")
    });
    codeLines = [];
    codeLanguage = "";
  };

  for (const rawLine of lines) {
    const line = rawLine.trim();

    if (rawLine.trimStart().startsWith("```")) {
      flushParagraph();
      flushList();

      if (inCodeBlock) {
        flushCode();
        inCodeBlock = false;
      } else {
        inCodeBlock = true;
        codeLanguage = rawLine.trim().replace(/^```/, "").trim();
      }

      continue;
    }

    if (inCodeBlock) {
      codeLines.push(rawLine);
      continue;
    }

    if (!line) {
      flushParagraph();
      flushList();
      continue;
    }

    if (line.startsWith("# ")) {
      flushParagraph();
      flushList();
      continue;
    }

    if (line.startsWith("## ")) {
      flushParagraph();
      flushList();
      blocks.push({
        type: "heading",
        level: 2,
        text: line.replace(/^##\s+/, "")
      });
      continue;
    }

    if (line.startsWith("### ")) {
      flushParagraph();
      flushList();
      blocks.push({
        type: "heading",
        level: 3,
        text: line.replace(/^###\s+/, "")
      });
      continue;
    }

    if (line.startsWith("- ") || line.startsWith("* ")) {
      flushParagraph();
      listItems.push(line.replace(/^[-*]\s+/, ""));
      continue;
    }

    paragraph.push(line);
  }

  flushParagraph();
  flushList();
  flushCode();

  return blocks;
}

function normalizeBlog(post) {
  return {
    ...post,
    coverImage: post.coverImage || post.image || null,
    category: post.category || "Insights",
    featured: Boolean(post.featured),
    tags: Array.isArray(post.tags) ? post.tags : [],
    contentBlocks: typeof post.content === "string" ? parseMarkdownContent(post.content) : []
  };
}

function loadBlogsFromFolder() {
  const filenames = fs
    .readdirSync(blogsDirectory)
    .filter((file) => file.endsWith(".json"));

  return filenames
    .map((filename) => {
      const filePath = path.join(blogsDirectory, filename);
      const raw = fs.readFileSync(filePath, "utf8");
      return normalizeBlog(JSON.parse(raw));
    })
    .sort((a, b) => {
      const featuredDelta = Number(b.featured) - Number(a.featured);
      if (featuredDelta !== 0) return featuredDelta;

      return new Date(b.publishedAt || 0).getTime() - new Date(a.publishedAt || 0).getTime();
    });
}

export const blogs = loadBlogsFromFolder();

export function getBlogBySlug(slug) {
  return blogs.find((post) => post.slug === slug);
}
