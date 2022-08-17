
import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faComment, faPaperPlane } from '@fortawesome/free-regular-svg-icons'


import Communication from '../pages/Communication';

import '../css/Communication.css';
import '../css/Answer.css';


const Answer = () => {
    const navigate= useNavigate();

    const goMusicTalk=() =>{
        navigate("/MusicTalk");
    };

    return (
        <>
            <Routes>
                <Route path='/MusicTalk' exact element={<Communication/>}></Route>
            </Routes>
        
                <div className ="container show-fl">
                    <div className='row'>
                        <div className='col-lg-12 ,col-md-12, col-sm-12, col-xs-auto'>

                            <div className='MusicTalkDiv2'>
                                <p className='MusicTalkTitle' onClick={goMusicTalk}>Music Talk</p>

                                <div className='SmallBox2'>
                                        <div className='AnswerTitle'>
                                            <div className='AnswerTitle2'>
                                                <h2><strong>Title</strong></h2>
                                            </div>
                    
                                            <div className='AnswerSmallTopText'>
                                                <div>
                                                    <p>contents</p>
                                                </div>

                                                <div className='AnswerIcon'>
                                                    <div>
                                                        <FontAwesomeIcon icon={faHeart} />
                                                             999
                                                    </div>

                                                    <div className='Comment'>
                                                        <FontAwesomeIcon icon={faComment} />
                                                             999
                                                    </div>
                                                </div>
                                            </div>

                                            <hr/>
                                            <div className='AswerRepl'>댓글</div>  
                                        </div>   

                                        <div className='AnswerBar'> 
                                                <div className='AnswerCenter'>
                                                    <input  placeholder='댓글을 입력하세요'></input>
                                                    <button type='button' className='FlyIcon'>
                                                        <FontAwesomeIcon className="Fly" icon={faPaperPlane} />
                                                    </button>
                                                </div>
                                        </div>      
                                </div>  
                            </div>
                        </div>  
                    </div>  
                </div>

        </>
    );
};

export default Answer;