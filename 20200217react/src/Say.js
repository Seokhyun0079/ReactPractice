import React, {useState} from 'react';

const Say = () => {
    const [message, setMessage] = useState('');
    const onClickEnter = () => setMessage('おはようございます。');
    const onClickLeave = () => setMessage('さようなら！');
    return (
        <div>
            <button onClick={onClickEnter}>入場</button>
            <button onClick={onClickLeave}>退場</button>
            <h1>{message}</h1>
        </div>
    );
};

export default Say;