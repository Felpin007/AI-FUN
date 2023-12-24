## Animação Interativa de Árvore
#README gerado pela mesma IA usada nos projetos.

Este projeto é uma animação interativa de uma árvore construída usando p5.js, uma biblioteca JavaScript que começa com o objetivo original do Processing, de tornar a codificação acessível para artistas, designers, educadores e iniciantes, e reinterpreta isso para a web de hoje.

![Imagem da Animação com Chuva](url_da_imagem_chuva "Animação com Chuva")
![Imagem da Animação com Neve](nevando.png "Animação com Neve")

## Descrição

O projeto consiste em um único arquivo HTML que carrega a biblioteca p5.js e um arquivo JavaScript personalizado, `tree.js`, que contém a lógica para a animação. A animação exibe uma árvore que responde a diferentes condições ambientais como vento e chuva, que são controladas pelas entradas de teclado do usuário.

## Recursos

- **Animação de Árvore**: A árvore é desenhada no canvas e seus galhos balançam em resposta às forças do vento.
- **Simulação de Chuva**: Quando a nuvem está visível, gotas de chuva caem do topo do canvas.
- **Simulação de Neve**: Quando está nevando, flocos de neve caem do topo do canvas.
- **Efeito de Relâmpago**: Ocasionalmente, um raio é desenhado no canvas, iluminando a cena.
- **Controles Interativos**: O usuário pode controlar a direção do vento e alternar entre condições de chuva e neve usando entradas de teclado.

## Como Executar

1. Clone o repositório para sua máquina local.
2. Abra o arquivo `index.html` em seu navegador web.

## Controles

- Pressione a tecla 'c' para alternar a nuvem (chuva).
- Pressione a tecla 'n' para alternar a neve.
- Use as teclas de seta para controlar a direção do vento quando a nuvem está visível.

## Dependências

Este projeto usa a biblioteca p5.js, que é carregada diretamente de um CDN no arquivo `index.html`.
