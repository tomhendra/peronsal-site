import Styles from './styles.module.css';

function Button({children}) {
  return <span className={Styles.button}>{children}</span>;
}

export default Button;
