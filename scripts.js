// Lab 07 JS; Jeffrey Jenkins; 1-6-22

// initializing variables and constants that I want to be in the "global" scope
let userdeletechoice = false
const dateObject = new Date()
let datestring = getDateString()
const mtURLs = ['LakeVahalla.jpg','MtRainier.jpg','FromAMountain.jpg','MtRainierAerial.jpg','MtRainierValleys.jpg']

// Adds a date display to the header
document.getElementById('date-display').textContent += datestring

// Asks the user if they want to "delete" the webpage
userdeletechoice = confirm('Delete this webpage before viewing?')

// Replaces all the content of the <body> element with a snarky message IF the argument passed into
// deletebool is true
// Else asks the user if they want to choose the body text color
function pageDeleter(deletebool){
    if (deletebool) {
        document.body.textContent = "You deleted it you fool. Press \"Cancel\" next time."
    }
    else{
        let usercolor = 'black'
        usercolor = prompt('What color would you like the text?')
        document.body.style.color = usercolor;
    }
}

howManyMountains()

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

function getDateString(){
    const currentyear = dateObject.getFullYear()
    const currentday = dateObject.getDate()
    const currentmonth = dateObject.getMonth() + 1

    return 'Current date: ' + currentyear + ' / ' + currentmonth + ' / ' + currentday
}

// pageDeleter is called last so it overwites content changed by the previous code
pageDeleter(userdeletechoice)
console.log('My javascript ran to the end')
