/**
 * @param {string[]} playlist
 * @param {string} song
 * @returns {boolean} whether `song` is in `playlist`
 * @returns `false` if `playlist` is empty
 */
export function isSongInPlaylist(playlist, song) {
  if (playlist.length === 0) {
    return false;
  }

  for (const songInPlaylist of playlist) {
    if (songInPlaylist === song) {
      return true;
    }
  }
  return false;
}

/**
 * @param {number[]} numbers
 * @returns {boolean} whether all `numbers` are even
 * @returns `undefined` if `numbers` is empty
 */
export function isAllEven(numbers) {
  if (numbers.length === 0) {
    return undefined;
  }

  for (let num of numbers) {
    if (num % 2 !== 0) {
      return false;
    }
  }
  return true;
}

/**
 * @param {{category: string}[]} backpack
 * @param {number} people
 * @returns {boolean} whether there is enough food in the backpack to feed everyone
 */
export function haveEnoughFood(backpack, people) {
  if (!Array.isArray(backpack) || typeof people !== "number") {
    return false;
  }

  if (people === 0) {
    return true;
  }

  // Count how many items in backpack have category === "food"
  const foodCount = backpack.filter((item) => item.category === "food").length;

  return foodCount >= people;
}
