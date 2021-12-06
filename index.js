// geting the HTML content into JS file
const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumberButton = document.querySelector("#check-number");
const outputBox = document.querySelector("#output-box");

// now we will create a function to calculate sum of the DOB

function compareValues(sum, luckyNumber) {
    if(sum%luckyNumber==0) {
        outputBox.innerText= "YAY! Your birthday is lucky 🎂";
    }
    else {
        outputBox.innerText = "OOPS! Your birthday is not lucky as per the lucky number provided by you"
    }
}

function checkBirthdayIsLucky() {
    const dob = dateOfBirth.value;
    const sum = calculateSum(dob); 
    if(sum && dob) 
    compareValues(sum, luckyNumber.value);
    else
    outputBox.innerText="Please enter both the fields";
}

function calculateSum(dob) {
    // now we need to add the DOB and to do this we need to remove the "-" and to do this we use replaceAll function
    dob =  dob.replaceAll("-"," ");
    let sum=0;
    for(let index=0; index<dob.length; index++) {
        // make sure to typecast character to Number
        sum = sum + Number(dob.charAt(index));
    }
    return sum;
}

// this is just to check whether we are getting values to the console or not.
// so we have added one event listener to checkbutton and created a function which will get values of DOB & Lucky number
checkNumberButton.addEventListener('click', checkBirthdayIsLucky)