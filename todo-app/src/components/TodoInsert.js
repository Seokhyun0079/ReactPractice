import React from 'react';
import {MdAdd} from 'react-icons/md';
import './TodoInsert.scss';

const TodoInsert = () =>{
    return (
        <form className="TodoInsert">
            <input placeholder="やることを入力してください"/>
            <button type = "submit">
                <MdAdd/>
            </button>
        </form>
    );
}

export default TodoInsert;