// // import OpenAI from "openai";
// const OpenAI = require('openai');

// const openai = new OpenAI(); 
// async function main() {
//     const completion = await openai.completions.create({
//         model: 'gpt-3.5-turbo-instruct',
//         prompt: 'Write a tagline for an ice cream shop.'
//     });
//   console.log(completion);
// }

//store some data in an object at different indexes



document.addEventListener ("click", function (e) {
    const pairings = {
        0: 'hard seltzer',
        1: 'red-wine',
        2: 'white-wine',
        3: 'IPA',
        4: 'pilsner',
        5: '4Loko',
        6: 'sake',
        7: 'budweiser',
        8: 'soju',
        9: 'everclear'
    }
    const food = {
        0: 'salmon',
        1: 'cheeseburgers',
        2: 'pizza',
        3: 'snails',
        4: 'tacos',
        5: 'soup',
        6: 'sushi'
    }
    // get the title
    let title = document.querySelector('strong').innerHTML;
    console.log(title);

    //const pattern = /title="[^"]*/;

    // get the description and genre tags
    // use template literal to get request format
    // let apiCallPrompt = `Provide a food or drink recommendation to pair
    // with ${title}. Your response must be in the following format: "Try pairing ${title} with [xyz pairing]"`;
    // console.log(apiCallPrompt);
    // make call to openAI API and store the response
    //main();
    //get a random option from our options array
    const option = pairings[Math.floor(Math.random()*9)];
    const foodOption = food[Math.floor(Math.random()*6)];
    //alert the response to the screen
    window.alert(`Try pairing ${title} with ${option} and ${foodOption}!`);
    //access the dive that holds the show preview
    // const preview = document.getElementsByClassName('ptrack-container')[0];
    const preview = document.getElementsByClassName('previewModal--detailsMetadata-right')[0];
    //create a new div that holds our pairing recommendation
    const DIV = document.createElement('div');
    //append the pairing div to the show preview
    preview.appendChild(DIV);
    DIV.style.zIndex= ('2147483647');
    DIV.style.backgroundColor = ('red');
    DIV.innerHTML = `Try pairing ${title} with ${option} and ${foodOption}!`;


})
