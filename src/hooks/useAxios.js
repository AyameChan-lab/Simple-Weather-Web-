import { useState,useEffect } from 'react';
import axios from 'axios';

    
const useAxios = (parameter)=>{

    const [response,setResponse] = useState([]);
    const [loading,setLoading] = useState(false);
    const [err,setErr] = useState(null);

    // API 1 = ส่งชื่อเมืองไปและรับ lat,lot 
    const geocodingAPI = axios.create({
        baseURL: `https://api.openweathermap.org/geo/1.0/direct?q=`
    });
    
    const fetchGeoApi = async (endpoint)=>{
       try {
        setLoading(true);
        setErr(null);
         const { data } = await geocodingAPI(endpoint);
         const THlocalName = data[0].local_names.th;
         const answer = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${data[0].lat}&lon=${data[0].lon}&appid=${import.meta.env.VITE_API_KEY}`);
        //  console.log(answer.data);
         const { wind,main,visibility } = answer.data;       
         const {description,icon} = answer.data.weather[0]; 
        setResponse([icon,description,THlocalName,`ลมกระโชกแรง ${wind.gust}`,`ความเร็วลม ${wind.speed}`,main.feels_like,main.temp,visibility]);
        }
       catch(err){
        setErr(err);
        // console.log(err)
       }
       finally {
        setLoading(false);
       }
    }
    
    useEffect(()=>{
        fetchGeoApi(parameter);
    },[parameter]);

    return {
        response,
        loading,
        err,
        fetchGeoApi,
    }
}

export default useAxios;