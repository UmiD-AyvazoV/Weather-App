import { useState } from 'react';
import axios from 'axios';

export default function Form({ setInfo , setState }){

    const [ city , setCity ] = useState('');

    const handleChange = async (e) => {
        e.preventDefault();
        const api = 'a5fafcd0839e634a621e1981213ba890';
        const baseURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric&lang=az`;
        await axios(baseURL).then(res => setInfo(res.data));
        setState(true);
    }

    return (
        <div>
            <h1>Hava Durumu</h1>
            <form onSubmit={ (e) => handleChange(e) }>
                <div className="form">
                    <input type="text" placeholder='Şəhər Yazın...' className='inputText' 
                           onChange={ e => setCity(e.target.value) } value={city}/>
                </div>
                <div className="btnDiv">
                    <button type='submit'className='btn'>Data ları Gətir</button>
                </div>
            </form>
        </div>
    )
}