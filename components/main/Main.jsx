import styles from "./Main.module.css";
import Links from "../Links/Links";
import { HeadLine } from "../HeadLine/HeadLine";
export default function Main(props) {
  return (
    <main className={styles.main}>
      <HeadLine title={props.title} />
      <Links />
    </main>
  );
}
