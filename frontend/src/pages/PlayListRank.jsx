import React from 'react';
import '../css/PlayList.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faHeart,
    faPlay,
    faPlus,
    faDownload,
    faVideo,
} from '@fortawesome/free-solid-svg-icons';

const PlayListRank = () => {
    return (
        <div className='UserisPlayList'>
            <div className='RankBox'>
                <div className='MusicRank'>
                    <input type='checkbox'></input>
                    <div className='RankingNum OneTitle'>1</div>
                    <div className='PhotoAndTitle'>
                        <div className='PhotoDiv'></div>
                            <div className='TopTenTitle'>
                                <div className ='MusicMainNameRank'>Music Title</div>
                                <div className ='MusicSubNameRank'>Music Sub Title</div>    
                        </div>
                    </div>
                        <div className='RankAlbumName'>홍길동 1집</div>
                        <button type='button' className='PlyBtns'>
                            <FontAwesomeIcon className='IconMargin' icon={faHeart} />
                        </button>

                        <button type='button' className='PlyBtns'>
                            <FontAwesomeIcon className='IconMargin' icon={faPlay} />
                        </button>

                        <button type='button' className='PlyBtns'>
                            <FontAwesomeIcon className='IconMargin' icon={faPlus} />
                        </button>

                        <button type='button' className='PlyBtns'>
                            <FontAwesomeIcon className='IconMargin' icon={faDownload} />
                        </button>

                        <button type='button' className='PlyBtns'>
                            <FontAwesomeIcon className='IconMargin' icon={faVideo} />
                        </button>
                </div>
            </div>
        </div>
    );
};

export default PlayListRank;