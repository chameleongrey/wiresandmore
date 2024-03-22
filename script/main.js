document.getElementById("domestic").addEventListener('click', function () {
    console.log("Domestic");
});

document.getElementById("commercial").addEventListener('click', function () {
    console.log("Commercial");
});

document.getElementById("testandtag").addEventListener('click', function () {
    console.log("test & Tag");
});

document.getElementById("about").addEventListener('click', function () {
    console.log("About Us");
});

document.getElementById("contact").addEventListener('click', function () {
    console.log("Contact Us");
});



let vid = document.getElementById("myVideo");

function enableMute() { 
  vid.muted = true;
} 

function disableMute() { 
  vid.muted = false;
} 

function checkMute() { 
  alert(vid.muted);
} 