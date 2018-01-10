let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function

    if(answer.value==='' || attempt.value==='') {
      setHiddenFields();
    }

    if(!validateInput(input.value)) {
      return false;
    }
    else {
      var att1=document.getElementById("attempt").value;
      var att2=parseInt(att1)+1;
      document.getElementById("attempt").value =att2;

    }


if(getResults(document.getElementById("user-guess").value)==true) {
  setMessage("You Win!");
  showAnswer(true);
  showReplay();
}
else if (attempt.value>=10){
  setMessage("You Lose!");
  showAnswer(false);
  showReplay();
}
else {
  setMessage("Incorrect, try again.");
}
}

//implement new functions here

function setHiddenFields() {

var ans= (Math.floor((Math.random()*9999))).toString();

while(ans.length<4) {
    ans="0"+ans;
  }

document.getElementById("answer").value =ans;
document.getElementById("attempt").value =0;


}

function setMessage(msg) {
  document.getElementById("message").innerHTML =msg;
}

function validateInput(inp) {
  if (inp.length===4) {
    return true;
  }
  else {
    setMessage("Guesses must be exactly 4 characters long.");
    return false;
  }
}

function getResults(input) {

  var initial_div="<div class=\"row\"><span class=\"col-md-6\">" + input + "</span><div class=\"col-md-6\">";
  var char_result='';
  var correct_count=0;

  for(i=0;i<input.length;i++) {

    if (answer.value.indexOf(input[i])>-1) {
      if (answer.value[i]===input[i]) {
        char_result='<span class="glyphicon glyphicon-ok"></span>';
        correct_count+=1;
      }
      else {
        char_result='<span class="glyphicon glyphicon-transfer"></span>';
      }
    }
else {
      char_result='<span class="glyphicon glyphicon-remove"></span>';
          }

  initial_div=initial_div+char_result;


  }
  var final_div=initial_div+'</div></div>';

  document.getElementById("results").innerHTML+=final_div;

  if(correct_count==4){
    return true;
  }
  else {
    return false;
  }


}


function showAnswer(result) {
  document.getElementById("code").innerHTML =answer.value;
  if(result===true) {
    document.getElementById("code").className+=" success"
  }
  else {
    document.getElementById("code").className+=" failure"
  }
}

function showReplay() {
  document.getElementById("guessing-div").style.display="none";
  document.getElementById("replay-div").style.display="block";
}
