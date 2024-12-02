import { useTranslation } from "react-i18next";
import { formatTemp } from "../../utils/format.utils";

import { useAppStore } from "../../stores/useAppStore";
import DataDetails from "../TableData/DataDetails";
import styles from "./weatherDetail.module.scss";

const WeatherDetail = () => {

  const {weatherData: data} = useAppStore()

  const [t] = useTranslation("global");

  const { weather } = data;
  const weatherIconUrl = `https://openweathermap.org/img/wn/${weather[0]?.icon}@2x.png`;
  const weatherDescription = weather[0]?.description || "Unknown";

  return (
    <div>
      <div className={styles.containerImg}>
        <img
          src={weatherIconUrl}
          alt={weatherDescription}
          className={styles.icon}
        />
      </div>

      <div className={styles.container}>
        <div>
          <h2>{`${t("weatherDetail.title")} : ${data.name}`} </h2>

          <p className={styles.current}>{formatTemp(data.main.temp)}&deg;C</p>
          <div className={styles.temperatures}>
            <p>
              Min: <span>{formatTemp(data.main.temp_min)}&deg;C</span>
            </p>
            <p>
              Max: <span>{formatTemp(data.main.temp_max)}&deg;C</span>
            </p>
          </div>
        </div>

        <div>
          <DataDetails />
        </div>
      </div>
    </div>
  );
};

export default WeatherDetail;
