import {
  ArrowRight,
  BarChart3,
  Newspaper,
  Sparkles,
} from "lucide-react";

function Home() {
  return (
    <section className="home">

      {/* Hero */}
      <div className="hero">

        <div className="hero-glow" />

        <div className="hero-content">

          <div className="eyebrow">
            <Sparkles size={15} />
            AI-powered competitor intelligence
          </div>

          <h1>
            Understand the market.
            <br />
            <span>Stay ahead.</span>
          </h1>

          <p>
            Green SM Competitor Intelligence helps transform
            market information into meaningful competitive insights.
          </p>

          <div className="hero-actions">

            <button className="primary-button">
              Explore Intelligence
              <ArrowRight size={17} />
            </button>

            <button className="secondary-button">
              Learn More
            </button>

          </div>

        </div>

        {/* Hero visual */}
        <div className="hero-visual">

          <div className="intelligence-card">

            <div className="card-header">
              <div>
                <span className="card-label">
                  MARKET INTELLIGENCE
                </span>

                <h3>Competitor Overview</h3>
              </div>

              <div className="status-dot" />
            </div>

            <div className="chart-area">

              <div className="chart-grid">
                <span />
                <span />
                <span />
                <span />
              </div>

              <svg
                className="chart"
                viewBox="0 0 420 150"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient
                    id="chartGradient"
                    x1="0"
                    x2="0"
                    y1="0"
                    y2="1"
                  >
                    <stop
                      offset="0%"
                      stopOpacity="0.25"
                    />

                    <stop
                      offset="100%"
                      stopOpacity="0"
                    />
                  </linearGradient>
                </defs>

                <path
                  d="M0 125 C40 120 45 90 80 100 C115 110 120 65 155 75 C190 85 200 45 235 60 C270 75 280 25 315 42 C350 60 360 18 420 25 L420 150 L0 150 Z"
                  fill="url(#chartGradient)"
                />

                <path
                  d="M0 125 C40 120 45 90 80 100 C115 110 120 65 155 75 C190 85 200 45 235 60 C270 75 280 25 315 42 C350 60 360 18 420 25"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                />
              </svg>

            </div>

            <div className="card-stats">

              <div>
                <span>Market Signals</span>
                <strong>24</strong>
              </div>

              <div>
                <span>Competitors</span>
                <strong>08</strong>
              </div>

              <div>
                <span>News Today</span>
                <strong>36</strong>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Features */}
      <div className="home-container">

        <div className="section-heading">

          <div>
            <span className="section-label">
              PLATFORM
            </span>

            <h2>
              Intelligence, simplified.
            </h2>
          </div>

          <p>
            A foundation for understanding competitors,
            market movements and industry developments.
          </p>

        </div>

        <div className="feature-grid">

          <div className="feature-card">

            <div className="feature-icon">
              <BarChart3 size={22} />
            </div>

            <span className="feature-number">
              01
            </span>

            <h3>
              Competitor Intelligence
            </h3>

            <p>
              Monitor competitor activity and discover
              meaningful market signals.
            </p>

            <span className="coming-soon">
              Coming soon
            </span>

          </div>

          <div className="feature-card">

            <div className="feature-icon">
              <Newspaper size={22} />
            </div>

            <span className="feature-number">
              02
            </span>

            <h3>
              Industry News
            </h3>

            <p>
              Stay informed with relevant news and
              developments across the market.
            </p>

            <span className="coming-soon">
              Coming soon
            </span>

          </div>

          <div className="feature-card">

            <div className="feature-icon">
              <Sparkles size={22} />
            </div>

            <span className="feature-number">
              03
            </span>

            <h3>
              AI Insights
            </h3>

            <p>
              Turn large amounts of information into
              concise and actionable insights.
            </p>

            <span className="coming-soon">
              Coming soon
            </span>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Home;