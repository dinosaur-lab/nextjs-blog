import NextPage from 'next';
import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout'
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link';
import Date from '../components/date'
import { getSortedPostsData } from '../lib/posts'

export default function Home({ allPostsData }) {
  {
    return (
      <Layout home>
        <section>
          <h1 className={styles.title}>
            Welcome to my lab!
          </h1>
          <p className={styles.description}>
            のほほんとした日常を吐き出す場所
          </p>
        </section>
        <section>
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