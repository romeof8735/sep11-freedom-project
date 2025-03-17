# Entry 4
##### 3/10/25

## Connecting maps
I was able to connect to maps together using a portal. When the player goes through the portal they get sent to another level of the map. As of right now it looks something like this
![Screen recording 2025-03-16 2 14 53 PM](https://github.com/user-attachments/assets/37b07190-955b-4f1e-9427-121422ee045e)

I was able to create this portal with these other levels by using this code:
```js
kaboom();

// Sprites
loadSprite("bean", "/sprites/bean.png");
loadSprite("spike", "/sprites/spike.png");
loadSprite("grass", "/sprites/grass.png");
loadSprite("portal", "/sprites/ghosty.png"); // Reusing "ghosty" as portal
loadSound("score", "/examples/sounds/score.mp3");

const SPEED = 480;
setGravity(2400);

const levels = [
	[
		"@    ^   P",
		"==========",
	],
	[
		"@       P",
		"=========",
	],
	[
		"@ P",
		"===",
	]
];

let currentLevel = 0;

// Level
function loadLevel(levelIndex) {
	destroyAll();
	const level = addLevel(levels[levelIndex], {
		tileWidth: 64,
		tileHeight: 64,
		pos: vec2(100, 200),
		tiles: {
			"@": () => [
				sprite("bean"),
				area(),
				body(),
				anchor("bot"),
				"player",
			],
			"=": () => [
				sprite("grass"),
				area(),
				body({ isStatic: true }),
				anchor("bot"),
			],
			"^": () => [
				sprite("spike"),
				area(),
				anchor("bot"),
				"danger",
			],
			"P": () => [
				sprite("portal"),
				area(),
				anchor("bot"),
				"portal",
			],
		},
	});

	const player = level.get("player")[0];

	// Movement
	onKeyPress("space", () => {
		if (player.isGrounded()) {
			player.jump();
		}
	});

	onKeyDown("left", () => {
		player.move(-SPEED, 0);
	});

	onKeyDown("right", () => {
		player.move(SPEED, 0);
	});

	player.onCollide("danger", () => {
		loadLevel(currentLevel);
	});

	// Enter portal
	player.onCollide("portal", () => {
		if (currentLevel < levels.length - 1) {
			currentLevel++;
			loadLevel(currentLevel);
		}
	});
}

loadLevel(currentLevel);

```
This code allows for the other player to be sent to the other levels by first creating the portal, then making it so that when the player touches the portal, then curentLevel++. Basically the level that the player is on will increase to the next avaliable level if another level is available. Once the player touches the portal it frist destroyes that whole level and then constructs the next level for that player to be on. 

## Engineering Design Process
With these news levels that can be connected, I am planning on going to make each level more and more difficult. As you progress through the levels there will be a lot of obstacles blocking your path as well as coins that might be difficult to collect. I am going to plan on adding a coin counter so that the player can know how many coins they have collected so far.

## Skills
The skills that I have worked on while completing this was How to Google and Attention to Detail.

### How to Google
I have improved this skill since I was searching around the interent and on youtube on kaboom tutorials on how to link multiple levels together. I had to choose my word choices specify if not they I wouldn't have gotten any tutorials that could help me with my kaboom project. 

### Attention to Detail
I have improved this skill since I had to write and label my sprites and level layout specifically if not then it wont work properly. I also had to make sure that for the destroy part of my code, was writen coretly because it could delete everything and not load the next level to the player, leading to the game being broken.


[Previous](entry03.md) | [Next](entry05.md)

[Home](../README.md)
