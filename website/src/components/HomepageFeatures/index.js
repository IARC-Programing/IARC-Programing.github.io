import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";

const FeatureList = [
  {
    title: "คู่มื่อการใช้ระบบ In App Notification",
    imgSrc: "/push-notify/win-5.png",
    description: (
      <>
        วิธีการใช้ In App Notification สำหรับคอมพิวเตอร์, โทรศัพท์มือถือระบบ
        Android และ iOS หลังจาก Line Notify หยุดให้บริการในวันที่ 1 เมษายน 2568
        <Link
          className='button button--secondary button--lg'
          to='/docs/emanufac/notify/inapp-notify'
        >
          ดูคู่มือ
        </Link>
      </>
    ),
  },
  // {
  //   title: 'Focus on What Matters',
  //   Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
  //   description: (
  //     <>
  //       Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
  //       ahead and move your docs into the <code>docs</code> directory.
  //     </>
  //   ),
  // },
  // {
  //   title: 'Powered by React',
  //   Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
  //   description: (
  //     <>
  //       Extend or customize your website layout by reusing React. Docusaurus can
  //       be extended while reusing the same header and footer.
  //     </>
  //   ),
  // },
];

function Feature({ imgSrc, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className='text--center'>
        <img className={styles.featureSvg} role='img' src={imgSrc} />
      </div>
      <div className='text--center padding-horiz--md'>
        <Heading as='h3'>{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className='container'>
        <div className='row'>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
