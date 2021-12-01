import React, { Component } from 'react';

class Content extends Component{
    render(){
        var data = this.props.data;
        var i = 0;
        return(
            <article>
                <h2>{this.props.title}</h2>
                <div className="answer"
                onClick={function(e){
                    i = i + 1;
                    e.preventDefault();
                    this.props.onChangePage(data[i].id);
                }.bind(this)}>
                    <div className="btn">
                        <ul>
                            <li>{this.props.desc1}</li>
                            <br/>
                            <li>{this.props.desc2}</li>
                            <br/>
                            <li>{this.props.desc3}</li>
                            <br/>
                            <li>{this.props.desc4}</li>
                        </ul>
                    </div>
                </div>
            </article>
        );
    }
}

export default Content;
