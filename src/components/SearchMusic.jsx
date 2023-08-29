import React from 'react'
import { Search } from 'react-bootstrap-icons';
import { useEffect, useState } from 'react';
// import { ChangeEvent } from 'react';
import SearchList from './SearchList';
import { useContext } from 'react';
import favContext from '../context/fav/favContext';


export default function SearchMusic() {

  const [input, setInput] = useState("");
  const [music, setMusic] = useState("");
const {info,setInfo} = useContext(favContext);

  useEffect(() => {
    if (music.length > 0) {
    const fetchData = async () => {
      const url = `https://deezerdevs-deezer.p.rapidapi.com/search?q=${music}&limit=5`;
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
          'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
        }
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result)
        const Data=result.data;
        
        setInfo(Data)
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }
  }, [music]);




  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleClick = (e) => {
    setMusic(input);
    e.preventDefault();
  };

  return (
   
    <div className="my-search-box my-dynamic-box">
      <div className='my-search'>
        <form className='my-search-form'>
          <input onChange={handleChange} value={input} className="my-search-bar" type="text" placeholder='Search here' />
          <button className='my-srch-button' onClick={handleClick}><Search /></button>
        </form>
      </div>


      {info.length>0?<SearchList /> : <p style={{textAlign:"center" ,fontFamily:"cursive",fontSize:"25px",marginTop:"50px"}}>Enter the name of song to Search...</p>}

 
    </div>
  )
}

         