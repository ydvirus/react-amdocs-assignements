import React from 'react';
import './Solutions.css';
import createAmazingImage from '../../../assets/create-amazing.png';
import greenLock from '../../../assets/green-padlock-11777.svg';

function Solutions() {
  return (
    <div className="container-fluid solution-container">
      <div className="container">
        <div className="row py-5">
          <div className="col-lg-5 col-12 d-flex align-items-center pb-4">
            <div>
              <h1 className="big-green-heading mb-3">
                Hosting solution with benefits.
              </h1>
              <p className="mb-4" style={{ fontSize: '22px' }}>
                Turn your ideas into reality with Static. With a lot of powerful
                features, we guarantee simplicity and clarity.
              </p>
              <button className="btn btn-success secondary-size-button">
                read more
              </button>
            </div>
          </div>
          <div className="col-lg-7 col-12">
            <div className="container">
              <div className="row">
                <div className="col-md-6 col-sm-12 col-12 ps-0">
                  <div className="card solution-card mb-3">
                    <div className="card-body d-flex flex-column align-items-center  text-center">
                      <img
                        src={greenLock}
                        className="green-icon"
                        alt="Green Icon"
                      />
                      <button className="btn btn-success chip-button mt-3">
                        FREE
                      </button>
                      <h5 className="card-title solution-card-heading">
                        SSL Certificate
                      </h5>

                      <p className="card-text solution-card-paragraph">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <button className="solution-card-button">MORE</button>
                    </div>
                  </div>
                  <div className="card solution-card solution-card-2">
                    <div className="card-body d-flex flex-column align-items-center  text-center">
                      <img
                        src={greenLock}
                        className="green-icon"
                        alt="Green Icon"
                      />
                      <h5 className="card-title solution-card-heading">
                        Code Editor
                      </h5>
                      <p className="card-text solution-card-paragraph">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <button className="solution-card-button">MORE</button>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-sm-12 col-12 ps-0 ">
                  <div className="card solution-card mb-3">
                    <div className="card-body d-flex flex-column align-items-center  text-center">
                      <img
                        src={greenLock}
                        className="green-icon"
                        alt="Green Icon"
                      />

                      <h5 className="card-title solution-card-heading">
                        Personal Domain
                      </h5>

                      <p className="card-text solution-card-paragraph">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <button className="solution-card-button">MORE</button>
                    </div>
                  </div>
                  <div className="card solution-card">
                    <div className="card-body d-flex flex-column align-items-center text-center">
                      <img
                        src={greenLock}
                        className="green-icon"
                        alt="Green Icon"
                      />
                      <button className="btn btn-success chip-button mt-3">
                        FREE
                      </button>
                      <h5 className="card-title solution-card-heading">
                        Media Storage
                      </h5>
                      <p className="card-text solution-card-paragraph">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <button className="solution-card-button">MORE</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container designer-container">
        <div className="row designer-row">
          <div className="col-md-6 col-12 rectangle-column px-0">
            <div className="rectangle-box">
              <div className="circle-box"></div>

              <img
                className="createAmazingImage"
                src={
                  'https://www.kindpng.com/picc/m/539-5393673_banner-responsive-website-design-png-transparent-png.png'
                }
                alt="Create Amazing Banner"
              />
            </div>
          </div>
          <div className="col-md-6 col-12 card-column px-0">
            <div className="card create-amazing-card px-4 py-2">
              <div className="card-body">
                <h2 className="card-title secondary-heading">
                  Create Amazing Website
                </h2>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.ample text to build on the card
                  title and make up the bulk of card title and make up the bulk
                  of the card's content.
                </p>
                <p>
                  Image from{' '}
                  <span style={{ textDecoration: 'underline' }}>Freepik</span>
                </p>
                <button className="btn btn-success secondary-size-button">
                  learn more
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Solutions;
