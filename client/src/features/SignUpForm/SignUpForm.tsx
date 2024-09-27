import { FC } from 'react';
import { useForm } from 'react-hook-form';
import IForm from './types/IForm';
import { Link } from 'react-router-dom';
import styles from './styles/signUpForm.module.scss';
// import updateToken from '../slcies/token-slice/updateToken';
import createUserRequest from './api/createUserRequest';

const SignUpForm: FC = () => {
  const { register, handleSubmit } = useForm<IForm>();

  const authentificate = (data: IForm) => {
    console.log(data);
    createUserRequest(data);
  };

  return (
    <form className={styles.signUpForm} onSubmit={handleSubmit(authentificate)}>
      <h2 className={styles.formTitle}>Sign up</h2>
      <h4 className={styles.inputTitle}>Name</h4>
      <input
        className={styles.input}
        type="text"
        placeholder="name"
        {...register('name', {
          required: true,
        })}
      />
      <h4 className={styles.inputTitle}>Email</h4>
      <input
        className={styles.input}
        type="email"
        placeholder="example@gmail.com"
        {...register('email', {
          required: true,
          // pattern: {
          //   value: /asd/,
          //   message: 'email should be ...',
          // },
        })}
      />
      <h4 className={styles.inputTitle}>password</h4>
      <input
        className={styles.input}
        type="password"
        placeholder="password"
        {...register('password', {
          required: true,
          minLength: {
            value: 8,
            message: 'password should be ...',
          },
        })}
      />
      <input className={styles.submitBtn} type="submit" value="Sign up" />
      <div className={styles.loginPrompt}>
        Already have an accont?{' '}
        <Link className={styles.loginLink} to="/login">
          Login
        </Link>
      </div>
    </form>
  );
};

export default SignUpForm;
