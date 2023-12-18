import  { createContext }  from 'react';
import './App.css';
// useAxios
import useAxios from './hooks/useAxios';
// Components
import Navbar from './components/Navbar';
import Search from './components/Search';
import Content from './components/Content';

export const WeatherDataGlobal = createContext();

function App() {

  const {response,loading,err,fetchGeoApi} = useAxios(`Bangkok&limit=1&appid=${import.meta.env.VITE_API_KEY}`);

  const value = {
    response,
    loading,
    fetchGeoApi,
    err
  }
  return (
    <WeatherDataGlobal.Provider value={value}>
    <div className="App">
     <Navbar>
      <Search/>
     </Navbar>
     <Content/>
    </div>
    </WeatherDataGlobal.Provider>
  )
}

export default App
