import styles from './Hero.module.css';

export default function Hero(props) {
  const {firstMessage, secondMessage} = props;

  return (
    <>
      <section className={styles["hero-section"]}>
        <article className={styles["hero-title"]}>
          <span className={styles["hero-span"]}>{firstMessage}</span>
          <span className={styles["hero-span"]}>{secondMessage}</span>
        </article>
      </section>
    </>
  );
}
