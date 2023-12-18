import React,{ useContext,useState } from 'react'
//  React Icons 
import { BiSearchAlt } from 'react-icons/bi';
import { WeatherDataGlobal } from '../App';

function Search() {

  const { fetchGeoApi } = useContext(WeatherDataGlobal);
  const [inputvalue,setInputValue] = useState('');

  function handelSeatch(){
    fetchGeoApi(`${inputvalue}&limit=1&appid=${import.meta.env.VITE_API_KEY}`);
  }
  function enterSearch(e){
    if(e.key == 'Enter' && inputvalue){
    fetchGeoApi(`${inputvalue}&limit=1&appid=${import.meta.env.VITE_API_KEY}`); 
    }
  }
  return (
    <div className="search-box">
      <input onKeyDown={enterSearch} onChange={(e)=>setInputValue(e.target.value)} type="text" placeholder="จังหวัด,อำเภอ,City" className="input-style"></input>
      <button disabled={!inputvalue} onClick={handelSeatch} className="search-btn"><BiSearchAlt/></button>
    </div>
  )
}

export default Search