import React from 'react';
import s from './Content.module.css'


function Content() {
  return (
    <div className={s.content}>
      <div className={s.fond}>
        <img src="https://images.samsung.com/is/image/samsung/p5/ru/explore/landscape-photography/Explore_How_To_Take_Great_Landscape_Photography_KV.jpg?$ORIGIN_JPG$" alt="fond"/>
      </div>
      <div className={s.profile}>
        <div className={s.avatar}>
          <img src="https://image.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg" alt="avatar"/>
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
      <div className={s.posts}>
        <div className={s.post_title}>
          Мои сообщения
        </div>
        <form>
          <div className={s.form}>
            <label htmlFor="formGroupExampleInput"/>
            <input type="text" className="form-control" id="formGroupExampleInput"
                   placeholder="Введите ваше сообщение"/>
          </div>
          <div className="d-grid gap-2 col-6 mx-auto">
            <button className="btn btn-primary" type="button">Отправить сообщение</button>
          </div>
        </form>
      </div>
      <div className={s.list}>
        <div><img className={s.paint} src="https://socialniesety.ru/files/images/components/articles_journal/originals/instagram/403/kak_sdelat_krasivuyu_avatarku_v_instagram_1.jpg" alt=""/></div>
        <div className={s.message}>
          <p>Hi buddy, how are you?</p>
        </div>
      </div>
    </div>
);
}

export default Content;