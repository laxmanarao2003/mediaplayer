import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShuffle,faChevronDown} from '@fortawesome/free-solid-svg-icons'
import OffcanvasNav from './OffcanvasNav';
import Musiclist from './Musiclist';
import Albums from './Albums';
import Artists from './Artists';

class Songs extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }

    render() {
        return (
            <>
                <ul className="d-flex nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <li className="nav-item">

                        {/* Based on the props value the Offcanvas navbar should render */}
                        {(this.props.invoke===1)?<OffcanvasNav/>:<></>}

                    </li>
                    <li className="nav-item">
                        <button className="nav-link"><h2 className='text-warning'>Music</h2></button>
                    </li>
                    <li className="nav-item mt-2 me-2">
                        <button className="nav-link text-white btn btn-dark active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button">Songs</button>
                    </li>
                    <li className="nav-item mt-2 me-2">
                        <button className="nav-link text-white btn btn-dark" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button">Albums</button>
                    </li>
                    <li className="nav-item mt-2">
                        <button className="nav-link text-white btn btn-dark" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button">Artists</button>
                    </li>
                </ul>
                    
                <ul className="nav ms-3">
                    <li className="nav-item">
                        <button className="btn btn-info text-white" type="button"><span className='me-2'><FontAwesomeIcon icon={faShuffle}/></span>Shuffle and Play</button>
                    </li>
                    <li className="nav-item ms-auto me-2">
                        <div className="dropdown">
                            <button className="btn text-white" type="button" id="SortButton" data-bs-toggle="dropdown">Sort by:
                                <span className='me-2' style={{color:"orange"}}> A-Z</span>
                                <FontAwesomeIcon icon={faChevronDown}/>
                            </button>
                            <ul className="dropdown-menu bg-dark" aria-labelledby="SortButton">
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
                                <li><a className="dropdown-item text-light py-1" href="#">A-Z</a></li>
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
                                <li><a className="dropdown-item text-light py-1" href="#">Artist</a></li>
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
                                <li><a className="dropdown-item text-light py-1" href="#">Album</a></li>
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
                                <li><a className="dropdown-item text-light py-1" href="#">Release Year</a></li>
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
                                <li><a className="dropdown-item text-light py-1" href="#">Date added</a></li>
                            </ul>
                        </div>
                    </li>
                </ul>

                <div className="tab-content mt-2" id="pills-tabContent">
                    <div className="tab-pane show active fade" id="pills-home" role="tabpanel">
                        <Musiclist/>
                    </div>
                    <div className="tab-pane fade" id="pills-profile" role="tabpanel">
                        <Albums/>
                    </div>
                    <div className="tab-pane fade" id="pills-contact" role="tabpanel">
                        <Artists/>
                    </div>
                </div>
            </>
        )
    }
}

export default Songs