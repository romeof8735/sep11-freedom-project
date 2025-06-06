import kaboom from "kaboom"

kaboom({
	background: [0],
})

camScale(1)

loadSprite("bean", "/sprites/bean.png")
loadSprite("ghosty", "/sprites/ghosty.jpg")
loadSprite("spike", "/sprites/spike.png")
loadSprite("grass", "/sprites/grass.png")
loadSprite("apple", "/sprites/apple.png")
loadSprite("apple2", "/sprites/apple2.webp")
loadSprite("apple3", "/sprites/apple3.jpg")
loadSprite("portal", "/sprites/portal.jpg")
loadSprite("coin", "/sprites/coin.webp")
setGravity(3200)

function big() {
	let timer = 0
	let isBig = false
	let destScale = 1
	return {
		id: "big",
		require: ["scale"],
		update() {
			if (isBig) {
				timer -= dt()
			}
			this.scale = this.scale.lerp(vec2(destScale), dt() * 6)
		},
		isBig() {
			return isBig
		},
		biggify(time) {
			destScale = 2
			timer = time
			isBig = true
		},
	}
}

let timer = 0
let timerRun = false

onUpdate(() => {
	if (timerRun) {
		timer += dt()
		timerLabel.text = "Time: " + timer.toFixed(1)
	}
})

const JUMP_FORCE = 1360
const JUMPBOOSTED = 2000
let currentJumpForce = JUMP_FORCE

const MOVE_SPEED = 480
const FALL_DEATH = 2400

const BASESPEED = 480
const BOOSTEDSPEED = 1000
let currentMoveSpeed = BASESPEED

const LEVELS = [
	[
		"            ",
		"            ",
		"          = $",
		"          = $",
		"          = $",
		"          = $",
		"          = $",
		"          = $",
		"  !     % = $",
		"          = $",
		"      ^   = $",
		"=========== $",
		"          = $",
		"          = $",
		"          = $",
		"          = $",
		"          = $",
		"          = $",
		"          = $",
		"          = *",

	],
	[
		"                              ",
		"                              ",
		"                              ",
		"                              ",
		"                              ",
		"                     $        ",
		"                              ",
		"  @      $$$$      ====       ",
		"         ====         =       ",
		"                      =       ",
		"     ^^         !!!!!!= $ ^^ *",
		"==============================",
	],
	[
			   "                                                                                                           =",
	   "                                                                                                           =",
	   "                                                                                                           =",
	   "                                                                                                           =",
	   "                                                                                                           =",
	   "                                                                                                           =",
	   "                                                                                                           =",
	   "                                                                         $     $     @          $       $  =",
	   "                                                                         =     =     =       ======     =  =",
       "                                                                         =     =     =          =       =  =",
	   "                                                                         =     =     =          =       =  =",
	   "                                                                         =     =     =          =       =  =",
	   "                                                                         =     =     =          =       =  =",
	   "                                                                         =     =     =          =       =  =",
	   "                                                                         =     =     =          =       =  =",
	   "   ^^   !   !   !    ^^^  &  $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ % =     =     =^^^^^^^^^^=!!!!!!!=$*=",
	   "=============================================================================================================",
	],
]

const levelConf = {
	tileWidth: 64,
	tileHeight: 64,
	tiles: {
		"=": () => [
			sprite("grass"),
			area(),
			body({ isStatic: true }),
			anchor("bot"),
			offscreen({ hide: true }),
			"platform",
		],
		"$": () => [
			sprite("coin"),
			area(),
			scale(0.2),
			pos(0, -9),
			anchor("bot"),
			offscreen({ hide: true }),
			"coin",
		],
		"^": () => [
			sprite("spike"),
			scale(0.5),
			area(),
			body({ isStatic: true }),
			anchor("bot"),
			offscreen({ hide: true }),
			"danger",
		],
		"@": () => [
			sprite("apple"),
			scale(0.2),
			area(),
			anchor("bot"),
			body(),
			offscreen({ hide: true }),
			"apple",
		],
		"%": () => [
			sprite("apple2"),
			scale(0.1),
			area(),
			anchor("bot"),
			body(),
			offscreen({ hide: true }),
			"apple2",
		],
		"&": () => [
			sprite("apple3"),
			scale(0.2),
			area(),
			anchor("bot"),
			body(),
			offscreen({ hide: true }),
			"apple3",
		],
		"!": () => [
			sprite("ghosty"),
			scale(0.28),
			area(),
			anchor("bot"),
			body(),
			offscreen({ hide: true }),
			"enemy",
		],
		"*": () => [
			sprite("portal"),
			scale(0.1),
			area({ scale: 0.5 }),
			anchor("bot"),
			pos(0, -12),
			offscreen({ hide: true }),
			"portal",
		],
	},
}

scene("game", ({ levelId, coins } = { levelId: 0, coins: 0 }) => {

	const level = addLevel(LEVELS[levelId ?? 0], levelConf)

	const player = add([
		sprite("bean"),
		pos(0, 0),
		area(),
		scale(1),
		body(),
		big(),
		anchor("bot"),
	])

	player.onUpdate(() => {
		camPos(player.pos)
		if (player.pos.y >= FALL_DEATH) {
			go("lose")
		}
	})

	player.onBeforePhysicsResolve((collision) => {
		if (collision.target.is(["platform", "soft"]) && player.isJumping()) {
			collision.preventResolution()
		}
	})

	player.onPhysicsResolve(() => {
		camPos(player.pos)
	})

	player.onCollide("danger", () => {
		go("lose")
	})

	player.onCollide("portal", () => {
		if (levelId + 1 < LEVELS.length) {
			go("game", {
				levelId: levelId + 1,
				coins: coins,
			})
		} else {
			go("win")
		}
	})

	player.onCollide("enemy", () => {
		go("lose")
	})

	player.onCollide("apple", (a) => {
		destroy(a)
		player.biggify(3)
	})

	player.onCollide("apple2", (a2) => {
		destroy(a2)
		currentJumpForce = JUMPBOOSTED
		wait(1.5, () => {
			currentJumpForce = JUMP_FORCE
		})
	})

	player.onCollide("apple3", (a3) => {
		destroy(a3)
		currentMoveSpeed = BOOSTEDSPEED
		wait(2.8, () => {
			currentMoveSpeed = BASESPEED
		})
	})

	player.onCollide("coin", (c) => {
		destroy(c)
		coins++
		coinsLabel.text = coins
	})

	const coinsLabel = add([
		text(coins),
		pos(24, 24),
		fixed(),
	])

	function jump() {
		if (player.isGrounded()) {
			player.jump(currentJumpForce)
			camScale(0.6)
			wait(0.7, () => {
				camScale(1)
			})
		}
	}

	onKeyPress("space", jump)

	onKeyDown("left", () => {
		player.move(-currentMoveSpeed, 0)
	})

	onKeyDown("right", () => {
		player.move(currentMoveSpeed, 0)
	})

	onKeyPress("down", () => {
		player.weight = 3
	})

	onKeyRelease("down", () => {
		player.weight = 1
	})
})

scene("lose", () => {
	add([
		text("You Lose. Press space bar to reset"),
		anchor("center"),
		pos(center()),
	])
	onKeyPress(() => go("game"))
})

scene("win", () => {
	add([
		text("You Win Congrats!"),
		anchor("center"),
		pos(center()),
	])
	onKeyPress(() => go("game"))
})

go("game")
