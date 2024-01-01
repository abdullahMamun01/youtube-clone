export const  formatSubscribersCount = (subscribersCount) => {
    if (subscribersCount < 1000) {
      return subscribersCount.toString();
    } else if (subscribersCount < 1000000) {
      return Math.floor(subscribersCount / 1000) + 'k';
    } else {
      return Math.floor(subscribersCount / 1000000) + 'm';
    }
  }
  
  // Example usage:

  