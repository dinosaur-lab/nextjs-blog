import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { useRouter } from "next/router";
import Link from '@mui/material/Link';
import styles from '../styles/Home.module.css';
import HomeIcon from '@mui/icons-material/Home';

function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

export default function BasicBreadcrumbs() {
    const router = useRouter();
    // pathを「/」で分解
    const paths = decodeURI(router.asPath).substring(1).split("/");
    // リンク先アドレスの取得
    const roots = [""];
    for (let i = 0; i < paths.length; i++) roots.push(roots[i] + "/" + paths[i]);
    return (
        <div role="presentation" onClick={handleClick} className={styles.breadcrumb}>
            <Breadcrumbs aria-label="breadcrumb">
                <Link underline="hover" color="inherit" href="/">
                    <HomeIcon />
                </Link>
                {paths.map((x, i) => (
                    < Link href={roots[i + 1]} key={i} > {x}</Link>
                ))}
            </Breadcrumbs>
        </div >
    );
}