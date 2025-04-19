<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Feliz Aniversário!</title>
    <link rel="stylesheet" href="style.css"> <!-- Se preferir usar CSS externo -->
    <style>
        /* (CSS está incluído aqui para facilitar, pode mover pra um .css depois) */
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #fce4ec;
            color: #333;
            overflow-x: hidden;
        }

        header {
            background-color: #007bff;
            color: white;
            padding: 1rem 0;
            text-align: center;
        }

        main {
            padding: 2rem;
            background: white;
            margin: 2rem auto;
            max-width: 800px;
            border-radius: 15px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
        }

        .message {
            background-color: #fff0f5;
            padding: 1.5rem;
            border-radius: 15px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
            margin-top: 1rem;
        }

        .highlight {
            background-color: #ffe0f0;
            border: 2px dashed #ff4081;
        }

        .balloons {
            margin-top: 20px;
            font-size: 2em;
            text-align: center;
        }

        button {
            margin: 15px auto;
            padding: 15px 30px;
            font-size: 1.1em;
            background-color: #ff80ab;
            border: none;
            border-radius: 10px;
            color: white;
            cursor: pointer;
            display: block;
            transition: background-color 0.3s;
        }

        button:hover {
            background-color: #ec407a;
        }

        .confetti {
            position: fixed;
            width: 10px;
            height: 10px;
            background-color: #ff4081;
            top: -10px;
            animation: fall 4s linear infinite;
            z-index: 9999;
            opacity: 0.8;
        }

        @keyframes fall {
            0% { transform: translateY(0) rotate(0deg); }
            100% { transform: translateY(100vh) rotate(360deg); }
        }

        footer {
            background-color: #333;
            color: white;
            text-align: center;
            padding: 1rem 0;
            margin-top: 2rem;
        }
    </style>
</head>
<body>

    <audio autoplay loop>
        <source src="https://www.bensound.com/bensound-music/bensound-sunny.mp3" type="audio/mpeg">
        Seu navegador não suporta áudio.
    </audio>

    <header>
        <h1>Feliz Aniversário, Mãe!</h1>
    </header>

    <main>
        <div id="message" class="message">
            <p>
                Hoje é um dia muito especial, porque é o dia da pessoa mais incrível que eu conheço: você. <br>
                Obrigado por todo o amor, carinho e apoio. Que seu dia seja lindo como você! ❤️
            </p>
        </div>

        <div class="balloons">🎈🎉🎂🎁🎊</div>

        <button id="myButton">Clique para Surpresa 💖</button>
        <button id="resetButton">Resetar Mensagem 🔄</button>
        <button onclick="startConfetti()">Soltar Confetes 🎊</button>
    </main>

    <footer>
        <p>&copy; 2025 - Com todo carinho ❤️</p>
    </footer>

    <script>
        // Botão para mudar mensagem
        const button = document.getElementById('myButton');
        button.addEventListener('click', () => {
            const message = document.getElementById('message');
            message.textContent = 'Você clicou no botão e encheu meu coração de alegria! 💕';
            message.classList.add('highlight');
        });

        // Botão para resetar
        const resetButton = document.getElementById('resetButton');
        resetButton.addEventListener('click', () => {
            const message = document.getElementById('message');
            message.innerHTML = `
                <p>
                    Hoje é um dia muito especial, porque é o dia da pessoa mais incrível que eu conheço: você. <br>
                    Obrigado por todo o amor, carinho e apoio. Que seu dia seja lindo como você! ❤️
                </p>`;
            message.classList.remove('highlight');
        });

        // Confetes
        function startConfetti() {
            const colors = ['#f50057', '#f48fb1', '#ff80ab', '#e91e63', '#ff4081'];
            const interval = setInterval(() => {
                const confetti = document.createElement('div');
                confetti.classList.add('confetti');
                confetti.style.left = Math.random() * 100 + 'vw';
                confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                confetti.style.animationDuration = (Math.random() * 3 + 3) + 's';
                document.body.appendChild(confetti);

                setTimeout(() => {
                    confetti.remove();
                }, 5000);
            }, 300);

            setTimeout(() => clearInterval(interval), 20000);
        }
    </script>

</body>
</html>
