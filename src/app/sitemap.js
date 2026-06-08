import { blogs } from "@/data/blogs";
import { projects } from "@/data/projects";
import { seo } from "@/data/seo";

const staticRoutes = [
  "",
  "/about",
  "/projects",
  "/blog",
  "/resume",
  "/contact",
  "/tech-stack"
];

export default function sitemap() {
  const now = new Date();

  const staticEntries = staticRoutes.map((route) => ({
    url: `${seo.baseUrl}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8
  }));

  const projectEntries = projects.map((project) => ({
    url: `${seo.baseUrl}/projects/${project.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7
  }));

  const blogEntries = blogs.map((post) => ({
    url: `${seo.baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt || now),
    changeFrequency: "monthly",
    priority: 0.65
  }));

  return [...staticEntries, ...projectEntries, ...blogEntries];
}
