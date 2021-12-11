// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC3YjnXJBnVXFUGn-hCGc4JEc_jdIv6Fa0",
    authDomain: "shiungtianyu.firebaseapp.com",
    databaseURL: "https://shiungtianyu-default-rtdb.firebaseio.com",
    projectId: "shiungtianyu",
    storageBucket: "shiungtianyu.appspot.com",
    messagingSenderId: "222206115537",
    appId: "1:222206115537:web:ef0d1e05776989ee2c4ff0"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var contactFormDB = firebase.database().ref("contactForm");
document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e){

    e.preventDefault();

    //Form information
    var name = getElementVal('name');
    var emailid = getElementVal('email');
    var question = getElementVal('question');
    var msgContent = getElementVal('msgContent');
    // console.log(name, emailid,question,msgContent);

    if(name == '' || emailid == '' || question ==''|| msgContent ==''){
        //Alert
        document.querySelector('.alert').textContent = 'You forget write something!!';

        //Using the alert
        document.querySelector('.alert').style.display = 'block';

        //Remove the alert
        setTimeout(() => {
            document.querySelector('.alert').style.display = 'none'
        },3000);
    }else{
        saveMessage(name,emailid,msgContent);

        //Alert
        document.querySelector('.alert').textContent = 'Send Successfully!!';

        //Using the alert
        document.querySelector('.alert').style.display = 'block';

        //Remove the alert
        setTimeout(() => {
            document.querySelector('.alert').style.display = 'none'
        },3000);

        //Reset the format
        document.getElementById('contactForm').reset();
    }
}

const getElementVal = (id) => {
    return document.getElementById(id).value;
}

const saveMessage = (name, emailid, msgContent) => {
    var newContactForm = contactFormDB.push();
    newContactForm.set({
        name:name,
        emailid:emailid,
        msgContent:msgContent
    });
}