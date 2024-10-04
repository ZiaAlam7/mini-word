import React, { useEffect, useState } from 'react'
import '../styles/Social.css'
import t from "../images/twitter.png"
import f from "../images/facebook.png"
import y from "../images/youtube.png"
import l1 from "../images/linkedin.png"
import l2 from "../images/linkedin_2.png"


const Social = ({character}) => {
const [colorZ, setcolorZ] = useState("rgb(165, 254, 165)")

useEffect(() => {
    if(character.length > 10) {
        setcolorZ('rgb(251, 138, 138)')
    }
    else{
        setcolorZ("rgb(165, 254, 165)")
    }
}, [character])



  return (
    <div className='social'>

      <div className="media_card" style={{backgroundColor:colorZ}}>
        <img src={t} alt="" />
        <div className='card_text'>
            <p>Tweet</p>
            <p>280</p>
        </div>
        <div className='card_text last'>
            <p>Bio</p>
            <p>160</p>
        </div>
      </div>
      
      <div className="media_card">
        <img src={y} alt="" />
        <div className='card_text'>
            <p>Tweet</p>
            <p>280</p>
        </div>
        <div className='card_text last'>
            <p>Bio</p>
            <p>160</p>
        </div>
      </div>
      
      <div className="media_card">
        <img src={l1} alt="" />
        <div className='card_text'>
            <p>Tweet</p>
            <p>280</p>
        </div>
        <div className='card_text last'>
            <p>Bio</p>
            <p>160</p>
        </div>
      </div>
      
      <div className="media_card">
        <img src={f} alt="" />
        <div className='card_text'>
            <p>Tweet</p>
            <p>280</p>
        </div>
        <div className='card_text last'>
            <p>Bio</p>
            <p>160</p>
        </div>
      </div>
      
      
    </div>
  )
}

export default Social
