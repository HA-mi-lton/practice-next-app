import styles from "./Main.module.css";
import { HeadLine } from "../HeadLine/HeadLine";
import Links from "../links";
export default function Main(props) {
  return (
    <main className={styles.main}>
      <HeadLine title={props.title} />
      <Links />
    </main>
  );
}
