import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component{
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

MyComponent.defaultProps = {
    name : '基本名前'
};


MyComponent.propTypes = {
    name : PropTypes.string,
    favoriteNumber : PropTypes.number.isRequired
};

export default MyComponent;