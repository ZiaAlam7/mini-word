import React, { useContext, useState } from 'react'
import '../styles/Navbar.css'
import { messageContext } from '../Context/Context'
import icon from '../image/word.png'

const Navbar = ({mod, setMod, setcol_1}) => {

    const {message, setMessage} = useContext(messageContext)

    const [col_2, setcol_2] = useState('white')
    const [mod_2, setMod_2] = useState('linear-gradient(to top, #09203f 0%, #537895 100%)')
    const [btn_txt, setbtn_txt] = useState('Enable')

    const changeMod = () => {
       if(mod === 'linear-gradient(to top, #fddb92 0%, #d1fdff 100%)')
       {
        setMod('linear-gradient(to top, #09203f 0%, #537895 100%)')
        setcol_1('white')

        setMod_2('linear-gradient(to top, #fddb92 0%, #d1fdff 100%)')
        setcol_2('black')
        setbtn_txt('Disable')

        setMessage('Darkmode Enabled')
        setTimeout(() => {
            setMessage('')
           }, 1500);
       }
       else {
        setMod('linear-gradient(to top, #fddb92 0%, #d1fdff 100%)')
        setcol_1('black')

        setMod_2('linear-gradient(to top, #09203f 0%, #537895 100%)')
        setcol_2('white')
        setbtn_txt('Enable')

        setMessage('Darkmode Disabled')
        setTimeout(() => {
            setMessage('')
           }, 1500);
       }

       
    }




    return (
        <div className='navbar'>
            <div className="logo">
                <img src={icon} alt="" />
                Mini Word</div>
            <div className="press">{message}</div>
            <div className="form-check form-switch switch" style={{backgroundImage : mod_2, color:col_2}}>
                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={changeMod}/>
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault" >{btn_txt} Darkmode</label>
            </div>
        </div>
    )
}

export default Navbar
