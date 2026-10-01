import type { CSSProperties } from "react";
import styles from "./system.module.css";
const brands = [
  { name: "System", color: "#5F86C5", soft: "#ECF1F8" },
  { name: "12bet", color: "#C72222", soft: "#FAF0F0" },
  { name: "ibet", color: "#00A3E0", soft: "#E6F6FC" },
];
export default function BrandDemo() {
  return <div className={styles.demo}>
    <fieldset className={styles.switcher}><legend>切換品牌色</legend>{brands.map((item,index)=><label key={item.name}><input type="radio" name="brand-preview" value={index} defaultChecked={index===0}/><i style={{background:item.color}}/>{item.name}</label>)}</fieldset>
    {brands.map((brand,index)=><div key={brand.name} data-brand={index} className={styles.demoGrid} style={{ "--brand": brand.color, "--brand-soft": brand.soft } as CSSProperties}><div><p className={styles.label}>SAME TOKEN / DIFFERENT VALUE</p><h3>Primary-06</h3><code>{brand.color}</code><p>保留色階名稱，替換品牌色值。<br/>介面結構維持一致。</p></div><div className={styles.sample}><div className={styles.sampleNav}><b>{brand.name}</b><span>Overview　 Account</span></div><span className={styles.pill}>My account</span><h3>Welcome back.</h3><p>在一致的介面上，套用不同品牌識別。</p><div className={styles.sampleField}>Account name <span>Lisa</span></div><button className={styles.sampleButton} disabled>Continue →</button></div></div>)}<p className={styles.caption}>品牌替換互動示意；使用提供的 Primary 色票，不代表正式產品操作畫面。</p>
  </div>;
}
