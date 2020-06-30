'use strict';

{
  //▶要素を操作する
  function update() {
    //querySelector()：文書内から特定の要素を取得するメソッド
    // document.querySelector('h1').textContent = 'Changed!';
    // document.querySelector('#target').textContent = 'Changed!';
    document.getElementById('target').textContent = 'Changed!';//idを指定
  }

  setTimeout(update, 1000);//timer
  
  //▶複数の要素を取得
  function update() {
    //querySelector()は見つかった最初の要素しか取得しない
    // document.querySelector('p').textContent = 'Changed!';
    // document.querySelectorAll('p')[1].textContent = 'Changed!';
    
    //querySelectorAll()：getElementsByTagName(),getElementsByClassName()などあるがquerySelectorAll()で代用可
    document.querySelectorAll('p').forEach((p, index) => {
      p.textContent = `${index}番目のpです！`;
    });
  }

  setTimeout(update, 1000);
}

{ 
  //▶addEventListener()
  document.querySelector('button').addEventListener('click', () => {
    document.getElementById('target').textContent = 'Changed!';
  });
}

