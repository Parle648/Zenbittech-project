import { FC } from 'react';
import { useForm } from 'react-hook-form';
import IForm from './types/IForm';
import { Link } from 'react-router-dom';
import styles from './styles/signUpForm.module.scss';
import authRequest from './api/createUserRequest';

const LoginForm: FC = () => {
  const { register, handleSubmit } = useForm<IForm>();

  const authentificate = (data: IForm) => {
    authRequest(data);
  };

  return (
    <form className={styles.loginForm} onSubmit={handleSubmit(authentificate)}>
      <h2 className={styles.formTitle}>Login</h2>
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
      <input className={styles.submitBtn} type="submit" value="Login" />
      <div className={styles.loginPrompt}>
        Don't have an accont?{' '}
        <Link className={styles.loginLink} to="/sign-up">
          Sign up
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
