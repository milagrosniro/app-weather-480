import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";
import { RiArrowDownWideFill, RiArrowUpWideFill } from "react-icons/ri";
import { NavLink, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { EN } from "../../constants";
import { cities, ciudades } from "../../data/countries";
import { useAppStore } from "../../stores/useAppStore";
import { ISearchState } from "../../stores/weatherSlice/weatherSlice.types";
import styles from "./sidebar.module.scss";

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { getWeather } = useAppStore();

  const [t, i18n] = useTranslation("global");

  const lang = useMemo(() => i18n.language, [i18n.language]);
  const citiesState = useMemo(() => (lang === EN ? cities : ciudades), [lang]);

  const navigate = useNavigate()

  useEffect(() => {
    if (!isExpanded) setIsMenuOpen(false);
  }, [isExpanded]);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleMenu = () => {
    setIsExpanded(true);
    setIsMenuOpen(!isMenuOpen);
  };

  const getWeatherData = async (data: ISearchState) => {
    await getWeather(data);
  };

  return (
    <div className={`${styles.sidebar} ${isExpanded ? styles.expanded : ""}`}>
      <button className={styles.toggleButton} onClick={toggleSidebar}>
        <span className={styles.arrow}>
          {isExpanded ? (
            <MdKeyboardDoubleArrowLeft />
          ) : (
            <MdKeyboardDoubleArrowRight />
          )}
        </span>
      </button>

      <ul className={styles.sidebarMenu}>
        <li>
          <p onClick={toggleMenu}>
            {t("sidebar.city")}

            <span className={styles.arrow}>
              {isMenuOpen ? <RiArrowUpWideFill /> : <RiArrowDownWideFill />}
            </span>
          </p>
          {isMenuOpen && (
            <ul className={styles.subMenu}>
              {citiesState.map((city) => (
                <li
                  key={uuidv4()}
                  onClick={() =>
                    getWeatherData({ country: city.code, city: city.name })
                  }
                >
                  <p>{city.name}</p>
                </li>
              ))}
            </ul>
          )}
        </li>
      </ul>

      <ul className={styles.sidebarMenu}>
        <NavLink to={"/contact"} className={styles.contact}>
          {t("sidebar.contact")}
        </NavLink>
      </ul>

      <ul className={styles.sidebarMenu}>
        <li className={styles.btnHome} onClick={()=>navigate('/')}>HOME</li>
      </ul>
    </div>
  );
};

export default Sidebar;
