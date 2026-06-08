import { seo } from "@/data/seo";

function normalizePath(path = "") {
  if (!path || path === "/") return "";
  return path.startsWith("/") ? path : `/${path}`;
}

function buildUrl(path = "") {
  return `${seo.baseUrl}${normalizePath(path)}`;
}

export function generateSiteMetadata(overrides = {}) {
  const {
    title = seo.defaultTitle,
    description = seo.defaultDescription,
    image = seo.defaultImage,
    keywords = seo.keywords || []
  } = overrides;

  return {
    metadataBase: new URL(seo.baseUrl),
    title,
    description,
    applicationName: seo.siteShortName || seo.siteName,
    referrer: "origin-when-cross-origin",
    formatDetection: {
      email: false,
      address: false,
      telephone: false
    },
    keywords,
    authors: seo.author ? [seo.author] : undefined,
    creator: seo.creator,
    publisher: seo.publisher,
    category: seo.category,
    alternates: {
      canonical: seo.baseUrl
    },
    openGraph: {
      title,
      description,
      url: seo.baseUrl,
      siteName: seo.siteName,
      locale: seo.locale,
      type: "website",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: seo.twitterHandle,
      images: [image]
    },
    robots: seo.robots,
    appleWebApp: {
      capable: true,
      title: seo.siteShortName || seo.siteName,
      statusBarStyle: "black-translucent"
    }
  };
}

export function generatePageMetadata({
  title,
  description,
  path = "",
  image,
  keywords = [],
  type = "website",
  noIndex = false
} = {}) {
  const normalizedPath = normalizePath(path);
  const pageTitle = title ? `${title} | ${seo.siteName}` : seo.defaultTitle;
  const pageDescription = description || seo.defaultDescription;
  const url = buildUrl(normalizedPath);
  const previewImage = image || seo.defaultImage;
  const mergedKeywords = [...new Set([...(seo.keywords || []), ...(keywords || [])])];
  const pageRobots = noIndex
    ? {
        index: false,
        follow: false,
        googleBot: {
          index: false,
          follow: false,
          "max-video-preview": -1,
          "max-image-preview": "large",
          "max-snippet": -1
        }
      }
    : seo.robots;

  return {
    title: pageTitle,
    description: pageDescription,
    referrer: "origin-when-cross-origin",
    formatDetection: {
      email: false,
      address: false,
      telephone: false
    },
    keywords: mergedKeywords,
    authors: seo.author ? [seo.author] : undefined,
    creator: seo.creator,
    publisher: seo.publisher,
    category: seo.category,
    alternates: {
      canonical: url
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url,
      siteName: seo.siteName,
      locale: seo.locale,
      type,
      images: [
        {
          url: previewImage,
          width: 1200,
          height: 630,
          alt: pageTitle
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      creator: seo.twitterHandle,
      images: [previewImage]
    },
    robots: pageRobots
  };
}

export function generatePersonSchema(profile, contact) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.role,
    description: profile.shortBio,
    url: seo.baseUrl,
    image: seo.defaultImage,
    email: contact.email,
    telephone: contact.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: contact.location
    },
    sameAs: (contact.socialLinks || []).map((item) => item.href)
  };
}

export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: seo.siteName,
    alternateName: seo.siteShortName,
    url: seo.baseUrl,
    inLanguage: seo.language
  };
}

export function getCanonicalUrl(path = "") {
  return buildUrl(path);
}
