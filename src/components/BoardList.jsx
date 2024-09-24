// import React, { useRef, useState } from 'react';
import datas from '../data/data'
import { Link, useNavigate } from 'react-router-dom';

const BoardList = () => {

    const navigate = useNavigate();

    const navigateToSubmit = () => {
        navigate("/submit");
    };

    return (
        <div className='boardList'>
            <h2>Board List page</h2>
            <div className='tableArea'>
                    <table>
                        <thead>
                            <tr>
                                <td>id</td>
                                <td>제목</td>
                                <td>작성자</td>
                                <td>작성일자</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                datas.map(d => (
                                    <tr key={d.id}>
                                        <td>{d.id}</td>
                                        <td>
                                            <Link to={`/detail/${d.id}`}>{d.title}</Link>
                                        </td>
                                        <td>{d.writer}</td>
                                        <td>{d.reg_date.substring(0,10)}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                {/* <a href="/submit"> */}
                    <button onClick={navigateToSubmit}>게시글 작성</button>
                {/* </a> */}
            </div>
        </div>
    );
};

export default BoardList;