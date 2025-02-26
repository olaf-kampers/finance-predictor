export class AnimationView {
    constructor() {
        this.richMessage = document.getElementById('richMessage');
    }

    createCoin() {
        const coin = document.createElement('div');
        coin.className = 'coin';
        coin.style.left = `${Math.random() * 100}vw`;
        coin.style.animation = `coinFall ${1 + Math.random() * 2}s linear forwards`;
        document.body.appendChild(coin);
        
        setTimeout(() => {
            document.body.removeChild(coin);
        }, 3000);
    }

    showCoins() {
        for (let i = 0; i < 20; i++) {
            setTimeout(() => this.createCoin(), i * 100);
        }
    }

    showRichMessage() {
        this.richMessage.classList.add('visible');
        setTimeout(() => {
            this.richMessage.classList.remove('visible');
        }, 3000);
    }

    celebrateResult(value) {
        this.showCoins();
        if (value > 100000) {
            this.showRichMessage();
        }
    }
}