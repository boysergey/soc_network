import React from 'react';


function Content() {
  return (
    <div className="content">
      <div className="fond">
        <img src="https://images.samsung.com/is/image/samsung/p5/ru/explore/landscape-photography/Explore_How_To_Take_Great_Landscape_Photography_KV.jpg?$ORIGIN_JPG$" alt="fond"/>
      </div>
      <div className="profile">
        <div className="avatar">
          <img src="https://image.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg" alt="avatar"/>
        </div>
        <div className="description">
          <div className="name">John Dou</div>
          <div className="birthday">День рождения: 22.10.1999</div>
          <div className="city">Город: Odessa</div>
          <div className="education">Образование: OGU Mechnikova`2020</div>
          <div className="site">
            <a href="https://aquaplus.od.ua">Web Site: https://aquaplus.od.ua</a>
          </div>
        </div>
      </div>
      <div className="posts">
        <div className="post_title">
          Мои сообщения
        </div>
        <form>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput"/>
            <input type="text" className="form-control" id="formGroupExampleInput"
                   placeholder="Введите ваше сообщение"/>
          </div>
          <div className="d-grid gap-2 col-6 mx-auto">
            <button className="btn btn-primary" type="button">Отправить сообщение</button>
          </div>
        </form>
      </div>
      <div className="list">
        <div className="paint"><img className="paint" src="https://socialniesety.ru/files/images/components/articles_journal/originals/instagram/403/kak_sdelat_krasivuyu_avatarku_v_instagram_1.jpg" alt=""/></div>
        <div className="messages">
          <p>Hi buddy, how are you?</p>
        </div>
      </div>
    </div>
);
}

export default Content;