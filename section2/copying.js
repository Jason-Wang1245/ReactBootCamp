const person = {
  name: "Jason",
};

const newPerson = { ...person };

person.name = "bob";

console.log(newPerson);
