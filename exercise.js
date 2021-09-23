/*
  Exercise 01
  -----------
  Highlight all of the words over 8 characters long 
  in the paragraph text (with a yellow background 
  for example)
*/
const p = document.querySelector('p');

let modifyWord = p.innerHTML.split(' ').map((word)=>{
    if(word.length > 8){
        if(word.includes('.')|| word.includes(',')||word.includes('!')){   
         return `<span style='background-color: yellow'>${word.slice(0, word.length-1)} </span> ${word.slice(word.length-1, word.length)}`;
        }else{
        return `<span style='background-color: yellow'>${word} </span>`;
        }
    }
    return word;
}).join(' ');
p.innerHTML = modifyWord;

/*
  Exercise 02
  -----------
  Add a link back to the source of the text after 
  the paragraph tag.
  (http://officeipsum.com/)
*/
const body = document.querySelector('body');
const link = document.createElement('a');
link.setAttribute('href', 'http://officeipsum.com/');
link.textContent = "LINK"
p.appendChild(link);

/*
  Exercise 03
  -----------
  Split each new sentence on to a separate line 
  in the paragraph text.
  A sentence can be assumed to be a string of 
  text terminated with a period (.)
*/

p.innerHTML = p.innerHTML.split('.').map(newP => {
    return `<br>${newP}`;  
}).join('.');



/* 
  Exercise 04
  -----------
  Count the number of words in the paragraph tag 
  and display the count afer the heading.
  You can assume that all words are separated by 
  one singular whitespace.
*/
const h1 = document.querySelector('h1');
let counts =p.innerHTML.split(' ').length;
const countP = document.createElement('p');
countP.innerText = `count:${counts}`;
h1.appendChild(countP);

/*
  Exercise 05
  -----------
  Replace all question marks (?) with thinking 
  faces (🤔) and exclamation marks (!) with 
  astonished faces (😲) 
*/
p.innerHTML = p.innerHTML.replaceAll("?", "🤔").replaceAll("!", "😲");
