
window.onload = settingUrl

//Variables
const email = document.getElementById('email-input');
const assignBtn = document.getElementById('assign-btn');
let emailValidation = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
const savedEmails = []
const savedImages = document.getElementById('result');
const Image1 = document.getElementById('image-1');
let id;
let emailDisplay;
let ImageDiv;
let incrementID = 0;
const refresh = document.getElementsByClassName('refresh-btn')[0];

//Validate the email address
function emailValidationFunction() {
  if (email.value.match(emailValidation)) {
    return true;
  } else {
    console.log('error with email');
    return false;
  }
}


//Function to check if the email exists in the array:
// if it does not it pushes it to the array

const saveEmail = function () {
  let emailExisting = false;  
  for (let i=0; i<savedEmails.length; i++) {
    if (email.value === savedEmails[i]) {
      emailExisting = true;
    } 
  }
  if (emailExisting === false) {
    savedEmails.push(email.value);
    return false;
  } 
  return true;
}


//Adding the email to a new div
const addingEmail = function () {
  ImageDiv = document.createElement('div')
  ImageDiv.setAttribute("id", incrementID)
  emailDisplay = document.createElement('h3')
  emailDisplay.textContent = email.value
  ImageDiv.appendChild(emailDisplay)
  savedImages.appendChild(ImageDiv)
  incrementID++
}


//Adding the image to that div
const addingImage = function () {
  for (let x = 0; x < savedEmails.length; x++) {
    console.log(email.value)
    console.log(emailDisplay.innerHTML)
    if (email.value === savedEmails[x]) {
      let showImageSaved = document.createElement('img')
      //$(`div#${x}`).append(showImageSaved)
      $("div#".concat(x)).append(showImageSaved);
      //document.getElementById(x).appendChild(showImageSaved)

      showImageSaved.setAttribute('src', 'https://picsum.photos/id/' + id + '/150/150/')    
    }
  }
}


//Code to generate a random image with Math.random function
function generateRandom() {
  const randomNumber = Math.round(Math.random() *100)
//I added this part in order to escape 2 instances where no image is assigned
  return (randomNumber === 86 || randomNumber === 97) ? generateRandom() : randomNumber; 
}


//Adding the url to the random image
function settingUrl () {
  const Id = generateRandom()
  id = Id
  Image1.setAttribute('src', 'https://picsum.photos/id/' + Id + '/700/500')
  console.log('This is the ID of the image' + Id)
  idOfImage1 = Id
}


//Function that connects all other functions in order to ensure that they are all linked together and it gives the output.
function generator() {
  if (emailValidationFunction()) {
    console.log('Email working')
  } else {
    alert('Make sure you type a valid email address')
    return
  }
  if (saveEmail() === false) {
    addingEmail();
  }
  addingImage();
  settingUrl();
}

//Event listeners 
assignBtn.addEventListener('click', generator)
refresh.addEventListener('click', settingUrl)











