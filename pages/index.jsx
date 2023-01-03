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
        <section style={{ padding: 180 }}>
          <h1 className={styles.title}>Welcome to my blog!</h1>
        </section>
        <section>
          <h2 className={utilStyles.headingLg}>このブログについて</h2>
          <div style={{ position: 'relative', width: '100%', height: 300 }}>
            <Image src="/images/home.jpg" alt="home" layout="fill" objectFit="contain" />
          </div>
          <div className={styles.grid}>
            <Image src="/images/icon.png" alt="Icon" width={100} height={100}></Image>
            <p>
              のほほんとした日常を吐き出す場所<br />
              SIerでフロントエンド、バックエンドを勉強中。<br />
              学生時代は主にPython、AWS、Dockerを用いて開発を行っていました。<br />
              当ブログには、趣味や学んだことを趣味や学んだことをはき出して行こうと思います。<br />
            </p>
          </div>
          <div>
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
          </div>
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