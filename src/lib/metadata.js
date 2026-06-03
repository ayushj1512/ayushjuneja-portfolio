import { seo } from "@/data/seo";

export function generatePageMetadata({
  title,
  description,
  path = "",
  image,
  keywords = []
} = {}) {
  const pageTitle = title ? `${title} | ${seo.siteName}` : seo.defaultTitle;
  const pageDescription = description || seo.defaultDescription;
  const url = `${seo.baseUrl}${path}`;
  const previewImage = image || seo.defaultImage;
  const mergedKeywords = [...new Set([...(seo.keywords || []), ...(keywords || [])])];

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: mergedKeywords,
    alternates: { canonical: url },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url,
      siteName: seo.siteName,
      images: [{ url: previewImage, width: 1200, height: 630, alt: pageTitle }],
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: [previewImage]
    }
  };
}
