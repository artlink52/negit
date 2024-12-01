"use client";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

const YandexMap = () => {
  return (
    <YMaps>
      <Map
        defaultState={{ center: [59.9603, 30.383457], zoom: 16 }}
        width="100%"
        height="400px"
      >
        <Placemark geometry={[59.9603, 30.383457]} />
      </Map>
    </YMaps>
  );
};

export default YandexMap;
