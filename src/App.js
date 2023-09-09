/* eslint-disable react/no-direct-mutation-state */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

/*Importing Bootstrap 5*/
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

/* Import jQuery */
import $ from 'jquery'; 

/************** import Files *************/
import './App.css';
import './index.css';
import VerticalNav from './VerticalNav.js';
import OffcanvasNav from './OffcanvasNav.js';

/*Importing images*/
import pauselogo from './pauselogo.jpeg'
import playlogo from './playlogo.jpeg';
import songone from './songone.jpg'
import songtwo from './songtwo.jpg'
import songthree from './songthree.jpeg'
import songfour from './songfour.jpg'
import songfive from './songfive.jpg'
import songsix from './songsix.jpg'
import songseven from './songseven.jpg'
import songeight from './songeight.jpeg'
import songnine from './songnine.jpg'
import songten from './songten.jpg'
import songeleven from './songeleven.jpeg'
import songtwelve from './songtwelve.jpg'
import songthirteen from './songthirteen.jpeg'
import songfourteen from './songfourteen.jpg'
import songfifteen from './songfifteen.jpg'
import songsixteen from './songsixteen.jpg'
import songseventeen from './songseventeen.jpg'
import songeighteen from './songeighteen.jpg'
import NavbarDecider from './NavbarDecider';


class App extends React.Component{
	constructor(props){
		super(props)
        this.state={
            play:0,
            curr:'',
			prev:'',
			next:'',
			progressVal:0,
			volValue:100,
			expanded:false,
			offcanvasnav:0,
			songsObject:{
				"one":songone, "two":songtwo, "three":songthree, "four":songfour, 
				"five":songfive, "six":songsix, "seven":songseven, "eight":songeight,"nine":songnine,
				"ten":songten, "eleven":songeleven, "twelve":songtwelve, "thirteen":songthirteen,
                "fourteen":songfourteen, "fifteen":songfifteen,"sixteen":songsixteen,"seventeen":songseventeen,
				"eighteen":songeighteen
			},
			forwardSeconds:{
				"toolow":0.25,"low":0.5,"normal":1.0,"high":1.5,"toohigh":2.0
			}
        }
	}
	
	/* The componentDidMount called after all the child components render */
	componentDidMount() {

        const progress=document.getElementById('progress')
        const startTime=document.getElementById('startTime')
        const endTime=document.getElementById('endTime')
        const playButtons=document.querySelectorAll('.d-flex span.playbtn')
		const playsong=$("#playsong")[0]
		const currentSongImg=document.getElementById('currentsongimg')
		const skipback=document.querySelector('.skip-back')
		const skipforward=document.querySelector('.skip-forward')
		const previousAudio=document.querySelector('.previousAudiobtn')
		const nextAudio=document.querySelector('.nextAudiobtn')
		const audioElements=document.querySelectorAll('audio.myaudioele')
		// creating variable which is used for clearInterval:)
		let myInterval

		playButtons.forEach((playbtn)=>{
			playbtn.addEventListener('click',()=>{

				//calling a function which performs play, pause actions:)
				playAndPause(playbtn)
				
			})
		})

		const playAndPause = (playbtn)=>{
			/* get Id of playbtn to play a music, both playbtn and audio elements have same id's:)*/
			const idAttr=playbtn.getAttribute('id')

			// change the current image that the song currently is playing:)
			currentSongImg.src=this.state.songsObject[`${idAttr}`]

			// get Music element using playbtn id:)
			const currAudio=document.getElementById(`${idAttr}`)

			if(this.state.play===0)
			{
				currAudio.play()
				this.setState({play:1})
				this.setState({curr:currAudio})
				playsong.src=playlogo

				// change the current song's color:)
				updateColors(currAudio)

				// adding and removing classes for play button
				playsong.classList.add("playlogo")
				playsong.classList.remove("pauselogo")

				// Change Song Name Dynamically using jQuery which is a "parent()" method:)
				$("#songName").text($(playbtn).parent().text())

				// update the song duration:)
				setDuration(currAudio)

				// find the previous audio:)
				findPreviousNextAudio(currAudio)
				return
			}

			else if((this.state.play===1 || this.state.play===0) && currAudio!==this.state.curr)
			{
				this.state.curr.pause()

				/*
				* change the text-color of the current song in the list when the current song being changed to text-light by using jQuery parent methods:)
				* 1,2 => change the text-color for song,singer and time duration by adding text-light class & then remove the class text-light:)
				* 3,4 => change the text-color movie year of published and language by removing text-warning class & the remove the class text-warning:)
				*/
				$(this.state.curr).parent().parent().find("div").children().addClass("text-light")
				$(this.state.curr).parent().parent().children().addClass("text-light")
				$(this.state.curr).parent().parent().children().removeClass("text-warning")
				$(this.state.curr).parent().parent().find("div").children().removeClass("text-warning")

				// we need to assign zero duration for song which is previously played:)
				this.state.curr.currentTime=0

				// we need to clear the previous setInterval which prevents us to disturbing the start time:)
				clearInterval(myInterval)
				
				currAudio.play()

				playsong.src=playlogo

				// Change Song Name Dynamically using jQuery which is a "parent()" method:)
				$("#songName").text($(playbtn).parent().text())

				// change the current song's color:)
				updateColors(currAudio)

				// adding and removing classes for play button
				playsong.classList.add("playlogo")
				playsong.classList.remove("pauselogo")

				// assign current audio to curr which is a state:)
				this.setState({curr:currAudio})
				this.setState({play:1})

				// update the song duration:)
				setDuration(currAudio)

				// find the previous audio:)
				findPreviousNextAudio(currAudio)
				return
			}

			else if(this.state.play===1 && this.state.curr===currAudio)
			{
				this.state.curr.pause()

				// we need to clear the previous setInterval which prevents us to disturbing the start time:)
				clearInterval(myInterval)
				playsong.src=pauselogo

				// adding and removing classes for play button
				playsong.classList.add("pauselogo")
				playsong.classList.remove("playlogo")

				// assign current audio to curr which is a state:)
				this.setState({curr:currAudio})
				this.setState({play:0})
				return
			}
		}

		const updateColors=(currAudio) =>{
			/*
			* when switching from one to another song, change the text-color of the current song in the list to text-warning by using jQuery parent methods:)
			* 1,2 => change the text-color for song,singer and time duration by adding text-warning class & then remove the class text-light:)
			* 3,4 => change the text-color movie year of published and language by removing text-light class & the remove the class text-warning:)
			*/
			$(currAudio).parent().parent().children().addClass("text-warning")
			$(currAudio).parent().parent().find("div").children().addClass("text-warning")
			$(currAudio).parent().parent().find("div").children().removeClass("text-light")
			$(currAudio).parent().parent().children().removeClass("text-light")
		}

		// find the Previous Audio:)
		const findPreviousNextAudio=(currEle)=>{	
			let index=0
			audioElements.forEach((audioEle)=>{
				if(audioEle===currEle)
				{
					const prevEle = document.getElementsByClassName('myaudioele')[index-1]
					const nextEle = document.getElementsByClassName('myaudioele')[index+1]
					this.setState({prev:prevEle});
					this.setState({next:nextEle});
				}
				index++;
			})
		}
		
		// Play the previous audio:)
		previousAudio.addEventListener('click',()=>{
			if(this.state.curr!=='' && this.state.prev){
				// calling the playAndPause method to perform actions:)
				playAndPause(this.state.prev)
			}
			else
				alert("You can't go back to the previous Audio")
		})

		// Play the next audio:)
		nextAudio.addEventListener('click',()=>{
			if(this.state.curr!=='' && this.state.next){
				// calling the playAndPause method to perform actions:)
				playAndPause(this.state.next)
			}
			else 
				alert("You can't go back to the Next Audio")
		})

		// fix the Audio Volume:)
		const volEle=document.querySelector("#volumeInp")
		volEle.addEventListener('input',()=>{
			// set the volume to the current song:)
			if(this.state.curr!==''){
                this.state.curr.volume=volEle.value/100
				progress.value=this.state.curr.currentTime
			}
			const volumeIconHigh=document.querySelector('#faVolumeHigh')
        	const volumeIconLow=document.querySelector('#faVolumeLow')
			if(volEle.value>0){
				volumeIconHigh.classList.remove('volumeIconHigh')
				volumeIconLow.classList.add('volumeIconLow')
			}
			else{
				volumeIconHigh.classList.add('volumeIconHigh')
				volumeIconLow.classList.remove('volumeIconLow')
				
			}
		})

		/* Set Maximum Duration for a Song */
		const setDuration = (curr) => {

			let maxTime=Math.floor(curr.duration)
			let minutes=Math.floor(maxTime/60)
			let seconds=(maxTime-minutes*60<9)?0+""+(minutes):maxTime-minutes*60
			endTime.textContent=0+""+minutes+":"+seconds
			progress.max=Math.floor(curr.duration)

			// setInterval which calculates the current time of the song:)
			myInterval=setInterval(setProgress,500,curr)

		}

		/* Set Current time for a Song */
		let time=0
		const setProgress=(curr)=>{
			let seconds=Math.floor(curr.currentTime)
			let minutes=Math.floor(seconds/60)
			if(seconds>=60){
				seconds=seconds-(minutes*60)
				seconds=(seconds<10)?"0"+seconds:seconds
				time="0"+minutes+":"+seconds
			}
			else
				time=(seconds<10)?"00:0"+seconds:"00:"+seconds
			
			// when the current is completed then we update the next song should play:)
			if(progress.value===progress.max && this.state.next)
			{
				//alert("Maximum reached")
				clearInterval(myInterval)
				playAndPause(this.state.next)
			}

			startTime.textContent=time

			// set progress to current time of a song:)
			progress.value=Math.floor(curr.currentTime)
		}

		// skip back with 10 seconds:)
		skipback.addEventListener("click",()=>{
			if(this.state.curr!=='')
				this.state.curr.currentTime=this.state.curr.currentTime-10
		})

		// skip forward with 10 seconds:)
		skipforward.addEventListener("click",()=>{
			if(this.state.curr!=='')
				this.state.curr.currentTime=this.state.curr.currentTime+10
		})

		// skip the song duration based on the user input:)
		const songSpeedEles=document.querySelectorAll(".song-speed")
		songSpeedEles.forEach((ele)=>{
			ele.addEventListener('click',()=>{
				const speed=ele.getAttribute("id")
				if(this.state.curr!=='')
					this.state.curr.currentTime=this.state.curr.currentTime+this.state.forwardSeconds[speed]
			})
		})

		// change the current time of the song based on the current progress value:)
		progress.addEventListener('input',()=>{
			if(this.state.curr!==''){
				this.state.curr.currentTime=progress.value
			}
		})
		
		/* Playing logo (stop and play)*/
		playsong.addEventListener('click', () =>{

			// Playing logo is disabled
			if(this.state.curr!=='' && playsong.classList.contains("playlogo")){
				this.state.curr.pause()
				this.setState({playing:0})
				playsong.classList.add("pauselogo")
				playsong.classList.remove("playlogo")
				playsong.src=pauselogo
			}

			// Playing logo is enabled
			else if(playsong.classList.contains("pauselogo") && this.state.curr!==''){
				this.state.curr.play()
				this.setState({playing:1})
				playsong.src=playlogo
				playsong.classList.add("playlogo")
				playsong.classList.remove("pauselogo")
			}
		})

		// when resizing the window which component should render:)
		const controlsongsbg=document.querySelector("#control-songs-bg")
		const verticalnav=document.querySelector('#vertical-nav')
		const musiclist=document.querySelector("#musiclist")
		const albumsSection=document.querySelector("#albums-section")
		const part1=document.querySelector("#part1")
		const part2=document.querySelector("#part2")
		const controlssection=document.querySelector('#controls-section')
		const artistsSection=document.querySelector('#artists-section')

		window.addEventListener("resize", () =>{
			responsiveControlSongsBg()
		})
		const responsiveControlSongsBg=()=>{

			if(($("body").innerWidth())>834){ 
				this.setState({offcanvasnav:0})
				controlssection.classList.remove("flex-column")
				part1.classList.remove("mb-3")
				part2.classList.remove("mb-3")
			}
			else if((($("body").innerWidth())<834) && ($("body").innerWidth()>556)){
				this.setState({offcanvasnav:1})
				controlssection.classList.remove("flex-column")
				part1.classList.remove("mb-3")
				part2.classList.remove("mb-3")
			}
			else if(($("body").innerWidth()<556)){
				this.setState({offcanvasnav:1})
				controlssection.classList.add("flex-column")
				part1.classList.add("mb-3")
				part2.classList.add("mb-3")
			}
		}

		// when refreshing the page at any width of the page then, which component should render:)
		responsiveControlSongsBg()

		// when clicking on the full screen button we have to manually resize the scrollable area:)
		const fullScreenBtn=document.querySelector('#fullScreenBtn');
		fullScreenBtn.addEventListener('click',()=>{
			responsive()
		})
		const responsive=()=>{
			let handlesongscroll=controlsongsbg.scrollHeight
			let height=document.documentElement.scrollHeight
			if(this.state.expanded && verticalnav){
				verticalnav.style.height=height-(2*handlesongscroll)-33+'px';
				
				// set height to the musiclist, albumsection and artists
				musiclist.style.height=320+'px';
				albumsSection.style.height=320+'px';
				artistsSection.style.height=320+'px';
				this.setState({expanded: false})
			}
			else if(!this.state.expanded && verticalnav){

				// set height to the musiclist, albumsection and artists
				musiclist.style.height=470+'px';
				albumsSection.style.height=470+'px';
				artistsSection.style.height=470+'px';
				verticalnav.style.height=height+34+'px';
				this.setState({expanded: true})
			}
		}
	}

	render(){

		// Calling component whether offcanvas navbar or vertical scrollbar:)
		return <NavbarDecider nav={this.state.offcanvasnav}/>

	}
}

export default App;