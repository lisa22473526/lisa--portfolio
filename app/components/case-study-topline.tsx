import Link from "next/link";
import styles from "./case-study-topline.module.css";

export default function CaseStudyTopline({ number, context }: { number: string; context: string }) {
  return (
    <nav className={styles.topline} aria-label="作品導覽">
      <Link href="/work" aria-label="返回作品列表">← Selected work / {number}</Link>
      <span>{context}</span>
    </nav>
  );
}
