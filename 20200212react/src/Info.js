// import React, { useState, useEffect } from 'react';

import React, {useReducer} from 'react';

function reducer(state, action){
    return {
        ...state,
        [action.name] : action.value
    };
}

const Info = () => {
    // const [name, setName] = useState('');
    // const [nickname, setNickname] = useState('');
    const [state, dispatch] = useReducer(reducer, {
        name : '',
        nickname :''
    });

    const {name, nickname} = state;

    const onChange = e=>{
        dispatch(e.target);
    }

    // const onChangeName = e => {
    //     setName(e.target.value);
    // }

    // const onChangeNickname = e => {
    //     setNickname(e.target.value);
    // }

    // useEffect(() => {
    //     // console.log('レンダリングが完了しました。');
    //     // console.log({name, nickname});
    //     // console.log('マウントされる時のみ実行されます'); 
    //     //     console.log(name);
    //     // }, [name]);
    //     console.log('effect');
    //     console.log(name);
    //     return () => {
    //         console.log('cleanup');
    //         console.log(name);
    //     };
    // }, []);

    return (
        <div>
            <div>
                {/* <input value={name} onChange={onChange} /> */}
                {/* <input value={nickname} onChange={onChange} /> */}
                <input name="name" onChange={onChange} />
                <input name="nickname" onChange={onChange} />
            </div>
            <div>
                <div>
                    <b>名前：</b>{name}
                </div>
                <div>
                    <b>ニックネーム：</b>{nickname}
                </div>
            </div>
        </div>
    );
}

export default Info;