import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class square extends React.Component{
    render(){
        return(
            <button class name = "square">
                {this.props.value}
            </button>
        );
    }
}

class board extends React.Component{
    renderSquare(i){
        return <square/>;
    }
}