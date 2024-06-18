let computerMove = Math.floor(Math.random() * 100) + 1;
    console.log(computerMove); // For debugging purposes


    const attempts = 3;
    let currentAttempt = 0;


    if (computerMove > 0 && computerMove <= 34) {
      computerMove = 'a';
    } else if (computerMove > 34 && computerMove <= 67) {
      computerMove = 'b';
    } else if (computerMove > 67 && computerMove <= 100) {
      computerMove = 'c';
    }


    function guess() {
      const playerMoveValue = document.querySelector('.player-number').value;
      if (!playerMoveValue) {
        alert('Please enter a number');
        return;
      }


      let playerMove;
      if (playerMoveValue > 0 && playerMoveValue <= 34) {
        playerMove = 'down';
      } else if (playerMoveValue > 34 && playerMoveValue <= 67) {
        playerMove = 'middle';
      } else if (playerMoveValue > 67 && playerMoveValue <= 100) {
        playerMove = 'up';
      } else {
        alert('Please enter a number between 1 and 100');
        return;
      }


      currentAttempt++;


      if (
        (playerMove === 'down' && computerMove === 'a') ||
        (playerMove === 'middle' && computerMove === 'b') ||
        (playerMove === 'up' && computerMove === 'c')
      ) {
        document.querySelector('.feedback').innerHTML = 'Your guess is correct';
      } else if (currentAttempt < attempts) {
        document.querySelector('.feedback').innerHTML = 'Try again';
      } else {
        document.querySelector('.feedback').innerHTML = 'Sorry, you have no more attempts.';
      }
    }
