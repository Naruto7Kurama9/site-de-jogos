const questions = [
    { question: "Qual é a linguagem de programação mais usada para desenvolvimento web front-end?", options: ["Python", "JavaScript", "Java", "C++"], answer: "JavaScript" },
    { question: "Qual protocolo é usado para transferir dados na web?", options: ["FTP", "HTTP", "SMTP", "DNS"], answer: "HTTP" },
    { question: "O que é um framework?", options: ["Um tipo de banco de dados", "Um conjunto de ferramentas de desenvolvimento", "Um protocolo de comunicação", "Um sistema operacional"], answer: "Um conjunto de ferramentas de desenvolvimento" },
    { question: "Qual é a função do HTML?", options: ["Estilizar páginas web", "Adicionar funcionalidades interativas", "Estruturar o conteúdo das páginas web", "Gerenciar banco de dados"], answer: "Estruturar o conteúdo das páginas web" },
    { question: "O que significa CSS?", options: ["Cascading Style Sheets", "Computer Style Sheets", "Creative Style Sheets", "Cascading Script Sheets"], answer: "Cascading Style Sheets" },
    { question: "Qual é a principal função do JavaScript?", options: ["Manipular bancos de dados", "Criar estruturas de páginas web", "Adicionar interatividade às páginas web", "Gerenciar servidores web"], answer: "Adicionar interatividade às páginas web" },
    { question: "O que é um DOM?", options: ["Document Object Model", "Data Object Model", "Dynamic Object Model", "Document Online Model"], answer: "Document Object Model" },
    { question: "Qual linguagem é usada para estilizar uma página web?", options: ["HTML", "CSS", "JavaScript", "SQL"], answer: "CSS" },
    { question: "O que é uma API?", options: ["Application Programming Interface", "Advanced Programming Interface", "Applied Programming Interface", "Abstract Programming Interface"], answer: "Application Programming Interface" },
    { question: "Qual é o propósito do protocolo HTTPS?", options: ["Transmitir dados rapidamente", "Seguir uma estrutura de páginas web", "Garantir a segurança na transmissão de dados", "Controlar o acesso a recursos web"], answer: "Garantir a segurança na transmissão de dados" },
    { question: "O que é SQL?", options: ["Structured Query Language", "Sequential Query Language", "Simple Query Language", "Server Query Language"], answer: "Structured Query Language" },
    { question: "Qual é a função do método fetch em JavaScript?", options: ["Enviar dados para o servidor", "Fazer requisições HTTP", "Manipular o DOM", "Gerenciar cookies"], answer: "Fazer requisições HTTP" },
    { question: "O que é um loop em programação?", options: ["Uma estrutura para armazenar dados", "Uma sequência de instruções repetitivas", "Um tipo de variável", "Uma função matemática"], answer: "Uma sequência de instruções repetitivas" },
    { question: "Qual é o propósito de um sistema de controle de versão?", options: ["Gerenciar alterações no código fonte", "Gerenciar o acesso a servidores", "Executar código em diferentes ambientes", "Criar interfaces de usuário"], answer: "Gerenciar alterações no código fonte" },
    { question: "Qual é o principal propósito de um banco de dados relacional?", options: ["Armazenar dados em uma estrutura hierárquica", "Armazenar dados em tabelas relacionadas", "Armazenar dados em arquivos de texto", "Armazenar dados em objetos JSON"], answer: "Armazenar dados em tabelas relacionadas" },
    { question: "O que é o conceito de 'cloud computing'?", options: ["Computação em dispositivos locais", "Computação usando servidores remotos", "Computação usando apenas hardware físico", "Computação em um único computador"], answer: "Computação usando servidores remotos" },
    { question: "Qual é a finalidade do Docker?", options: ["Gerenciar containers de aplicação", "Gerenciar redes", "Desenvolver aplicativos mobile", "Gerenciar bancos de dados"], answer: "Gerenciar containers de aplicação" },
    { question: "Qual é a diferença entre uma variável 'let' e uma variável 'const' em JavaScript?", options: ["'let' pode ser reatribuída, 'const' não pode", "'const' pode ser reatribuída, 'let' não pode", "'let' e 'const' são idênticas", "'let' é usada em escopo global, 'const' é usada em escopo local"], answer: "'let' pode ser reatribuída, 'const' não pode" },
    { question: "Qual é o papel do index.html em um projeto web?", options: ["Armazenar o código JavaScript", "Servir como o ponto de entrada principal do site", "Armazenar dados do usuário", "Gerenciar as requisições ao servidor"], answer: "Servir como o ponto de entrada principal do site" },
    { question: "Qual é o propósito do package.json em projetos Node.js?", options: ["Gerenciar dependências e scripts do projeto", "Armazenar o código HTML do projeto", "Gerenciar arquivos CSS", "Gerenciar configurações do banco de dados"], answer: "Gerenciar dependências e scripts do projeto" },
    { question: "Qual é a diferença entre 'GET' e 'POST' em requisições HTTP?", options: ["'GET' solicita dados do servidor, 'POST' envia dados para o servidor", "'GET' envia dados para o servidor, 'POST' solicita dados do servidor", "'GET' e 'POST' têm a mesma funcionalidade", "'GET' é mais seguro que 'POST'"], answer: "'GET' solicita dados do servidor, 'POST' envia dados para o servidor" },
    { question: "O que é um 'cookie' em desenvolvimento web?", options: ["Um arquivo armazenado no servidor", "Um arquivo de dados armazenado no navegador do usuário", "Um tipo de script", "Um protocolo de segurança"], answer: "Um arquivo de dados armazenado no navegador do usuário" },
    { question: "Qual é o propósito do Git?", options: ["Controlar versões de código", "Desenvolver aplicativos móveis", "Gerenciar bancos de dados", "Criar interfaces de usuário"], answer: "Controlar versões de código" },
    { question: "O que é uma variável global?", options: ["Uma variável acessível em todo o código", "Uma variável acessível apenas em uma função", "Uma variável definida dentro de um bloco", "Uma variável definida somente em um escopo local"], answer: "Uma variável acessível em todo o código" },
    { question: "Qual é a finalidade do npm?", options: ["Gerenciar pacotes e dependências para projetos Node.js", "Gerenciar arquivos de configuração", "Compilar código-fonte", "Gerenciar servidores web"], answer: "Gerenciar pacotes e dependências para projetos Node.js" }
];


let currentQuestionIndex = 0;
let score = 0;
let timer;
let leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || [];
const quizTime = 30;

document.getElementById('startButton').addEventListener('click', startQuiz);
document.getElementById('next').addEventListener('click', nextQuestion);
document.getElementById('playAgain').addEventListener('click', startQuiz);
document.getElementById('showLeaderboard').addEventListener('click', showLeaderboard);
document.getElementById('backToQuiz').addEventListener('click', showQuiz);

function startQuiz() {
    document.getElementById('tutorial').classList.add('hidden');
    document.getElementById('score').classList.add('hidden');
    document.getElementById('leaderboard').classList.add('hidden');
    document.getElementById('quiz').classList.remove('hidden');
    currentQuestionIndex = 0;
    score = 0;
    showQuestion();
}

function showQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById('question').innerText = question.question;
    const optionsDiv = document.getElementById('options');
    optionsDiv.innerHTML = '';
    question.options.forEach(option => {
        const button = document.createElement('button');
        button.innerText = option;
        button.addEventListener('click', () => selectOption(option));
        optionsDiv.appendChild(button);
    });
    document.getElementById('next').classList.add('hidden');
    startTimer();
}

function selectOption(selectedOption) {
    const question = questions[currentQuestionIndex];
    if (selectedOption === question.answer) {
        score += 10;
    } else {
        score -= 5;
    }
    document.getElementById('next').classList.remove('hidden');
    clearInterval(timer);
}

function startTimer() {
    let timeLeft = quizTime;
    document.getElementById('time').innerText = timeLeft;
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById('time').innerText = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timer);
            document.getElementById('next').classList.remove('hidden');
        }
    }, 1000);
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

function showScore() {
    document.getElementById('quiz').classList.add('hidden');
    document.getElementById('score').classList.remove('hidden');
    document.getElementById('scoreMessage').innerText = `Você marcou ${score} pontos.`;

    const playerName = prompt("Digite seu nome para o ranking:");
    if (playerName) {
        leaderboard.push({ name: playerName, score: score });
        leaderboard.sort((a, b) => b.score - a.score);
        if (leaderboard.length > 5) {
            leaderboard = leaderboard.slice(0, 5);
        }
        localStorage.setItem('leaderboard', JSON.stringify(leaderboard));
    }
}

function showLeaderboard() {
    document.getElementById('score').classList.add('hidden');
    document.getElementById('leaderboard').classList.remove('hidden');
    const leaderboardList = document.getElementById('leaderboardList');
    leaderboardList.innerHTML = '';
    leaderboard.forEach(entry => {
        const li = document.createElement('li');
        li.innerText = `${entry.name}: ${entry.score} pontos`;
        leaderboardList.appendChild(li);
    });
    resetLeaderboard();
}

function showQuiz() {
    document.getElementById('leaderboard').classList.add('hidden');
    document.getElementById('tutorial').classList.remove('hidden');
}

function resetLeaderboard() {
    leaderboard = [];
    localStorage.setItem('leaderboard', JSON.stringify([]));
}