# Simon Says

Link to demonstration: https://yardenhochman.github.io/Simon-Says/



In this project I decided to make a game using Class oriented design.
Initially it was challenging to synchronize the sounds correctly. 
However, by using setTimeout function I was able to do it, and also to disable
and enabled the users mouse clicking, which was important in order to prevent 
the player from participating during the game's demonstrations.
This also proved challenging since the compiler was reading my entire code simultaniusly,
so I ended up timing the execution of that feature as well.

There are some features I left the game without, but could still be added.
One of these is a multiplayer option. Additionally, the game does not ask for the 
player's name, which is something I was thinking of including. I would also love to 
incorperate a highscore chart in future iterations.

More about the game logic:

Color Sequence Generator:

Size Of Sequence - specifies length of sequence to make
Color selection -  array of 4 colors
The sequence - Creates a new array. 
Sequence generator - Each spot is the array is assigned a random
	color. 
Create buttons - creates clickable elements on the UI, each 
	Representing a different color.

Player :

Name - Stores player name
Sequence - Length, for the amount of flashes this turn
Lives - each player gets 2 chances
Current selection - stores array of player choices

Flash - method displaying part of the sequence
Player selects - An event listener waiting for the player to recall
Compare - method checks validity of player selection


Game
Color sequence generator - method to create a new class
	In charge of forming the array to remember
Player - method to create a new class in charge of storing
	Player information and stats
Play - method to create a class in charge of the actual game
	Turns -checking game continuation, flashing, player
	Selections and checking for success and failure
Announce - in charge of ending the game


