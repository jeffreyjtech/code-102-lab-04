// Lab 07 JS; Jeffrey Jenkins; 1-6-22

// initializing variables and constants that I want to be in the "global" scope
const dateObject = new Date()
const mtURLs = ['LakeVahalla.jpg','MtRainier.jpg','FromAMountain.jpg','MtRainierAerial.jpg','MtRainierValleys.jpg']

// this function creates a string with date format YYYY / M / D
function getDateString(){
    const currentyear = dateObject.getFullYear()
    const currentday = dateObject.getDate()
    const currentmonth = dateObject.getMonth() + 1

    return 'Current date: ' + currentyear + ' / ' + currentmonth + ' / ' + currentday
}

let datestring = getDateString()

// Adds a date display to the header and writes in the datestring
document.getElementById('date-display').textContent += datestring

// Asks the user if they want to "delete" the webpage, won't accept a yes though
function askUserDelete(){
    let answer = prompt('Delete this webpage before viewing?')
    console.log(answer)
    if (answer.toLowerCase() === 'yes'){
        do{
        answer = prompt('Actually you can\'t, try a different answer')
        } while (answer.toLowerCase() === 'yes')
    }
}

function colorChoice(){
    let usercolor = 'black'
    usercolor = prompt('What color would you like the heading text?')
    document.body.style.color = usercolor;
}

function howManyMountains(){

    // asks how many mountains user wants to see, minus 1 in order to adjust for the image array index starting at 0, not 1.
    let mtqty = prompt('How many mountain pictures do you want to see?') - 1
    do{
        addImageElement(mtURLs[mtqty], mtqty)
        mtqty--
    } while (mtqty >= 0)
}

// this function creates an image element with document.createElement('img')
// sets its src to the URL passed in from the mtURL array
// then uses the index passed in to choose an insert location aka insert node
// which happen to be <p> elements already in the HTML with integer ids from 1 to 5
// and finally the insertBefore() function needs "parent node" to look for, aka the parent element of the <p> elements
function addImageElement(URL, qty){
    let newImg = document.createElement('img')
    newImg.src = URL
    let insertlocation = document.getElementById(qty.toString) // since ids are strings, it makes me feel better to turn the qty into a string
    document.getElementById('galleryparent').insertBefore(newImg, insertlocation)
}

// call prompt functions
askUserDelete()
colorChoice()
howManyMountains()

// pageDeleter is called last so it overwites content changed by the previous code
console.log('My javascript ran to the end')
