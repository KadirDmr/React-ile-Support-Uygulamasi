import "./chatList.css"

const ChatList = () => {
    return (
      <div className='chatList'>
        <div className="search">
          <div className="searchbar">
            <img src="/search.png" alt="" />
            <input type="text" placeholder="search" />
          </div>
        </div>
        <div className="item">
          <img src="./avatar.png" alt="" />
          <div className="text">
            <b>Şikayet Konusu</b>
            <span>Çağrı</span>
            <p>Merhaba</p>
          </div>
        </div>
        <div className="item">
          <img src="./avatar.png" alt="" />
          <div className="text">
            <b>Şikayet Konusu</b>
            <span>Çağrı</span>
            <p>Merhaba</p>
          </div>
        </div>
        <div className="item">
          <img src="./avatar.png" alt="" />
          <div className="text">
            <b>Şikayet Konusu</b>
            <span>Çağrı</span>
            <p>Merhaba</p>
          </div>
        </div>
        <div className="item">
          <img src="./avatar.png" alt="" />
          <div className="text">
            <b>Şikayet Konusu</b>
            <span>Çağrı</span>
            <p>Merhaba</p>
          </div>
        </div>
      </div>
    )
  }
  
  export default ChatList