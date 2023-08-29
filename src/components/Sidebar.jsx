import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Heart,House,MusicNoteList,Search,MusicNoteBeamed} from 'react-bootstrap-icons';

import { Link } from 'react-router-dom';


export default function sidebar() {
    return (
        <>
        <div className="container-fluid">
            
            <div className="row">
                <div className="col-auto col-sm-1.5 bg-dark bg-gradient d-flex flex-column  min-vh-100  ">
                    
                    
                    <ul className="nav nav-pills flex-column mt-4">
                        <li className='nav-item text-white '>
                            <Link to="/" className="nav-link my-1 text-white my-hover" aria-current='page'>
                            <House/>
                            <span className='ms-2 d-none d-sm-inline'>Home</span>
                            </Link>
                        </li>
                        <li className='nav-item text-white '>
                            <Link to="/searchmusic" className="nav-link my-1 text-white my-hover" aria-current='page'>
                            <Search/>
                            <span className='ms-2 d-none d-sm-inline'>Search</span>
                            </Link>
                        </li>
                        <li className='nav-item text-white '>
                            <Link to="/favourite" className="nav-link my-1 text-white my-hover" aria-current='page'>
                            <Heart/>
                            <span className='ms-2 d-none d-sm-inline'>Favourites</span>
                            </Link>
                        </li>
                        
                        
                    </ul> 
                    <hr className='text-white d-none d-sm-block mt-4'></hr>
                </div>
            </div>
        </div>

        </>
    )
}
