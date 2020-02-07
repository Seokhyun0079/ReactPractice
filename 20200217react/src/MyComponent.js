import React from 'react';
import PropTypes from 'prop-types';

const MyComponent = ({name, favoriteNumber ,children}) => {
    return <div>hello, My Name is {name}<br/>
    clidren is {children}<br/>
    my favorite Number is {favoriteNumber}
    </div>;
}

MyComponent.defaultProps = {
    name : '基本名前'
};


MyComponent.propTypes = {
    name : PropTypes.string,
    favoriteNumber : PropTypes.number.isRequired
};

export default MyComponent;