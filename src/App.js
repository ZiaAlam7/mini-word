import { createContext, useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';
import { messageContext } from './Context/Context';

function App() {

  const [mod, setMod] = useState('linear-gradient(to top, #fddb92 0%, #d1fdff 100%)')
  const [col_1, setcol_1] = useState('black')

  const [message, setMessage] = useState('')

  return (
    <>
      <messageContext.Provider value={{message, setMessage}}>
      <Navbar mod={mod} setMod={setMod} setcol_1={setcol_1}/>
      <Textarea mod={mod} col_1={col_1}/>
      <Footer/>
      </messageContext.Provider>
    </>
  );
}

export default App;
