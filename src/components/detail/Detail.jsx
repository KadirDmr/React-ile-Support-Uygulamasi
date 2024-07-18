import "./detail.css"


const Detail = () => {
    return (
      <div className='detail'>
        <div className="user">
          <h2>Vatandaşın adı</h2>
          <span>Şikayet</span>
        </div>
        <div className="option">
          <div className="title">
            <span>Paylaşılan Görseller</span>
            <img src="./arrowDownn.png" alt="" />
          </div>
          <div className="photos">
            <div className="photoItem">
              <img src="" alt="" />
              <span>photo_2024_07</span>
            </div>
          </div>
        </div>
        <button className="logout">Çıkış Yap</button>
      </div>
    )
  }
  
  export default Detail