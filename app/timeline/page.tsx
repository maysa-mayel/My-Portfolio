import Link from "next/link";

export default function TimelinePage() {
  return (
    <div className="container">
      <Link href="/" className="back-btn">← BACK</Link>
      <h1 className="page-title">My Timeline</h1>

      <div className="timeline-wrapper">
        <div className="timeline-section">
          <h2 className="timeline-heading">April 2025</h2>
          <ul className="timeline-bullets">
            <li>
              Completed the AWS Certified Solutions Architect – Associate course by Zero To Mastery, 
              strengthening cloud architecture and deployment skills.
            </li>
          </ul>
        </div>

        <div className="timeline-section">
          <h2 className="timeline-heading">March 2025</h2>
          <ul className="timeline-bullets">
            <li>Earned multiple KodeKloud certifications in:</li>
          </ul>
          <ul className="timeline-sub-bullets">
            <li>Jenkins</li>
            <li>Grafana Loki</li>
            <li>Kubernetes</li>
            <li>Linux Basics</li>
          </ul>
        </div>

        <div className="timeline-section">
          <h2 className="timeline-heading">February 2025</h2>
          <ul className="timeline-bullets">
            <li>
              Started an AI & Data Engineering Internship at{" "}
              <a href="https://www.linkedin.com/company/primatec-engineering/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="inline-link">
                Primatec Engineering
              </a>
              , developing an intelligent diagnostic system for ECU communication data, integrating ML/DL models 
              (forecasting, classification, clustering), SHAP explainability, real-time Grafana dashboards, CI/CD 
              with Docker and Jenkins, and automated report generation powered by LLMs.
            </li>
            <li>Developed a full-stack automation system using Flask, React, and Streamlit to extract and structure data from ID cards and driver’s licenses, leveraging OCR for text extraction and SLM for intelligent form generation.
            </li>
          </ul>
        </div>

        <div className="timeline-section">
          <h2 className="timeline-heading">January 2025</h2>
          <ul className="timeline-bullets">
            <li>
              Built an AI Text Summarization App integrating the Hugging Face API with Node.js and Express, 
              achieving real-time text processing [
              <a href="https://github.com/maysa-mayel/AI-Text-Summarizer-App/tree/main/Summarize.ai" target="_blank" rel="noopener noreferrer" className="inline-link">Code</a>
              ].
            </li>
            <li>Earned the Postman API Student Expert badge.</li>
          </ul>
        </div>

        <div className="timeline-section">
          <h2 className="timeline-heading">2023 – 2024</h2>
          <ul className="timeline-bullets">
            <li>
              Co-founded and served as Vice President of{" "}
              <a href="https://www.facebook.com/profile.php?id=61553443253071" target="_blank" rel="noopener noreferrer" className="inline-link">
                TUNSA ENET'Com
              </a>
              , leading workshops and training programs on AI, space technologies, and telecommunications.
            </li>
            <li>
              Interned as an AI Engineer at Pixemantic, developing Face Verification & Signature Detection APIs 
              (YOLO, DeepFace, ArcFace) and a document data extraction pipeline (PaddleOCR, table transformer, 
              LayoutLMv3) for intelligent document processing. Recognized as{" "}
              <a href="https://www.linkedin.com/posts/mayssa-mayel_engineerofthemonth-ai-machinelearning-activity-7241070543234379776-3TtU?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD5dUSQBuK1gP8TQLMqU1vIO56lMe2spCKU" target="_blank" rel="noopener noreferrer" className="inline-link">
                Best Engineer of the Month (Summer 2024)
              </a>
              .
            </li>
            <li>
              Built a Self-Checkout Web Application with Real-Time Product Detection, leveraging YOLOv8 (trained on a custom Tunisian product dataset) and Ultralytics for object tracking and counting, with a Flask backend and a responsive HTML/CSS/JavaScript frontend.[
              <a href="https://github.com/maysa-mayel/End-Of-Year-Project" target="_blank" rel="noopener noreferrer" className="inline-link">Code</a>
              ].
            </li>
            <li>
              Developed a Retrieval-Augmented Generation (RAG) System using LangChain, FAISS, and GPT-4 for 
              contextual knowledge retrieval [
              <a href="https://github.com/maysa-mayel/Tutorials/blob/main/GPT4_RAG.ipynb" target="_blank" rel="noopener noreferrer" className="inline-link">Notebook</a>
              ].
            </li>
            <li>Earned the NVIDIA Generative AI with Diffusion Models certification.</li>
            <li>
              Participated in Climate Change AI's {" "}
              <a href="https://www.climatechange.ai/events/summer_school2024" target="_blank" rel="noopener noreferrer" className="inline-link">
                 Virtual Summer School
              </a>
              .
            </li>
            <li>
              Participated in the{" "}
              <a href="https://www.linkedin.com/posts/mayssa-mayel_businessideacompetition-medtechfusion-teammedhelp-activity-7209601761181847553-KRXv?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD5dUSQBuK1gP8TQLMqU1vIO56lMe2spCKU" target="_blank" rel="noopener noreferrer" className="inline-link">
                Business Idea Competition
              </a>
              , leading a multidisciplinary team of engineers and doctors to design an AI-driven healthcare prototype, <em>MedWatch</em>.
            </li>
          </ul>
        </div>

        <div className="timeline-section">
          <h2 className="timeline-heading">2022 – 2023</h2>
          <ul className="timeline-bullets">
            <li>
              Won Second Place at the NASA Space Apps Challenge (National Level) alongside my team.
            </li>
            <li>
              Interned as a Data Scientist at the Québec Training Center, developing a Python-based 
              pipeline to extract and refine French quiz data, leveraging MarianMT and T5 models for translation 
              and question generation.
            </li>
            <li>Earned certification in Microsoft Azure AI Fundamentals.</li>
            <li>
              Completed the Machine Learning Specialization (Coursera & Stanford University) after earning 
              three certifications:
            </li>
          </ul>
          <ul className="timeline-sub-bullets">
            <li>Supervised ML: Regression & Classification</li>
            <li>Advanced Learning Algorithms</li>
            <li>Unsupervised Learning, Recommenders & Reinforcement Learning</li>
          </ul>
        </div>
      </div>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Mayssa Mayel</p>
      </footer>
    </div>
  );
}