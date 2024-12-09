# Tool Learning Log

## Tool: **Kaboom**

### 10/20/24:
* [Kaboom](https://kaboomjs.com/doc/setup)
* With Kaboom it allows you to create video games such as Mario for example
* In this [Kaboom tutorial](https://kaboomjs.com/doc/intro) it explains how the basic necessity of kaboom works
* In that tutorial that they have I tinkered a bit with it and aslong as you follow their tutorial everything should work as intended
* The first thing that I did was getting the spirtes to appear on screen and haveing them at a specific location


### 11/11/24:
* I was able to change the sprites into different ones from the original
```js
loadSprite("character", "/sprites/character.png")
loadSprite("dog", "/sprites/dog.png")
```
* This line changes the sprites into the image that I uploaded in my ide
* I was also to change the player movement
```js
onKeyDown("right", () => {
	player.move(SPEED, 100)
})
```
* This code allows for the character to move diagonally down to the right when the right arrow key is pressed


### 11/24/24
* I was able to make a loader, so that when you run the site there is a loading screen
```js
onLoading((progress) => {

	drawRect({
	width: width(),
	height: height(),
	color: rgb(0, 0, 0),
	})
```
* This allows for a loading screen to be added
* I also made text and shape on the loading screen by using:
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
* This code allows for a shape to be shown at a specfic spot on your screen and how big it is shown

### 12/8/24
* I was able to add text so that way the player could know what to press to move the character. The code I used was:
```js
const input = add([
	text("Use WASD to move the character", {
		font: fonts[curFont],
		width: width() - pad * 2,
		size: curSize,
		align: "left",
		lineSpacing: 8,
		letterSpacing: 4,
		}),
	}),
```
* This allows me to add text for the player to read to help them out.
* Now that I have learned the basics of these things the next thing that I will try and do is create a platformer, which is what my main project is all about.


<!--
* Links you used today (websites, videos, etc)
* Things you tried, progress you made, etc
* Challenges, a-ha moments, etc
* Questions you still have
* What you're going to try next
-->
