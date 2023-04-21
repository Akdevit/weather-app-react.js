import React, { useState } from "react";
import "./App.css";
import Slide1page from "./commponent/Slide1page";
import Slide2page from "./commponent/Slide2page";
function App() {
  /* Slide1 api call */
  const [weather, setWeather] = useState([]);
  const [getceldata, setGetceldata] = useState([]);
  const [loddding, setLodding] = useState(false);
  const [loddingtw, setLoddingtw] = useState(false);
  const [sunlodding, setSunlodding] = useState(false);
  const [search, setSearch] = useState("");
  const [forcastdeta, setForcastdeta] = useState([]);
  const [sundata, setSundata] = useState([]);
  const [location, setLocation] = useState([]);
  const [gettext, setGettext] = useState([]);
  const [cityimg, setCityimg] = useState([]);
  const [count, setCount] = useState(0);

  const callWeatherApiFirst = () => {
    setLodding(true);
    fetch(
      `https://api.weatherapi.com/v1/current.json?key=e6881d69e9d34bcda0431325231704&q=${search}&aqi=yes`
    )
      .then((res) => res.json())
      .then((weatherdata) => {
        /*  console.log(weatherdata.error.message) */
        if (weatherdata.error) {
          alert("Sorry location not faund!");
        }

        setWeather(weatherdata.current.air_quality);
        setGetceldata(weatherdata.current);
        setGettext(weatherdata.current.condition.text);
        setLodding(false);
      });
  };
  /* Slide2 api call */

  const weatherforcast = () => {
    setLoddingtw(true);
    fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=e6881d69e9d34bcda0431325231704&q=${search}&days=8&aqi=yes&alerts=yes`
    )
      .then((res) => res.json())
      .then((forcastdata) => {
        setForcastdeta(forcastdata.forecast.forecastday);
        setLoddingtw(false);
      });
  };
  /* Sunrise Sunset location */

  const sunriselocation = () => {
    setSunlodding(true);
    fetch(
      `https://api.weatherapi.com/v1/astronomy.json?key=e6881d69e9d34bcda0431325231704&q=${search}&dt=2023-04-18`
    )
      .then((res) => res.json())
      .then((locatdata) => {
        setSundata(locatdata.astronomy.astro);
        setLocation(locatdata.location);
        setSunlodding(false);
      });
  };

  /* City img data */
  setInterval(() => {
    setCount(count + 1);
  }, 1000);

  const cityimgdata = () => {
    const options = {
      method: "GET",
      headers: {
        Authorization:
          "k4VZYSoVmcgHqWda5tvsbXE0i6uP5PzVmuXm34ws1aLydc7Di00F0v2l",
      },
    };

    fetch(`https://api.pexels.com/v1/search?query=${search}`, options)
      .then((response) => response.json())
      .then((response) => {
        setCityimg(response.photos[count].src.medium);
      });
  };

  const clickgetdata = () => {
    callWeatherApiFirst();
    weatherforcast();
    sunriselocation();
    cityimgdata();
  };
  const getInputvalue = (event) => {
    setSearch(event.target.value);
  };
  return (
    <div className="App">
      <Slide1page
        weatherdata={weather}
        getceldata={getceldata}
        lodding={loddding}
        getText={gettext}
      />
      <Slide2page
        inputvalue={getInputvalue}
        clicksearch={clickgetdata}
        forcast={forcastdeta}
        lodding={loddingtw}
        sundata={sundata}
        location={location}
        sunlodding={sunlodding}
        citydata={cityimg}
      />
    </div>
  );
}

export default App;
