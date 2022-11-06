import styles from '../styles/Home.module.css';
import Layout, { siteTitle } from '../components/layout'

export default function About() {
    return (
        <Layout>
            <h1 className={styles.title}>
                About me
            </h1>

            <p className={styles.description}>
                こんにちは
            </p>

            <div className={styles.grid}>
                <p>
                    新卒としてフロントエンド、バックエンドを勉強中。<br />
                    学生時代は主にPython、AWS、Dockerを用いて開発を行っていました。<br />
                    当ブログには、趣味や学んだことを趣味や学んだことをはき出して行こうと思います。<br />
                </p>
            </div>
        </Layout>
    )
}
