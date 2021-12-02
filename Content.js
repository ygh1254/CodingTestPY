import React, { Component } from 'react';

class Content extends Component{
    render(){
        var data=this.props.data;
        var sci=this.props.sci;
        var answers=this.props.answers;
        var temp_Answer=null;
        var keep=true;

        return(
            <article>
                <h2>{this.props.title}</h2>
                <div className="answer">
                    <div className="btn">
                        <ul>
                            <li>
                                <button onClick={function(e){
                                temp_Answer=1
                                while(keep){
                                if(sci===10){
                                    this.props.onChangePage2();
                                    break;
                                }
                                else {
                                    this.props.onChangePage(data[sci].id);
                                }
                                if(Number(temp_Answer) === Number(answers[sci].answer)){
                                    this.props.addScore();
                                }
                                keep=false;
                                }}.bind(this)}>{this.props.desc1}</button>
                            </li>
                            <br/>
                            <li>
                                <button onClick={function(e){
                                temp_Answer=2
                                while(keep){
                                if(sci===10){
                                    this.props.onChangePage2();
                                    break;
                                }
                                else {
                                    this.props.onChangePage(data[sci].id);
                                }
                                if(Number(temp_Answer) === Number(answers[sci].answer)){
                                    this.props.addScore();
                                }
                                keep=false;
                                }}.bind(this)}>{this.props.desc2}</button>
                            </li>
                            <br/>
                            <li>
                                <button onClick={function(e){
                                temp_Answer=3
                                while(keep){
                                if(sci===10){
                                    this.props.onChangePage2();
                                    break;
                                }
                                else {
                                    this.props.onChangePage(data[sci].id);
                                }
                                if(Number(temp_Answer) === Number(answers[sci].answer)){
                                    this.props.addScore();
                                }
                                keep=false;
                                }}.bind(this)}>{this.props.desc3}</button>
                            </li>
                            <br/>
                            <li>
                                <button onClick={function(e){
                                temp_Answer=4
                                while(keep){
                                if(sci===10){
                                    this.props.onChangePage2();
                                    break;
                                }
                                else {
                                    this.props.onChangePage(data[sci].id);
                                }
                                if(Number(temp_Answer) === Number(answers[sci].answer)){
                                    this.props.addScore();
                                }
                                keep=false;
                                }}.bind(this)}>{this.props.desc4}</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </article>
        );
    }
}

export default Content;
