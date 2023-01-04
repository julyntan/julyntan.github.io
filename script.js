function displayPopUp(num) {
    var elem = document.getElementById('PopUp');
    var backgroundElem = document.getElementById('body');

    if (num === 1) {
        elem.textContent = "Information regarding TAB1";
        elem.style.display = "block";
        backgroundElem.style.backgroundImage = "url('https://www.wallpaperup.com/uploads/wallpapers/2014/05/03/349010/6e81c023a9239ce44d56c47a0baab577-700.jpg')";
    } else if (num === 2) {
        elem.textContent = "Information concerning TAB2";
        elem.style.display = "block";
        backgroundElem.style.backgroundImage = "url('https://twodaysinacity.com/wp-content/uploads/2021/04/Top-view-of-kuala-lumpur-skyline-Malaysia.jpg')";
    } else {
        elem.textContent = "Information holding information about TAB3";
        elem.style.display = "block";
        backgroundElem.style.backgroundImage = "url('https://idsb.tmgrup.com.tr/ly/uploads/images/2021/09/19/145613.jpg')";
    }
    elem.style.border = "2px solid black";
    elem.style.backgroundColor = "black";
    elem.style.color = "white";
    elem.style.fontSize = "13px";
};


function displayUserPopUp() {
    const userName = document.getElementById("userName");

    let elem = document.getElementById("userPopUp");

    console.log(elem);
    if (userName !== undefined) {
        elem.textContent = `Hello ${userName.value}`;
        
    }
}

function titleCase(string) {
    var sentence = string.toLowerCase().split(" ");
    for(var i = 0; i< sentence.length; i++){
       sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
    }
}

function displayStateFlag() {
    const userSubject = document.getElementById("userSubject");
    let imageElem = document.getElementById("stateFlag");

    const userName = document.getElementById("userName");

    let elem = document.getElementById("userPopUp");

    const stateDictionary = {
        "perlis" : "https://upload.wikimedia.org/wikipedia/commons/a/aa/Flag_of_Perlis.svg",
        "penang": "https://upload.wikimedia.org/wikipedia/commons/d/d4/Flag_of_Penang_%28Malaysia%29.svg",
        "pinang": "https://upload.wikimedia.org/wikipedia/commons/d/d4/Flag_of_Penang_%28Malaysia%29.svg",
        "kedah":"https://upload.wikimedia.org/wikipedia/commons/c/cc/Flag_of_Kedah.svg",
        "perak":"https://upload.wikimedia.org/wikipedia/commons/8/87/Flag_of_Perak.svg",
        "kelantan":"https://upload.wikimedia.org/wikipedia/commons/6/61/Flag_of_Kelantan.svg",
        "terrenganu":"https://upload.wikimedia.org/wikipedia/commons/6/6b/Flag_of_Terengganu.svg",
        "pahang": "https://upload.wikimedia.org/wikipedia/commons/a/aa/Flag_of_Pahang.svg",
        "selangor":"https://upload.wikimedia.org/wikipedia/commons/0/0c/Flag_of_Selangor.svg",
        "negeri sembilan":"https://upload.wikimedia.org/wikipedia/commons/d/db/Flag_of_Negeri_Sembilan.svg",
        "malacca":"https://upload.wikimedia.org/wikipedia/commons/0/09/Flag_of_Malacca.svg",
        "johor":"https://upload.wikimedia.org/wikipedia/commons/5/5a/Flag_of_Johor.svg",
        "sarawak":"https://upload.wikimedia.org/wikipedia/commons/7/7e/Flag_of_Sarawak.svg",
        "sabah":"https://upload.wikimedia.org/wikipedia/commons/b/b5/Flag_of_Sabah.svg",
        "kl":"https://upload.wikimedia.org/wikipedia/commons/0/00/Flag_of_the_Federal_Territories_of_Malaysia.svg"
    }

    if (userSubject !== undefined) {
        imageElem.src = stateDictionary[userSubject.value.toLowerCase()];
    }

    imageElem.style.border = "1px solid white"

    let titleState = titleCase(userSubject.value);
    if (userName !== undefined && userSubject !== undefined) {
        elem.textContent = `Hello ${userName.value} from the lovely state of ${titleState}`;
    }
}