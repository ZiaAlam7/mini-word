import React, { useContext, useState } from 'react'
import '../styles/Replace.css'
import { messageContext } from '../Context/Context'

const Replace = ({ setCharacter, character }) => {

  const {setMessage} = useContext(messageContext)

  const [oldWord, setOldWord] = useState('')
  const [newWord, setNewWord] = useState('')

  const replace = () => {
    setCharacter(character.replaceAll(oldWord, newWord))

    setMessage("Text Replaced")
    setTimeout(() => {
      setMessage('')
    }, 2000);
  }

  return (
    <div className='r_f'>
      <div className="replace">
        <p>Replace</p>
        <input type="text" onChange={(e) => setOldWord(e.target.value)} />
        <p>With</p>
        <input type="text" onChange={(e) => setNewWord(e.target.value)} />
        <div className="tooltip-container">
          <button className="hover-button button-29" onClick={replace} disabled={!oldWord || oldWord === " " ? true : false}>Replace</button>
          <span className="tooltip-text">Replace words in your article with new words</span>
        </div>
      </div>
    </div>
  )
}

export default Replace
