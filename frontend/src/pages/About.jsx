import { Sparkles, Target, BookOpen } from "lucide-react";

import "./About.css";

function About() {
  return (
    <section className="inner-page">

      <div className="inner-page-container">

        <div className="page-hero">

          <div className="page-icon">
            <Sparkles size={25} />
          </div>

          <span className="section-label">
            ABOUT THE PROJECT
          </span>

          <h1>
            About GSMAI
          </h1>

          <p>
            Green SM Competitor Intelligence is an experimental
            platform focused on market research and competitive intelligence.
          </p>

        </div>

        <div className="about-grid">

          <div className="about-card">

            <div className="feature-icon">
              <Target size={22} />
            </div>

            <h3>
              Our Purpose
            </h3>

            <p>
              Build a practical intelligence platform that helps
              users understand competitors, markets and industry trends.
            </p>

          </div>

          <div className="about-card">

            <div className="feature-icon">
              <BookOpen size={22} />
            </div>

            <h3>
              Research & Education
            </h3>

            <p>
              The platform is designed as a non-profit project
              for research, experimentation and knowledge sharing.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;