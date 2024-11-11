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



<!--
* Links you used today (websites, videos, etc)
* Things you tried, progress you made, etc
* Challenges, a-ha moments, etc
* Questions you still have
* What you're going to try next
-->
