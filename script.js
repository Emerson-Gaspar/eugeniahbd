const quotes = [
  "Meu amor, hoje é um dia especial, pois estamos celebrando mais um ano juntos. Feliz aniversário, minha namorada linda! Que este dia seja repleto de alegria, amor e realizações. Eu sou muito grato por ter você ao meu lado, e cada momento compartilhado ao longo desse tempo só reforça o quanto você é especial para mim. Te amo muito!",

"Parabéns, meu amor! Hoje é o seu aniversário, e eu quero que saiba o quanto você é importante na minha vida. Você ilumina meus dias com seu sorriso, enche meu coração de amor e torna cada momento ao seu lado inesquecível. Desejo que este novo ano seja repleto de conquistas, saúde e felicidade. Estarei sempre aqui, ao seu lado, para celebrar cada vitória e enfrentar qualquer desafio. Te amo infinitamente!",
"Feliz aniversário, minha amada! Hoje é um dia para celebrar não apenas mais um ano de vida, mas também a pessoa incrível que você é. Sua presença enche meu mundo de amor, alegria e paz. Cada dia ao seu lado é uma bênção, e sou grato por ter você como minha namorada. Que este novo ciclo seja repleto de amor, sucesso e realizações. Conte sempre comigo para te apoiar e te amar incondicionalmente. Parabéns, minha eterna companheira!",
"Você é a razão do meu sorriso.",
  "Meu amor por você é infinito.",
  "Você me completa de uma forma que ninguém mais pode.",
  "Não consigo imaginar minha vida sem você.",
  "Você é minha alma gêmea.",
];

function generateQuote() {
  const quoteElement = document.getElementById("quote");
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteElement.innerText = quotes[randomIndex];
}
