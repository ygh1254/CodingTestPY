import React, { Component } from 'react';

class Warning extends Component{
    render(){
        return(
            <article>
                <h1>⚠Caution⚠</h1>
                <div className="Ctnt">
                    <p>You can't modify your answer</p>
                    <p>There are 10 questions</p>
                </div>
            </article>
        );
    }
}

export default Warning;
