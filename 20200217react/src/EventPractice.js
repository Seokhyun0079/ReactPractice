// import React, {Component} from 'react';
import React, {useState} from 'react';

// class EvnetPractice extends Component{
//     state = {
//         username : '',
//         message : ''
//     }

//     constructor(props){
//         super(props);
//         this.handleChange = this.handleChange.bind(this);
//         this.handleClick = this.handleClick.bind(this);
//     }
    // handleChange(e){
    //     this.setState({
    //         message : e.target.value
    //     });
    // }

    // handleClick(){
    //     alert(this.state.message);
    //     this.setState({
    //         message : ''
    //     });
    // }

//     handleChange = (e) =>{
//         this.setState({
//             [e.target.name] : e.target.value
//         });
//     }

//     handleClick = () => {
//         alert(this.state.username + " : " + this.state.message);
//         this.setState({
//             message : '',
//             username : ''
//         });
//     }
//     handleKeyPress = (e) => {
//         if(e.key === 'Enter'){
//             this.handleClick();
//         }
//     }

//     render(){
//         return (
//             <div>
//                 <h1>イベント練習</h1>
//                 <input type="text"
//                 name="username"
//                 placeholder="ユーザー名。"
//                 value = { this.state.username}
//                 onChange={
//                    this.handleChange
//                 }/>
//                 <input type="text"
//                 name="message"
//                 placeholder="何でも入力してください。"
//                 value = { this.state.message}
//                 onChange={
//                    this.handleChange
//                 }
//                 onKeyPress = {
//                     this.handleKeyPress
//                 }
//                 />
//                 <button onClick={
//                     this.handleClick
//                 }>確認</button>
//             </div>
//         )
//     }
// }

const EventPractice = () => {
    const [form, setForm] = useState({
        username : '',
        message : ''
    });

    const {username, message} = form;

    const onChange = e =>{
        const nextForm = {
            ...form,
            [e.target.name] : e.target.value
        };
        setForm(nextForm);
    }
    
    // const [username, setUsername] = useState('');
    // const [message, setMessage] = useState('');
    // const onChangeUsername = e => setUsername(e.target.value);
    // const onChangeMessage = e=> setMessage(e.target.value);

    const onClick = () => {
        alert(username + ' : '+ message);
        setForm({
            username : '',
            message : ''
        });
        // setUsername('');
        // setMessage('');
    };

    const onKeyPress = e => {
        if(e.key === 'Enter'){
            onClick();
        }
    }

    return (<div>
        <h1>イベント練習</h1>
        <input
        type="text"
        name="username"
        placeholder="使用者名"
        value={username}
        // onChange={onChangeUsername}
        onChange = {onChange}
        />
        <input
        type ="text"
        name="message"
        placeholder="何でも入力してください"
        value={message}
        // onChange={onChangeMessage}
        onChange = {onChange}
        onKeyPress={onKeyPress}
        />
        <button onClick={onClick}>確認</button>
    </div>);
}

export default EventPractice;