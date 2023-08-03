export const generatePlayerState = (playerNumber) => {
  const players = Array.from({ length: playerNumber }, (_, index) => ({
    name: `Player ${index + 1}`,
    score: 0,
    isActive: index === 0,
    isWinner: false,
  }));

  return {
    activePlayerIndex: 0,
    players,
  };
};

export const gameReducer = (state, action) => {
  switch (action.type) {
    case "Switch_Player": {
      const updatedPlayers = state.players.map((player, index) => ({
        ...player,
        isActive:
          index === (state.activePlayerIndex + 1) % state.players.length,
      }));
      return {
        ...state,
        activePlayerIndex: (state.activePlayerIndex + 1) % state.players.length,
        players: updatedPlayers,
      };
    }
    case "Increment_Score": {
      const { playerIndex } = action;
      return {
        ...state,
        players: state.players.map((player, index) => {
          if (index === playerIndex) {
            return {
              ...player,
              score: player.score + 1,
            };
          }
          return player;
        }),
      };
    }
    case "finished": {
      const highestScore = Math.max(
        ...state.players.map((player) => player.score),
      );
      const winners = state.players.filter(
        (player) => player.score === highestScore,
      );
      return {
        ...state,
        players: state.players.map((player) => ({
          ...player,
          isWinner: winners.includes(player),
        })),
      };
    }
    default: {
      return state;
    }
  }
};
