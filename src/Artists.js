import React, { Component } from 'react'

/*Importing image*/
import defaulticon from './defaulticon.jpeg'

class Artists extends Component {
    render() {
        return (
            <div id='artists-section' className='ms-3'>
                <div className='d-flex flex-column mt-2 mb-3'>
                    <h4 className='text-warning'>A</h4>
                    <div className='d-flex flex-row flex-wrap'>
                        <div className='mt-3 me-3'>
                            <div className="card">
                                <img src={defaulticon} className="img-fluid rounded-circle" alt="Card title"/>
                                <div className="cardbody px-2 py-2">
                                    <h6 className="card-text text-light">Ajith Kumar</h6>
                                    <p className="card-text text-light">Viswasam- (2019)</p>
                                </div>
                            </div>
                        </div>
                        <div className='mt-3 me-3'>
                            <div className="card">
                                <img src={defaulticon} className="img-fluid rounded-circle" alt="Card title"/>
                                <div className="cardbody px-2 py-2">
                                    <h6 className="card-text text-light">Ajith Kumar</h6>
                                    <p className="card-text text-light">Vivekam- (2017)</p>
                                </div>
                            </div>
                        </div>
                        <div className='mt-3 me-3'>
                            <div className="card">
                                <img src={defaulticon} className="img-fluid rounded-circle" alt="Card title"/>
                                <div className="cardbody px-2 py-2">
                                    <h6 className="card-text text-light">Allu sirish</h6>
                                    <p className="card-text text-light">ABCD- (2019)</p>
                                </div>
                            </div>
                        </div>
                        <div className='mt-3 me-3'>
                            <div className="card">
                                <img src={defaulticon} className="img-fluid rounded-circle" alt="Card title"/>
                                <div className="cardbody px-2 py-2">
                                    <h6 className="card-text text-light">Amitabh bachchan</h6>
                                    <p className="card-text text-light">Brahmastra- (2022)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='d-flex flex-column mt-4'>
                    <h4 className='text-warning pb-2'>N</h4>
                    <div className="card">
                        <img src={defaulticon} className="img-fluid rounded-circle" alt="Card title"/>
                        <div className="cardbody px-2 py-2">
                            <h6 className="card-text text-light">Jr N.T.R</h6>
                            <p className="card-text text-light">Nannaku Prematho</p>
                        </div>
                    </div>
                </div>
                <div className='d-flex flex-column mt-4 mb-3'>
                    <h4 className='text-warning'>R</h4>
                    <div className='d-flex flex-row'>
                        <div className='mt-3 me-3'>
                            <div className="card">
                                <img src={defaulticon} className="img-fluid rounded-circle" alt="Card title"/>
                                <div className="cardbody px-2 py-2">
                                    <h6 className="card-text text-light">Ram pothineni</h6>
                                    <p className="card-text text-light">Endukante Premanta</p>
                                </div>
                            </div>
                        </div>
                        <div className='mt-3 me-3'>
                            <div className="card">
                                <img src={defaulticon} className="img-fluid rounded-circle" alt="Card title"/>
                                <div className="cardbody px-2 py-2">
                                    <h6 className="card-text text-light">Rajini Kanth</h6>
                                    <p className="card-text text-light">Jailer- (2023)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='d-flex flex-column mt-4 mb-3'>
                    <h4 className='text-warning pb-2'>V</h4>
                    <div className="card">
                        <img src={defaulticon} className="img-fluid rounded-circle" alt="Card title"/>
                        <div className="cardbody px-2 py-2">
                            <h6 className="card-text text-light">Vijay devarakonda</h6>
                            <p className="card-text text-light">Taxiwala- (2018)</p>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Artists