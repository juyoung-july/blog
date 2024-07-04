import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let logoName = '정주영의 React Blog';
  let postTitle = '강남 우동 맛집 (변수)';
  let [title, a] = useState(['남자코트 추천', '강남 우동맛집', '리액트독학']);
  let [like, likeChange] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>{ logoName }</h4>
      </div>
      <button onClick={()=>{let copy=[...title.sort()]; a(copy)}}>array.sort</button>
      <div className="postList">
        <div className="post">
          <h4 onClick={()=>{let copy=[...title]; copy[0]='여자 코트 추천'; a(copy)}}>{ title[0] }</h4>
          <p>발행날짜</p>
          <span className="likeBtn" onClick={ ()=>{ likeChange(+1) } }>👍{ like }</span>
        </div>
        <div className="post">
          <h4>{ title[1] }</h4>
          <p>발행날짜</p>
        </div>
        <div className="post">
          <h4>{ title[2] }</h4>
          <p>발행날짜</p>
        </div>
        <Modal></Modal>
        <Modal/>
      </div>
      <h4>{ postTitle }</h4>
    </div>
  );
}

function Modal(){
  return(
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
