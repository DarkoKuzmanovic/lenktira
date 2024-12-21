import { useState, useEffect } from "react";
import { parseBlogPost } from "../utils/markdown";
import { BlogPost } from "../types";
import { Link } from "react-router-dom";

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      const modules = import.meta.glob("../content/blog/*.md", {
        query: "?raw",
        import: "default",
      });

      const posts = await Promise.all(
        Object.entries(modules).map(async ([filepath, resolver]) => {
          const markdown = await resolver();
          const filename = filepath.split("/").pop() || "";
          return parseBlogPost(markdown, filename);
        })
      );

      setBlogPosts(posts);
    };

    fetchBlogPosts();
  }, []);
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-12">
      <h1 className="font-serif text-5xl font-semibold text-gray-900 dark:text-white tracking-tight">Blog</h1>
      <div className="divide-y divide-gray-200 dark:divide-gray-800">
        {blogPosts.map((post) => (
          <article key={post.slug} className="py-8 group">
            <Link to={`/blog/${post.slug}`} className="space-y-3 block">
              <div className="flex items-center space-x-3 text-sm text-gray-600 dark:text-gray-400">
                <time className="font-medium">{post.date}</time>
                <span>•</span>
                <span className="italic">{post.author}</span>
                <span>•</span>
                <span>{post.readingTime}</span>
              </div>
              <h2 className="font-serif text-2xl font-medium text-gray-900 dark:text-white group-hover:text-primary-600 transition-colors">
                {post.title}
              </h2>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blog;
