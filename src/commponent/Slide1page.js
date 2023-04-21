import React from "react";
import Eaath from "../images/earth.png";
import Wind from "../images/wind-power.png";
const Slide1page = ({ weatherdata, getceldata, lodding, getText }) => {
  /*  console.log(getText); */
  return (
    <>
      <div className="page1">
        <div className="con-air">
          {/* Air Quality */}
          <div className="Air-quality">
            <h1 className="Air">Air Quality</h1>
            <div className="gash-name">
              {lodding ? (
               <h1 className="lodding">Lodding.....</h1>
              ) : (
                <>
                  <h1 className="co">
                    co : {Number(weatherdata.no2).toFixed(2)}
                  </h1>
                  <h1 className="no">
                    no<sub>2</sub> : {Number(weatherdata.no2).toFixed(2)}
                  </h1>
                  <h1 className=" o">
                    o<sub>3</sub> : {Number(weatherdata.o3).toFixed(2)}
                  </h1>
                  <h1 className=" pm">
                    pm2_5 : {Number(weatherdata.pm2_5).toFixed(2)}
                  </h1>
                </>
              )}
            </div>
            <div className="earth-img">
              <img className="earth" src={Eaath} alt="earth.png" />
            </div>
          </div>
          {/* temrachure */}
          <div className="temrachure">
            {lodding ? (
              <h1 className="lodding">Lodding.....</h1>
            ) : (
              <>
                <h1 className="temp">
                  {getceldata.temp_c}
                  <span>&#176;</span>c
                </h1>
                <h1 className="cloud-name">{getText}</h1>
              </>
            )}
          </div>
          {/* wind-speed */}
          <div className="wind-speed">
            <div className="wind-t">
              <h1 className="wind">wind speed</h1>
              <h1 className="wind-s">{getceldata.wind_kph} km/s</h1>
            </div>
            <div className="wind-img">
              <img className="wind-i" src={Wind} alt="wind.png" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slide1page;
