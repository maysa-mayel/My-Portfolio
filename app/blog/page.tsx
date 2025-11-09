import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/app/components/ui/card";
import blogsData from "@/app/data/blogs.json";

export default function BlogPage() {
  return (
    <div className="container">
      <Link href="/" className="back-btn">← BACK</Link>
      <h1 className="page-title">My Blog</h1>

      <div className="blog-grid">
        {blogsData.map((blog) => (
          <Card key={blog.id}>
            <CardHeader>
              <a href={blog.titleUrl} target="_blank" rel="noopener noreferrer" className="blog-link">
                <CardTitle>{blog.title}</CardTitle>
              </a>
              <div className="blog-meta">
                <span className="blog-date">
                  <svg className="calendar-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                  {blog.date}
                </span>
                <span className="blog-separator">•</span>
                <span className="blog-read-time">{blog.readTime}</span>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription>{blog.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}