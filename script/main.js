document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            const navHeight = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--nav-height')) * window.innerHeight / 100;
            const headerHeight = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--header-height')) * window.innerHeight / 100;
            let offsetTop = targetElement.offsetTop;

            if (targetId === 'home') {
                offsetTop -= (navHeight + headerHeight);
                document.querySelectorAll('.grid-item.item-6').forEach(item => {
                    item.style.visibility = 'hidden';
                });
            } else {
                offsetTop -= .1 * window.innerHeight / 100;
            }

            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });

            // Show grid-item item-6 after scrolling
            if (targetId === 'home') {
                setTimeout(() => {
                    document.querySelectorAll('.grid-item.item-6').forEach(item => {
                        item.style.visibility = 'visible';
                    });
                }, 500);
            }
        }
    });
});
