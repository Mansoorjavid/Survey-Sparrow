
document.querySelector(".modal-btn").addEventListener("click", function(){
  document.querySelector(".bg-modal").style.display = "flex";
});

document.querySelector("#close").addEventListener("click", function(){
  document.querySelector(".bg-modal").style.display = "none";
  document.querySelector("#form-close").value="";
  document.querySelector("#form-close-mail").value="";
  document.querySelector("#form-close-number").value="";
  document.querySelector("#slct1").value="state-selection";
  document.querySelector("#slct2").value="destinations";
});

document.querySelector(".cancel").addEventListener("click", function(){
  document.querySelector(".bg-modal").style.display = "none";
});

function populate(s1,s2){
	var s1 = document.querySelector("#slct1");
	var s2 = document.querySelector("#slct2");
	s2.innerHTML = "";
	if(s1.value == "Kerala"){
		var optionArray = ["destinations|Destinations","thiruvananthapuram|Thiruvananthapuram","ernakulam|Ernakulam","kozhikod|Kozhikod", "wayanad|Wayanad"];
	} else if(s1.value == "TamilNadu"){
		var optionArray = ["destinations|Destinations","chennai|Chennai","coimbatore|Coimbatore","salem|Salem", "trichy|Trichy"];
	}
	for(var option in optionArray){
		var pair = optionArray[option].split("|");
		var newOption = document.createElement("option");
		newOption.value = pair[0];
		newOption.innerHTML = pair[1];
		s2.options.add(newOption);
	}
}

function checkName() {
  var name = document.querySelector("#form-close");


  if (name.value==""){
      alert("Please fill the name");
      return false;
    }


   var mail = document.querySelector("#form-close-mail");
   var mailFormat = /^([A-Za-z0-9_.])+\@([a-z])+\.([a-z])+$/


   if (mail.value==""){
       alert("Please fill the E-mail");
       return false;
     }

  if (!mailFormat.test(mail.value)){
        alert("Use only correct E-mail format");
        return false;
      }

  var number = document.querySelector("#form-close-number");
  var numberFormat = /^[0-9]+$/

  if (number.value==""){
      alert("Please fill the Number");
      return false;
    }

    if (!numberFormat.test(number.value)){
        alert("Use only Numbers");
        return false;
      }
}
