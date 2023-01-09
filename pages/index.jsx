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
      rootMargin: '-50px',
      triggerOnce: true,
    });
    const [ref2, inView2] = useInView({
      rootMargin: '-50px',
      triggerOnce: true,
    });
    const [ref3, inView3] = useInView({
      rootMargin: '-50px',
      triggerOnce: true,
    });

    const stacks = [
      { id: 'Python', path: '/images/icons8-python-60.png' },
      { id: 'Javascript', path: '/images/icons8-javascript-logo-50.png' },
      { id: 'TypeScript', path: '/images/icons8-typescript-50.png' },
      { id: 'Docker', path: '/images/icons8-docker-50.png' },
      { id: 'Gitlab', path: '/images/icons8-gitlab-50.png' },
      { id: 'React', path: '/images/icons8-react-60.png' },
      { id: 'Next.js', path: '/images/next-js.svg' }
    ];

    return (
      <Layout home>
        <section style={{ width: '100%', height: 'auto' }}>
          <div className={styles.top_image} style={{
            backgroundImage: `url("/images/home.jpg")`
          }}>
            <Image
              src="/images/home.jpg"
              width='1600px'
              height='800px'
              alt="home"
              blurDataURL="/images/loading_home.jpg"
              placeholder="blur" />
            <p className={styles.title_p}>Welcome to my homepage!</p>
          </div>
        </section>
        <section className={styles.section}>
          <div ref={ref} className={styles.div}>
            {inView && (
              <div className="animate__animated animate__fadeInUp">
                <h2 className={utilStyles.headingLg}>このページについて</h2>
                <div className={styles.grid}>
                  <div className={styles.icon}>
                    <Image src="/images/icon.png" alt="Icon" width={100} height={100}></Image>
                  </div>
                  <p>
                    フロントエンド、バックエンドを勉強中。<br />
                    TypeScript Next.jsの練習として作成しました。<br />
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
                  {stacks.map((stack) => (
                    <div className={styles.techstack} key={stack.id}>
                      <Image src={stack.path} alt="Icon" width={32} height={32}></Image>
                      <p>{stack.id}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section >
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
      </Layout >
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