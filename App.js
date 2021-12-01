import React, { Component } from 'react';
import Header from './components/Header';
import Start from './components/Start';
import Content from "./components/Content";
import Score from "./components/Score";
import Warning from "./components/Warning";
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      mode:'welcome',
      selected_content_id:1,
      subject:{title:'Quiz', sub:'START'},
      welcome:{title:null, desc1:null, desc2:null, desc3:null, desc4:null},
      contents:[
        {id:1, title:'Q1 : What is the name of WSP2 professor?', desc1:'1. Prof. 이예원', desc2:'2. Prof. 안종창', desc3:'3. Prof. 오현옥', desc4:'4. Prof. 이욱'},
        {id:2, title:'Q2 : Which is not 교양필수 subject for the first grade?', desc1:'1. 말과글', desc2:'2. 과학기술의철학적이해',desc3:'3. 정보시스템개론',desc4:'4. 공학도를위한창의적컴퓨팅'},
        {id:3, title:'Q3 : Which is 전공필수 subject among the following subjects?', desc1:'1. 컴퓨터구조1', desc2:'2. 확률및통계',desc3:'3. 오퍼레이팅시스템',desc4:'4. 웹시스템프로그래밍1'},
        {id:4, title:'Q4 : Who is the principle of our department of Information system?', desc1:'1. Prof. 원영준', desc2:'2. Prof. 이욱',desc3:'3. Prof. 이예원',desc4:'4. Prof. 오현옥'},
        {id:5, title:'Q5 : Which floor is the student council room of our department?', desc1:'1. 1st floor', desc2:'2. 2nd floor',desc3:'3. 3rd floor',desc4:'4. 4th floor'},
        {id:6, title:'Q6 : What is the name of our Hanyang university’s mascot?', desc1:'1. 한양사자', desc2:'2. 하이리온',desc3:'3. 하이사자',desc4:'4. 라이온'},
        {id:7, title:'Q7 : What is the flower that represents our university?', desc1:'1. 무궁화', desc2:'2. 코스모스',desc3:'3. 해바라기',desc4:'4. 개나리'},
        {id:8, title:'Q8 : What is the bird that represents our university?', desc1:'1. 매', desc2:'2. 공작새',desc3:'3. 비둘기',desc4:'4. 까마귀'},
        {id:9, title:'Q9 : ', desc1:'1. ', desc2:'2. ',desc3:'3. ',desc4:'4. '},
        {id:10, title:'Q10 : ', desc1:'1. ', desc2:'2. ',desc3:'3. ',desc4:'4. '}
      ],
      score:0,
      max : 0
    }
  }

  render() {
    var _title, _desc1, _desc2, _desc3, _desc4 = null;
    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc1 = this.state.welcome.desc1;
      _desc2 = this.state.welcome.desc2;
      _desc3 = this.state.welcome.desc3;
      _desc4 = this.state.welcome.desc4;
    } else if(this.state.mode === 'read'){
      var i = 0;
      while(i < this.state.contents.length){
        var data = this.state.contents[i];
        if(data.id === this.state.selected_content_id){
          _title = data.title;
          _desc1 = <button>{data.desc1}</button>;
          _desc2 = <button>{data.desc2}</button>;
          _desc3 = <button>{data.desc3}</button>;
          _desc4 = <button>{data.desc4}</button>;
          break;
        }
        i = i + 1;
      }
    }

    return(
      <>
        <div className="App">
          <div className="Header">
            <Header
              title={this.state.subject.title}>
            </Header>
          </div>
          <div className="Warning"><Warning/></div>
          <div className="Start">
            <Start
              sub={this.state.subject.sub}
              onChangePage={function(){
                this.setState({mode:'read'});
              }.bind(this)}>
          </Start>
          </div>
          <div className="Content">
            <Content 
              onChangePage={function(id){
                this.setState({
                  mode:'read',
                  selected_content_id:Number(id)
                });
              }.bind(this)}
              data = {this.state.contents}
            title={_title} desc1={_desc1} desc2={_desc2}
            desc3={_desc3} desc4={_desc4}
            max = {this.state.max}></Content>
          </div>
          <div className="Score"><Score
          score={this.state.score}>
            </Score>
          </div>
        </div>
      </>
    );
  }
}

export default App;
