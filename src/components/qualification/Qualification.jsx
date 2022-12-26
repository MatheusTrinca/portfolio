import React, { useState } from 'react';
import './qualification.css';

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = index => {
    setToggleState(index);
  };

  return (
    <section className="qualification section">
      <h2 className="section__title">Qualificação</h2>
      <span className="section__subtitle">Minha jornada pessoal</span>
      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? 'qualification__button button--flex qualification__active'
                : 'qualification__button button--flex'
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Formação
          </div>
          <div
            className={
              toggleState === 2
                ? 'qualification__button button--flex qualification__active'
                : 'qualification__button button--flex'
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experiência
          </div>
        </div>
        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? 'qualification__content qualification__content-active'
                : 'qualification__content'
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Sistemas de Informação</h3>
                <span className="qualification__subtitle">
                  UNIVEM - Marília
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2021
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">
                  Análise e Desenvolvimento de Sitemas
                </h3>
                <span className="qualification__subtitle">FATEC - Garça</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2018
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Técnico em Informática</h3>
                <span className="qualification__subtitle">ETEC - Marília</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2016
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? 'qualification__content qualification__content-active'
                : 'qualification__content'
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Fast Service App</h3>
                <span className="qualification__subtitle">
                  São Paulo - Brasil
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2022
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Natours</h3>
                <span className="qualification__subtitle">
                  São Paulo - Brasil
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2021
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">DevCamper</h3>
                <span className="qualification__subtitle">
                  São Paulo, Brasil
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2020
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Shop IT</h3>
                <span className="qualification__subtitle">
                  São Paulo, Brasil
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2020
                </div>
              </div>
            </div>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Aluá Festas</h3>
                <span className="qualification__subtitle">
                  Marília, SP, Brasil
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2016 - 2020
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
