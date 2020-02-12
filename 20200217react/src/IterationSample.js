import React, { useState } from 'react';

const IterationSample = () => {
    const [names, setNames] = useState([
        { id: 1, text: 'snowman' },
        { id: 2, text: 'ice' },
        { id: 3, text: 'snow' },
        { id: 4, text: 'wind' }
    ]);

    const [inputText, setInputText] = useState('');
    const [nextId, setNextId] = useState(5);

    const onChange = e => setInputText(e.target.value);

    const onClick = () => {
        const nextNames = names.concat({
            id : nextId,
            text : inputText
        });
        setNextId(nextId + 1);
        setNames(nextNames);
        setInputText('');
    }

    const onRemove = id =>{
        const nextNames = names.filter(name => name.id !== id);
        setNames(nextNames);
    };

    const nameList = names.map(name => <li onDoubleClick={()=> onRemove(name.id)} key={name.id}>{name.text}</li>);
    return (
        <>
            <input value ={inputText} onChange = {onChange}/>
            <button onClick = {onClick}>add</button>
            <ul>{nameList}</ul>
        </>
    );
}

export default IterationSample;