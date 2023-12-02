import React from 'react'

const Services = () => {
  return (
    <section className="services section" id="services">
        <h2 className="section__title">Services</h2>
        <span className="section__subtitle">What I offer</span>

        <div className="services__container container grid">
            <div className="services__content">
                <div>
                    <i className="uil uil services__icon"></i>
                    <h3 className="services__title"></h3>
                </div>

                <span className="services__button">View More
                <i className="uil uil-arrow-right"></i>
                </span>

                <div className="services__modal">
                    <div className="services__modal-content">
                        <i className="uil uil-times services__modal-close"></i>

                        <h3 className="service__modal-title"></h3>
                        <p className="services__modal-description"></p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services