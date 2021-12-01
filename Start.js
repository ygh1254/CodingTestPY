import React, { Component } from 'react';

class Start extends Component{
    render(){
        return(
            <header>
                <button onClick={function(e){
                    e.preventDefault();
                    this.props.onChangePage();
                }.bind(this)}>{this.props.sub}</button>
            </header>
        );  
    }
}

export default Start;
