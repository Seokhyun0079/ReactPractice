import React, {  Component } from "react";

class HistorySample extends Component{
    handleGoBack = () => {
        this.props.history.goBack();
    }
    handleGoHome = () =>{
        this.props.history.push('/');
    }

    componentDidMount(){
        this.unlock = this.props.history.block('really exit this page?');
    }

    componentWillUnmount(){
        if(this.unblock){
            this.unblock();
        }
    }
    render(){
        return (
            <div>
                <button onClick={this.handleGoBack}>
                    prev
                </button>
                <button onClick= { this.handleGoHome}>
                    Home
                </button>
            </div>
        );
    }
}

export default HistorySample;