# 밈메이커 만들기ㅋ

## 12/11 한거

1. css에서 캔버스 크기 설정 -> 이후에는 js에서만 바꿈 ㅋ
2. 캔버스에 그릴떄 쓰는 붓...`context`
   ```jsx
   const ctx = canvas.getContext('2d');
   ```
3. 좌상단의 좌표 : (0, 0)
4. 사각형 선 그리기 : ctx.fillRect(50, 50, 100, 300)
5. canvas에서 그림을 그릴 때는 단계별로 진행 필요
6. 그린 그림들의 경로를 나눌 수 있음

   ```jsx
   ctx.rect(50, 50, 100, 100);
   ctx.rect(150, 150, 100, 100);
   ctx.rect(250, 250, 100, 100);
   ctx.fill();

   // 선 새로 그리기 : beginPath();
   ctx.beginPath();
   ctx.rect(350, 350, 100, 100);
   ctx.fillStyle = 'red';
   ctx.fill();
   ```
7. 수평인 직선을 그리려면 두 y값이 같아야 함
8. 라인이 끝난 점이 다음에 시작하는 브러쉬 좌표
9. ⫶ fillRect = fill+Rect = fill + (moveTo+lineTo)
