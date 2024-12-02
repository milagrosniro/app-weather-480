import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { v4 as uuidv4 } from 'uuid'
import styles from './form.module.scss'
import { IFormProps } from './Form.types'

const Form = ({fields,onSubmit,schema, title, titleButton}: IFormProps) => {
  const {
    register,
    handleSubmit,
    formState: {errors}
  }= useForm({
    resolver: zodResolver(schema)
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <h2>{title}</h2>
      {
        fields.map((field)=>(
          <div key={uuidv4()} className={styles.field}>
            <label htmlFor={field.name}>{field.label}</label>
            <input
            id={field.name}
            type={field.type}
            {...register(field.name)}
            />
            {errors[field.name] && (
              <span className={styles.error}>
                {errors[field.name]?.message as string}
              </span>
            )}

          </div>
        ))
      }
      <button
      type='submit' 
      className={styles.submit}
      >{titleButton}</button>

    </form>
  )
}

export default Form