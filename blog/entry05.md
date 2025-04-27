# Entry 5
##### 4/25/25

## Creating Powerups
Since I first started this kaboom project I always wanted to add special abilities that would help you to progress through harder and harder levels as you go. When the player would touch a fruit they would get special abilities based on which type of fruit it is. The abilities that the player would get would be either growing bigger, super jump, or super speed.
![Screen recording 2025-04-27 1.27.54 PM.gif](https://github.com/romeof8735/sep11-freedom-project/blob/4f2ad76e7233657d203b1f75b621e5e56441b200/img%20and%20gif/Screen%20recording%202025-04-27%201.27.54%20PM.gif)

The red apple allows for you to grow bigger, the green apple makes you run faster, and the gold apple gives you super jump. I was able to create this by using this code:
```
loadSprite("apple", "/sprites/apple.png")
loadSprite("apple2", "/sprites/apple2.webp")
loadSprite("apple3", "/sprites/apple3.jpg")

let hasApple = false

	player.onCollide("apple", (a) => {
		destroy(a)
		player.biggify(3)
		hasApple = false
	})

	let hasApple2 = false

	player.onCollide("apple2", (a2) => {
		destroy(a2)
		currentJumpForce = JUMPBOOSTED;

		wait(1.5, () => {
			currentJumpForce = JUMP_FORCE
		})
	})

	let hasApple3 = false

	player.onCollide("apple3", (a3) => {
		destroy(a3)
		currentMoveSpeed = BOOSTEDSPEED

		wait(2.8, () => {
			currentMoveSpeed = BASESPEED
		})
	})

```
This code allows for when the player touches the apple based on which apple it is (a, a2, or a3) it will then destroy it so that it would appear on the map anymore then based on which apple it is it will give you its ability such as jump force, speed, or size.

## Engineering Design Process
With these powerups I am planing of maybe expanding the map and adding more levels and just keep increasing the difficulty and adding new abilities and making certain coins harder to reach.

## Skills
The skills that I have improved on while working on this project was Attention to detail and and Consideration.

### Attention to detail
I had to make sure that my functions were named properly and ordered correctly because if not then my apples apecial abilites would not function properly as I want them to. I also had to make sure that I got the code correct to where it would allow for the ability to actually function. 

### Considertation
When I first made the custom sprites and play tested the game I noticed that the coins and ghost hitboxes were so large that even if you were some what close to them, the player would end up dying before even touching the ghost. Same with the coins, the player would collect the coin way before the player acutally touched it. So taking that into consideration of how others playing the game would feel I decided to fix it by manually cropping out the extra space on the sprites and then scaling the sprites to become smaller.


[Previous](entry04.md) | [Next](entry06.md)

[Home](../README.md)
