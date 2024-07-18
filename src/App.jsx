import React, { useEffect, useState } from 'react';
import Chat from './components/chat/Chat';
import Detail from './components/detail/Detail';
import List from './components/list/List';
import Login from './components/login/Login';
import { auth } from './lib/firebase'; // Firebase auth objesini import edin

const App = () => {
  const [user, setUser] = useState(null); // Kullanıcı durumunu state olarak saklayın

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user); 
      } else {
        setUser(null); // Oturum açmış kullanıcı yoksa state'i null olarak ayarlayın
      }
    });

    return () => unsubscribe(); // Cleanup fonksiyonu: component unmount edildiğinde dinleyiciyi kaldırın
  }, []);

  return (
    <div className='container'>
      {user ? ( // Kullanıcı oturum açmışsa uygulama içeriğini göster
        <>
          <List />
          <Chat />
          <Detail />
        </>
      ) : ( // Oturum açmış kullanıcı yoksa login ekranını göster
        <Login />
      )}
    </div>
  );
};

export default App;



/*import Chat from "./components/chat/Chat";
import Detail from "./components/detail/Detail";
import List from "./components/list/List";
import Login from "./components/login/Login";

const App = () => {

const user = false

  return (
    <div className='container'>
      {
       user ? (
       <>
         <List/>
         <Chat/>
         <Detail/>
       </>
       ) : (<Login />)
      }
    </div>
  )
}



export default App*/