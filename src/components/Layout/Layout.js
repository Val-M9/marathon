import styles from "./layout.module.css";

const Layout = ({ id, title, urlBg, colorBg, children }) => {
  return (
    <section
      className={styles.root}
      style={
        urlBg
          ? { backgroundImage: `url(${urlBg})` }
          : { backgroundColor: colorBg }
      }
      id={id}
    >
      <div className={styles.wrapper}>
        <article>
          <div className={styles.title}>
            <h3>{title}</h3>
            <span className={styles.separator}></span>
          </div>
          <div className={`${styles.desc} ${styles.full}`}>{children}</div>
        </article>
      </div>
    </section>
  );
};

export default Layout;
