import React, { Component } from 'react';

class Start extends Component{
    render(){
        return(
            <header>
                <div onClick={function(e){
                    e.preventDefault();
                    this.props.onChangePage();
                }.bind(this)}>
                    <button>{this.props.sub}</button>
                </div>
            </header>
        );  
    }
}

export default Start;
