import React from 'react';
import { useParams, useState } from 'react';

const BoardUpdate = () => {

    const { id } = useParams();

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

    const onUpdate = () => {
        const data = {
         id: id,
         title: title,
         contents: contents,
         writer: writer
        };
        console.log(data);
        // setDatas(data.concat(datas));

        // window.location.href='/';
        console.log(datas);
    }



    return (
        <div className='boardUpdate'>
            <div className='submitArea'>
                <h3>게시글 수정</h3>
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
                    <button onClick={onUpdate}>수정</button>
                <a href="/">
                    <button>목록</button>
                </a>
                
            </div>
        </div>
    );
};

export default BoardUpdate;