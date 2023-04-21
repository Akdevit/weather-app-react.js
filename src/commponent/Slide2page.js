import React from "react";
import Searchinput from "../commponent/Searchinput";
import Sunrise from "../images/sunrise.jpg";
import Sunset from "../images/sunset.jpg";

const Slide2page = ({
  inputvalue,
  clicksearch,
  forcast,
  lodding,
  sundata,
  location,
  sunlodding,
  citydata,
}) => {
  /* console.log(location.name); */
  return (
    <>
      <div className="page2-grid">
        <Searchinput input={inputvalue} click={clicksearch} />
        <div className="data2page">
          {/* forest */}
          <div className="forest">
            <div className="forcast">
              {lodding ? (
               <h1 className="lodding">Lodding.....</h1>
              ) : (
                forcast.map((res, index) => {
                  /*  console.log(res); */
                  return (
                    <>
                      <div className="forcast_details">
                        <h1 className="date">{res.date}</h1>
                        <div className="icon-img">
                          <img
                            className="icon-img1"
                            src={res.day.condition.icon}
                            alt="icon.png"
                          />
                        </div>
                        <h1 className="cel">
                          {res.day.mintemp_c}
                          <span>&#176;</span>c
                        </h1>
                        <h1 className="sunny-cloud">
                          {res.day.condition.text}
                        </h1>
                      </div>
                    </>
                  );
                })
              )}
            </div>
          </div>
          <div className="sun-r-s">
            {/* Sunrise */}
            <div className="sunrise">
              <img className="sunrise-img" src={Sunrise} alt="Sunrise.png" />
              <div className="sun-ri">
                {sunlodding ? (
                  <h1 className="lodding">Lodding.....</h1>
                ) : (
                  <>
                    <h1 className="sun-r">Sunrise</h1>
                    <h1 className="sunrise-date">{sundata.sunrise}</h1>
                  </>
                )}
              </div>
            </div>
            {/* sunset */}
            <div className="city">
              <img className="city-img" src={citydata} alt="" />
              {sunlodding ? (
                <h1 className="lodding">Lodding.....</h1>
              ) : (
                <>
                  <h1 className="city-name">{location.name}</h1>
                </>
              )}
            </div>
            {/* sunset */}
            <div className="sunset">
              <img className="sunset-img" src={Sunset} alt="Sunrise.png" />
              <div className="sun-ri">
                {sunlodding ? (
                   <h1 className="lodding">Lodding.....</h1>
                ) : (
                  <>
                    <h1 className="sun-r">Sunset</h1>
                    <h1 className="sunrise-date">{sundata.sunset}</h1>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slide2page;
