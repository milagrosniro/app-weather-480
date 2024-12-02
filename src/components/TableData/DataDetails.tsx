import { useTranslation } from "react-i18next";
import { useAppStore } from "../../stores/useAppStore";
import { formatTemp } from "../../utils/format.utils";
import styles from "./dataDetail.module.scss";

 
const DataDetails = () => {
  
  const {weatherData: data} = useAppStore()
  const {
    main: { temp, humidity },
    wind: { speed: windSpeed }
  } = data;
  const [t] = useTranslation("global");
  
  return (
    <div className={styles.weatherTableWrapper}>

      <div className={styles.containerInfo}>
        <div><p className={styles.titleRow}>{t('dataDetails.current-temp')}:</p></div>
        <div> <p className={styles.info}>{formatTemp(temp)}&deg;C</p> </div>
      </div>

      <div className={styles.containerInfo}>
        <div><p className={styles.titleRow}>{t('dataDetails.humidity')}:</p></div>
        <div> <p className={styles.info}>{humidity}%</p> </div>
      </div>

      <div className={styles.containerInfo}>
        <div><p className={styles.titleRow}>{t('dataDetails.wind-speed')}</p></div>
        <div> <p className={styles.info}>{windSpeed} m/s</p> </div>
      </div>
      
    </div>
  );
};

export default DataDetails;
