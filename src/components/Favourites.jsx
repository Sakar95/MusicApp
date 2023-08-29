import React, { useContext } from 'react'
import { Clock, Heart, HeartFill } from 'react-bootstrap-icons';
import { Card } from 'react-bootstrap';
import favContext from '../context/fav/favContext'

export default function Favourites() {
  const { fav, setFav } = useContext(favContext)
  // console.log(fav);

  const deleteFav = (index) => {
    setFav((prev) => prev.filter((music, i) => i !== index));
  };

  return (
    <div className='my-fav-section my-dynamic-box'>
      <Card bg="transparent">
        <Card.Body >
          <div className="d-flex align-items-center justify-content-between px-5">
            <div className="d-flex align-items-center">
              <h5 >#</h5>
              <h5 className="px-5 mx-5 ">Title</h5>
            </div>
            {/* <h5>Artist</h5> */}
            <div className="d-flex align-items-center">
              {/* <h5 className='px-5'><HeartFill color='darkorange'/></h5> */}
              <h5 className='px-5'><Clock /></h5>
            </div>
          </div>
        </Card.Body>
      </Card>

      { fav.map((music, index) => (
          <Card bg="transparent" style={{ height: "60px", border: "none" }}>
            <Card.Body>
              <div className="d-flex align-items-center justify-content-between px-5">
                <div className="d-flex align-items-center">
                  <h5>{index + 1}.</h5>
                  <img className="ps-4 pe-3" src={music.album.cover_small} alt="" style={{ height: "45px" }} />
                  <div>
                    <h5 >{music.title}</h5>
                    <h6 className="text-muted">{music.artist.name}</h6>
                  </div>
                </div>
                <div>
                  <div className="d-flex align-items-center">
                    <h5> <button className='px-4 bg-transparent border-0' onClick={() => deleteFav(index)}><HeartFill color='orangered' /></button></h5>
                    <h5 className='px-5'>{Math.floor(music.duration / 60)}:{music.duration % 60}</h5>
                  </div>

                </div>
              </div>
            </Card.Body>
          </Card>
        ))
      }
    </div>
  )
}
