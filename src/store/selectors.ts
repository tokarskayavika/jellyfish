export const jellyPosition = (state) => state.jelly.position;
export const jellySprite = (state) => state.jelly.sprite;

export const sharkPosition = (state) => state.shark.position;

export const paused = (state) => state.game.paused;
export const rafID = (state) => state.game.rafId;
export const remainingLives = (state) => state.game.lives;
export const gameOver = (state) => state.game.over;
export const gameScore = (state) => state.game.score;

export const bubbleList = (state) => state.bubbles.list;

export const sharkBitesJelly = (state) => {
    if (!state.shark || !state.jelly) {
        return;
    }

    const sharkPosition = state.shark.position;
    const jellyPosition = state.jelly.position;

    

    return (jellyPosition.x < sharkPosition.x + 400 && jellyPosition.x > sharkPosition.x && 
        jellyPosition.y < sharkPosition.y + 100 && jellyPosition.y > sharkPosition.y - 50);
}

export const jellyTouchesBubble = (state) => {
	if (!state.jelly) {
        return;
    }

	const jellyPosition = state.jelly.position;
	const bubbles = state.bubbles.list;

	for (let i = 0; i < bubbles.length; i++) {
		let object = bubbles[i];
        if (jellyPosition.x < object.x + 35 && jellyPosition.x > object.x - 35 && 
        	jellyPosition.y < object.y + 35 && jellyPosition.y > object.y - 35) {
                return { index: i };
        }
    }

    return false;
};