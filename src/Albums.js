import React, { Component } from 'react'

/*Importing images*/
import songone from './songone.jpg'
import songtwo from './songtwo.jpg'
import songthree from './songthree.jpeg'
import songfour from './songfour.jpg'
import songfive from './songfive.jpg'
import songsix from './songsix.jpg'
import songseven from './songseven.jpg'
import songeight from './songeight.jpeg'
import songeighteen from './songeighteen.jpg'
import songsixteen from './songsixteen.jpg'

export class Albums extends Component {
    render() {
        return (
            <div id='albums-section' className='ms-3'>
                <div className='d-flex flex-column mt-1'>
                    <h4 className='text-warning pb-2'>A</h4>
                    <div className="card">
                        <img src={songthree} className="img-fluid" alt="Card title"/>
                        <div className="cardbody px-2 py-2">
                            <h6 className="card-text text-light">ABCD- (2019)</h6>
                            <p className="card-text text-light">Allu sirish</p>
                        </div>
                    </div>
                </div>
                <div className='d-flex flex-column mt-4'>
                    <h4 className='text-warning pb-2'>B</h4>
                    <div className="card">
                        <img src={songone} className="img-fluid" alt="Card title"/>
                        <div className="cardbody px-2 py-2">
                            <h6 className="card-text text-light">Brahmastra- (2022)</h6>
                            <p className="card-text text-light">Amitabh bachchan</p>
                        </div>
                    </div>
                </div>
                <div className='d-flex flex-column mt-4'>
                    <h4 className='text-warning pb-2'>E</h4>
                    <div className="card">
                        <img src={songsix} className="img-fluid" alt="Card title"/>
                        <div className="cardbody px-2 py-2">
                            <h6 className="card-text text-light">Endukante Premanta</h6>
                            <p className="card-text text-light">Ram pothineni</p>
                        </div>
                    </div>
                </div>
                <div className='d-flex flex-column mt-4'>
                    <h4 className='text-warning pb-2'>J</h4>
                    <div className="card">
                        <img src={songeighteen} className="img-fluid" alt="Card title"/>
                        <div className="cardbody px-2 py-2">
                            <h6 className="card-text text-light">Jailer- (2023)</h6>
                            <p className="card-text text-light">Rajini Kanth</p>
                        </div>
                    </div>
                </div>
                <div className='d-flex flex-column mt-4'>
                    <h4 className='text-warning'>N</h4>
                    <div className='d-flex flex-row'>
                        <div className='mt-3'>
                            <div className="card">
                                <img src={songseven} className="img-fluid" alt="Card title"/>
                                <div className="cardbody px-2 py-2">
                                    <h6 className="card-text text-light">Nannaku Prematho</h6>
                                    <p className="card-text text-light">Jr N.T.R</p>
                                </div>
                            </div>
                        </div>
                        <div className='mt-3 ms-3'>
                            <div className="card">
                                <img src={songsix} className="img-fluid" alt="Card title"/>
                                <div className="cardbody px-2 py-2">
                                    <h6 className="card-text text-light">Ndukante Premanta</h6>
                                    <p className="card-text text-light">Ram pothineni</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='d-flex flex-column mt-4'>
                    <h4 className='text-warning'>R</h4>
                    <div className='d-flex flex-row'>
                        <div className='mt-3'>
                            <div className="card">
                                <img src={songeight} className="img-fluid" alt="Card title"/>
                                <div className="cardbody px-2 py-2">
                                    <h6 className="card-text text-light">Raahu- (2019)</h6>
                                    <p className="card-text text-light">Amitabh bachchan</p>
                                </div>
                            </div>
                        </div>
                        <div className='mt-3 ms-3'>
                            <div className="card">
                                <img src={songsixteen} className="img-fluid" alt="Card title"/>
                                <div className="cardbody px-2 py-2">
                                    <h6 className="card-text text-light">Raja Rani</h6>
                                    <p className="card-text text-light">Amitabh bachchan</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='d-flex flex-column mt-4'>
                    <h4 className='text-warning pb-2'>T</h4>
                    <div className="card">
                        <img src={songtwo} className="img-fluid" alt="Card title"/>
                        <div className="cardbody px-2 py-2">
                            <h6 className="card-text text-light">Taxiwala- (2018)</h6>
                            <p className="card-text text-light">vijay devarakonda</p>
                        </div>
                    </div>
                </div>
                <div className='d-flex flex-column mt-4 mb-3'>
                    <h4 className='text-warning'>V</h4>
                    <div className='d-flex flex-row'>
                        <div className='mt-3'>
                            <div className="card">
                                <img src={songfour} className="img-fluid" alt="Card title"/>
                                <div className="cardbody px-2 py-2">
                                    <h6 className="card-text text-light">Viswasam- (2019)</h6>
                                    <p className="card-text text-light">Ajith Kumar</p>
                                </div>
                            </div>
                        </div>
                        <div className='mt-3 ms-3'>
                            <div className="card">
                                <img src={songfive} className="img-fluid" alt="Card title"/>
                                <div className="cardbody px-2 py-2">
                                    <h6 className="card-text text-light">Vivekam- (2017)</h6>
                                    <p className="card-text text-light">Ajith Kumar</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Albums