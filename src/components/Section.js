import React from "react";

function Section({ id, title, content }) {
  return (
    <>
      <style>
        {`
          .section {
            padding: 50px 20px;
            background: #f6f6f6;
            text-align: center;
          }

          .section h2 {
            font-size: 2rem;
            margin-bottom: 20px;
          }

          .section p {
            font-size: 1.2rem;
            color: #555;
          }
        `}
      </style>
      <section id={id} className="section">
        <div>
          <h2>{title}</h2>
          <p>{content}</p>
        </div>
      </section>
    </>
  );
}

export default Section;
