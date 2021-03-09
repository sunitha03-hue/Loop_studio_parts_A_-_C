//Part A #1: Initialize variables to store the following arrays. Remember to use descriptive names.

let protein = ['chicken', 'pork', 'tofu', 'beef', 'fish', 'beans'];
let grain = ['rice', 'pasta', 'corn', 'potato', 'quinoa', 'crackers'];
let vegetable = ['peas', 'green beans', 'kale','edamame', 'broccoli', 'asparagus'];
let beverage = ['juice', 'milk', 'water', 'soy milk', 'soda', 'tea'];
let dessert = ['apple', 'banana', 'more kale','ice cream', 'chocolate', 'kiwi'];
let meal = [];
meal.push(protein, grain, vegetable, beverage, dessert);
//Part A #2: Construct a for loop that assembles a meal for each of 6 astronauts.
console.log("Meal for each Astronauts");
for (let i=0; i<meal.length; i++)
{
  mealList1 = [];
  mealList2 = [];
  mealList3 = [];
  mealList4 = [];
  mealList5 = [];
  mealList6 = [];

  mealList1.push(protein[0], grain[0], vegetable[0], beverage[0], dessert[0]);
  mealList2.push(protein[1], grain[1], vegetable[1], beverage[1], dessert[1]);
  mealList3.push(protein[2], grain[2], vegetable[2], beverage[2], dessert[2]);
  mealList4.push(protein[3], grain[3], vegetable[3], beverage[3], dessert[3]);
  mealList5.push(protein[4], grain[4], vegetable[4], beverage[4], dessert[4]);
  mealList6.push(protein[5], grain[5], vegetable[5], beverage[5], dessert[5]);
  console.log ("Meal List 1: ", mealList1);
  console.log ("Meal List 2: ", mealList2);
  console.log ("Meal List 3: ", mealList3);
  console.log ("Meal List 4: ", mealList4);
  console.log ("Meal List 5: ", mealList5);
  console.log ("Meal List 6: ", mealList6);
  break;
}
//console.log("Pantry: ", meal);
//Part C #5: Using a while loop, ask the user to select the number of meals to assemble.  Validate the input to make sure it is an integer from 1 - 6.
const input = require('readline-sync');
enterMeal = Number(input.question("Enter the number of meals: "));
while(enterMeal < 0 || enterMeal > 6 || !Number.isInteger(enterMeal))
{
  enterMeal = Number (input.question("Invalid input. Please enter number greater than 0 and less than 6: "));
}
let newList = [];
for(let i=0;i<enterMeal;i++)
{
newList.push(protein[i]);
newList.push(grain[i]);
newList.push(vegetable[i]);
newList.push(beverage[i]);
newList.push(dessert[i]);
}
console.log(newList);

//Skill boosts: 
// a. Use string formatting to print something more interesting than “[‘chicken’, ‘rice’, ‘peas’, ‘juice’, ‘apple’]” for the meal outputs.
// b. Use an “array of arrays” to store the food options in a ‘pantry’.
// c. Modify your code to check each meal for kale.  If present, after the meal output add, “Don’t worry, you can have double chocolate tomorrow.”
if (newList.includes('kale'))
{
  console.log("Don’t worry, you can have double chocolate tomorrow.")
}