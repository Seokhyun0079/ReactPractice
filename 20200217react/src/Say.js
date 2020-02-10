import React, {useState} from 'react';

// const Say = () => {
//     const [message, setMessage] = useState('');
//     const onClickEnter = () => setMessage('おはようございます。');
//     const onClickLeave = () => setMessage('さようなら！');
//     return (
//         <div>
//             <button onClick={onClickEnter}>入場</button>
//             <button onClick={onClickLeave}>退場</button>
//             <h1>{message}</h1>
//         </div>
//     );
// };

const Say = ()=>{
    const [message, setMessage] = useState('');
    const onClickEnter = () => setMessage('お帰り！');
    const onClickLeave = () => setMessage('さよなら！');

    const [color, setColor] = useState('black');
    
    return (
        <div>
            <button onClick={onClickEnter}>入場</button>
            <button onClick={onClickLeave}>退場</button>
            <h1 style={{color}}>{message}</h1>
            <button style= {{color : 'red'}} 
            onClick={() => setColor('red')}>
                赤色</button>
            <button style= {{color : 'green'}}
            onClick={()=> setColor('green')}>
                緑色</button>
            <button style={{color : 'blue'}}
            onClick={()=> setColor('blue')}>
                青色
            </button>
        </div>
    );
}


export default Say;