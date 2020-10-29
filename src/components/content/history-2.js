import React from "react";
import "./content.css";

export default function HistoryTwo() {
  return (
    <div className="main-content-2">
      <div className="overlay">
        <div className="padding-top"></div>
        <article className="article-back">
          <a className="fas fa-long-arrow-alt-left" href="/about-us">
            {"\u00a0"} BACK{"\u00a0"}TO{"\u00a0"}ABOUT{"\u00a0"}US
          </a>
        </article>
        <main className="main-history-2">
          <article className="article-history-2">
            <section className="section-history-2">
              <img
                className="img"
                src="/images/pexels-photo-69212.png"
                alt=""
              />
            </section>

            <section className="section-history-2">
              <h5>Diet And Cure For Candida Infections</h5>
              <h1>Joint Pain</h1>
              <p>
                The LASIK surgeon uses computer software to guide the IntraLase
                laser beam, which applies a series of tiny (3-micron-diameter)
                bubbles within the central layer of the cornea.
              </p>
              <p>
                The resulting corneal flap is created at a precise depth and
                diameter pre-determined by the surgeon. As occurs with a
                mechanical microkeratome, a small section of tissue at one edge
                of the flap is left uncut, forming a hinge that allows the
                surgeon to fold back the flap so that the cornea can be accessed
                and reshaped for vision correction.
              </p>
            </section>
          </article>
        </main>
      </div>
    </div>
  );
}
