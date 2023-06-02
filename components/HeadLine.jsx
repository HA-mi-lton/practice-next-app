import styles from "../styles/Home.module.css";

export function HeadLine(props) {
  console.log(props);
  return (
    <div>
      <h1 className={styles.title}>
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>

      <p className={styles.description}>
        Get started by editing{" "}
        <code className={styles.code}>pages/{props.title}.js</code>
      </p>
    </div>
  );
}
