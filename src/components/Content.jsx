import React,{useContext,useState,useEffect} from 'react'
import { WeatherDataGlobal } from '../App'
//  Components 
import Sekeleton from './Sekeleton';
// React Icons 
import { BsWind } from 'react-icons/bs';
import { GiWindSlap,GiWorld } from 'react-icons/gi';
import { RiCelsiusLine } from 'react-icons/ri';
import { CiLocationOff } from 'react-icons/ci';

function Content() {

  const {response,loading,err} = useContext(WeatherDataGlobal);
  // console.log(loading);
  // console.log(err);
  // console.log(response);

  let feels_like = (-273.15 + response[5]).toFixed(0);
  let temp = (-273.15 + response[6]).toFixed(0);
  
  const [desth,setDesth] = useState('');
  function translateDescription(description){
    {description == 'clear sky' ? setDesth('ฟ้าโปร่ง')
    :description == 'few clouds'?setDesth('มีเมฆน้อย')
    :description == 'scattered clouds' ? setDesth('เมฆกระจาย')
    :description == 'broken clouds ' ? setDesth('เมฆแตก')
    :description == 'shower rain' || 'rain' ? setDesth('ฝนตก')
    :description == 'thunderstorm' || 'thunderstorm with rain' || 'ragged thunderstorm' ? setDesth('พายุฝนฟ้าคะนอง')
    :description == 'snow' || 'Snow' ? setDesth('หิมะ')
    :description == 'mist' ? setDesth('หมอก')
    :description == 'thunderstorm with light rain' ? setDesth('พายุฝนฟ้าคะนองกับฝนปรอยๆ')
    :description == 'thunderstorm with heavy rain' ? setDesth('พายุฝนฟ้าคะนองฝนตกหนัก')
    :description == 'light thunderstorm' ? setDesth('พายุฝนฟ้าคะนองเล็กน้อย')
    :description == 'heavy thunderstorm' ? setDesth('พายุฝนฟ้าคะนองอย่างหนัก')
    :description == 'thunderstorm with light drizzle' || 'thunderstorm with drizzle' || 'thunderstorm with heavy drizzle' ? setDesth('พายุฝนฟ้าคะนองกับมีฝนตกปรอยๆ')
    :description == 'light intensity drizzle' || 'light intensity drizzle rain'  ? setDesth('ฝนตกปรอยๆ แดดออก')
    :description == 'drizzle' || 'drizzle rain' || 'shower rain and drizzle' || 'shower drizzle' || 'light rain' || 'ragged shower rain'? setDesth('ฝนตกปรอยๆ')
    :description == 'heavy intensity drizzle' ? setDesth('ฝนตกปรอยๆ หนักๆ')
    :description == 'heavy intensity drizzle rain'||'heavy intensity rain'||'extreme rain'||'heavy intensity shower rain' ? setDesth('ฝนตกหนัก')
    :description == 'heavy shower rain and drizzle ' ? setDesth('ฝนตกหนักและฝนตกปรอยๆ')
    :description == 'moderate rain' ? setDesth('ฝนตกปานกลาง')
    :description == 'freezing rain' ? setDesth('ฝนเยือกแข็ง')
    :description == 'light intensity shower rain' ? setDesth('ฝนตกแดดออก')
    :description == 'Heavy snow' || 'Heavy shower snow'? setDesth('หิมะตกหนัก')
    :description == 'Sleet' ? setDesth('ลูกเห็บตก')
    :description == 'Light shower sleet'||'Shower sleet' ? setDesth('ลูกเห็บตกเบาๆ')
    :description == 'Light rain and snow' ? setDesth('ฝนและหิมะโปรยปราย')
    :description == 'Rain and snow' ? setDesth('ฝนและหิมะ')
    :description == 'Light shower snow'||'Shower snow'||'light snow' ? setDesth('หิมะโปรยปราย')
    :description == 'overcast clouds' ? setDesth('เมฆครึ้ม'):setDesth('??????')}
  }

  useEffect(()=>{
    translateDescription(response[1]);
  },[response]);

  return (
    // Todo: Make media query max-width:sm w-1/2
    <div className="content">
        {loading || response.length == 0 ? <Sekeleton/> 
        : response[2]!==undefined && err == null ? 
         <>
            <div className="weather-text-display">
            <span className="location"><GiWorld className="mx-1"/>{response[2]}</span>
            <h1 className="temp-display">
              {temp}
              <RiCelsiusLine className="mx-2"/>
            </h1>
            <span className="more-data">
              รู้สึกเหมือน {feels_like}
              <RiCelsiusLine className="mx-2"/>
            </span>
            <p className="more-data">
              {response[4]}
              <BsWind className="mx-2"/>
            </p>
            {response[3] == 'ลมกระโชกแรง undefined' ? null:
            <p className="more-data">
              {response[3]}
              <GiWindSlap className="mx-2"/>
            </p>
            }
        </div>
        <div className="icons&description">
            <img src={`http://openweathermap.org/img/wn/${response[0]}@2x.png`} alt={'weather-icon'}></img>
            <p className="text-center">{desth}</p>
        </div>
      </>
          :<div className="mx-auto">
            <CiLocationOff className="mx-auto text-4xl"/>
            <h2>Not Found</h2>
          </div>}
    
    </div>
  )
}

export default Content