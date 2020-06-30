'use strict';

{
  function draw() {
    const canvas = document.querySelector('canvas');
    
    //getContextに対応していない場合の処理
    if (typeof canvas.getContext === 'undefined') {
      return;
    }
    
    //平面に描画するため「2d」
    //Contextは絵筆のようなもの
    const ctx = canvas.getContext('2d');
    
    ctx.fillStyle = 'pink';//塗りつぶし色
    ctx.strokeStyle = '#f00';//枠線の色
    ctx.lineWidth = 8;//枠線の太さ
    // ctx.lineJoin = 'round';//結合部の形（丸く）
    ctx.lineJoin = 'bevel';//結合部の形（斜面に）
    
    //四角形の描画(ctx.xxx(x, y, width, height))
    ctx.fillRect(50, 50, 50, 50); //塗りつぶし
    ctx.strokeRect(50, 50, 50, 50); //枠線のみ
    
    //複数の四角形の描画
    ctx.fillStyle = 'skyblue';
    ctx.strokeStyle = '#00b';

    ctx.fillRect(70, 70, 50, 50);
    ctx.strokeRect(70, 70, 50, 50);
    
    //線形グラデーションの設定
    //ctx.createLinearGradient(x0, y0, x1, y1);始点と終点の座標
    const g = ctx.createLinearGradient(0, 0, canvas.width, 0);

    g.addColorStop(0, '#f00');
    g.addColorStop(0.3, '#0f0'); //左から30%のあたりで緑色に変化
    g.addColorStop(1, '#00f');
    
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, canvas.width, canvas.height);//canvas一面に表示
    
    //円形グラデーションの設定
    // const g = ctx.createRadialGradient(
    //   x0, y0, r0,
    //   x1, y1, r1
    // );
    const g = ctx.createRadialGradient(
      canvas.width / 2, canvas.height / 2, 50,
      canvas.width / 2 + 100, canvas.height / 2 + 200, 500
    );

    g.addColorStop(0, '#f00');
    g.addColorStop(0.3, '#0f0');
    g.addColorStop(1, '#00f');
    
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }

  draw();
}
