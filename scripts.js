// Lab 07 + Lab 08 JS; Jeffrey Jenkins; 1-6-22

// initializing variables and constants that I want to be in the "global" scope, mainly for conceptual reasons
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

// Writes the datestring into the "date-display" element
document.getElementById('date-display').textContent += datestring

// Asks the user if they really want to see the webpage, will only accept "yes"
function askUserToSee(){
    let answer = prompt('This webpage is not great. Are you sure you want to see it?')
    console.log(answer)
    if (answer.toLowerCase() !== 'yes'){
        do{
        answer = prompt('Well, it\'d be rude to not see it. You should just say yes.')
        } while (answer.toLowerCase() !== 'yes')
    }
}

// Changes the body's text color based on the user's input
function colorChoice(){
    let usercolor = 'black'
    usercolor = prompt('What color would you like the heading text?')
    document.body.style.color = usercolor;
}

// asks how many mountains user wants to see
function howManyMountains(){
    // The user input needs to be subtracted by 1 to adjust for the image array index starting at 0
    let mtqty = prompt('How many mountain pictures do you want to see? Choose from 1 to 5.') - 1
    do{
        // calls the addImageElement function, passing in the URL it has pulled from the array and the current mtqty value
        addImageElement(mtURLs[mtqty], mtqty)
        mtqty--
    } while ((mtqty >= 0) && (mtqty < 4))
}

// this function creates an image element with document.createElement('img')
// sets its src to the URL passed in from the mtURL array
// then uses the index passed in to choose an insert location aka insert node
// which happen to be <p> elements already in the HTML with integer ids from 1 to 5
// and finally the insertBefore() function is used to add in the element we've just constructed.
// The insertBefore() function must be called on the "parent node" of the elements insertBefore() is looking for.
function addImageElement(URL, qty){
    let newImg = document.createElement('img')
    newImg.src = URL
    let insertlocation = document.getElementById(qty.toString) // the qty parameter is used here so that different <p> elements recieve a given <img>, this avoids any overwriting.
    document.getElementById('galleryparent').insertBefore(newImg, insertlocation)
}

// calls all the various functions above
askUserToSee()
colorChoice()
howManyMountains()

console.log('My javascript ran to the end')
