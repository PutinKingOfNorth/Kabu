/**
 @param {number} min - the inclusive minmum number
 @param {number} max - this exclusice maximum number
 @returns {number} a random number of the form: min<=x<max
 */
function random(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
}