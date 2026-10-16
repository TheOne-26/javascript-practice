let score = JSON.parse(localStorage.getItem
        ('score')) || {
          wins: 0,
          loss: 0,
          draw: 0
        };

        updateScoreElement();
        
        /*
        if(score === null) {
          score = {
            wins: 0,
            loss: 0,
            draw: 0
          };
        }
        */

        let isAutoPlaying = false;
        let intervalId;
        function autoPlay(){
        if(!isAutoPlaying){
          intervalId = setInterval(function(){
            const playerMove = pickComputerMove();
            playGame(playerMove);
          },1000);
          isAutoPlaying = true;
        }
        else{
          clearInterval(intervalId);
          isAutoPlaying = false;
        }
      }  

        document.querySelector('.js-rock-button').addEventListener('click', () => {
          playGame('Rock');
        });

        document.querySelector('.js-paper-button').addEventListener('click', () => {
          playGame('Paper');
        });

        document.querySelector('.js-scissor-button').addEventListener('click', () => {
          playGame('Scissors');
        });

        document.body.addEventListener('keydown', (event) => {
          if(event.key ==='r') {
             playGame('Rock');
        } else if(event.key === 'p') {
          playGame('Paper')
        }
          else if(event.key === 's') {
            playGame('Scissors');
          }
        });

        function playGame(playerMove) {
          let computerMove = pickComputerMove();
          let result = '';
          if(playerMove == 'Rock'){
              if(computerMove === 'rock'){
                result = 'tie.';
              }
              else if(computerMove === 'paper'){
                result  = 'you lose.';
              }
            else if(computerMove === 'scissors'){
                result = 'you win.';
              }
            }
          else if(playerMove == 'Paper'){
              if(computerMove === 'paper'){
                result = 'tie.';
              }
              else if(computerMove === 'rock'){
                result  = 'you win.';
              }
              else if(computerMove === 'scissors'){
                result = 'you lose.';
              }
            }
          else {
              if(computerMove === 'scissors'){
                result = 'tie.';
              }
              else if(computerMove === 'paper'){
                result  = 'you win.';
              }
              else if(computerMove === 'rock'){
                result = 'you lose.';
              }
            }
            if (result === 'you win.') {
              score.wins += 1;
            }
            else if (result === 'you lose.') {
              score.loss += 1;
            }
            else if (result === 'tie.') {
              score.draw += 1;
            }
            localStorage.setItem('score', JSON.stringify(score));

            updateScoreElement();

            document.querySelector('.js-result').innerHTML = result;

            document.querySelector('.js-moves').innerHTML = 
            ` You ${playerMove} - ${computerMove} Computer`;
        }
        
        function updateScoreElement(){
          document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Loses: ${score.loss}, Draws: ${score.draw}.`;
        }


        function pickComputerMove() {
          const randomNumber = Math.random();
          let computerMove;
      if(randomNumber >= 0 && randomNumber < 1/3){
        computerMove = 'rock';
      }
      else if(randomNumber >= 1/3 && randomNumber < 2/3){
        computerMove = 'paper';
      }
      else if(randomNumber >= 2/3 && randomNumber < 1){
        computerMove = 'scissors';
      }
        return computerMove;
        }
