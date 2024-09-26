import { FC } from 'react';
import { useForm } from 'react-hook-form';
import IForm from './types/IForm';

const SignUpForm: FC = () => {
  const { register, handleSubmit } = useForm<IForm>();

  const authentificate = (data: IForm) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(authentificate)}>
      <input
        type="text"
        {...register('name', {
          required: true,
        })}
      />
      <input
        type="text"
        {...register('email', {
          required: true,
          pattern: {
            value: /asd/,
            message: 'email should be ...',
          },
        })}
      />
      <input
        type="text"
        {...register('password', {
          required: true,
          minLength: {
            value: 8,
            message: 'password should be ...',
          },
        })}
      />
    </form>
  );
};

export default SignUpForm;
