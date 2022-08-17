import React from 'react';
import '../css/Home.css'
import '../css/MyPage.css';

const HomePlayList = () => {
    return (
        <div className='HomeInBox'>
            <div className='PlayListCollection'>
                <div className='One'>
                    <div className='MyPlayList A'></div>
                    <div className='MyPlayList B'></div>
                </div>
                <div className='Two'>
                    <div className='MyPlayList C'></div>
                    <div className='MyPlayList D'></div>
                </div>  
            </div>
            <div className='PlayListCollection'></div>
            <div className='PlayListCollection'></div>
            <div className='PlayListCollection'></div>
        </div>
    );
};

export default HomePlayList;