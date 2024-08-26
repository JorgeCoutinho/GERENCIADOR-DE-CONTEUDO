"use client"

import { useState, useEffect, use } from 'react';
import styles from './styles.module.scss';
import Link from 'next/link';

export function Header() {
    const [top, setTop] = useState(true);

    const scrollHandler = () => {
        window.scrollY > 100 ? setTop(false) : setTop(true)
    }

    useEffect(() => {

        window.addEventListener('scroll', scrollHandler)

        return () => window.removeEventListener('scroll', scrollHandler)

    }, [top])

    return (
        <header className={`${styles.header} ${!top ? styles.fixed : styles.background}`}>

            <div className={styles.container}>

                <div className={styles.content}>

                    <div className={styles.contentLog}>
                        <Link href='/'>
                            MOTORS
                        </Link>
                    </div>

                    <nav className={styles.nav}>
                        <Link href='/'>
                            HOME
                        </Link>
                        <Link href='/#servico'>
                            SERVIÇOS
                        </Link>
                        <Link href='/#contatos'>
                            CONTATOS
                        </Link>

                    </nav>

                </div>

            </div>

        </header>
    );
}

