import React from 'react';
import { useParams } from 'react-router-dom';
import datas from '../data/data'
import './board.css';


const BoardDetail = () => {

    const { id } = useParams();

    const navigate = useNavigate();

    const navigateToUpdate = () => {
        navigate("/Update");
    };
    // 특정 조건을 만족하는 요소의 index를 찾는 함수 findIndex()
    // boardList.findIndex(b=>b.id === Number(id))
    // params는 String 으로 값을 가져옴 ===> 따라서 Number로 형변환
    // 굳이 findIndex를 사용하는 이유 id의 값과 index(boardList의 index)가 맞지 않기 때문

    const idx = datas.findIndex(d=>d.id === Number(id));

    return (
        <div className='boardDetail'>
            <table className='table'>
                <thead>
                    <tr>
                        <td>
                            <h3>{datas[idx].title}</h3>
                            <span>
                                {datas[idx].writer}
                            </span>
                        </td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <h3>{datas[idx].contents}</h3>
                        </td>
                    </tr>
                </tbody>
            </table>
            <a href="/">
                <button>목록</button>
            </a>
            <button onClick={navigateToUpdate}>게시글 작성</button>
        </div>
    );
};

export default BoardDetail;