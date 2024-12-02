import { Outlet } from "react-router-dom";
import { useAppStore } from "../../stores/useAppStore";
import Header from "../Header/Header";
import Sidebar from "../SideBar/SideBar";
import styles from "./layout.module.scss";

export const Layout = () => {
  const { auth } = useAppStore();

  return (
    <>
      <Header />
      <main>
        {auth && <Sidebar />}
        <div className={auth ? styles.container_auth : styles.container}>
          <Outlet />
        </div>
      </main>
    </>
  );
};
