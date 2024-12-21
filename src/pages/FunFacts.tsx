import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";

const FunFacts = () => {
  const [todaysFact, setTodaysFact] = useState<string>("");

  useEffect(() => {
    const loadFunFact = async () => {
      const response = await fetch("/src/content/fun-facts/facts.md");
      const text = await response.text();

      // Split facts by delimiter
      const facts = text.split("---").filter((fact) => fact.trim());

      // Use date as seed for consistent daily fact
      const today = new Date().toDateString();
      const randomIndex = today.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0) % facts.length;

      setTodaysFact(facts[randomIndex]);
    };

    loadFunFact();
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-12">
      <h1 className="font-serif text-5xl font-semibold text-gray-900 dark:text-white tracking-tight">Daily Fun Fact</h1>
      <div className="group space-y-5">
        <div className="prose prose-lg prose-gray dark:prose-invert prose-headings:font-serif prose-headings:font-medium prose-a:text-primary-600 hover:prose-a:text-primary-700 prose-a:no-underline hover:prose-a:underline">
          <ReactMarkdown>{todaysFact}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default FunFacts;
