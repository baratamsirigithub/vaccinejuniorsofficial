var database;

var FnameV,LnameV,RnoV,GrdV, gender,pincode,age,vaccination_status,school,vaccine_type;

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);

}

function displayRadioValue() {
  var ele = document.getElementsByName('gender');
    
  for(i = 0; i < ele.length; i++) {
      if(ele[i].checked)
         gender = "Gender: "+ele[i].value;
  }

  var ele2 = document.getElementsByName('Vaccination');
    
  for(i = 0; i < ele2.length; i++) {
      if(ele2[i].checked)
         vaccination_status= "Vaccination Status: "+ele2[i].value;
  }

  var ele3 = document.getElementsByName('Choose School');
    
  for(i = 0; i < ele3.length; i++) {
      if(ele3[i].checked)
         school= "School: "+ele3[i].value;
  }

  var ele4 = document.getElementsByName('Vaccine Type');
    
  for(i = 0; i < ele4.length; i++) {
      if(ele4[i].checked)
         vaccine_type= "Covid-19 Vaccine Type: "+ele4[i].value;
  }
}


function INSERT() 
{
  // Create a Node(table to store new  data)

  //Add to Node
  FnameV = document.getElementById("fname").value;
  LnameV = document.getElementById("lname").value;
  RnoV = document.getElementById("rno").value;
  age = document.getElementById("age").value;

  var select = document.getElementById('grd');
  var GrdV = select.options[select.selectedIndex].value;
  displayRadioValue();
  firebase.database().ref('Student/info').push({
    'fName': FnameV,
    'lName': LnameV,
    'Grade': GrdV,
    'Reg_No': RnoV,
    'Gender':  gender,
    'Vaccination_Status': vaccination_status,
    'School' : school,
    'Covid-19_Vaccine_type' : vaccine_type,
    'Age' : age
    

  });

  //firebase.database().ref('Student/info').push();
  //alert('saved');
}

function SELECT() 
{
  //Select the ID and search
  //  firebase.database().ref('Student/info').on('value',function(snapshot){
  //   document.getElementById("fname").value = snapshot.val().fName;
  //   document.getElementById("lname").value = snapshot.val().lName;
  //   document.getElementById("rollNo").value = snapshot.val().rollNo;
  // });

  //var ref = firebase.database().ref("Student/info");

  var ref = firebase.database().ref("Student/info").orderByChild("fname").equalTo(document.getElementById("rollNo").value).on('value',function(snapshot){
      document.getElementById("fname").value = snapshot.val().fName;
      document.getElementById("lname").value = snapshot.val().lName;
      document.getElementById("rollNo").value = snapshot.val().rollNo;
      document.getElementById("age").value = snapshot.val().Age;
    });

  // ref.once("value").then(function(snapshot) {
  // //  snapshot.forEach(function(child){
  //     document.getElementById("fname").value = snapshot.val().fName;
  //     document.getElementById("lname").value = snapshot.val().lName;
  //     //document.getElementById("rollNo").value = snapshot.val().rollNo;
    
  // //    });
    // });

  // ref.once("rollNo")
  // .then(function(snapshot) {
  //   document.getElementById("fname").value = snapshot.val().fName;
  //   document.getElementById("lname").value = snapshot.val().lName;
  //   document.getElementById("rollNo").value = snapshot.val().rollNo;
  // });

}

function get(){
  var roln0 = document.getElementById('rono').value;
  var user_ref= database().ref('Studenet/info'+ 'LuckyData');
  user_ref.on('value',function(snapshot){
    var data=snapshot.val();
    alert(data.name);
  }
  )
}
function showError(){
  console.log("Error in writing to the database");
}


 

