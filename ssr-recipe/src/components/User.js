import React from 'react';

const User = ({user}) => {
    const {email, name, username} = user;
    console.log("User.js User Rander!")
    return(
        <div>
            <h1>유저 정보</h1>
            <h1>
                {username} ({name})
            </h1>
            <p>
                <b>e-mail</b>{email}
            </p>
        </div>
    )
}

export default User;