import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/PlayList.css';

import PageBtn from '../pages/PageBtn'
import PlayListRank from './PlayListRank';
import PlayListModal from '../Modal/PlayListModal';
import Modal from '../Modal/Modal';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faFolder } from '@fortawesome/free-solid-svg-icons';

const PlayList = ({APIurl}) => {
    const[playListModal, setPlayListModal] = useState(false);
    const[modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    };

const [page, setPage] = useState(1);
const [pages, setPages] = useState([]);
const [postList, setPostList] = useState([]);

useEffect(() => {
    axios.get(+'/list/?page=1&page_size=10').then(response => {
      console.log(response.data);
      const lastPage = Math.ceil(response.data.count / 10);
      const tempPages = [];
      for (let i = 1; i <= lastPage; i++) {
        tempPages.push(i);
      }
      setPages(tempPages);
      setPostList(response.data.results);
    })
  }, [page]);

    return (
        <>
        <PlayListModal show={playListModal} onHide={()=>setPlayListModal(false)}/>
            <div className ="container show-fl">
                <div className='row'>
                    <div className='col-lg-12 ,col-md-12, col-sm-12, col-xs-auto'>

                        <div className='PlayListDiv'>
                            <div className='PlayListFullView'>
                                <div className='PlayListHeaderBox'>
                                    <div className='PlyTitle'>User들의 PlayList !</div>

                                    <div className='PlyBtns'>
                                        <>
                                            <button type='button' className='WriteBtn3' onClick={openModal}>
                                                <FontAwesomeIcon icon={faFolder}
                                                    className='InterLock'/>
                                            </button>
                                            <Modal open={modalOpen} close={closeModal} header="SNS InterWorking 🚀" >
                                                <div className='SnsModal'>
                                                    <button type='button' className='InterLockBtn1'>LinkedIn</button>
                                                    <button type='button' className='InterLockBtn2'>Twitter</button>
                                                    <button type='button'  className='InterLockBtn3'>FaceBook</button>
                                                </div>
                                            </Modal>
                                        </>

                                            <button type='button' className='WriteBtn3' onClick={()=>setPlayListModal(true)}>
                                                <FontAwesomeIcon icon={faPen}
                                                    className='WriteIcon'/>
                                            </button>
                                    </div>

                                </div>
                                <div className='PlayListMainBox'>
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

                             <PlayListRank/>
                             <PageBtn page={page} setPage={setPage} pages={pages} setPages={setPages}/>

                        </div>
                    </div>
                </div>
            </div>

            </div>
            </div>

        </>
    );
};

export default PlayList;