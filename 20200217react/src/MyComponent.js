import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component{
    static defaultProps = {
        name : 'default name'
    }

    static propTypes = {
        name : PropTypes.string,
        favoriteNumber : PropTypes.number.isRequired
    };

    render(){
        const {name, favoriteNumber, children}
        = this.props;
        return (<div>
            hello, my name is {name}<br/>
            children's value is {children}
            My favorite number is {favoriteNumber}
        </div>);
    }
}

export default MyComponent;