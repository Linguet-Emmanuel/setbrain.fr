import React, { useState } from 'react';
import styles from './_Header.module.scss';
import Link from "next/link";

export type HeaderProps = {};

export const Header = ({}: HeaderProps) => {
  const [hamburgerActive, setHamburgerActive] = useState(false);

  function toggleMenu() {
    setHamburgerActive((a) => !a);
  }

  return (
    <div className={hamburgerActive ? styles['active header'] : styles['header']}>
      <Link href='home'>
        <a className={styles['logo']}>SetBrain.</a>
      </Link>
      <nav className={styles['menu']}>
        <ul>
          <Link href='projects' onClick={toggleMenu}>
            <a className={styles['link']}>Nos Projets</a>
          </Link>
          <Link href='news' onClick={toggleMenu}>
            <a className={styles['link']}>Nos actualités</a>
          </Link>
          <Link href='about' onClick={toggleMenu}>
            <a className={styles['link']}>Qui sommes nous</a>
          </Link>
          <Link href='contact' onClick={toggleMenu}>
            <a className={styles['link']}>Nous contacter</a>
          </Link>
        </ul>
      </nav>
      <div className={styles['hamburger']} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};
