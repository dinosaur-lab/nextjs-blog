import NextPage from 'next';
import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout'
import styles from '../styles/Home.module.css';
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link';
import Date from '../components/date'
import { getSortedPostsData } from '../lib/posts'

export default function Blog({ allPostsData }) {
    {
        return (
            <Layout home>
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