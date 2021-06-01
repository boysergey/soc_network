import React from 'react';
import s from './Post.module.css';


function Post(props) {
  return (
    <div>
      <div className={s.list}>
        <div><img className={s.paint}
                  src="https://socialniesety.ru/files/images/components/articles_journal/originals/instagram/403/kak_sdelat_krasivuyu_avatarku_v_instagram_1.jpg"
                  alt=""/></div>
        <div className="s.item">{props.message}
          <div>
            <span>{props.LikeCount}</span>
          </div>
        </div>

      </div>

    </div>

  );
}

export default Post;