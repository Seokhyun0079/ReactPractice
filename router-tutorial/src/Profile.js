import React from 'react';
import WithRouterSample from './WithRouterSample';
import { withRouter } from 'react-router-dom';

const data ={
    velopert :{
        name : 'キムミｙンジュン',
        description : 'リアクト好きな開発者'
    },
    gildong:{
        name: 'ホンギルドン',
        description :'古典小説ホンギルドン'
    }
};

const Profile = ({match}) => {
    const {username} = match.params;
    const profile = data[username];
    if(!profile){
        return <div>存在しない使用者です</div>;
    }
    return (
        <div>
            <h3>
                {username}({profile.name})
            </h3>
            <p>{profile.description}</p>
            <WithRouterSample/>
        </div>
    );
}

export default withRouter(Profile);