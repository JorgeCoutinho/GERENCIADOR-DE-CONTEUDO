"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './styles.module.scss';

import { X, Menu } from 'lucide-react';


export function Submenu() {
    const [isOpen, setIsOpen] = useState(false);

    // Fechar o menu ao redimensionar a tela
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) setIsOpen(false)
        }

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);

    }, [])

    // Função para abrir e fechar o menu
    function toggleMenu() {
        setIsOpen(!isOpen);
    }

    return (
        <section className={styles.submenu}>
            <div className={styles.subMenuIcon} onClick={toggleMenu}>
                <Menu size={24} />
                Menu
            </div>
            {/** Essa  */}
            <ul className={`${styles.ul} ${isOpen ? styles.open : ""}`}>
                {/** Se isOpen for true, adicione a classe open */} 
                {isOpen && (
                    <button className={styles.closeButton}>
                        <X size={44}  onClick={toggleMenu} />
                    </button>
                )}

                <li>
                    <Link href='/post/pagina-1'>
                        pagina 1
                    </Link>
                </li>
                <li>
                    <Link href='/post/pagina-2'>
                        pagina 2
                    </Link>
                </li>
            </ul>
        </section>
    )
}