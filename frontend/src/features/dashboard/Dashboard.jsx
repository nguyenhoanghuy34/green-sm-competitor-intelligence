import {
  BarChart3,
  LineChart,
  PieChart,
  TrendingUp,
} from "lucide-react";

import "./Dashboard.css";

const charts = [
  {
    icon: LineChart,
    title: "Competitor Performance",
    description: "Competitor performance metrics will appear here.",
  },
  {
    icon: BarChart3,
    title: "Market Comparison",
    description: "Market comparison data will appear here.",
  },
  {
    icon: TrendingUp,
    title: "Market Trends",
    description: "Market trend analysis will appear here.",
  },
  {
    icon: PieChart,
    title: "Market Distribution",
    description: "Market distribution insights will appear here.",
  },
];

function Dashboard() {
  return (
    <main className="dashboard-page">
      <div className="dashboard-container">

        <div className="dashboard-header">
          <div>
            <span className="dashboard-label">
              INTELLIGENCE DASHBOARD
            </span>

            <h1>Dashboard</h1>

            <p>
              Monitor Green SM and competitor intelligence
              through visual analytics.
            </p>
          </div>
        </div>

        <div className="dashboard-grid">
          {charts.map((chart) => {
            const Icon = chart.icon;

            return (
              <section
                className="dashboard-card glass"
                key={chart.title}
              >
                <div className="dashboard-card-header">
                  <div className="dashboard-icon">
                    <Icon size={19} />
                  </div>

                  <span className="coming-soon">
                    COMING SOON
                  </span>
                </div>

                <h2>{chart.title}</h2>

                <p>{chart.description}</p>

                <div className="chart-placeholder">
                  <div className="placeholder-grid">
                    <span />
                    <span />
                    <span />
                    <span />
                  </div>

                  <Icon size={38} />
                </div>
              </section>
            );
          })}
        </div>

      </div>
    </main>
  );
}

export default Dashboard;