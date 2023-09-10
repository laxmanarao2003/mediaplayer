import React, { Component } from 'react'
/* import nav logo */
import pauselogo from './pauselogo.jpeg';

/* importing fontAwesome Icons */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft,faFilm,faHouse,faMusic,faList,faGear,faBoxesPacking,faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

class VerticalNav extends Component {
    render() {
        return (
            <>
				{/******************** Vertical Navbar ******************/}
				<div className="col-xl-3 col-lg-3 col-md-3 bg-dark text-white">
					<header className="">
						<div className='d-flex'>
							<div className='pt-2'>
								{/*eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
								<a className='btn text-light disabled' id="left-arrow" href="#"><span><FontAwesomeIcon icon={faArrowLeft}/></span></a>
							</div>
							<div className="ms-2 pt-3">
								{/*eslint-disable-next-line jsx-a11y/alt-text*/}
								<h6 id="title"><img src={pauselogo} className='rounded-circle me-2' style={{width:"20px",height:"20px"}}/>Media Player</h6>
							</div>
						</div>
						<div className='input-group mt-2 px-2'>	
							<input type="text" className="form-control" placeholder='Search'/>
							<div id="search-icon" className='btn btn-outline-primary text-light px-3'><span><FontAwesomeIcon icon={faMagnifyingGlass} /></span></div>
						</div>
					</header>
					<div id="d-flex flex-column sidenavbar" >
						<ul className="nav d-flex flex-column pt-2 px-1"  style={{minHeight:"354px"}}>
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
					</div>
				</div>
				{/***************** End Vertical Navbar ********************/}
            </>
        )
    }
}

export default VerticalNav