// Class 07 scripts; Jeffrey Jenkins; 1-6-22

let userdeletechoice = false
    
userdeletechoice = window.confirm('Delete this webpage before viewing?')

function pageDeleter(deletebool){
    if (deletebool) {
        document.body.textContent = "You deleted it you fool. Press \"Cancel\" next time."
    }
    else{
        let usercolor = 'black'
        usercolor = prompt('What color would you like the text?')
        document.body.style.color = usercolor.toLowerCase();
    }
}

pageDeleter(userdeletechoice)

const dateObject = new Date()
const currentyear = dateObject.getFullYear()
const currentday = dateObject.getDate()
const currentmonth = dateObject.getMonth() + 1

for (let counter=0; counter <= 9; counter++) {
    console.log(counter)
}

let whilebreaker = 0

while (whilebreaker <= 10){
    console.log('Whilebreaker tries:' + whilebreaker)
    whilebreaker++
}

 let userislame = true

 while (userislame){  
    if(prompt('You must be !lame to pass? Are you lame? (y/n)')==='n'){
        userislame = false
    }
}

document.getElementById('timedisplay').textContent += 'Current date: ' + currentyear + ' / ' + currentmonth + ' / ' + currentday