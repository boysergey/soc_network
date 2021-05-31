import React from 'react';
import s from './Footer.module.css'

function Footer() {
  return (
    <footer className={s.footer}>
      <a className={s.company} href="#"> Company © 2021 Company.od.ua Все права защищены.</a>
    </footer>
  );
}
export default Footer;