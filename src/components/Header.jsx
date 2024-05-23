import styles from "./Header.module.css";

function Header() {
  return (
    <>
      <div className={styles.container}>
        <h1>Contact App</h1>
        <p>
          This is Contact App and Created by
          <a href="https://github.com/BIGsMahdiz" target="_blank">
            Mahdi Mousavinezhad
          </a>
        </p>
      </div>
    </>
  );
}

export default Header;
