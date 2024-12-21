import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { parseBlogPost } from "../utils/markdown";
import type { BlogPost } from "../types";
import ReactMarkdown from "react-markdown";

const BlogPost = () => {
  const { slug } = useParams();
  const [blogPost, setBlogPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    const fetchBlogPost = async () => {
      const modules = import.meta.glob("../content/blog/*.md", {
        query: "?raw",
        import: "default",
      });

      // Find the matching file for this slug
      const filePath = Object.keys(modules).find((path) => path.includes(slug!));

      if (filePath) {
        const markdown = await modules[filePath]();
        const post = await parseBlogPost(markdown);
        setBlogPost(post);
      }
    };

    fetchBlogPost();
  }, [slug]);

  if (!blogPost) {
    return <div>Loading...</div>;
  }
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-12">
      <div className="space-y-6">
        <div className="flex items-center space-x-4 text-gray-600 dark:text-gray-400">
          <time className="font-medium">{blogPost.date}</time>
          <span>•</span>
          <span className="italic">{blogPost.author}</span>
          <span>•</span>
          <span>{blogPost.readingTime}</span>
        </div>
        <h1 className="font-serif text-5xl font-semibold text-gray-900 dark:text-white tracking-tight">
          {blogPost.title}
        </h1>
      </div>
      <div className="prose prose-lg prose-gray dark:prose-invert prose-headings:font-serif prose-headings:font-medium">
        <ReactMarkdown>{blogPost.content}</ReactMarkdown>
      </div>
    </div>
  );
};

export default BlogPost;
