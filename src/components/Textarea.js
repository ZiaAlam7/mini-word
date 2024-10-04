import React, { useState } from 'react'
import '../styles/Textarea.css'
import Buttons from './Buttons'
import Replace from './Replace'



const Textarea = ({mod, col_1}) => {

  const [character, setCharacter] = useState('')
  const [character2, setCharacter2] = useState('')
  const [time, setTime] = useState('0.0')

  const [words, setWords] = useState([])
  const [vowals, setVowals] = useState(0)



  const handelChange = (e) => {
    let data = e.target.value
    setCharacter(data)
    setCharacter2(data.replace(/\s+/g, ''))

    setWords(data.trimStart().split(" "))

    setTime((data.length / 12)/ 60)

    setVowals(data.toLowerCase().split('').filter(str => str === 'a' || str === 'e' || str === 'i' || str === 'o' || str === 'u' ).length)

  }


  return (
    <div className='main' style={{backgroundImage : mod, color : col_1}}>
      <div className="text_detail">
        <div className="characters">
          <p>Characters</p>
          <h1>{character2.length}</h1>
        </div>
        <div className="words">
          <p>Words</p>
          <h1>{words.filter(str => str !== "").length}</h1>
        </div>
        <div className="read_time">
          <p>Read Time</p>
          <div className="time_sub">

            <h1>{Math.floor(time * 10) / 10}</h1>
            <p>min</p>

          </div>
        </div>
        <div className="vowel">
          <p>Total Vowals</p>
          <h1>{vowals}</h1>
        </div>
      </div>
      <div className="textarea">
        <textarea name="" id="" onChange={handelChange} value={character} placeholder='Write Something...'></textarea>
      </div>
      <Buttons setCharacter={setCharacter} character={character} />
      <Replace setCharacter={setCharacter} character={character} />
      
    </div>
  )
}

export default Textarea
