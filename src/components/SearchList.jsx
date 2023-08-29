import { Heart, HeartFill } from 'react-bootstrap-icons';
import { useState, useContext } from 'react';
import favContext from '../context/fav/favContext';
import './searchlist.css';
import Carousel from 'react-bootstrap/Carousel';

function SearchList() {
  const { fav, setFav, info } = useContext(favContext);

  const addFav = (music, index) => {
    if (!fav.find((favMusic) => favMusic.title === music.title && favMusic.duration ===music.duration)) {
      setFav((prev) => [...prev, music]);
    }
    else{
      
        setFav((prev) => prev.filter((music, i) => i !== index));
     
    }
  };
  console.log(info);

  return (
    <Carousel>
      {info.map((music, index) => (
        <Carousel.Item key={index}>
          <img className="my-carousel-img" src={music.album.cover_big} alt="First slide" />

          <div className="my-carousel-caption">
            <Carousel.Caption>
              <h3 className="mt-3 list-detail">
                {music.title}
                <button className="my-fav-btn" onClick={() => addFav(music, index)}>
                  {fav.find((favMusic) => favMusic.title === music.title && favMusic.duration ===music.duration) ? (
                    <HeartFill />
                  ) : (
                    <Heart />
                  )}
                </button>
              </h3>
              <p className='list-detail'>Artist: {music.artist.name}</p>
              <p className="music-duration">
                Duration: {Math.floor(music.duration / 60)}:{music.duration % 60}
              </p>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default SearchList;
