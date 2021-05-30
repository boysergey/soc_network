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
          <div className="birthday">Date of Birth: 2 january</div>
          <div className="city">City: Odessa</div>
          <div className="education">Education: OGU Mechnikova`2020</div>
          <div className="site">
            <a href="https://aquaplus.od.ua">Web Site: https://aquaplus.od.ua</a>
          </div>
        </div>
      </div>
      <div className="posts">
        <div className="post_title">
          My posts
        </div>
        <form>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput"/>
            <input type="text" className="form-control" id="formGroupExampleInput"
                   placeholder="Enter your message"/>
          </div>
        </form>
      </div>
      <div className="list">
        <div className="paint">1</div>
        <div className="messages">
          <p>Hi buddy, how are you?</p>
        </div>
      </div>
    </div>
);
}

export default Content;