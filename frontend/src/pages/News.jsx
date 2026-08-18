import { Newspaper, ArrowRight } from "lucide-react";

import "./News.css";

function News() {
  return (
    <section className="inner-page">

      <div className="inner-page-container">

        <div className="page-hero">

          <div className="page-icon">
            <Newspaper size={25} />
          </div>

          <span className="section-label">
            INTELLIGENCE FEED
          </span>

          <h1>
            Industry News
          </h1>

          <p>
            Discover relevant developments, market movements
            and competitor news in one place.
          </p>

        </div>

        <div className="empty-state">

          <div className="empty-icon">
            <Newspaper size={28} />
          </div>

          <h2>
            News intelligence is coming soon
          </h2>

          <p>
            This section will become the central place for
            collecting and analyzing industry news.
          </p>

          <button className="secondary-button">
            Back to Home
            <ArrowRight size={16} />
          </button>

        </div>

      </div>

    </section>
  );
}

export default News;