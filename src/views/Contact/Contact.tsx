import { useTranslation } from "react-i18next";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { z } from "zod";
import Form from "../../components/Form/Form";
import styles from './contact.module.scss';

const Contact = () => {

  const [t] = useTranslation("global");


  const fields = [
    { name: 'name', label: t('contact.name'), type: 'text' },
    { name: 'birthDate', label: t('contact.birthDate'), type: 'date' },
    { name: 'city', label: t('contact.city'), type: 'text' },
    { name: 'email', label: 'Email', type: 'email' },
    { name: 'phone', label: t('contact.phone'), type: 'tel' },
  ];
 
   const ContactFormSchema = z.object({
    name: z.string().min(1, t('contact.name-msg')),
    birthDate: z.string().min(1, t('contact.birthDate-msg')),
    city: z.string().min(1, t('contact.city-msg')),
    email: z.string().email(t('contact.email-msg')),
    phone: z.string().min(10, t('contact.phone-msg')),
  });
  
  const onSubmit = () => {
    toast.success(t('contact.success-msg'), {
      position: "top-right",
      autoClose: 7000,   
      closeOnClick: true, 
      pauseOnHover: true,
    });
  };

  return (
    <>
    <ToastContainer/>
    <div className={styles.container}>
      <Form fields={fields} schema={ContactFormSchema} onSubmit={onSubmit} title={t('contact.title-form')}
      titleButton="Submit"
      />
    </div>
    </>
  )
}

export default Contact