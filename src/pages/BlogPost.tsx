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
      try {
        const markdown = await fetch(`/content/blog/${slug}.md`).then((res) => res.text());
        const post = await parseBlogPost(markdown);
        setBlogPost(post);
      } catch (err) {
        console.error("Error fetching blog post:", err);
        setBlogPost(null);
      }
    };

    fetchBlogPost();
  }, [slug]);

  if (!blogPost) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-12">
      <h1 className="font-serif text-5xl font-semibold text-gray-900 tracking-tight">{blogPost.title}</h1>
      <p>{blogPost.date}</p>
      <p>{blogPost.author}</p>
      <div className="prose prose-lg prose-gray prose-headings:font-serif prose-headings:font-medium">
        <ReactMarkdown>{blogPost.content}</ReactMarkdown>
      </div>
    </div>
  );
};

export default BlogPost;
