import { Send, Sparkles } from "lucide-react";

import "./ChatAgent.css";

function ChatAgent() {
  return (
    <section className="chat-agent glass">

      <div className="chat-header">
        <div>
          <span className="chat-label">
            AI WORKSPACE
          </span>

          <h2>
            Chat With Agent
          </h2>
        </div>

        <Sparkles size={19} />
      </div>

      <div className="chat-body">

        <div className="chat-placeholder">
          <div className="chat-icon">
            <Sparkles size={22} />
          </div>

          <h3>
            Your AI research assistant
          </h3>

          <p>
            Ask questions about Green SM, competitors,
            market trends or other intelligence topics.
          </p>
        </div>

      </div>

      <div className="chat-input-wrapper">
        <input
          type="text"
          placeholder="Ask the agent..."
        />

        <button>
          <Send size={16} />
        </button>
      </div>

    </section>
  );
}

export default ChatAgent;
