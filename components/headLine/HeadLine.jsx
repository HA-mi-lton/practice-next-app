import styles from "./HeadLine.module.css";

export function HeadLine(props) {
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
