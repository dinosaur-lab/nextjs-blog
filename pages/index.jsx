import NextPage from 'next';
import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout'
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link';
import Date from '../components/date'
import { getSortedPostsData } from '../lib/posts'
import { style } from '@mui/system';

export default function Home({ allPostsData }) {
  {
    return (
      <Layout home>
        <section style={{ width: '100%', height: 'auto' }}>
          <div className={styles.top_image}>
            <Image src="/images/home.jpg" width='1600px' height='600px' alt="home" />
            <p className={styles.title_p}>Welcome to my blog!</p>
          </div>
        </section>
        <section className={styles.section}>
          <h2 className={utilStyles.headingLg}>このブログについて</h2>
          <div className={styles.grid}>
            <div className={styles.icon}>
              <Image src="/images/icon.png" alt="Icon" width={100} height={100}></Image>
            </div>
            <p>
              のほほんとした日常を吐き出す場所<br />
              フロントエンド、バックエンドを勉強中。<br />
              技術スタック：Python、AWS、Dockerなどなど<br />
              当ブログには、趣味や学んだことをはき出して行こうと思います。<br />
            </p>
          </div>
          <h2 className={utilStyles.headingLg}>New posts</h2>
          <ul className={utilStyles.list}>
            {allPostsData.map(({ id, date, title }) => (
              <li className={utilStyles.listItem} key={id}>
                <Link href={`/posts/${id}`} color="primary" underline="hover">{title}</Link>
                <br />
                <small className={utilStyles.lightText}>
                  <Date dateString={date} />
                </small>
              </li>
            ))}
          </ul>
        </section>
      </Layout>
    )
  }
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}