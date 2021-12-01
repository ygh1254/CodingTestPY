import React, { Component } from 'react';

class Score extends Component{
    render(){
        return(
            <div>
                <p>Your Score : {this.props.score} / {this.props.max}</p>
            </div>
        );
    }
}

export default Score;
