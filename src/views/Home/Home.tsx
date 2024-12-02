import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import Alert from "../../components/Alert/Alert";
import Spinner from "../../components/Spinner";
import WeatherDetail from "../../components/WeatherDetail/WeatherDetail";
import { useAppStore } from "../../stores/useAppStore";
const Home = () => {

  const { loading, weatherData } = useAppStore();
  const [t] = useTranslation("global");

  const hasWeatherData = useMemo(
    () => weatherData && weatherData.name,
    [weatherData]
  );

  return (
    <div>

      {loading ? (
        <Spinner />
      ) : hasWeatherData ? (
        <WeatherDetail />
      ) : (
        <Alert>{<div>{t("message.city-not-found")}</div>}</Alert>
      )}
      
    </div>
  );
};

export default Home;
