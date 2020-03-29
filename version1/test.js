// VERSION 1

/*
1.
Write a function that:
- Logs to the console numbers 1 to 100.
- However, if the number is a multiple of both 3 and 5 it should log "Jackpot!" instead of the number.
- If it doesn't pass the function should log "multiple of 3" if it's a multiple of only 3
- If it's a multiple of 5 it should log "This is a multiple of 5"

Hint: use the modulo operator (%) to figure out if it's a multiple of 3/5. Make sure the remainder is 0, in order to pass the condition.
Hint: the order of conditional statements is important!
*/

let showNumbers = function () {
    for (let number = 1; number <= 100; number++) {
        if (number % 3 === 0 & number % 5 === 0) {
            console.log('Jackpot!')
        } else if (number % 5 === 0) {
            console.log('This is a multiple of 5')
        } else if (number % 3 === 0) {
            console.log('This is a multiple of 3')
        } else {
            console.log(number)
        }
    }

}

showNumbers();


/*
2.
Using JavaScript only (adding HTML to index.html is NOT allowed), create a function that:
- Creates a button element (with text "click me!") 
- Creates an empty <img> element and add it to the document.
- When the button is clicked, inserts an image URL into an <img> tag and remove the button
- Use the following image URL: https://avatars3.githubusercontent.com/u/20858568?s=200&v=4
*/


let showImage = function() {
    let btn = document.createElement('button');
    document.body.appendChild(btn);
    btn.innerText = 'Click me!';
    let img = document.createElement('img');
    document.body.appendChild(img);
    btn.addEventListener('click', () =>{
        img.setAttribute('src', 'https://avatars3.githubusercontent.com/u/20858568?s=200&v=4')
        btn.style.display = 'none'
    } )

}

showImage();


/*
3.
Write a function that:
- Makes an API call using the Fetch API
- Uses the following API: https://reqres.in/api/users
- Parses the response and then displays the "first_name" and "last_name" of the first THREE users within the DOM
- Creates an <ul> for each user
- Makes use of async/await
*/

async function showUser () {
    try {
        let response = await fetch('https://reqres.in/api/users')
        let users = await response.json();
     
        // console.log(response)
        // console.log(users.data)
                        
        for (let i = 0; i < 3; i++){
            console.log(users.data[i])
            let ulEl = document.createElement('ul');
            document.body.appendChild(ulEl);
            ulEl.innerHTML = ` ${users.data[i].id}. ${users.data[i].first_name} ${users.data[i].last_name } `
        }
      } catch(err) {
        console.log('Error:' + err);
      }
    }

    
showUser();