# Entry 3
##### 2/3/25

## Creating a level
I have finally been able to create the first working level for my game that took me a decent bit of time to figure out. The level that I have created looks like this:

![image alt](https://github.com/romeof8735/sep11-freedom-project/blob/main/img%20and%20gif/Screen%20recording%202025-02-09%203.12.20%20PM.gif)

I was able to create this little scene with the blocks, coins, and moving sprite by using this code:
```js
const level = addLevel([

	"! ww $$",
	"-------",
], {

	tileWidth: 64,
	tileHeight: 64,

	pos: vec2(100, 200),

	tiles: {
		"!": () => [
			sprite("bean"),
			area(),
			body(),
			anchor("bot"),
			"player",
		],
		"-": () => [
			sprite("grass"),
			area(),
			body({ isStatic: true }),
			anchor("bot"),
		],
		"$": () => [
			sprite("coin"),
			area(),
			anchor("bot"),
			"coin",
		],
		"w": () => [
			sprite("spike"),
			area(),
			anchor("bot"),
			"danger",
		],
	},
})
```
What this code does is that first it created the level for you to able to start making the scene. Then you create the scence, you can make this whatever you want and in make case I make it look like this as a test make sure that it worked. Then you can just start putting things where you want such as things like coins, different types of sprites, spikes, etc. With this you can create any type of level that you could imagine, you just need to do the specifc research on what things to use. 

## Engineering Design Process
I have finally been able to create a working and functional level so now I am going to plan on my steps to go further. Now I will hope to be able to make a bigger level that will allow you to go to mulitple different types of levels that each time get more and more challenging.

## Skills 
The skills that I have worked on while completing this was Problem decomposition and Debugging.

### Debugging
I have improved this skill since I have tried many times on creating a level but I would always just get some sort of error leading to my levels and scences not being created. After many attempts at tinkering I was finally able to create a level without and erros. 

### Problem Decompostition 
I have improved this skill since what I did was as I was tinkering I was watching a youtube video on how I can create my level. I took this information in from the video and the kaboom tutorial and broke them both down in seperates making sure they each seperate line of code worked properly. After making sure that they worked perfectly I then added them all together into one big line of code and success, I was able to create my level. 





[Previous](entry02.md) | [Next](entry04.md)

[Home](../README.md)
