import React, { useState } from 'react';
import { Routes, Route, } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import MusicTalkModal from '../Modal/MusicTalkModal';
import MusicTalkContents from './MusicTalkContents';
import '../css/Communication.css';
import Answer from './Answer';


function Communication() {
    const[musictalkModal, setMusictalkModal] = useState(false)

    return (
        <>
            <Routes>
                <Route path='/Answer' exact element={<Answer/>}></Route>
            </Routes>

            <MusicTalkModal show={musictalkModal} onHide={()=>setMusictalkModal(false)}/>

                <div className ="container show-fl">
                    <div className='row'>
                        <div className='col-lg-12 ,col-md-12, col-sm-12, col-xs-auto'>

                            <div className='MusicTalkDiv'>
                                <p className='MusicTalkTitle'>Music Talk</p>
                                <div className='MusicTalkTextAlign'>
                                    <div className='SmallBox'>
                                        <MusicTalkContents/>
                                    </div>

                                    <button type='button' className='WriteBtn' onClick={()=>setMusictalkModal(true)}>
                                        <FontAwesomeIcon icon={faPen} className='WriteIcon'/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

        </>
    );
}

export default Communication;