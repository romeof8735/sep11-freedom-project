# Entry 1
##### 10/28/24

### Choosing a Tool
The tool that I first chose was called ["Impact"](https://impactjs.com/). I picked this tool because I wanted to make a first person shooter game. This game wouldn't be like any normal shooter game, it would have its own special ability that you can use to take down enemies faster. However while I was thinking of this idea in my head I went to go and tinker with the game code for a little bit, but it was very complicated and I spent around 2-3 hours trying to figure out how it worked. I decided to go ahead and switch to a different tool that was called ["Kaboom"](https://kaboomjs.com/). I switched to Kaboom because their code was much easier to tinker and work on and I took my original idea of making a first person shooter game with special abilites and decided to go with a 2d platformer ganme where u had to complete different levels with your abilities that will help you throughout the way. With Kaboom I am thinking of trying to create my own level.

In kaboom I did a bit of tinkering with it and I have figured out how to create movement for the sprites aswell as what key's the user needs to press in order for it to work
```js
const SPEED = 320

onKeyDown("a", () => {
	player.move(-SPEED, 0)
})

onKeyDown("d", () => {
	player.move(SPEED, 0)
})

onKeyDown("w", () => {
	player.move(0, -SPEED)
})

onKeyDown("s", () => {
	player.move(0, SPEED)
})
```
With kaboom I was also able to make a loading screen, so whenever you go into the game a loading screen will pop up so that it can give time for your machine to load the necessary sprites etc. 
```js
	drawCircle({
	pos: center(),
	radius: 38,
	end: map(progress, 0, 1, 0, 360),
	})

	drawText({
	text: "now loading" + ".".repeat(wave(1, 4, time() * 12)),
	font: "monospace",
	size: 26,
	anchor: "center",
	pos: center().add(0, 70),
	})
```


This code makes it so that when the player uses WASD it moves the character around in the direction of which ever key is pressed. 

### Engineering Design Process
So far I am in beginning stage of my engineering desgin process for this year. As I was tinkering with kaboom I was changing lines in the code to see how it would affect the game. I changed things such as the player speed, player spawn coordinates, and I tried to add my own  scene in the code to see if it would work. After a bit of tinkering I was able to create a somewhat working scene but it wasnt fully functional. In the future I am planing on getting my own scene to actually function properly without anything messing up. 

### Skills 
The skills that I have learned so far from my tinkering with Kaboom was Problem decomposition and Debugging.

## Problem decomposition
Through tinkering I had to break down task into smaller pieces. I wanted to learn how to use Kaboom, so I first started with the smaller things such as chaning values in the player speed and the spawn cooridnates. Then I went on and tried to do something harder which as trying to create my own scene, which I didn't have much success at. 

## Debugging
I learned Debugging through my tinkering with Kaboom such as the player speed and spawn coordinates. When editing the code I got a few errors which I then had to analyze and fix them in order for the correct change to happen so that the line of code can function again. 

[Next](entry02.md)

[Home](../README.md)
