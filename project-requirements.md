# Project Requirements: Lenktira

## 1. Overview

This project - Lenktira, is a personal website built using React and Tailwind CSS. It will feature several sections, including a blog, an image gallery, a video gallery, and a daily fun facts section. The content for these sections will be sourced from markdown files, image metadata, and embedded video links.

## 2. Technology Stack

**Frontend:**

- React (latest version)
- Tailwind CSS (latest version)
- TypeScript
- [Optional] React Router for navigation
- [Optional] A library for parsing markdown (e.g., `react-markdown`)
- [Optional] A library for handling image metadata (e.g., a custom solution or a library if needed)

**Content Storage:**

- Markdown files for blog posts and daily fun facts
- Image files in a designated folder
- Video links (URLs) stored in a configuration file or a separate data file (e.g., JSON)

## 3. Functional Requirements

### 3.1. Blog Section

**Functionality:**

- Display a list of blog posts.
- Each blog post should be rendered from a markdown file.
- Blog posts should be displayed with titles, dates, and content.
- Implement pagination or infinite scrolling for blog posts if needed.

**Data Source:**

- Markdown files stored in a designated folder (e.g., `/content/blog`).
- Each markdown file represents a single blog post.
- File naming convention: `YYYY-MM-DD-post-title.md` (e.g., `2024-01-20-my-first-post.md`).
- Metadata within the markdown file (e.g., using YAML frontmatter) for title, date, and author (optional).

### 3.2. Image Gallery Section

**Functionality:**

- Display a grid or list of images.
- Each image should display a thumbnail.
- Clicking on a thumbnail should display the full-size image with its description and other metadata.
- Implement a lightbox or modal for viewing full-size images.

**Data Source:**

- Images stored in a designated folder (e.g., `/public/images`).
- Image metadata (description, date, etc.) should be read from the image file itself (if possible) or from a separate metadata file (e.g., JSON).
- If using a separate metadata file, it should be structured to associate metadata with specific image file names.

### 3.3. Video Gallery Section

**Functionality:**

- Display a list of embedded videos.
- Each video should display a thumbnail and a title.
- Clicking on a thumbnail should embed the video player.

**Data Source:**

- Video links (URLs) stored in a configuration file (e.g., `videos.json`) or a separate data file.
- The data file should include video URLs, titles, and optional descriptions.

### 3.4. Daily Fun Facts Section

**Functionality:**

- Display a random fun fact each day.
- The fun fact should be read from a markdown file.
- The fun fact should be displayed with a title (optional) and content.

**Data Source:**

- A single markdown file containing a list of fun facts (e.g., `/content/fun-facts.md`).
- Each fun fact should be separated by a delimiter (e.g., `---` or a heading).

## 4. Non-Functional Requirements

**Responsive Design:** The website should be responsive and work well on different screen sizes (desktop, tablet, mobile).
**Performance:** The website should load quickly and be performant.
**Maintainability:** The codebase should be well-organized and easy to maintain.
**Accessibility:** The website should be accessible to users with disabilities (e.g., proper use of ARIA attributes).
**Styling:** Use Tailwind CSS for styling and maintain a consistent visual theme.

## 5. Optional Features (Future Enhancements)

- Search functionality for blog posts.
- User comments for blog posts.
- Image filtering or categorization.
- Video categorization.
- A contact form.
- A dedicated about page.

## 6. Development Process

- Start with a basic React application setup using `create-react-app` or Vite.
- Install Tailwind CSS and configure it for the project.
- Implement each section incrementally, starting with the blog section.
- Use version control (e.g., Git) for tracking changes.
- Test thoroughly on different browsers and devices.

## 7. Content Structure Examples

### 7.1. Blog Post Markdown Example

```markdown
---
title: My First Blog Post
date: 2024-01-20
author: Cody
---

# My First Blog Post

This is the content of my first blog post.

It can contain **bold** text, _italic_ text, and even [links](https://example.com).
```

### 7.2. Video Data Example (videos.json)

```json
[
  {
    "title": "My Awesome Video",
    "url": "https://www.youtube.com/embed/your-video-id",
    "description": "A description of the video."
  },
  {
    "title": "Another Great Video",
    "url": "https://vimeo.com/your-video-id",
    "description": "Another video description."
  }
]
```

### 7.3. Fun Facts Markdown Example

```markdown
# Fun Facts

---

**Fun Fact 1:** The quick brown fox jumps over the lazy dog.

---

**Fun Fact 2:** A penny saved is a penny earned.

---

**Fun Fact 3:** Time flies like an arrow; fruit flies like a banana.
```

This `project-requirements.md` file provides a good starting point for your project. You can expand on it as needed. Remember to adjust the optional features and content structure to fit your specific needs. Let me know if you have any other questions or need further assistance!
