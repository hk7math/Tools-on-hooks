import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";

import { ReactComponent as AirFlowIcon } from "./images/airFlow.svg";
import { ReactComponent as DayCloudyIcon } from "./images/day-cloudy.svg";
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

const AirFlow = styled.div`
  ${statFormat}
  margin-bottom: 20px;
`;

const Rain = styled.div`
  ${statFormat}
`;

const Cloudy = styled(DayCloudyIcon)`
  flex-basis: 30%;
`;

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
  const [currentWeather, setCurrentWeather] = useState({
    rainfall: {
      data: [
        { unit: "mm", place: "中西區", max: 0, main: "FALSE" },
        { unit: "mm", place: "東區", max: 0, main: "FALSE" },
        { unit: "mm", place: "葵青", max: 0, main: "FALSE" },
        { unit: "mm", place: "離島區", max: 0, main: "FALSE" },
        { unit: "mm", place: "北區", max: 0, main: "FALSE" },
        { unit: "mm", place: "西貢", max: 0, main: "FALSE" },
        { unit: "mm", place: "沙田", max: 0, main: "FALSE" },
        { unit: "mm", place: "南區", max: 0, main: "FALSE" },
        { unit: "mm", place: "大埔", max: 0, main: "FALSE" },
        { unit: "mm", place: "荃灣", max: 0, main: "FALSE" },
        { unit: "mm", place: "屯門", max: 0, main: "FALSE" },
        { unit: "mm", place: "灣仔", max: 0, main: "FALSE" },
        { unit: "mm", place: "元朗", max: 0, main: "FALSE" },
        { unit: "mm", place: "油尖旺", max: 0, main: "FALSE" },
        { unit: "mm", place: "深水埗", max: 0, main: "" },
        { unit: "mm", place: "九龍城", max: 0, main: "" },
        { unit: "mm", place: "黃大仙", max: 0, main: "FALSE" },
        { unit: "mm", place: "觀塘", max: 0, main: "FALSE" }
      ],
      startTime: "2020-03-01T17:45:00+08:00",
      endTime: "2020-03-01T18:45:00+08:00"
    },
    warningMessage: "",
    icon: [77],
    iconUpdateTime: "2020-03-01T18:00:00+08:00",
    uvindex: "",
    updateTime: "2020-03-01T19:02:00+08:00",
    temperature: {
      data: [
        { place: "京士柏", value: 23, unit: "C" },
        { place: "香港天文台", value: 23, unit: "C" },
        { place: "黃竹坑", value: 22, unit: "C" },
        { place: "打鼓嶺", value: 24, unit: "C" },
        { place: "流浮山", value: 24, unit: "C" },
        { place: "大埔", value: 23, unit: "C" },
        { place: "沙田", value: 24, unit: "C" },
        { place: "屯門", value: 23, unit: "C" },
        { place: "將軍澳", value: 22, unit: "C" },
        { place: "西貢", value: 22, unit: "C" },
        { place: "長洲", value: 21, unit: "C" },
        { place: "赤鱲角", value: 24, unit: "C" },
        { place: "青衣", value: 22, unit: "C" },
        { place: "石崗", value: 25, unit: "C" },
        { place: "荃灣可觀", value: 22, unit: "C" },
        { place: "荃灣城門谷", value: 23, unit: "C" },
        { place: "香港公園", value: 23, unit: "C" },
        { place: "筲箕灣", value: 23, unit: "C" },
        { place: "九龍城", value: 23, unit: "C" },
        { place: "跑馬地", value: 23, unit: "C" },
        { place: "黃大仙", value: 24, unit: "C" },
        { place: "赤柱", value: 21, unit: "C" },
        { place: "觀塘", value: 24, unit: "C" },
        { place: "深水埗", value: 22, unit: "C" },
        { place: "啟德跑道公園", value: 23, unit: "C" },
        { place: "元朗公園", value: 24, unit: "C" },
        { place: "大美督", value: 23, unit: "C" }
      ],
      recordTime: "2020-03-01T19:00:00+08:00"
    },
    tcmessage: "",
    mintempFrom00To09: "",
    rainfallFrom00To12: "",
    rainfallLastMonth: "",
    rainfallJanuaryToLastMonth: "",
    humidity: {
      recordTime: "2020-03-01T19:00:00+08:00",
      data: [{ unit: "percent", value: 80, place: "香港天文台" }]
    }
  });

  const [currentInfo, setCurrentInfo] = useState({
    generalSituation:
      "中國東南部的氣壓正在上升，預料一股清勁至強風程度的偏東氣流會在明早抵達廣東沿岸。",
    tcInfo: "",
    fireDangerWarning: "",
    forecastPeriod: "本港地區今晚及明日天氣預測",
    forecastDesc:
      "漸轉多雲。明日早晚有微雨及能見度頗低，下午短暫時間有陽光，氣溫介乎19至23度。吹微風，明日東風逐漸增強。",
    outlook: "隨後兩三日大致多雲，有幾陣雨。本週中期早上清涼。",
    updateTime: "2020-03-01T19:45:00+08:00"
  });

  const fetchCurrentWeather = () => {
    fetch(
      "https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=rhrread&lang=tc"
    )
      .then(res => res.json())
      .then(data => setCurrentWeather(data));

    fetch(
      "https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=flw&lang=tc"
    )
      .then(res => res.json())
      .then(data => setCurrentInfo(data));
  };

  useEffect(() => {
    fetchCurrentWeather();
  }, []);

  return (
    <Container>
      <WeatherCard>
        <Location>香港</Location>
        <Description>{currentInfo.forecastDesc}</Description>
        <CurrentWeather>
          <Temperature>
            {currentWeather.temperature.data[1].value} <Celcius>°C</Celcius>
          </Temperature>
          <WeatherImg
            src={`http://rss.weather.gov.hk/img/pic${
              currentWeather.icon[0]
            }.png`}
          />
          {/* <Cloudy /> */}
        </CurrentWeather>
        {/* <AirFlow>
          <AirFlowIcon />
          23 m/h
        </AirFlow> */}
        <Rain>
          <RainIcon />
          {currentWeather.humidity.data[0].value}%
        </Rain>
        <Refresh>
          {currentInfo.updateTime.slice(0, 16).replace("T", " ")}
          <RefreshIcon onClick={fetchCurrentWeather} />
        </Refresh>
      </WeatherCard>
    </Container>
  );
};

export default Weather;
