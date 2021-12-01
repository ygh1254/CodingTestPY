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

// 1. 2번문제부터 다음 문제로 넘어가게 만들기
// 2. 정답/오답 구분하기
// 3. 진행중인 퀴즈에 대한 점수 기록하기
// 4. 결과창 만들기
// 5. CSS HTML 다듬기 
