const canvas = document.querySelector('canvas');

// 캔버스에 그릴떄 쓰는 붓...context
const ctx = canvas.getContext('2d');

canvas.width = 800;
canvas.height = 800;

// 두가지의 함수를 조합하여 사각형 만들어보기
ctx.moveTo(50, 50); // x,y 움직이기
ctx.lineTo(150, 50); // 선 그리기
ctx.lineTo(150, 150); // 선 그리기
ctx.lineTo(50, 150); // 선 그리기
ctx.lineTo(50, 50); // 선 그리기
ctx.stroke();
ctx.fill();
