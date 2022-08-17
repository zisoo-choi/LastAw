import React from 'react';
import '../css/Home.css'
import '../css/MyPage.css';

import { FullView } from '../styledComponent';

import HomeRank from './HomeRank';
import HomePlayList from './HomePlayList';

const Home = () => {
    const img={
        height: "40vh",  
        width: "100%",
    }
    const imgs={
        height: "25vh",  
        width: "100%",
    }

    return (
        <>
            <div className ="container show-fl">
                <div className='row'>
                    <div className='col-lg-12 ,col-md-12, col-sm-12, col-xs-auto'>
                        <HomePlayList/>

                        <FullView>
                            <div className='HeaderTitleTopTen'>TOP10</div>
                                <div className='RankTitle'>
                                <input type='checkbox' className='RankFirstCheckBox'></input>
                                <div className='Ranking'>순위</div>
                                <div className='SongTitle'>곡정보</div>
                                <div className='Album'>앨범</div>
                                <div className='Like'>좋아요</div>
                                <div className='Litening'>듣기</div>
                                <div className='Add'>담기</div>
                                <div className='Download'>다운</div>
                                <div className='MusicVideo'>뮤비</div>                     
                            </div>
                            <HomeRank/>
                        </FullView>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;