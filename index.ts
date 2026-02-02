type User = {
  name: string;
  age: number;
  skills: string[];
};

function describeUser(user: User): string {
  return `${user.name} is ${user.age} years old and knows ${user.skills.join(", ")}`;
}

const dev: User = {
  name: "Ifeanyi",
  age: 25,
  skills: ["JavaScript", "Security", "AI"],
};

console.log(describeUser(dev));



