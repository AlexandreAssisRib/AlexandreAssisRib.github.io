window.onload = function iniciar() {
  ballsColor();
  function ballsColor() {
    const r = Math.random() * 10;
    const g = Math.random() * 100;
    const b = Math.random() * 1000;
    const balls = document.getElementsByClassName('ball');
    balls[0].style.backgroundColor = `rgb(${r}, ${b}, ${r})`;
    balls[1].style.backgroundColor = `rgb(${g}, ${g}, ${g})`;
    balls[2].style.backgroundColor = `rgb(${b}, ${r}, ${b})`;
    balls[3].style.backgroundColor = `rgb(${r}, ${r}, ${r})`;
    balls[4].style.backgroundColor = `rgb(${g}, ${b}, ${g})`;
    balls[5].style.backgroundColor = `rgb(${b}, ${r}, ${g})`;
  }
  answer();
  function answer() {
    let click1 = 0;
    const balls = document.getElementsByClassName('ball');
    balls[0].addEventListener('click', () => {
      click1 += 1;
      balls[0].id = 'answer';
      balls[0].className = 'ball answer';
      result(0);
    });
    balls[1].addEventListener('click', () => {
      click1 += 1;
      balls[1].id = 'answer';
      balls[1].className = 'ball answer';
      result(1);
    });
    balls[2].addEventListener('click', () => {
      click1 += 1;
      balls[2].id = 'answer';
      balls[2].className = 'ball answer';
      result(2);
    });
    balls[3].addEventListener('click', () => {
      click1 += 1;
      balls[3].id = 'answer';
      balls[3].className = 'ball answer';
      result(3);
    });
    balls[4].addEventListener('click', () => {
      click1 += 1;
      balls[4].id = 'answer';
      balls[4].className = 'ball answer';
      result(4);
    });
    balls[5].addEventListener('click', () => {
      click1 += 1;
      balls[5].id = 'answer';
      balls[5].className = 'ball answer';
      result(5);
    });
  }
  info();
  function info() {
    const infoGame = document.getElementById('result');
    const p = document.createElement('p');
    p.innerText = 'Escolha uma cor';
    p.id = 'resultado';
    infoGame.appendChild(p);
    p.innerText;
  }

  function info2() {
    const p = document.getElementById('resultado');
    p.innerText = 'Escolha uma cor';
  }

  rgb();
  function rgb() {
    const cores = document.getElementsByClassName('ball');
    let param = Math.floor(Math.random() * 10);
    if (param > 6) {
      param = 5;
      const cor = document.getElementById('rgb-color');
      cor.innerText = cores[param].style.backgroundColor;
    } else {
      const cor = document.getElementById('rgb-color');
      cor.innerText = cores[param].style.backgroundColor;
    }
  }

  function result(entrada) {
    const balls = document.getElementsByClassName('ball');
    const rgbColor = document.getElementById('rgb-color');
    const resultado = document.getElementById('resultado');
    if (rgbColor.innerText === balls[entrada].style.backgroundColor) {
      resultado.innerText = 'Acertou!';
    } else {
      resultado.innerText = 'Errou! Tente novamente!';
    }
    points();
  }
  rr();
  function rr() {
    const reset = document.getElementById('reset-game');
    const button = document.createElement('button');
    button.id = 'reset-game';
    button.innerText = 'iniciar/resetar cores';
    reset.appendChild(button);
  }
  resetar();
  function resetar() {
    const butao = document.getElementById('reset-game');
    butao.addEventListener('click', () => {
      info2();
      ballsColor();
      rgb();
      
    });
  }
  score();
  function score() {
    const score = document.getElementById('score');
    let acertos = 0;
    score.innerText = `Placar: ${acertos}`;
    points()
  }

  function points() {
    acertos = 0;
    const resultado = document.getElementById('resultado');
    if (resultado.innerText === 'Acertou!') {
    const score = document.getElementById('score')
      score.innerText = `Placar: ${acertos = acertos + 3}`
      
    }
  } 
};
