import styles from "./layout.module.css";

const Layout = ({ id, title, desc }) => {
  return (
    <section className={styles.root} id={id}>
      <div className={styles.wrapper}>
        <article>
          <div className={styles.title}>
            <h3>{title}</h3>
            <span className={styles.separator}></span>
          </div>
          <div className={styles.desc.full}>
            <p>{desc}</p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Layout;
