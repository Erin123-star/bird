const bird = document.getElementById('bird');
let birdY = 300; // 初始位置
let gravity = 2; // 重力值
let isJumping = false;
let jumpHeight = 40; // 跳跃高度

function applyGravity() {
    if (!isJumping) {
        birdY -= gravity; // 重力影响下降
        bird.style.bottom = birdY + 'px';
        
        // 如果鸟落到地面，停止
        if (birdY <= 0) {
            birdY = 0;
            bird.style.bottom = '0px';
        }
    }
}

// 点击鼠标时跳跃
window.addEventListener('click', function() {
    if (!isJumping) {
        isJumping = true;
        let jumpStartY = birdY;
        let jumpInterval = setInterval(() => {
            birdY += 5; // 跳跃上升
            bird.style.bottom = birdY + 'px';

            // 如果达到跳跃高度，则开始下降
            if (birdY >= jumpStartY + jumpHeight) {
                clearInterval(jumpInterval);
                isJumping = false;
            }
        }, 20);
    }
});

// 不断应用重力
setInterval(applyGravity, 20);
