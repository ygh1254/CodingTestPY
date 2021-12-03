import React, { Component } from 'react';

class Start extends Component{
    render(){
        var sci=this.props.sci
        var data=this.props.data
        return(
            <header>
                <div onClick={function(e){
                    e.preventDefault();
                    this.props.onChangePage(0);
                    console.log(data[0])
                }.bind(this)}>
                    <button>{this.props.sub}</button>
                </div>
            </header>
        );  
    }
}

export default Start;
