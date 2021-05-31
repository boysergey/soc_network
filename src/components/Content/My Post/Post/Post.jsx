import React from 'react';
import s from './Post.module.css';



function Post() {
  return (
    <div>
      <div className={s.list}>
        <div><img className={s.paint}
                  src="https://socialniesety.ru/files/images/components/articles_journal/originals/instagram/403/kak_sdelat_krasivuyu_avatarku_v_instagram_1.jpg"
                  alt=""/></div>
        <div className={s.message}>
          <div className="s.item">Hi buddy, how are you?</div>
        </div>
      </div>
      <div className={s.list}>
        <div><img className={s.paint}
                  src="https://wobs.ua/content/images/1/makiyazh-baby-face-46370986877517_small4.jpg"
                  alt=""/></div>
        <div className={s.message}>
          <div className="s.item">Привет, как жизнь?</div>
        </div>
      </div>
    </div>

);
}

export default Post;