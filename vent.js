  var email;
  function sendMail() { 
  var HavingABadDay="mailto:"+email;  
      var link = HavingABadDay + "?subject=" + escape("You can do it!") + "&body=" + escape(document.getElementById('myText').value)
    ;
    window.location.href = link;
}
  var posts = [];
  function printOut() {
  email = prompt("What is your email? (If you want people to send uplifting messages to you!)");  
    var stuff = document.getElementById('yok').value;
    //posts.push(stuff);
    document.getElementById("postArea").innerHTML = stuff;
    var x = document.getElementById('myText');
    x.style.opacity=1;
    var y = document.getElementById('reply');
    y.style.opacity=1;
  }

function changeImage() {
    var image = document.getElementById('myImage');
    image.src = "pic_smiley.gif";
    
}

var counter = 0;
