// VERSION 2

/*
1.
Using JavaScript only (adding HTML to index.html is NOT allowed), create a function that:
- Takes as an argument an array of objects
- Outputs the details of both books into the DOM. 
- Creates an unordered list for each book

Use the following array of objects:
*/
const books = [
	{
		bookName: 'The Nature of Software Development',
		author: 'Ron Jeffries',
		coverURL: 'https://cdn-images-1.medium.com/max/1200/1*CQRh-pFTZ97ReXogbefleQ.png',
	},
	{
		bookName: 'Clean Code',
		author: 'Robert Cecil Martin',
		coverURL: 'https://images-na.ssl-images-amazon.com/images/I/515iEcDr1GL._SX258_BO1,204,203,200_.jpg',
	},
	{
		bookName: 'Refactoring',
		author: 'Kent Beck & Martin Fowler',
		coverUrl: 'https://s.s-bol.com/imgbase0/imagebase3/large/FC/3/0/2/0/9200000005430203.jpg',
	},
];

/*
2.
Write a function that:
- Makes an API call using the Fetch API.
- Uses the following URL: https://jsonplaceholder.typicode.com/users/1
- Displays the "name", "email" and "city" of the first person inside an unordered list
- Makes use of async/await
*/

/*
3.
Write a JavaScript function that:
- Accepts a string of 4 words as an argument
- Converts the first letter of each word of the string in upper case.
  
  Example: 'the quick brown fox'
  Expected Output: 'The Quick Brown Fox '
*/
