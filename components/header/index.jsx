import Link from "next/link";
import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      {/* <Link>タグは<a>タグのようなもの */}
      <Link href="/">
        <p className={styles.p}>index</p>
      </Link>
      <Link href="/about">
        <p className={styles.p}>about</p>
      </Link>
    </header>
  );
}
