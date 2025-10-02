var arr = [
    { userName:"Test", lastName:"Test", email:"test.test@gmail.com" },
    { userName:"Dmitro", lastName:"Porohov", email:"dmitro.porohov@yahoo.com" },
    { userName:"Andrii", lastName:"", email:"andrii@mail.ru" },
];

var regex = /[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)?@(gmail\.com|yahoo\.com)/g;

console.log(
    (arr[0].email + " " + arr[1].email + " " + arr[2].email).match(regex)
);