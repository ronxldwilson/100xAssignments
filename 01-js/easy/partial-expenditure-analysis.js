/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  // First we need to find all the categories that exist
  // and then we can find the total for each of them
  let category=[];
  for(let i = 0;i<transactions.length;i++){
    category.push(transactions[i].category);
  }
  let filtered = category.filter((item,index) => arr.indexOf(item) === index)

  for(let i=0;i<transactions.length;i++){
    let itemCost = transactions[i].price;
    
  }


  return ;
}

module.exports = calculateTotalSpentByCategory;
