import React from 'react';
import qs from 'qs';
const About = ({location}) => {
    const query = qs.parse(location.search,{
        ignoreQueryPrefix : true
    });

    const showDetail = query.detail === 'true';

    return (
        <div>
            <h1>紹介</h1>
            <p>このプロジェクトはリアクター基礎を実習してみる例題プロジェクトです。</p>
            {showDetail && <p>detail 値をtrueで設定しましたね。</p>}
        </div>
    );
}

export default About;
