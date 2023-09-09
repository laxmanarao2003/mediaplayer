/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackwardStep,faForwardStep,faVolumeHigh,faExpand, faEllipsis,faCircleInfo, faAnglesLeft, faAnglesRight, faVolumeXmark, faTruckFast  } from '@fortawesome/free-solid-svg-icons'

import pauselogo from './pauselogo.jpeg';
import songone from './songone.jpg'

class HandleSongs extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            volValue:100,
            progressVal:0
        }
    }
    componentDidMount() { 
        
        
    }

    // change the state of the volume slider:)
    changeVol=(e)=>{
        this.setState({volValue:e.target.value})
    }

    // change the state of the progress bar:)
    handleProgress=(ele) =>{
        this.setState({progressVal:ele.target.value})
    }

    fullScreen=()=>{
        const ele=document.querySelector('#fullScreenBtn')
        ele.classList.toggle('fullscreen-Mode')
        if(ele.classList.contains('fullscreen-Mode'))
            document.documentElement.requestFullscreen()
        else
            document.exitFullscreen()
    }

    render(){
        return (
            <div className='container-fluid pb-3' id="control-songs-bg">
                <div className='d-flex flex-nowrap align-items-center justify-content-center'>
                    {/* Starting time for the Song */}
                    <a href="" className='text-white text-decoration-none mt-3 me-3' id='startTime'>00:00</a>
                    <input className='form-input-range col-xl-10 col-lg-10 col-md-10 col-sm-9 mt-3'
                        type="range" 
                        id="progress" 
                        name='progress'
                        min={0}
                        value={this.state.progressVal}
                        onChange={this.handleProgress}
                    />
                    {/* End Time for the song */}
                    <a href="" className='text-white text-decoration-none mt-3 ms-3' id='endTime'>04:38</a>
                </div>
                <div className='d-flex justify-content-between align-items-center mt-3' id="controls-section">
                    <div className='col-xl-4 col-lg-4 col-md-4 col-sm-4' id='part1'>
                        <div className='d-flex justify-content-start align-items-center'>
                            <div><img className='border border-2 rounded me-2' style={{width:"55px",height:"55px"}} src={songone} id="currentsongimg" alt="songlogo"/></div>
                            <div><h5 className='text-light ps-2' id="songName">01. Kumkumala </h5></div>
                        </div>
                    </div>
                    <div className='col-xl-4 col-lg-4 col-md-4 col-sm-4' id="part2">
                        <div className='d-flex justify-content-center align-items-center'>
                            {/* fast Backward by 10 seconds */}
                            <div className='text-light me-4 h2 skip-back' title='Backward 10 seconds'>
                                <span><FontAwesomeIcon icon={faAnglesLeft}/></span>
                            </div>
                            {/* Backward Button */}
                            <div className='text-light previousAudiobtn me-3 h3' title='Previous'>
                                <FontAwesomeIcon icon={faBackwardStep}/>
                            </div>
                            {/* Pause/Resume Button */}
                            <div className='me-3'>
                                <img src={pauselogo} id="playsong" className='border border-1 rounded-circle pauselogo me-1' title="Play/Pause" style={{width:"48px",height:"48px"}} alt="Play/Pause"/>
                            </div>
                            {/* Forward Button */}
                            <div className='text-light nextAudiobtn me-4 h3' title='Next'>
                                <FontAwesomeIcon icon={faForwardStep}/>
                            </div>
                            {/* fast Forward by 10 seconds */}
                            <div className='text-light me-3 h2 skip-forward' title='Forward 10 seconds'>
                                <span><FontAwesomeIcon icon={faAnglesRight}/></span>
                            </div>
                        </div>
                    </div>
                    <div className='col-xl-4 col-lg-4 col-md-4 col-sm-4' id='part3'>
                        <div className='d-flex justify-content-end align-items-center'>
                            {/* Volume Increase or decrease or mute */}
                            <div className='dropstart text-white me-3'>   
                                <button className="btn btn-secondary" type="button" id="dropdownVolume" data-bs-toggle="dropdown" aria-expanded="false" title='Volume'>
                                    <FontAwesomeIcon icon={faVolumeHigh}/>
                                </button>
                                <ul className="dropdown-menu bg-dark px-3 mb-2">
                                    <li className='d-flex align-items-center justify-content-between'>
                                        <span className='text-white me-3' id="faVolumeHigh"><FontAwesomeIcon icon={faVolumeHigh}/></span>
                                        <span className='text-white me-3 volumeIconLow' id="faVolumeLow"><FontAwesomeIcon icon={faVolumeXmark}/></span>
                                        <input className='form-input-range'
                                            type='range'
                                            id='volumeInp'
                                            min={0}
                                            max={100}
                                            value={this.state.volValue}
                                            onChange={this.changeVol}
                                        />
                                    </li>
                                </ul>
                            </div>
                            <div className='btn btn-secondary text-white me-3' id="fullScreenBtn" title='Full screen' onClick={(ele)=>this.fullScreen(ele)}>
                                <span><FontAwesomeIcon icon={faExpand}/></span>
                            </div>
                            <div className='text-white me-3'>
                                <div className="dropup">
                                    <button className="btn btn-secondary" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false" title='More options'>
                                        <FontAwesomeIcon icon={faEllipsis}/>
                                    </button>
                                    <ul className="dropdown-menu bg-dark" aria-labelledby="dropdownMenuButton">
                                        <li>
                                            <a className="dropdown-item text-white" href="#">
                                                <span className='me-2'><FontAwesomeIcon icon={faCircleInfo}/></span>Properties
                                            </a>
                                        </li>
                                        <li className='text-start'>
                                            <span className='dropdown-header text-light'>Skip forward</span>
                                        </li>
                                        <li>
                                            <a className="dropdown-item text-white song-speed" id='toolow' href="#">
                                                <span className='me-2'><FontAwesomeIcon icon={faTruckFast}/></span>0.25 x
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item text-white song-speed" id='low' href="#">
                                                <span className='me-2'><FontAwesomeIcon icon={faTruckFast}/></span>0.5 x
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item text-white song-speed" id='normal' href="#">
                                                <span className='me-2'><FontAwesomeIcon icon={faTruckFast}/></span>1.0 x
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item text-white song-speed" id='high' href="#">
                                                <span className='me-2'><FontAwesomeIcon icon={faTruckFast}/></span>1.5 x
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item text-white song-speed" id='toohigh' href="#">
                                                <span className='me-2'><FontAwesomeIcon icon={faTruckFast}/></span>2.0 x
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HandleSongs