import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";

// import { ReactComponent as AirFlowIcon } from "./images/airFlow.svg";
// import { ReactComponent as DayCloudyIcon } from "./images/day-cloudy.svg";
import { ReactComponent as RainIcon } from "./images/rain.svg";
import { ReactComponent as RefreshIcon } from "./images/refresh.svg";

const Container = styled.div`
  background-color: #ededed;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const WeatherCard = styled.div`
  position: relative;
  width: 360px;
  box-shadow: 0 1px 3px 0 #999999;
  background-color: #f9f9f9;
  box-sizing: border-box;
  padding: 30px 15px;
`;

const Location = styled.div`
  font-size: 28px;
  color: #212121;
  margin-bottom: 20px;
`;

const Description = styled.div`
  font-size: 16px;
  color: #828282;
  margin-bottom: 30px;
`;

const CurrentWeather = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;
const Temperature = styled.div`
  color: #757575;
  font-size: 96px;
  font-weight: 300;
  display: flex;
`;
const Celcius = styled.div`
  font-weight: normal;
  font-size: 42px;
`;

const statFormat = () => css`
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 300;
  color: #828282;
  svg {
    width: 25px;
    height: auto;
    margin-right: 30px;
  }
`;

// const AirFlow = styled.div`
//   ${statFormat}
//   margin-bottom: 20px;
// `;

const Rain = styled.div`
  ${statFormat}
`;

// const Cloudy = styled(DayCloudyIcon)`
//   flex-basis: 30%;
// `;

const Refresh = styled.div`
  position: absolute;
  right: 15px;
  bottom: 15px;
  font-size: 12px;
  display: inline-flex;
  align-items: flex-end;
  color: #828282;
  svg {
    width: 15px;
    height: 15px;
    margin-left: 10px;
    cursor: pointer;
  }
`;

const WeatherImg = styled.img`
  width: 30%;
`;

const Weather = () => {
  const [currentData, setCurrentData] = useState({
    icon: 50,
    temperature: 0,
    humidity: 0,
    forecastDesc: "Loading",
    updateTime: "2000-02-29 12:45"
  });

  const updateWeather = () =>
    fetch(
      "https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=rhrread&lang=tc"
    )
      .then(res => res.json())
      .then(({ temperature, icon, humidity }) => ({
        temperature: temperature.data[1].value,
        humidity: humidity.data[0].value,
        icon: icon[0]
      }));

  const updateInfo = () =>
    fetch(
      "https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=flw&lang=tc"
    )
      .then(res => res.json())
      .then(({ forecastDesc, updateTime }) => ({
        forecastDesc,
        updateTime: updateTime.slice(0, 16).replace("T", " ")
      }));

  useEffect(() => {
    const fetchCurrentWeather = async () => {
      const [weather, info] = await Promise.all([
        updateWeather(),
        updateInfo()
      ]);

      setCurrentData({ ...weather, ...info });
    };
    fetchCurrentWeather();
  }, []);

  return (
    <Container>
      <WeatherCard>
        <Location>香港</Location>
        <Description>{currentData.forecastDesc}</Description>
        <CurrentWeather>
          <Temperature>
            {currentData.temperature} <Celcius>°C</Celcius>
          </Temperature>
          <WeatherImg
            src={`http://rss.weather.gov.hk/img/pic${currentData.icon}.png`}
          />
          {/* <Cloudy /> */}
        </CurrentWeather>
        {/* <AirFlow>
          <AirFlowIcon />
          23 m/h
        </AirFlow> */}
        <Rain>
          <RainIcon />
          {currentData.humidity}%
        </Rain>
        <Refresh>
          {currentData.updateTime}
          <RefreshIcon
            onClick={() => {
              updateWeather();
              updateInfo();
            }}
          />
        </Refresh>
      </WeatherCard>
    </Container>
  );
};

export default Weather;
