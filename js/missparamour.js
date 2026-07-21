let pontosRiot = 0;
let pontosEgo = 0;
let perguntasRespondidas = 0;
const totalPerguntas = 5;

const opcoes = document.querySelectorAll('.opcao');
const containerQuiz = document.getElementById('quiz');

opcoes.forEach(botao => {
    botao.addEventListener('click', () => {
        const escolha = botao.getAttribute('data-album');
        
        if (escolha === 'riot') pontosRiot++;
        if (escolha === 'ego') pontosEgo++;
        
        const pai = botao.parentElement;
        pai.querySelectorAll('.opcao').forEach(b => b.style.pointerEvents = 'none');
        botao.style.background = '#50005f'; // Destaca visualmente a opção escolhida
        
        perguntasRespondidas++;

        if (perguntasRespondidas === totalPerguntas) {
            executarTransicaoEResultado();
        }
    });
});

function executarTransicaoEResultado() {
    const resultadoFinal = (pontosRiot >= pontosEgo) ? 'riot' : 'ego';

    containerQuiz.classList.add('sumir-quiz');

    setTimeout(() => {
        
        if (resultadoFinal === 'riot') {
            document.body.style.backgroundColor = '#030303';
            
            containerQuiz.innerHTML = `
                <img src="imagens/riot1.png" class="imagem-absoluto topo-esquerda" alt="Imagem 1">
                <img src="imagens/riot4.png" class="imagem-absoluto baixo-direita" alt="Imagem 4">

                <h1 style="color: #000; font-size: 3rem; font-weight: 900; margin-bottom: 10px;">RIOT RULES!</h1>
                <p style="color: #000; font-size: 1.2rem; margin: 0 0 20px 0;">Y soy rebelde! Você não lida com o caos, você é o caos e provavelmente mija na calçada da igreja sabendo que tá certa.</p>
                <button onclick="window.location.reload()" style="background:#000; color:#fff; border:none; padding:12px 24px; border-radius:5px; cursor:pointer; font-weight:bold; font-size:1rem;">Refazer Teste</button>
            `;
            containerQuiz.style.background = '#ffffff';
            containerQuiz.style.boxShadow = '0 8px 30px #A6A6A6';
        } else {
            document.body.style.backgroundColor = '#3A3A3A';
            
            containerQuiz.innerHTML = `
                <img src="imagens/edabp1.jpg" style="display: block; margin: 0 auto 25px auto; width: 350px; height: auto; border-radius: 8px;">
                
                <button onclick="window.location.reload()" style="background:#fff; color: #2c3e50; border:none; padding:12px 24px; border-radius:5px; cursor:pointer; font-weight:bold; font-size:1rem;">Refazer Teste</button>
            `;
            containerQuiz.style.background = '#A6A6A6';
            containerQuiz.style.boxShadow = '0 8px 30px #CEFF00';
        }

        containerQuiz.classList.remove('sumir-quiz');

    }, 400);
}

