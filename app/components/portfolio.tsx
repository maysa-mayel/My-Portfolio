"use client";

import Link from "next/link";
import linksData from "@/app/data/links.json";
import { useState, useEffect } from "react";
import { Github, Linkedin, Mail, Moon, Sun } from "lucide-react";

export default function Portfolio() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [leetcodeStats, setLeetcodeStats] = useState({ solved: 0, total: 0 });

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'dark' | 'light' || 'dark';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  useEffect(() => {
    fetch('https://leetcode-stats-api.herokuapp.com/mayssa_mayel')
      .then(res => res.json())
      .then(data => {
        setLeetcodeStats({
          solved: data.totalSolved || 0,
          total: data.totalQuestions || 0
        });
      })
      .catch(err => console.error('Error fetching LeetCode stats:', err));
  }, []);

  return (
    <>
      <div className="container">
        <div className="hero">
          <div style={{ position: 'relative', display: 'inline-block' }}>
            <img 
              src="/123765555.png"
              alt="Profile" 
              className="profile-img" 
            />
            <button 
              onClick={toggleTheme} 
              className="theme-toggle-inline"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun size={18} strokeWidth={2} />
              ) : (
                <Moon size={18} strokeWidth={2} />
              )}
            </button>
          </div>

          <h1>Mayssa Mayel</h1>
          <p className="role">AI and Software Engineer</p>

          <div className="nav-buttons">
            <a href="#about" className="nav-btn">ABOUT</a>
            <Link href="/timeline" className="nav-btn">TIMELINE</Link>
            <Link href="/blog" className="nav-btn">BLOG</Link>
          </div>

          <div className="social-links">
            <a href={`mailto:${linksData.social.email}`} aria-label="Email">
              <Mail size={24} strokeWidth={1.5} />
            </a>
            <a href={linksData.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github size={24} strokeWidth={1.5} />
            </a>
            <a href={linksData.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin size={24} strokeWidth={1.5} />
            </a>
          </div>
        </div>

        <p className="intro">
          Recent Computer Engineering graduate from ENET'Com passionate about AI, data, and entrepreneurship, always learning, always building.
        </p>

        <div className="section" id="about">
          <h2>Currently</h2>
          <ul>
            <li>
              Writing monthly technical articles on{" "}
              <a href={linksData.social.medium} target="_blank" rel="noopener noreferrer" className="inline-link">
                Medium
              </a>{" "}
              about AI and software engineering, reaching over 5K views and 3K reads within a year.
            </li>
            <li>
              Building{" "}
              <a href={linksData.social.symbio} target="_blank" rel="noopener noreferrer" className="inline-link">
                Symbio
              </a>
              , a project that combines AI, software engineering, and entrepreneurship, where I'm working on Graph RAG and agent-based systems.
            </li>
            <li>Learning advanced ETL processes and developing scalable, robust data pipelines.</li>
            <li>
              Learning about data structures and algorithms while solving LeetCode problems, currently solved{" "}
              <a href={linksData.social.leetcode} target="_blank" rel="noopener noreferrer" className="inline-link">
                {leetcodeStats.solved > 0 ? `${leetcodeStats.solved} problems` : 'problems'}.
              </a>
            </li>
          </ul>
        </div>

        <div className="section">
          <h2>Achievements</h2>
          <ul>
            <li>
              Completed three internships in applied AI, data science, and data engineering, working on real-world systems and multidisciplinary projects.
            </li>
            <li>
              Interned for six months at{" "}
              <a href={linksData.social.primatec} target="_blank" rel="noopener noreferrer" className="inline-link">
                Primatec Engineering
              </a>
              , where I designed and implemented an AI-based diagnostic system for in-vehicle ECU communication, from analytics and visualization to AI model integration and LLM-driven reporting.
            </li>
            <li>
              Co-founded and served as Vice President of{" "}
              <a href={linksData.social.tunsa} target="_blank" rel="noopener noreferrer" className="inline-link">
                TUNSA ENET'Com
              </a>, the student branch of the Tunisian Space Association in Sfax, leading events, workshops, and training sessions for 27 members.
            </li>
            <li>
              Participated in the{" "}
              <a href={linksData.social.ost} target="_blank" rel="noopener noreferrer" className="inline-link">
                Open Startup Tunisia (OST)
              </a>{" "}
              program as a Data Scientist at{" "}
              <a href={linksData.social.orianai} target="_blank" rel="noopener noreferrer" className="inline-link">
                Orian AI
              </a>
              , completing over 90 hours of entrepreneurship and startup training, and reaching the semi-final stage.
            </li>
            <li>
              Built several AI, deep learning, and software engineering projects spanning computer vision, generative AI, and data-driven systems. (<a href="https://github.com/maysa-mayel" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">more here</a>).
            </li>
            <li>
              Earned certifications in AI, MLOps, DevOps, and software engineering from NVIDIA, Stanford University, Microsoft Azure, KodeKloud, and Postman.
            </li>
          </ul>
        </div>

        <div className="section">
          <h2>Free Time</h2>
          <ul>
            <li>Passionate about nature and sports, currently obsessed with caving and running.</li>
            <li>Often reading, writing, singing, or exploring new ideas.</li>
          </ul>
        </div>

        <div className="section" id="contact">
          <h2>Contact</h2>
          <p className="contact-text">I'm always open to new opportunities and collaborations, so feel free to reach out to me.</p>
          <div className="contact-btn-wrapper">
            <a href={`mailto:${linksData.social.email}`} className="contact-btn">
              Contact me
              <Mail size={18} strokeWidth={1.5} />
            </a>
          </div>
        </div>

        <footer className="footer">
          <p>© {new Date().getFullYear()} Mayssa Mayel</p>
        </footer>
      </div>
    </>
  );
}