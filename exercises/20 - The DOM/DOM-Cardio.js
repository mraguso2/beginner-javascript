// Make a div
const div = document.createElement("div");
// add a class of wrapper to it
div.classList.add('wrapper');
console.log(div);
// put it into the body
const body = document.querySelector('body');
body.appendChild(div);
console.log(body);
// make an unordered list
const ul = document.createElement("ul");

// add three list items with the words "one, two three" in them
// put that list into the above wrapper
const item = document.createElement('li');
const one = item.cloneNode(true);
const two = item.cloneNode(true);
const three = item.cloneNode(true);
one.textContent = 'one';
two.textContent = 'two';
three.textContent = 'three';
ul.appendChild(one);
ul.appendChild(two);
ul.appendChild(three);
div.appendChild(ul);

// create an image
const img = document.createElement('img');
// set the source to an image
img.src = 'https://www.thesprucepets.com/thmb/3-ISVJpCrp9TUfeRdH1mfzJlHGg=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/golden-retriever-puppy-in-grass-923135452-5c887d4146e0fb00013365ba.jpg'
// set the width to 250
img.width = 250;
// add a class of cute
img.classList.add('cute');
// add an alt of Cute Puppy
img.alt = 'Cute Puppy';
// Append that image to the wrapper
div.appendChild(img);

// with HTML string, make a div, with two paragraphs inside of it
// put this div before the unordered list from above
const str = `
    <div>
        <p>Paragraph 1</p>
        <p>paragraph 2</p>
    </div>
`

ul.insertAdjacentHTML('beforebegin', str);

// add a class to the second paragraph called warning
const p2 = document.querySelectorAll('.wrapper p')[1]
p2.classList.add('warning');
// console.log(p2)
// remove the first paragraph
document.querySelectorAll('p')[0].remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height
// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>
function generatePlayerCard(name, age, height) {
    const str = `
        <div class="playerCard">
            <h2>${name} — ${age}</h2>
            <p>They are ${height} and ${age} years old. In Dog years this person would be ${age * 7}. That would be a tall dog!</p>
            <button class="removeButton" type='button' role='button'>&times; Delete</button>
        </div>
    `;

    const htmlStr = document.createRange().createContextualFragment(str);

    return htmlStr;
}

// make a new div with a class of cards
const divCards = document.createElement('div');
divCards.classList.add('cards')
console.log(divCards);

// Have that function make 4 cards
const card1 = generatePlayerCard('jim', 32, '77in')
const card2 = generatePlayerCard('mike', 25, '66in')
const card3 = generatePlayerCard('tim', 28, '72in')
const card4 = generatePlayerCard('eric', 12, '47in')
// append those cards to the div
divCards.appendChild(card1);
divCards.appendChild(card2);
divCards.appendChild(card3);
divCards.appendChild(card4);
// put the div into the DOM just before the wrapper element
// div.appendChild(divCards);
div.insertAdjacentElement('beforebegin', divCards);
// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
const butts = document.querySelectorAll('button.removeButton');
// make out delete function
function deleteMe(e) {
    const clickedButt = e.currentTarget;
    clickedButt.closest('.playerCard').remove();
    console.log('Delete Card');
}
// loop over them and attach a listener
butts.forEach((butt) => {
    butt.addEventListener('click', deleteMe)
})
