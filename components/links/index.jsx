import styles from "./Links.module.css";

const items = [
  {
    href: "https://nextjs.org/docs",
    title: "Documentation",
    description: "Find in-depth information about Next.js features and API.",
  },
  {
    href: "https://nextjs.org/learn",
    title: "Learn",
    description: "Learn about Next.js in an interactive course with quizzes!",
  },
  {
    href: "https://github.com/vercel/next.js/tree/canary/examples",
    title: "Examples",
    description: "Discover and deploy boilerplate example Next.js projects.",
  },
  {
    href: "https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title: "Deploy",
    description:
      "Instantly deploy your Next.js site to a public URL with Vercel.",
  },
];
export default function Links() {
  return (
    <div className={styles.grid}>
      {/* map:配列の中身を取り出して利用する */}
      {items.map((item) => {
        return (
          <a key={item.href} href={item.href} className={styles.card}>
            <div className={styles.grid}>
              <h2 className={styles.title}>{item.title} &rarr;</h2>
              <p className={styles.description}>{item.description}</p>
            </div>
          </a>
        );
      })}
    </div>
  );
}
