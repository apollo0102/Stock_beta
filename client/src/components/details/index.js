import React, { useState, useEffect, useCallback } from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react"; // import from 'keen-slider/react.es' for to get an ES module
import Slider from "react-slick";
import ShadowScrollbars from "./ShadowScrollBars.tsx";
import { Button, message, Steps, Breadcrumb } from "antd";

function Details() {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);

  useEffect(() => {
    forceUpdate();
  }, []);
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };
  function Arrow(props) {
    const disabeld = props.disabled ? " arrow--disabled" : "";
    return (
      <svg
        onClick={props.onClick}
        className={`arrow ${
          props.left ? "arrow--left" : "arrow--right"
        } ${disabeld}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        {props.left && (
          <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
        )}
        {!props.left && (
          <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
        )}
      </svg>
    );
  }
  return (
    <div
      className="details"
      style={{ minWidth: "70vw", maxWidth: "80vw" }}
    >

        <div className=" hero" style={{ minWidth: "800px", maxWidth: "80vw" }}>
          <div
            style={{ borderBottom: "1px solid #8758FF", marginBottom: "0.3em" }}
          >
            <h1
              style={{
                fontSize: "2em",
                marginBottom: "0.3em",
                color: "#8758FF",
                textAlign: "center",
              }}
            >
              Ten Museum Park Commercial - FOR SALE1040 Biscayne Blvd
            </h1>
            <h1
              style={{
                fontSize: "1.5em",
                marginBottom: "0.3em",
                textAlign: "center",
              }}
            >
              40,301 SF | 71% Leased | Office Building | Miami, FL | $23,900,000
              ($593/SF)
            </h1>
          </div>
                <ShadowScrollbars>
          <div style={{ minHeight: "30vh" ,padding:'2.5em', paddingTop: 0
     }}>
            <Breadcrumb>
              <Breadcrumb.Item>Office Space</Breadcrumb.Item>
              <Breadcrumb.Item>
                <a href="">Florida</a>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <a href="">Miami</a>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                1040 Biscayne Blvd, Miami, FL 33132
              </Breadcrumb.Item>
            </Breadcrumb>

            <div style={{ marginTop: "0.5em" }}>
              <Slider {...settings}>
                <div>
                  <div
                    style={{
                      minWidth: "50px",
                      height: "500px",
                      display: "flex",
                      backgroundImage: `url('https://images1.loopnet.com/i2/5qEotwwZTwmUPxLSf49qAKM-cHtqpB5MBqc5gqQX31E/110/1040-Biscayne-Blvd-Miami-FL-Building-Photo-17-Large.jpg')`,
                      backgroundPosition: "center",
                      backgroundRepeatX: "no-repeat",
                      backgroundSize: "cover",
                    }}
                  ></div>
                </div>
                <div>
                  <div
                    style={{
                      minWidth: "50px",
                      height: "500px",
                      display: "flex",
                      backgroundImage: `url('https://images1.loopnet.com/i2/y0tIxkYQbnGz4YRdTlWn8AEPYLbyyb9nUdITzP19QzI/110/1040-Biscayne-Blvd-Miami-FL-Building-Photo-11-Large.jpg')`,
                      backgroundPosition: "center",
                      backgroundRepeatX: "no-repeat",
                      backgroundSize: "cover",
                    }}
                  ></div>
                </div>
                <div>
                  <div
                    style={{
                      minWidth: "50px",
                      height: "500px",
                      display: "flex",
                      backgroundImage: `url('https://images1.loopnet.com/i2/aLe_zpPFcA4VTgeaUvJIIZOoWWKz2LqDPJuTgFNCJOU/110/1040-Biscayne-Blvd-Miami-FL-Building-Photo-12-Large.jpg')`,
                      backgroundPosition: "center",
                      backgroundRepeatX: "no-repeat",
                      backgroundSize: "cover",
                    }}
                  ></div>
                </div>
                <div>
                  <div
                    style={{
                      height: "500px",
                      minWidth: "50px",
                      display: "flex",
                      backgroundImage: `url('https://images1.loopnet.com/i2/V_mZ-WQHYHzfwmwLPVESg1wufZLn0Tzs7aiREP-jhso/110/1040-Biscayne-Blvd-Miami-FL-Building-Photo-13-Large.jpg')`,
                      backgroundPosition: "center",
                      backgroundRepeatX: "no-repeat",
                      backgroundSize: "cover",
                    }}
                  ></div>
                </div>
              </Slider>
            </div>
            <h2
              style={{
                fontSize: "1.5em",
                color: "white",
                marginTop: "0.5em",
                marginBottom: "0.3em",
                fontWeight: "bold",
              }}
            >
              INVESTMENT HIGHLIGHTS
            </h2>
            <div className="columns">
              <div className="column">
                <ul class="bulleted-list">
                  <li>Located in Downtown Miami</li>
                  <li>
                    Views fronting Biscayne Blvd (75,000+ daily commuters)
                  </li>
                  <li>
                    Minutes to South Beach, Miami Int'l Airport, Port of Miami,
                    Miami Design District, Wynwood, Brickell, Coral Gables and
                    more
                  </li>
                </ul>
              </div>
              <div className="column">
                <ul class="bulleted-list">
                  <li>
                    Sale Includes commercial space only, no residential units
                    are part of this deal
                  </li>
                  <li>
                    Walking distance to FTX Arena, the Shops at Bayside and the
                    Downtown Miami skyline
                  </li>
                  <li>
                    Adjacent to Maurice A. Ferre Park, Frost Science Museum,
                    PAMM Museum, Adrienne Arsht Center, and more
                  </li>
                </ul>
              </div>
            </div>
            <h2
              style={{
                fontSize: "1.5em",
                color: "white",
                marginTop: "0.5em",
                marginBottom: "0.3em",
                fontWeight: "bold",
              }}
            >
              EXECUTIVE SUMMARY
            </h2>
            <div className="columns">
              <div className="column">
                <p>
                  THE OFFERING: Chariff Realty Group is pleased to offer an
                  unprecedented opportunity to acquire the ground floor commercial
                  spaces, the parking garage, the office floors, the Clinique La
                  Prairie (“CLP”) spa floor, the advertising walls, and
                  telecommunications room located on the roof at Ten Museum Park,
                  Miami’s newest and most exciting mixed use building in Downtown
                  Miami. However, the 200 residential units (“Residential lot”) are
                  not part of this offering. The new Museum Park Miami formerly
                  known as Bicentennial Park, is located directly across the street
                  from Ten Museum Park. Museum Park is set to house the Science
                  Center of the Americas and the Miami Art Museum with
                  architecturally significant structures and green space of
                  landscape and lawns. As a world class destination, Museum Park
                  Miami will allow for both active and passive recreation, engaging
                  visitors with exciting and diverse experiences to create lasting
                  memories that can only be experienced in Miami. Visitors and
                  residents alike will enjoy two world class museums: the Miami
                  Museum of Science & Planetarium – including an exhibition space
                  for the Historical Museum of Southern Florida.
                </p>
              </div>
              <div className="column">
                <p>
                  **All information has been secured from the seller/lessor and
                  Chariff Realty Group, Inc. and its agents, employees and
                  representatives (collectively “Chariff”) make no representations
                  and/or warranties as to the accuracy thereof, all of which are
                  expressly not warranted, disclaimed and must be verified by the
                  buyer/lessee prior to purchase/lease. All information from Chariff
                  is subject to errors, omissions, change, and withdrawal without
                  notice. Any reference to age, market data, condition, suitability
                  and/or square footage must be verified and is not guaranteed by
                  Chariff. Buyer/lessee bears all risk of information provided by
                  Chariff.
                </p>
              </div>
            </div>
            
          </div>
          </ShadowScrollbars>
        </div>



    </div>
  );
}

export default Details;
