import React from 'react';
import '../css/PlayList.css';

import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const PageBtn = ({page ,setPage, pages}) => {
    return (
        <div className='UserisPlayList'>        
            <div className='PlyBtn'>
                <div className='PagingNumberDiv' onClick={() => {
                    if (page > 1) {
                        setPage(page - 1)
                    }
                }}>

                <button type='button' className='PreviousPage'>
                    <FontAwesomeIcon icon={faArrowLeft} />
                </button>
                                            
                {pages.map(pageNum => (
                    <div className='PageNumber' key={pageNum} onClick={() => setPage(pageNum)}>{pageNum}</div>
                ))}              
                                            
                <button type='button' className='NextPage' onClick={() => {
                        if (pages.length > page) {
                            setPage(page + 1)
                        }
                    }}>
                <FontAwesomeIcon icon={faArrowRight} />
                </button>

                </div>            
            </div>
        </div>  
    );
};

export default PageBtn;