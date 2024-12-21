import { useState, useEffect } from "react";
import { parseBlogPost } from "../utils/markdown";
import { BlogPost } from "../types";
import { Link } from "react-router-dom";

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      const blogFiles = ["2024-01-19-welcome-to-lenktira.md", "2024-01-20-hellou.md"];

      const posts = await Promise.all(
        blogFiles.map(async (file) => {
          const markdown = await fetch(`/src/content/blog/${file}`).then((res) => res.text());
          return parseBlogPost(markdown);
        })
      );
      setBlogPosts(posts);
    };

    fetchBlogPosts();
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-12">
      <h1 className="font-serif text-5xl font-semibold text-gray-900 tracking-tight">Blog</h1>
      <div className="group space-y-5">
        {blogPosts.map((post) => (
          <div
            key={post.slug}
            className="prose prose-lg prose-gray prose-headings:font-serif prose-headings:font-medium"
          >
            <Link to={`/blog/${post.slug}`}>
              <h2>{post.title}</h2>
              <p>{post.date}</p>
              <p>{post.author}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
