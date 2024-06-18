// Assuming you have an interface for the monthlyIncomes object
interface MonthlyIncomes {
  [key: string]: number | null;
}

// Assuming you have an object with monthly incomes
const monthlyIncomes: MonthlyIncomes = {
  salary: 5000,
  bonus: 1000,
  // ...
};

// Accessing the bonus income
console.log(monthlyIncomes["bonus"]); // Output: 1000

// You can also add a default value if the key does not exist
console.log(monthlyIncomes["bonus"] ?? 0); // Output: 1000

// You can also use destructuring to extract the bonus income
const { bonus } = monthlyIncomes;
console.log(bonus); // Output: 1000

// You can also use a switch statement to handle different types of income
switch (key) {
  case "salary":
    console.log(monthlyIncomes[key]);
    break;
  case "bonus":
    console.log(monthlyIncomes[key]);
    break;
  default:
    console.log("Unknown income type");
    break;
}
