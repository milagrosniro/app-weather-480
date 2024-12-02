import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { EN, ENGLISH, ES, SPANISH } from "../../constants";
import { useAppStore } from "../../stores/useAppStore";
import styles from "./header.module.scss";
import { TLang } from "./header.types";

const Header = () => {
  const [t, i18n] = useTranslation("global");
  const { auth, setAuth } = useAppStore();
  const navigate = useNavigate()

  const lang = useMemo(() => i18n.language, [i18n.language]);

  const handleChangeLang = (lang: TLang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  const handleLogOut = () =>{
    setAuth(false)
    localStorage.setItem('auth', 'false')
    navigate('/')
  }
  return (
    <header className={styles.header}>

      <div className={styles.header_container}>
        <div className={styles.header_content}>
          <div className={styles.header_logo}>
            <img src="./weather.svg" alt="logo" />
          </div>
          <div className={styles.header_lang}>
            {
              lang === EN ?
            <div className={styles.header_lang_container}>
              <span>
                <img src="./spanish.svg" alt="spanish" />
              </span>
              <p onClick={() => handleChangeLang(ES)}>
                {SPANISH}
              </p>
            </div> : 
            <div className={styles.header_lang_container}>
              <span>
                <img src="./english.svg" alt="english" />
              </span>
              <p onClick={() => handleChangeLang(EN)}  >
                {ENGLISH}
              </p>
            </div>
            }

            {auth && (
              <div>
                <div className={styles.header_lang_container} onClick={handleLogOut}>
                  <p className={styles.logout}>{t('sesion.logOut')}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
