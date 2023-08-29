import React from 'react'
import './components/styles.css'
import SideBar from './components/Sidebar'
import Header from './components/Header'
import SearchMusic from './components/SearchMusic'
import Home from './components/Home'
import Favourites from './components/Favourites'
import PlayList from './components/PlayList'
import FavState from './context/fav/favState'

// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// const SearchMusicMemo = React.memo(SearchMusic);

export default function App() {
  return (
    <div>
     
      <FavState>
      <BrowserRouter>
      <Header/>
      <SideBar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/favourite' element={<Favourites/>}/>
        <Route path='/playlist' element={<PlayList/>}/>
        <Route path='/searchmusic' element={<SearchMusic/>}/>
      </Routes>
      </BrowserRouter>
      </FavState>
    </div>
  )
}
