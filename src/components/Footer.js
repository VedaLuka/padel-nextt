import React from "react";

function Footer() {
  return (
    <>
      <style>
        {`
          .footer {
            background: #2c2c2c;
            color: white;
            text-align: center;
            padding: 20px;
          }

          .social-links {
            list-style: none;
            display: flex;
            justify-content: center;
            gap: 1rem;
            padding: 0;
          }

          .social-links a {
            color: white;
            text-decoration: none;
          }
        `}
      </style>
      <footer className="footer">
        <div>
          <p>© 2024 Padel Website. All rights reserved.</p>
          <ul className="social-links">
            <a href="#">Instagram</a>
            <a href="#">WhatsApp</a>
            <a href="#">TikTok</a>
            <button onClick={() => alert('Instagram link clicked!')}>Instagram</button>


          </ul>
        </div>
      </footer>
    </>
  );
}

export default Footer;
