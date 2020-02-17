import React from 'react';
import { Link, Route } from "react-router-dom"
import Profile from "./Profile"

const Profiles = () =>{
    return (
        <div>
            <h3>使用者目録:</h3>
            <ul>
                <li>
                    {/* <NavLink to="/profile/verlopert" active>verlopert</NavLink> */}
                </li>
                <li>
                    {/* <NavLink to="/profile/gildong">gildong</NavLink> */}
                </li>
            </ul>
            <Route
            path="/profiles"
            exactrender={()=><div>使用者を選択してください</div>}/>
            <Route path={"/profiles/:username"} component={Profile}/>
        </div>
    )
}

export default Profiles;