import { BlogPost } from "../types";

export const parseBlogPost = async (
  markdown: string
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

  return {
    title: metadata.title || "No title",
    date: metadata.date || "No date",
    author: metadata.author || "Unknown author",
    content,
    slug: metadata.title
      ? metadata.title.toLowerCase().replace(/\s+/g, "-")
      : "no-title",
  };
};
