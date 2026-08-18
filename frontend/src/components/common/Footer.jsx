import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-top">

          <div>
            <div className="logo">
              <div className="logo-mark">
                G
              </div>

              <div className="logo-text">
                GSMAI
              </div>
            </div>

            <p className="footer-description">
              Green SM Competitor Intelligence
            </p>
          </div>

          <p className="footer-note">
            Built for research, education and information sharing.
          </p>

        </div>

        <div className="footer-line" />

        <div className="footer-bottom">
          <span>
            © 2026 GSMAI. All rights reserved.
          </span>

          <span>
            This is a non-profit project.
          </span>
        </div>

      </div>
    </footer>
  );
}

export default Footer;