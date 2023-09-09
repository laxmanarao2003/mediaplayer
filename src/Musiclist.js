/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react'

// import songs from src folder:)
import kumkumala from './Kumkumala.mp3';
import MellaMellaga from './MellaMellagaa.mp3';
import NeeChoopule from './NeeChoopule.mp3'
import Ainsibaslavida from './Ainsibaslavida.mp3'
import ChinnariThalli from './ChinnariThalli.mp3'
import MaateVinadhuga from './MaateVinadhuga.mp3'
import DontStop from './DontStop.mp3'
import EmoEmo from './EmoEmo.mp3'
import Surviva from './Surviva.mp3'
import AarambhHaiPrachand from './AarambhHaiPrachand.mp3'
import LoveNwantiti from './LoveNwantiti.mp3'
import BillieEilish from './BillieEilish.mp3'
import DuncanLaurence from './DuncanLaurence.mp3'
import ImagineDragons from './ImagineDragons.mp3'
import KanaveKanave from './KanaveKanave.mp3'
import RajaRani from './RajaRani.mp3'
import WittLowry from './WittLowry.mp3'
import hukum from './hukum.mp3'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

class Musiclist extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            
        }
    }
    componentDidMount() { 
        /*const audioEles=document.querySelectorAll("audio")
        let index=0
        audioEles.forEach(audioEle => {
            const songDuration=document.querySelectorAll('#songDuration')[index]
            console.log(songDuration)
            console.log(audioEle)
            songDuration.textContent = Math.floor(audioEle.duration)
            index++
        })
        */
    }
    render(){
        return (
            <div className="list-group container" id='musiclist'>

                <div className='d-flex align-items-center justify-content-between rounded rounded-2 list-group-item mt-2'>

                    {/* play/pause button - Song Name */}
                    <a href="#" className="col-3 py-1 text-light">
                        <audio id="one" className='myaudioele'>
                            <source src={kumkumala} type="audio/mp3"/>
                        </audio>
                        <span id="one" className='text-warning playbtn rounded px-2 py-1 me-2'><FontAwesomeIcon icon={faPlay}/></span>
                        01. Kumkumala
                    </a>

                    {/* Singer */}
                    <a href="#" className="col-3 text-light"><span className='rounded px-2 py-1' id="singer">Sid sriram</span></a>

                    <div className='col-5 d-flex align-items-center justify-content-between'>

                        {/* Movie Name */}
                        <a href="#" className="col-6 text-light me-3" id="movie"><span className="rounded px-2 py-1">Brahmastra</span></a>

                        {/* Language of the Song */}
                        <a href="#" className="col-6 text-light me-3">Telugu</a>
                    </div>
                    {/* Song Duration */}
                    <a href="#" className="col-1 text-light" id="songDuration">04:38</a>
                </div>


                <div className='d-flex align-items-center justify-content-between rounded rounded-2 list-group-item mt-2'>

                    {/* play/pause button - Song Name */}
                    <a href="#" className="col-3 py-1 text-light">
                        <audio id="two" className='myaudioele'>
                            <source src={MaateVinadhuga} type="audio/mp3"/>
                        </audio>
                        <span id="two" className='text-warning playbtn rounded px-2 py-1 me-2'><FontAwesomeIcon icon={faPlay}/></span>
                        02. Maate vinadhuga
                    </a>

                    {/* Singer */}
                    <a href="#" className="col-3 text-light"><span className='rounded px-2 py-1' id="singer">Sid sriram</span></a>

                    <div className='col-5 d-flex align-items-center justify-content-between'>

                        {/* Movie Name */}
                        <a href="#" className="col-6 text-light me-3" id="movie"><span className="rounded px-2 py-1">Taxiwala</span></a>
                        
                        {/* Language of the Song */}
                        <a href="#" className="col-6 text-light me-3">Telugu</a>
                    </div>
                    {/* Song Duration */}
                    <a href="#" className="col-1 text-light" id="songDuration">04:35</a>
                </div>


                <div className='d-flex align-items-center justify-content-between rounded rounded-2 list-group-item mt-2'>

                    {/* play/pause button - Song Name */}
                    <a href="#" className="col-3 py-1 text-light">
                        <audio id="three" className='myaudioele'>
                            <source src={MellaMellaga} type="audio/mp3"/>
                        </audio>
                        <span id="three" className='text-warning playbtn rounded px-2 py-1 me-2'><FontAwesomeIcon icon={faPlay}/></span>
                        03. Mella Mella mellaga
                    </a>

                    {/* Singer */}
                    <a href="#" className="col-3 text-light"><span className='rounded px-2 py-1' id="singer">Aditi Bhavaraju</span></a>

                    <div className='col-5 d-flex align-items-center justify-content-between'>

                        {/* Movie Name */}
                        <a href="#" className="col-6 text-light me-3" id="movie"><span className="rounded px-2 py-1">ABCD</span></a>
                        
                        {/* Language of the Song */}
                        <a href="#" className="col-6 text-light me-3">Telugu</a>
                    </div>
                    {/* Song Duration */}
                    <a href="#" className="col-1 text-light" id="songDuration">04:00</a>
                </div>


                <div className='d-flex align-items-center justify-content-between rounded rounded-2 list-group-item mt-2'>

                    {/* play/pause button - Song Name */}
                    <a href="#" className="col-3 py-1 text-light">
                        <audio id="four" className='myaudioele'>
                            <source src={Surviva} type="audio/mp3"/>
                        </audio>
                        <span id="four" className='text-warning playbtn rounded px-2 py-1 me-2'><FontAwesomeIcon icon={faPlay}/></span>
                        04. Surviva
                    </a>

                    {/* Singer */}
                    <a href="#" className="col-3 text-light"><span className='rounded px-2 py-1' id="singer">Mali,Ranjith Govind</span></a>

                    <div className='col-5 d-flex align-items-center justify-content-between'>

                        {/* Movie Name */}
                        <a href="#" className="col-6 text-light me-3" id="movie"><span className="rounded px-2 py-1">Vivekam</span></a>
                        
                        {/* Language of the Song */}
                        <a href="#" className="col-6 text-light me-3">Telugu</a>
                    </div>
                    {/* Song Duration */}
                    <a href="#" className="col-1 text-light" id="songDuration">03:42</a>
                </div>


                <div className='d-flex align-items-center justify-content-between rounded rounded-2 list-group-item mt-2'>

                    {/* play/pause button - Song Name */}
                    <a href="#" className="col-3 py-1 text-light">
                        <audio id="five" className='myaudioele'>
                            <source src={ChinnariThalli} type="audio/mp3"/>
                        </audio>
                        <span id="five" className='text-warning playbtn rounded px-2 py-1 me-2'><FontAwesomeIcon icon={faPlay}/></span>
                        05. Chinnari thalli
                    </a>

                    {/* Singer */}
                    <a href="#" className="col-3 text-light"><span className='rounded px-2 py-1' id="singer">D.Satyaprakash</span></a>

                    <div className='col-5 d-flex align-items-center justify-content-between'>

                        {/* Movie Name */}
                        <a href="#" className="col-6 text-light me-3" id="movie"><span className="rounded px-2 py-1">Viswasam</span></a>
                        
                        {/* Language of the Song */}
                        <a href="#" className="col-6 text-light me-3">Telugu</a>
                    </div>
                    {/* Song Duration */}
                    <a href="#" className="col-1 text-light" id="songDuration">04:29</a>
                </div>


                <div className='d-flex align-items-center justify-content-between rounded rounded-2 list-group-item mt-2'>

                    {/* play/pause button - Song Name */}
                    <a href="#" className="col-3 py-1 text-light">
                        <audio id="six" className='myaudioele'>
                            <source src={NeeChoopule} type="audio/mp3"/>
                        </audio>
                        <span id="six" className='text-warning playbtn rounded px-2 py-1 me-2'><FontAwesomeIcon icon={faPlay}/></span>
                        06. Nee choopule
                    </a>

                    {/* Singer */}
                    <a href="#" className="col-3 text-light"><span className='rounded px-2 py-1' id="singer">Haricharan,Chitra</span></a>

                    <div className='col-5 d-flex align-items-center justify-content-between'>

                        {/* Movie Name */}
                        <a href="#" className="col-6 text-light me-3" id="movie"><span className="rounded px-2 py-1">Endukante Premanta</span></a>
                        
                        {/* Language of the Song */}
                        <a href="#" className="col-6 text-light me-3">Telugu</a>
                    </div>
                    {/* Song Duration */}
                    <a href="#" className="col-1 text-light" id="songDuration">06:02</a>
                </div>


                <div className='d-flex align-items-center justify-content-between rounded rounded-2 list-group-item mt-2'>

                    {/* play/pause button - Song Name */}
                    <a href="#" className="col-3 py-1 text-light">
                        <audio id="seven" className='myaudioele'>
                            <source src={DontStop} type="audio/mp3"/>
                        </audio>
                        <span id="seven" className='text-warning playbtn rounded px-2 py-1 me-2'><FontAwesomeIcon icon={faPlay}/></span>
                        07. Dont Stop
                    </a>

                    {/* Singer */}
                    <a href="#" className="col-3 text-light"><span className='rounded px-2 py-1' id="singer">Raghu Dixit</span></a>

                    <div className='col-5 d-flex align-items-center justify-content-between'>

                        {/* Movie Name */}
                        <a href="#" className="col-6 text-light me-3" id="movie"><span className="rounded px-2 py-1">Nannaku Prematho</span></a>
                        
                        {/* Language of the Song */}
                        <a href="#" className="col-6 text-light me-3">Telugu</a>
                    </div>
                    {/* Song Duration */}
                    <a href="#" className="col-1 text-light" id="songDuration">03:53</a>
                </div>


                <div className='d-flex align-items-center justify-content-between rounded rounded-2 list-group-item mt-2'>

                    {/* play/pause button - Song Name */}
                    <a href="#" className="col-3 py-1 text-light">
                        <audio id="eight" className='myaudioele'>
                            <source src={EmoEmo} type="audio/mp3"/>
                        </audio>
                        <span id="eight" className='text-warning playbtn rounded px-2 py-1 me-2'><FontAwesomeIcon icon={faPlay}/></span>
                        08. Emo Emo
                    </a>

                    {/* Singer */}
                    <a href="#" className="col-3 text-light"><span className='rounded px-2 py-1' id="singer">Praveen Lakkaraju</span></a>

                    <div className='col-5 d-flex align-items-center justify-content-between'>

                        {/* Movie Name */}
                        <a href="#" className="col-6 text-light me-3" id="movie"><span className="rounded px-2 py-1">Raahu</span></a>
                        
                        {/* Language of the Song */}
                        <a href="#" className="col-6 text-light me-3">Telugu</a>
                    </div>
                    {/* Song Duration */}
                    <a href="#" className="col-1 text-light" id="songDuration">04:02</a>
                </div>


                <div className='d-flex align-items-center justify-content-between rounded rounded-2 list-group-item mt-2'>

                    {/* play/pause button - Song Name */}
                    <a href="#" className="col-3 py-1 text-light">
                        <audio id="nine" className='myaudioele'>
                            <source src={Ainsibaslavida} type="audio/mp3"/>
                        </audio>
                        <span id="nine" className='text-warning playbtn rounded px-2 py-1 me-2'><FontAwesomeIcon icon={faPlay}/></span>
                        09. Ainsi bas la vida
                    </a>

                    {/* Singer */}
                    <a href="#" className="col-3 text-light"><span className='rounded px-2 py-1' id="singer">Unknown artist</span></a>

                    <div className='col-5 d-flex align-items-center justify-content-between'>

                        {/* Movie Name */}
                        <a href="#" className="col-6 text-light me-3" id="movie"><span className="rounded px-2 py-1">Unknown</span></a>
                        
                        {/* Language of the Song */}
                        <a href="#" className="col-6 text-light me-3">Unknown</a>
                    </div>
                    {/* Song Duration */}
                    <a href="#" className="col-1 text-light" id="songDuration">03:40</a>
                </div>


                <div className='d-flex align-items-center justify-content-between rounded rounded-2 list-group-item mt-2'>

                    {/* play/pause button - Song Name */}
                    <a href="#" className="col-3 py-1 text-light">
                        <audio id="ten" className='myaudioele'>
                            <source src={AarambhHaiPrachand} type="audio/mp3"/>
                        </audio>
                        <span id="ten" className='text-warning playbtn rounded px-2 py-1 me-2'><FontAwesomeIcon icon={faPlay}/></span>
                        10. Aarambh-Hai-Prachand
                    </a>

                    {/* Singer */}
                    <a href="#" className="col-3 text-light"><span className='rounded px-2 py-1' id="singer">Unknown artist</span></a>

                    <div className='col-5 d-flex align-items-center justify-content-between'>

                        {/* Movie Name */}
                        <a href="#" className="col-6 text-light me-3" id="movie"><span className="rounded px-2 py-1">Unknown</span></a>
                        
                        {/* Language of the Song */}
                        <a href="#" className="col-6 text-light me-3">Unknown</a>
                    </div>
                    {/* Song Duration */}
                    <a href="#" className="col-1 text-light" id="songDuration">03:22</a>
                </div>


                <div className='d-flex align-items-center justify-content-between rounded rounded-2 list-group-item mt-2'>

                    {/* play/pause button - Song Name */}
                    <a href="#" className="col-3 py-1 text-light">
                        <audio id="eleven" className='myaudioele'>
                            <source src={LoveNwantiti} type="audio/mp3"/>
                        </audio>
                        <span id="eleven" className='text-warning playbtn rounded px-2 py-1 me-2'><FontAwesomeIcon icon={faPlay}/></span>
                        11. Love-Nwantiti
                    </a>

                    {/* Singer */}
                    <a href="#" className="col-3 text-light"><span className='rounded px-2 py-1' id="singer">Unknown artist</span></a>

                    <div className='col-5 d-flex align-items-center justify-content-between'>

                        {/* Movie Name */}
                        <a href="#" className="col-6 text-light me-3" id="movie"><span className="rounded px-2 py-1">Unknown</span></a>
                        
                        {/* Language of the Song */}
                        <a href="#" className="col-6 text-light me-3">Unknown</a>
                    </div>
                    {/* Song Duration */}
                    <a href="#" className="col-1 text-light" id="songDuration">03:03</a>
                </div>


                <div className='d-flex align-items-center justify-content-between rounded rounded-2 list-group-item mt-2'>

                    {/* play/pause button - Song Name */}
                    <a href="#" className="col-3 py-1 text-light">
                        <audio id="twelve" className='myaudioele'>
                            <source src={BillieEilish} type="audio/mp3"/>
                        </audio>
                        <span id="twelve" className='text-warning playbtn rounded px-2 py-1 me-2'><FontAwesomeIcon icon={faPlay}/></span>
                        12. Billie-Eilish
                    </a>

                    {/* Singer */}
                    <a href="#" className="col-3 text-light"><span className='rounded px-2 py-1' id="singer">Unknown artist</span></a>

                    <div className='col-5 d-flex align-items-center justify-content-between'>

                        {/* Movie Name */}
                        <a href="#" className="col-6 text-light me-3" id="movie"><span className="rounded px-2 py-1">Unknown</span></a>
                        
                        {/* Language of the Song */}
                        <a href="#" className="col-6 text-light me-3">Unknown</a>
                    </div>
                    {/* Song Duration */}
                    <a href="#" className="col-1 text-light" id="songDuration">02:02</a>
                </div>


                <div className='d-flex align-items-center justify-content-between rounded rounded-2 list-group-item mt-2'>

                    {/* play/pause button - Song Name */}
                    <a href="#" className="col-3 py-1 text-light">
                        <audio id="thirteen" className='myaudioele'>
                            <source src={DuncanLaurence} type="audio/mp3"/>
                        </audio>
                        <span id="thirteen" className='text-warning playbtn rounded px-2 py-1 me-2'><FontAwesomeIcon icon={faPlay}/></span>
                        13. Duncan-Laurence
                    </a>

                    {/* Singer */}
                    <a href="#" className="col-3 text-light"><span className='rounded px-2 py-1' id="singer">Unknown artist</span></a>

                    <div className='col-5 d-flex align-items-center justify-content-between'>

                        {/* Movie Name */}
                        <a href="#" className="col-6 text-light me-3" id="movie"><span className="rounded px-2 py-1">Unknown</span></a>
                        
                        {/* Language of the Song */}
                        <a href="#" className="col-6 text-light me-3">Unknown</a>
                    </div>
                    {/* Song Duration */}
                    <a href="#" className="col-1 text-light" id="songDuration">02:02</a>
                </div>

                <div className='d-flex align-items-center justify-content-between rounded rounded-2 list-group-item mt-2'>

                    {/* play/pause button - Song Name */}
                    <a href="#" className="col-3 py-1 text-light">
                        <audio id="fourteen" className='myaudioele'>
                            <source src={ImagineDragons} type="audio/mp3"/>
                        </audio>
                        <span id="fourteen" className='text-warning playbtn rounded px-2 py-1 me-2'><FontAwesomeIcon icon={faPlay}/></span>
                        14. Imagine-Dragons
                    </a>

                    {/* Singer */}
                    <a href="#" className="col-3 text-light"><span className='rounded px-2 py-1' id="singer">Unknown artist</span></a>

                    <div className='col-5 d-flex align-items-center justify-content-between'>

                        {/* Movie Name */}
                        <a href="#" className="col-6 text-light me-3" id="movie"><span className="rounded px-2 py-1">Unknown</span></a>
                        
                        {/* Language of the Song */}
                        <a href="#" className="col-6 text-light me-3">Unknown</a>
                    </div>
                    {/* Song Duration */}
                    <a href="#" className="col-1 text-light" id="songDuration">03:24</a>
                </div>

                <div className='d-flex align-items-center justify-content-between rounded rounded-2 list-group-item mt-2'>

                    {/* play/pause button - Song Name */}
                    <a href="#" className="col-3 py-1 text-light">
                        <audio id="fifteen" className='myaudioele'>
                            <source src={KanaveKanave} type="audio/mp3"/>
                        </audio>
                        <span id="fifteen" className='text-warning playbtn rounded px-2 py-1 me-2'><FontAwesomeIcon icon={faPlay}/></span>
                        15. Kanave-Kanave
                    </a>

                    {/* Singer */}
                    <a href="#" className="col-3 text-light"><span className='rounded px-2 py-1' id="singer">Anirudh ravichander</span></a>

                    <div className='col-5 d-flex align-items-center justify-content-between'>

                        {/* Movie Name */}
                        <a href="#" className="col-6 text-light me-3" id="movie"><span className="rounded px-2 py-1">David</span></a>
                        
                        {/* Language of the Song */}
                        <a href="#" className="col-6 text-light me-3">Unknown</a>
                    </div>
                    {/* Song Duration */}
                    <a href="#" className="col-1 text-light" id="songDuration">04:23</a>
                </div>

                <div className='d-flex align-items-center justify-content-between rounded rounded-2 list-group-item mt-2'>

                    {/* play/pause button - Song Name */}
                    <a href="#" className="col-3 py-1 text-light">
                        <audio id="sixteen" className='myaudioele'>
                            <source src={RajaRani} type="audio/mp3"/>
                        </audio>
                        <span id="sixteen" className='text-warning playbtn rounded px-2 py-1 me-2'><FontAwesomeIcon icon={faPlay}/></span>
                        16. Raja-Rani-Lyrics
                    </a>

                    {/* Singer */}
                    <a href="#" className="col-3 text-light"><span className='rounded px-2 py-1' id="singer">G. V. Prakash Kumar</span></a>

                    <div className='col-5 d-flex align-items-center justify-content-between'>

                        {/* Movie Name */}
                        <a href="#" className="col-6 text-light me-3" id="movie"><span className="rounded px-2 py-1">Raja Rani</span></a>
                        
                        {/* Language of the Song */}
                        <a href="#" className="col-6 text-light me-3">Unknown</a>
                    </div>
                    {/* Song Duration */}
                    <a href="#" className="col-1 text-light" id="songDuration">00:23</a>
                </div>

                <div className='d-flex align-items-center justify-content-between rounded rounded-2 list-group-item mt-2'>

                    {/* play/pause button - Song Name */}
                    <a href="#" className="col-3 py-1 text-light">
                        <audio id="seventeen" className='myaudioele'>
                            <source src={WittLowry} type="audio/mp3"/>
                        </audio>
                        <span id="seventeen" className='text-warning playbtn rounded px-2 py-1 me-2'><FontAwesomeIcon icon={faPlay}/></span>
                        17. Witty-Lowry
                    </a>

                    {/* Singer */}
                    <a href="#" className="col-3 text-light"><span className='rounded px-2 py-1' id="singer">Unknown artist</span></a>

                    <div className='col-5 d-flex align-items-center justify-content-between'>

                        {/* Movie Name */}
                        <a href="#" className="col-6 text-light me-3" id="movie"><span className="rounded px-2 py-1">Unknown</span></a>
                        
                        {/* Language of the Song */}
                        <a href="#" className="col-6 text-light me-3">Unknown</a>
                    </div>
                    {/* Song Duration */}
                    <a href="#" className="col-1 text-light" id="songDuration">02:20</a>
                </div>


                <div className='d-flex align-items-center justify-content-between rounded rounded-2 list-group-item mt-2'>

                    {/* play/pause button - Song Name */}
                    <a href="#" className="col-3 py-1 text-light">
                        <audio id="eighteen" className='myaudioele'>
                            <source src={hukum} type="audio/mp3"/>
                        </audio>
                        <span id="eighteen" className='text-warning playbtn rounded px-2 py-1 me-2'><FontAwesomeIcon icon={faPlay}/></span>
                        18. Hukum 
                    </a>

                    {/* Singer */}
                    <a href="#" className="col-3 text-light"><span className='rounded px-2 py-1' id="singer">Anirudh Ravichander</span></a>

                    <div className='col-5 d-flex align-items-center justify-content-between'>

                        {/* Movie Name */}
                        <a href="#" className="col-6 text-light me-3" id="movie"><span className="rounded px-2 py-1">Jailer-2023</span></a>
                        
                        {/* Language of the Song */}
                        <a href="#" className="col-6 text-light me-3">Telugu</a>
                    </div>
                    {/* Song Duration */}
                    <a href="#" className="col-1 text-light" id="songDuration">03:04</a>
                </div>
                
            </div>
        )
    }
}

export default Musiclist