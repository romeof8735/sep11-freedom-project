# Entry 2
##### 12/9/24

### Learning Kaboom
So far I have been tinkering with Kaboom in my ide for a little bit and so far I have learned many things. I have learned things like how to use a `loader`, `text`, `speed`, and `player movement`. While I was learning on make the `loader` in the Kaboom I used their tutorial to help me, and it was pretty similar to add to my game. The player movement and speed that I used in my game looks like this: ![image alt](https://github.com/romeof8735/sep11-freedom-project/blob/7c3abb305622389c2d5268aa98d25cb5ede3fb41/Screen%20recording%202024-12-14%209.43.56%20PM.gif)
I was able to move the sprite with some speed by using this code:
```js
const SPEED = 320

const player = add([
	sprite("bean"),
	pos(center()),
])

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
This code allowed for my sprite to be able to move while being able to move at the speed that I assigned it to. For the `loader` in my game it looks like this: ![image alt](https://github.com/romeof8735/sep11-freedom-project/blob/761405f34ed4f6d0073bdb71e5043ced7b9f3b35/Screen%20recording%202024-12-14%2010.00.59%20PM.gif)
The code that I used the create this `loader` was:
```js
load(new Promise((res) => {
	setTimeout(() => {
		res()
	}, 1132)
}))

load(fetch("https://kaboomjs.com/"))
onLoading((progress) => {
	drawRect({
		width: width(),
		height: height(),
		color: rgb(0, 0, 0),
	})

	drawCircle({
		pos: center(),
		radius: 38,
		end: map(progress, 0, 1, 0, 360),
	})

		drawText({
		text: "Now Loading" + ".".repeat(wave(1, 4, time() * 12)),
		font: "monospace",
		size: 26,
		anchor: "center",
		pos: center().add(0, 70),
	})

})
```
This code allows for me to create a black screen, then load a sprite that will represent a loading percentage, and then add text that says "Now Loading". Last but not least I was able to add text so that the player could know what keys to press inorder for you to do things. The text looks like this: ![image alt](https://github.com/romeof8735/sep11-freedom-project/blob/878ad968645fd567bad907cda864b8bd3de5127e/Screenshot%202024-12-14%2010.33.03%20PM.png)

The code that I used for this text was:
```js
loadFont("FlowerSketches", "/examples/fonts/FlowerSketches.ttf")
loadFont("apl386", "/examples/fonts/apl386.ttf", { outline: 4, filter: "linear" })
loadBitmapFont("unscii", "/examples/fonts/unscii_8x8.png", 8, 8)
loadBitmapFont("4x4", "/examples/fonts/4x4.png", 4, 4)

const builtinFonts = [
	"monospace",
]

const fonts = [
	...builtinFonts,
	"4x4",
	"unscii",
	"FlowerSketches",
	"apl386",
	"Sans-Serif",
]

let curFont = 0
let curSize = 48
const pad = 24

const input = add([
	color(0, 0, 0),
	pos(pad),
	text("Use WASD to move your character", {
		font: fonts[curFont],
		width: width() - pad * 2,
		size: curSize,
		align: "center",
		lineSpacing: 8,
		letterSpacing: 4,
	}),
])
```
This code allows for me to add the type of font that I want to use, where I want to position it, and what I want it to say. After I learn a few more things I will be planing on making a platformer, where I can use these elements that I have learned so far and use them insisde of the platformer game that I was hopefully be creating by the end of the year.

### Engineering Design Process
I am now slowly starting to shift into the middle part of my engineering design process for this year. As I was tinkering with Kaboom, I am learning these news things that I could hopefully implement on my future Kaboom project. I am planing on using these new things to help me create a platformer game where I can have multiple levels and each one will slowly get more difficult. 

### Skills
The skills that I have learned so far from my tinkering with Kaboom was Consideration and How to learn.

### Consideration
I improved my consideration skill while doing these task since I have to take into consideration how other people will see the text color with the certain background I have. I also had to take into consideration on how fast the character moves, some people like the character to move slow while others might like the character to move fast, so I decided to meet in the middle, so that the chracter doesn't move too slow or too fast. 

### How to learn 
I have improved my skill to learn while doing Kaboom since I have to learn it myself without any assistance, besides the tutorials that are on the internet. I have also improved this skill since some tutorials out there use outdates verisons of Kaboom so I have to learn the newer versions on my own. 

[Previous](entry01.md) | [Next](entry03.md)

[Home](../README.md)
