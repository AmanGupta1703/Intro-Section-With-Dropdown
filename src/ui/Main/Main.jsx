import React from "react";

import { ImageHeroMobile, ImageHeroDesktop } from "../../images";
import { ClientItem } from "../../components";
import { clientsImages } from "../../constants/constant";
import "./main.css";

function Main() {
  return (
    <main className="main">
      <section className="section section--hero">
        <div className="section__image-box">
          <picture className="section__picture">
            <source
              className="section__hero-img section__hero-img--mobile"
              media="(max-width: 430px)"
              srcSet={ImageHeroMobile}
            />
            <source
              className="section__hero-img section__hero-img--desktop"
              media="(min-width: 426px)"
              srcSet={ImageHeroDesktop}
            />
            <img src={ImageHeroDesktop} className="section__hero-img" alt="Hero Image" />
          </picture>
        </div>

        <article className="section__text-box">
          <div className="section__text">
            <h1 className="primary-heading">
              Make <span>remote work</span>
            </h1>
            <p className="section__description">
              Get your team in sync, no matter your location. Streamline processes, create team
              rituals, and watch productivity soar.
            </p>
            <button className="btn btn--dark">Learn more.</button>
          </div>

          <div className="clients">
            {clientsImages.map((client) => (
              <ClientItem key={client.text} imgSrc={client.imgSrc} text={client.text} />
            ))}
          </div>
        </article>
      </section>
    </main>
  );
}

export default Main;
