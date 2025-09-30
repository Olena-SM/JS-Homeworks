const reg = /\b(?!\w*[aA])\w{6,}\b/g;
const options = "Wonderful Joyful Happiness Time Task Apple";
console.log(options.match(reg));