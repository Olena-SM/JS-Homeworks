var services = {
  "стрижка": "60 грн",
  "гоління": "80 грн",
  "Миття голови": "100 грн"
};

services["Розбити скло"] = "200 грн";

services.price = function () {
  var sum = 0;
  for (var key in this) {
    if (typeof this[key] === "string") {
      var num = parseInt(this[key]);
      sum += num;
    }
  }
  return sum + " грн";
};

services.minPrice = function () {
  var min = Infinity;
  for (var key in this) {
    if (typeof this[key] === "string") {
      var num = parseInt(this[key]);
      if (num < min) {
        min = num;
      }
    }
  }
  return min + " грн";
};

services.maxPrice = function () {
  var max = -Infinity;
  for (var key in this) {
    if (typeof this[key] === "string") {
      var num = parseInt(this[key]);
      if (num > max) {
        max = num;
      }
    }
  }
  return max + " грн";
};

console.log(services.price());
console.log(services.minPrice());
console.log(services.maxPrice());
