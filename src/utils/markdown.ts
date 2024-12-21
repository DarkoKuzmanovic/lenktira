import { BlogPost } from "../types";

const calculateReadingTime = (content: string): string => {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
};

export const parseBlogPost = async (
  markdown: string,
  filename?: string
): Promise<BlogPost> => {
  const parts = markdown.split("---");
  let frontmatter = "";
  let content = "";

  if (parts.length >= 3) {
    frontmatter = parts[1];
    content = parts.slice(2).join("---").trim();
  } else if (parts.length === 2) {
    frontmatter = parts[1];
    content = "";
  } else {
    content = markdown;
  }

  const metadata = frontmatter
    .split("\n")
    .reduce<Record<string, string>>((acc, line) => {
      const [key, value] = line.split(": ");
      if (key && value) {
        acc[key.trim()] = value.trim();
      }
      return acc;
    }, {});

  // Extract slug from filename (remove date and .md)
  const slug = filename
    ? filename.replace(/^\d{4}-\d{2}-\d{2}-(.+)\.md$/, '$1')
    : metadata.title
      ? metadata.title.toLowerCase().replace(/\s+/g, "-")
      : "no-title";

  const readingTime = calculateReadingTime(content);

  return {
    title: metadata.title || "No title",
    date: metadata.date || "No date",
    author: metadata.author || "Unknown author",
    content,
    slug,
    readingTime,
  };
};