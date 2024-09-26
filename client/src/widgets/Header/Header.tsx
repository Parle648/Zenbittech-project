import LoginBtn from '../../shared/UI/LoginBtn/LoginBtn';
import SignUpLink from '../../shared/UI/SignUpBtn/SignUpBtn';
import styles from './styles/header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <LoginBtn />
      <SignUpLink />
    </header>
  );
};

export default Header;
