import { useEffect, useRef, useState } from "react";
import "./chat.css";
import EmojiPicker from "emoji-picker-react";

const Chat = () => {
const [open, setOpen] = useState(false);
const [text, setText] = useState("");

const endRef = useRef(null);

useEffect(()=>{
   endRef.current.scrollIntoView({ behavior: "smooth" });
},[])

const handleEmoji = e =>{
setText((prev) => prev + e.emoji);
setOpen(false)
};

    return (
      <div className='chat'>
        <div className="top">
          <div className="user">
            <img src="./avatar.png" alt="" />
            <div className="text">
              <span>Ayşe</span>
              <b>Şikayet Konusu</b>
            </div>
          </div>
        </div>

        <div className="center">
          <div className="message">
            <img src="./avatar.png" alt="" />
            <div className="text">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Nesciunt perspiciatis aperiam dolor ad non, amet quaerat doloremque
              iure ducimus, sapiente veniam voluptate? Recusandae similique sed ex rem 
              non eligendi numquam!
            </p>             
            <span>1 dakika önce</span> 
            </div>
          </div>
          <div className="message own">
            <div className="texts">
              <img src="./image.png" alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Nesciunt perspiciatis aperiam dolor ad non, amet quaerat doloremque
              iure ducimus, sapiente veniam voluptate? Recusandae similique sed ex rem 
              non eligendi numquam!
            </p>             
            <span>1 dakika önce</span> 
            </div>
          </div>
          <div ref={endRef}></div>
          <div className="message">
            <img src="./avatar.png" alt="" />
            <div className="text">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Nesciunt perspiciatis aperiam dolor ad non, amet quaerat doloremque
              iure ducimus, sapiente veniam voluptate? Recusandae similique sed ex rem 
              non eligendi numquam!
            </p>             
            <span>1 dakika önce</span> 
            </div>
          </div>
        </div>
        <div className="bottom">
          <div>
            <img src="./img.png"/>
          </div>
           <input type="text" placeholder="  Buraya Yazınız." value={text} onChange={e=>setText(e.target.value)}/>
           <div className="emoji">
            <img src="./emoji.png" alt="" onClick={()=>setOpen((prev)=>!prev)} />
            <div className="picker">
            <EmojiPicker open={open} onEmojiClick={handleEmoji}/>
            </div>
           </div>
           <button className="sendButton">Send</button>
        </div>
      </div>
    )
  }
  
  export default Chat