module.exports = {
  get_emoji: () => {
    const randomNum = Math.random();
    let emoji = "📗";

    if (randomNum > 0.9) {
      emoji = "🍔";
    } else if (randomNum > 0.8) {
      emoji = "🌭";
    } else if (randomNum> 0.7){
      emoji = "🥞";
    }else if (randomNum > 0.6){
      emoji = "🥪";
    }else if (randomNum > 0.5){
      emoji = "🍕";
    }else if(randomNum > 0.4){
      emoji = "🌯";
    }else if(randomNum > 0.3){
      emoji = "🍜";
    }else if(randomNum > 0.2){
      emoji = "🥗";
    }else if(randomNum > 0.1){
      emoji = "🍣";
    }

    return `<span for="img" aria-label="book">${emoji}</span>`;
  },
};
