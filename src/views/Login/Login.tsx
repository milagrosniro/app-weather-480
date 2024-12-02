import { useTranslation } from "react-i18next";
import { redirect } from "react-router-dom";
import { z } from "zod";
import Form from "../../components/Form/Form";
import { useAppStore } from "../../stores/useAppStore";
import styles from "./login.module.scss";

const Login = () => {
  const { setAuth } = useAppStore();

  const [t] = useTranslation("global");

  const fields = [
    { name: "email", label: "Email", type: "email" },
    { name: "password", label: t("logIn.password"), type: "password" },
  ];

  const LoginSchema = z.object({
    email: z.string().email(t('logIn.email-error-msg')),
    password: z
      .string()
      .regex(/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{6,}$/, t('logIn.pass-error-msg'))
  });

  const onSubmit = () => {
    setAuth(true);
    localStorage.setItem("auth", "true");
    redirect("/");
  };

  return (
    <div className={styles.container}>
      <div>
        <Form
          fields={fields}
          schema={LoginSchema}
          onSubmit={onSubmit}
          title={t("logIn.title")}
          titleButton="Login"
        />
      </div>
    </div>
  );
};

export default Login;
