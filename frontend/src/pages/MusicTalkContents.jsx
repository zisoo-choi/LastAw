import React from 'react';
import { useNavigate } from 'react-router-dom';

import '../css/Communication.css';
import Answer from './Answer';
const MusicTalkContents = () => {
    
    const navigate= useNavigate();
    const goAnswer=() =>{
        navigate("/Answer");
    };
    
    return (
        <div className='QuestionBox'>
             <div className='UserImg'></div>
             <div className='QuestionTalk' onClick={goAnswer}>플레이리스트 추천해주세요 !!</div>
        </div>
    );
};
export default MusicTalkContents;