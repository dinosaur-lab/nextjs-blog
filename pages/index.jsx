import { PageConfig } from 'next';
import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout'
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link';
import Date from '../components/date'
import { getSortedPostsData } from '../lib/posts'
import Button from '@mui/material/Button';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useInView } from 'react-intersection-observer';
import React, { useRef, useCallback } from 'react';
import 'animate.css';

export default function Home({ allPostsData }) {
  {
    const [ref, inView] = useInView({
      rootMargin: '-50px', // ref要素が現れてから50px過ぎたら
      triggerOnce: true, // 最初の一度だけ実行
    });
    const [ref2, inView2] = useInView({
      rootMargin: '-50px', // ref要素が現れてから50px過ぎたら
      triggerOnce: true, // 最初の一度だけ実行
    });
    const [ref3, inView3] = useInView({
      rootMargin: '-50px', // ref要素が現れてから50px過ぎたら
      triggerOnce: true, // 最初の一度だけ実行
    });

    return (
      <Layout home>
        <section style={{ width: '100%', height: 'auto' }}>
          <div className={styles.top_image} style={{
            backgroundImage: `url("/images/home.jpg")`
          }}>
            <Image src="/images/home.jpg" width='1600px' height='800px' alt="home" />
            <p className={styles.title_p}>Welcome to my blog!</p>
          </div>
        </section>
        <section className={styles.section}>
          <div ref={ref} className={styles.div}>
            {inView && (
              <div className="animate__animated animate__fadeInUp">
                <h2 className={utilStyles.headingLg}>このブログについて</h2>
                <div className={styles.grid}>
                  <div className={styles.icon}>
                    <Image src="/images/icon.png" alt="Icon" width={100} height={100}></Image>
                  </div>
                  <p>
                    のほほんとした日常を吐き出す場所<br />
                    フロントエンド、バックエンドを勉強中。<br />
                    技術スタック: Python、AWS、Dockerなどなど<br />
                    当ブログには、趣味や学んだことをはき出して行こうと思います。<br />
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>
        <section className={styles.section}>
          <div ref={ref2} className={styles.div}>
            {inView2 && (
              <div className="animate__animated animate__fadeInUp">
                <h2 className={utilStyles.headingLg}>技術スタック</h2>
                <div className={styles.grid}>
                  <div className={styles.icon}>
                    <Image src="/images/icons8-python-60.png" alt="Icon" width={50} height={50}></Image>
                    <p>Python</p>
                  </div>
                  <div className={styles.icon}>
                    <Image src="/images/icons8-javascript-logo-50.png" alt="Icon" width={50} height={50}></Image>
                    <p>Javascript</p>
                  </div>
                  <div className={styles.icon}>
                    <Image src="/images/icons8-typescript-50.png" alt="Icon" width={50} height={50}></Image>
                    <p>TypeScript</p>
                  </div>
                  <div className={styles.icon}>
                    <Image src="/images/icons8-docker-50.png" alt="Icon" width={50} height={50}></Image>
                    <p>Docker</p>
                  </div>
                  <div className={styles.icon}>
                    <Image src="/images/icons8-gitlab-50.png" alt="Icon" width={50} height={50}></Image>
                    <p>Gitlab</p>
                  </div>
                  <div className={styles.icon}>
                    <Image src="/images/icons8-react-60.png" alt="Icon" width={50} height={50}></Image>
                    <p>React</p>
                  </div>
                  <div className={styles.icon}>
                    <Image src="/images/next-js.svg" alt="Icon" width={50} height={50}></Image>
                    <p>Next.js</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
        <section className={styles.section}>
          <div ref={ref3} className={styles.div}>
            {inView3 && (
              <div className="animate__animated animate__fadeInUp">
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
            )}
          </div>
        </section>
        <section className={styles.section}>
          <div className="animate__animated animate__fadeInUp">
            <h2 className={utilStyles.headingLg}>Contact</h2>
            <div>
              <Button color="primary" aria-label="twitter" href="https://twitter.com/HaruTechlab" className={styles.contact_icon}>
                <TwitterIcon />
              </Button>
              <Button color="primary" aria-label="github" href="https://github.com/dinosaur-lab" className={styles.contact_icon}>
                <GitHubIcon />
              </Button>
            </div>
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