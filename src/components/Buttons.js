import React, { useContext, useState } from 'react'
import '../styles/Button.css'
import Navbar from './Navbar'
import { messageContext } from '../Context/Context'

const Buttons = ({ setCharacter, character }) => {

  const {setMessage} = useContext(messageContext)

  const [languageElements, setLanguageElements] = useState([
    'am','a','an', 'as', 'at', 'by', 'do', 'go', 'he', 'hi', 'if',
    'in', 'is', 'it', 'me', 'my', 'no', 'of', 'oh', 'on', 'or',
    'so', 'to', 'up', 'us', 'we', 'ye', 'you'
  ])

  const [txt, settxt] = useState('Copy')


  const lowercase = () => {
    setCharacter(character.toLowerCase())
    setMessage("Converted to Lowercase")
    setTimeout(() => {
      setMessage('')
    }, 2000);
  }

  const uppercase = () => {
    setCharacter(character.toUpperCase())
    setMessage("Converted to Uppercase")
    setTimeout(() => {
      setMessage('')
    }, 2000);
  }

  const titlecase = () => {
    setCharacter(character.toLowerCase().split(' ').map(item => item.charAt(0).toUpperCase() + item.slice(1)).join(' '))
    setMessage("Converted to Title Case")
    setTimeout(() => {
      setMessage('')
    }, 2000);
  }

  const togglecase = () => {
    setCharacter(character.toLowerCase().split(' ').map(item => item.charAt(0) + item.slice(1).toUpperCase()).join(' '))
    setMessage("Converted to Toggle Case")
    setTimeout(() => {
      setMessage('')
    }, 2000);
  }

  const extra_space = () => {
    setCharacter(character.split(' ').filter(item => item.trim()).join(' '));
    setMessage("Extra Spaces Removed")
    setTimeout(() => {
      setMessage('')
    }, 2000);
  }

  const executive_case = () => {
    setCharacter(character.toLowerCase().split(' ').map(item => languageElements.includes(item)
      ? item : item.charAt(0).toUpperCase() + item.slice(1)).join(' '))
      setMessage("Converted to Executive Case")
      setTimeout(() => {
        setMessage('')
      }, 2000);
  }

  const copy = async () => {
    try {
      // Check if Clipboard API is supported
      if (navigator.clipboard) {
        // If Clipboard API is supported, copy the text
        await navigator.clipboard.writeText(character);
    
      } else {
        // Fallback for browsers that don't support Clipboard API
        const textArea = document.createElement('textarea');
        textArea.value = character;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
       
      }
    } catch (err) {
      console.error('Failed to copy text:', err);
      alert('Failed to copy text');
    }
    

    settxt('👍 Done')
    setTimeout(() => {
      settxt('Copy')
    }, 2000);

    setMessage("Text Copied")
    setTimeout(() => {
      setMessage('')
    }, 2000);

  }

  return (

    <div className="buttons">
      <div className="tooltip-container">
        <button className="hover-button button-29" onClick={lowercase}>Lowercase</button>
        <span className="tooltip-text">Convert your text into lowercase : words counter</span>
      </div>
      <div className="tooltip-container">
        <button className="hover-button button-29" onClick={uppercase}>Uppercase</button>
        <span className="tooltip-text">Convert your text into lowercase uppercase : WORDS COUNTER</span>
      </div>
      <div className="tooltip-container">
        <button className="hover-button button-29" onClick={titlecase}>Title Case</button>
        <span className="tooltip-text">Make the first letter of each word Capital : Words Counter</span>
      </div>

      <div className="tooltip-container">
        <button className="hover-button button-29" onClick={copy}>{txt}</button>
        <span className="tooltip-text">Copy the text into clipboard</span>
      </div>

      <div className="tooltip-container">
        <button className="hover-button button-29" onClick={executive_case}>Executive Case</button>
        <span className="tooltip-text">Make the first letter of each word capital, except commonly use english words less then 3 characters : is, it etc</span>
      </div>
      <div className="tooltip-container">
        <button className="hover-button button-29" onClick={togglecase}>Toggle Case</button>
        <span className="tooltip-text">Converts the first letter of each word into lowercase and the rest remain in uppercase  : tHIS iS a wORD cOUNTER</span>
      </div>
      
      <div className="tooltip-container">
        <button className="hover-button button-29" onClick={extra_space}>Remove Spaces</button>
        <span className="tooltip-text">Remove blank or extra spaces from your text</span>
      </div>
    </div>

  )
}

export default Buttons
