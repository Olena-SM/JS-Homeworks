const reg = /\b[^aA]{6,}\b/g;

const options = "Wonderful Joyful Happiness Time Task Apple";

const result = options.match(reg);

console.log(result);