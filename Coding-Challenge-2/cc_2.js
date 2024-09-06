// Task 1 Calculate the Tip
let bill = 70;
let tip = bill > 25 ? bill * 0.24 : bill * 0.12;

console.log(`Bill: $${bill.toFixed(2)}`);
console.log(`Tip: $${tip.toFixed(2)}`);
console.log(`Total: $${(bill + tip).toFixed(2)}`);

//Task 2 Output Details
let Total = bill + tip;

console.log(`Bill: $${bill.toFixed(2)}`);
console.log(`Tip: $${tip.toFixed(2)}`);
console.log(`Total: $${(bill + tip).toFixed(2)}`)
//Task 3 Create function for calculateTip
function calculateTip(bill) {
    return bill > 25 ? bill * 0.24 : bill * 0.12;
}
let Tips = calculateTip(bill);

//Task 4 Create an Array
let tips = bill.map(calculateTip);
let bills = [20,25,50,75,100];
console.log("Bills:", bills);
console.log("Tips:", tips.map(tip=> tip.toFixed(2)));
console.log("Totals:", totals.map(total=> total.toFixed(2)));
// Task 5 Test with given Values
function calculateTip(bill) {
    return bill > 25 ? bill * 0.24 : bill * 0.12;
}

let Bills = [40,44,125,275,430,555];
let totals =bill.map((bill, index)=> bill + tips[index]);
console.log("Tips:", tips.map(tip=> tip.toFixed(2)));
console.log("Bills:", bills);
console.log("Totals:", totals.map(total=> total.toFixed(2)));
