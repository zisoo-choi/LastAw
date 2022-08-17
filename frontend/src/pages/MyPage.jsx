import React,{ useState }from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import MypageList from './MypageList';
import MyPageModal from '../Modal/MyPageModal';
import '../css/MyPage.css';

const MyPage = () => {
    const[myPageModal, setMyPageModal] = useState(false)

    return (
        <>
        <MyPageModal show={myPageModal} onHide={()=>setMyPageModal(false)}/>

            <div className ="container show-fl">
                <div className='row'>
                    <div className='col-lg-12 ,col-md-12, col-sm-12, col-xs-auto'>
                        <div className='MyPageDiv'>

                            <div className='Profile'>
                            <p className='UserName'>Welcome User !</p>
                                <div className='UserPhoto'></div>
                            </div>

                            <div className='PlayListCreateBtn'>
                                <p className='MyPlayListText'>UserName 님의 PlayList</p>
                                <button type='button' className='WriteBtn2' onClick={()=>setMyPageModal(true)} >
                                    <FontAwesomeIcon icon={faPen} className='WriteIcon'/>
                                </button>
                            </div>

                            <div className='MyPlayListDiv'>
                            
                                <div className='PlayListInBox'>
                                    
                                    <MypageList/>
                                   

                                </div>
                            </div>
                        </div>    
                    </div>
                </div>
            </div>

        </>
    );
};

export default MyPage;