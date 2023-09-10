import React, { Component } from 'react'

/* import nav logo */
import pauselogo from './pauselogo.jpeg';

/* importing fontAwesome Icons */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars,faArrowLeft,faFilm,faHouse,faMusic,faList,faGear,faBoxesPacking,faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons'

class OffcanvasNav extends Component {
    render() {
        return (
            <div className=''>
                <button className="btn btn-outline-secondary mt-2 ms-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvas-navbar" aria-controls="offcanvas-navbar">
                    <span className='text-light'><FontAwesomeIcon icon={faBars}/></span>
                </button>
                <div className="w-50 offcanvas offcanvas-start col-3 bg-dark" id="offcanvas-navbar">
                    <div className="offcanvas-header">
                        <header className=""> 
                            <div className='d-flex'>
                                <div className=''>
                                    {/*eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
                                    <a className='btn text-light disabled' id="left-arrow" href="#"><span><FontAwesomeIcon icon={faArrowLeft}/></span></a>
                                </div>
                                <div className="ms-2 mt-2">
                                    {/*eslint-disable-next-line jsx-a11y/alt-text*/}
                                    <h6 className='text-light' id="title"><img src={pauselogo} className='rounded-circle me-2' style={{width:"20px",height:"20px"}}/>Media Player</h6>
                                </div>
                                <div className='ms-auto'>
                                    <button type="button" className="btn" data-bs-dismiss="offcanvas" aria-label="Close"><span className='text-light h3'><FontAwesomeIcon icon={faXmark} /></span></button>
                                </div>
                            </div>
                            <div className='input-group mt-2 px-2'>	
                                <input type="text" className="form-control" placeholder='Search'/>
                                <div id="search-icon" className='btn btn-outline-primary text-light px-3'><span><FontAwesomeIcon icon={faMagnifyingGlass} /></span></div>
                            </div>
                        </header>
                    </div>
                    <div className="offcanvas-body bg-dark">
                        
                        {/******************** Offcanvas Navbar ******************/}    
                        <ul className="nav d-flex flex-column px-1">
                            <li className="nav-item mb-1" title="Home">
                                {/*eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
                                <a className="nav-link text-white" href="#"><span className='pe-3'><FontAwesomeIcon icon={faHouse}/></span>Home</a>
                            </li>
                            <li className="nav-item mb-1" title="Music Library">
                                {/*eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
                                <a className="nav-link text-white" href="#"><span className='pe-3'><FontAwesomeIcon icon={faMusic}/></span>Music Library</a>
                            </li>
                            <li className="nav-item" title="Video Libary">
                                {/*eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
                                <a className="nav-link text-white" href="#"><span className='pe-3'><FontAwesomeIcon icon={faFilm}/></span>Video Library</a>
                            </li>
                            <li><hr className=''></hr></li>
                            <li className="nav-item mb-1" title="Play queue">
                                {/*eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
                                <a className="nav-link text-white" href="#"><span className='pe-3'><FontAwesomeIcon icon={faList} /></span>Play queue</a>
                            </li>
                            <li className="nav-item mb-1" title="PlayLists">
                                {/*eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
                                <a className="nav-link text-white" href="#"><span className='pe-3'><FontAwesomeIcon icon={faBoxesPacking} /></span>Playlists</a>
                            </li>
                            <li className="nav-item mb-1 mb-2 mt-auto" title="PlayLists">
                                {/*eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
                                <a className="nav-link text-white" href="#"><span className='pe-3'><FontAwesomeIcon icon={faGear} /></span>Settings</a>
                            </li>
                        </ul>
                    
                        
                        {/***************** End Offcanvas Navbar ********************/}
                    </div>
                </div>
            </div>
            
        )
    }
}

export default OffcanvasNav