import React from 'react';
import { useRef, useState } from 'react';
import datas from '../data/data';

const BoardSubmit = () => {
    
    const nextId = useRef(8);
    
    const [inputs, setInputs] = useState({
        title:'',
        contents:'',
        writer:''
    })
    
    const { title, contents, writer } = inputs;
    
    const onChange = (e) => {
        const{ name, value } = e.target;

        setInputs({
            ...inputs,
            [name]: value
        })
        console.log(inputs);
    }
    
    const onCreate = () => {
        const data = {
         id: nextId.current,
         title: title,
         contents: contents,
         writer: writer
        };
        console.log(data);
        // setDatas(data.concat(datas));
        datas.unshift(data);
        nextId.current += 1;

        // window.location.href='/';
        console.log(datas);
    }

    
    return (
        <div className='boardSubmit'>
            <div className='submitArea'>
                <h3>게시글 등록</h3>
                <input
                    type="text"
                    placeholder='제목'
                    name='title'
                    className='title'
                    onChange={onChange}
                    value={title}
                /><br />
                <input
                    type="text"
                    placeholder='작성자'
                    name='writer'
                    className='writer'
                    onChange={onChange}
                    value={writer}
                /><br />
                <input
                    type="text"
                    placeholder='내용을 입력하세요'
                    name='contents'
                    className='contents'
                    onChange={onChange}
                    value={contents}
                /><br />
                    <button onClick={onCreate}>등록</button>
                <a href="/">
                    <button>목록</button>
                </a>
                
            </div>
        </div>
    );
};

export default BoardSubmit;