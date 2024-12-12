function typeWriter(element, text, options = {}) {
    const {
        speed = 50,
        randomizeSpeed = false,
        chars = '!@#$%^&*()-_=+[]{}|;:",.<>?/',
        onComplete = () => {}
    } = options;

    let currentText = '';
    let iteration = 0;
    const totalLength = text.length;
    let rafId;

    const randomChar = () => chars[Math.floor(Math.random() * chars.length)];

    const animate = () => {
        if (iteration <= totalLength) {
            currentText = text
                .split('')
                .map((char, index) => (index < iteration ? `<span>${char}</span>` : `<span>${randomChar()}</span>`))
                .join('');
            
            element.innerHTML = currentText; // Usamos innerHTML para los <span>
            iteration++;

            const next = randomizeSpeed ? Math.random() * speed : speed;
            rafId = setTimeout(() => requestAnimationFrame(animate), next);
        } else {
            element.innerHTML = text
                .split('')
                .map(char => `<span>${char}</span>`)
                .join('');
            onComplete();
            if (rafId) clearTimeout(rafId);
        }
    };

    animate();
}

document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.typewriter-text');
    
    elements.forEach(element => {
        const text = element.dataset.text;
        if (text) {
            const options = {
                speed: 20,
                randomizeSpeed: true
            };
            typeWriter(element, text, options);
        }
    });
});
