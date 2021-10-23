import Styles from './styles.module.scss';

function Footer() {
  return (
    <footer className={Styles.footer}>
      &copy; {new Date().getFullYear()} Tom Hendra
      <small className={Styles.byline}>🚀 Built by Astro</small>
    </footer>
  );
}
export default Footer;
