import React, { Component } from 'react';

class Score extends Component{
    render(){
        var score=this.props.score;
        return(
            <div>
                <p>Your Score : {score} / 10</p>
            </div>
        );
    }
}

export default Score;
