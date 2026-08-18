import {
  BarChart3,
  Lightbulb,
  TrendingUp,
} from "lucide-react";

import "./SmartResult.css";

function SmartResult() {
  return (
    <section className="smart-result glass">

      <div className="result-header">
        <div>
          <span className="result-label">
            INTELLIGENCE
          </span>

          <h2>
            Smart Results
          </h2>
        </div>

        <BarChart3 size={19} />
      </div>

      <div className="result-content">

        <div className="result-icon">
          <Lightbulb size={21} />
        </div>

        <h3>
          Intelligent analysis will appear here
        </h3>

        <p>
          Agent responses, competitor insights,
          market analysis and visual intelligence
          will be displayed in this area.
        </p>

        <div className="result-placeholder">

          <div>
            <TrendingUp size={15} />
            <span>Market Intelligence</span>
          </div>

          <div>
            <BarChart3 size={15} />
            <span>Competitor Analysis</span>
          </div>

        </div>

      </div>

    </section>
  );
}

export default SmartResult;
