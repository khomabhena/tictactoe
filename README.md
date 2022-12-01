# tic-tac-toe

##### array layout
0 1 2
3 4 5
6 7 8

#### Winning Indexes
1. 0 1 2
2. 0 4 8
3. 0 3 6
4. 1 4 7
5. 2 4 6
6. 2 5 8
7. 3 4 5
8. 6 7 8

#### How the Game is played
1. If a user selects 3 rows, straight or diagonal, that's a win
2. Players take chances to play, one turn each

##### How the code should work
1. When a user clicks a square take the index and store it
2. The game will be played using an array with a length of 6
3. When an input is received store the play Sign inside a new array under that index.
4. Supply the index and the symbol
5. After every play check against the winning array to see if a player has won
6. When there are no places left then its a tie
7. Record the wins in the results array
8. Store plays in a string
9. Store winning indexes in a string array
10. After every play check if player string indexes are included in the array
11. Sort indexes before comparing
