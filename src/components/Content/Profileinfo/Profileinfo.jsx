import React from 'react';
import s from './Profileinfo.module.css';


function Profileinfo() {
  return (
    <div>
      <div className={s.profile}>
        <div className={s.avatar}>
          <img src="https://i0.wp.com/hairstylesweekly.com/images/2012/06/Ryan-Seacrest-Fauxhawk.jpg?fit=395%2C582&ssl=1" alt="avatar"/>
        </div>
        <div className={s.description}>
          <div className={s.name}>John Dou</div>
          <div className={s.birthday}>День рождения: 22.10.1999</div>
          <div className={s.city}>Город: Odessa</div>
          <div className={s.education}>Образование: OGU Mechnikova`2020</div>
          <div className={s.site}>
            <a href="https://aquaplus.od.ua">Web Site: https://aquaplus.od.ua</a>
          </div>
        </div>
      </div>
    </div>
);
}

export default Profileinfo
;