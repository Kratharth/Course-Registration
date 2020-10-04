function addTable(sem) { 
  
    console.log(sem);

    var current_active_item = document.getElementsByClassName('active');
    
    if(current_active_item.item(0) != null){
    current_active_item.item(0).className = '';
    } 
    
    var active_item = document.getElementById(sem);
    active_item.className = 'active';

    var student_list = new Array(3);
  
    for (var i = 0; i < student_list.length; i++) { 
      student_list[i] = []; 
    } 
    var h = 0; 
    var s = new Array(12)

    if(sem==3)
    {
        s = ["AAKANKSHA GUPTA","1BM19CS001","123456789","aakanksha.cs19@bmsce.ac.in","AAKASH ANAND","1BM19CS002","9876543211","aakashanand.cs19@bmsce.ac.in","ABHINANDAN UDUPA","1BM19CS003","7894561230","abhinandan.cs19@bmsce.ac.in"]
    }

    else if(sem==5)
    {
        s = ["ABHAYA V","1BM18CS001","0123456789","abhayav.cs18@bmsce.ac.in","ABHIJNYA K G","1BM18CS002","894561230","abhijnya.cs18@bmsce.ac.in","ABHINAV VERMA","1BM18CS003","5647955660","abhinav.cs18@bmsce.ac.in"]
    }
    
    else
    {
        s = ["AAKASHDEEP SIL","1BM17CS001","2314567890","aakashdeep.cs17@bmsce.ac.in","ABHAY SHARMA","1BM17CS002","6547891230","abhay.cs17@bmsce.ac.in","ABHILASH","1BM17CS003","0000000000","abhilash.cs17@bmsce.ac.in"]
    }
    
    for (var i = 0; i < 3; i++) { 
        for (var j = 0; j < 4; j++) { 
  
            student_list[i][j] = s[h++]; 
        } 
    } 

  
    var myTableDiv = document.getElementById("Dynamic Table");

    if(myTableDiv.childNodes.length > 0)
    {
        myTableDiv.removeChild(myTableDiv.childNodes[0])
    }

      
    var table = document.createElement('TABLE');
    table.border='1';
    
    var tableBody = document.createElement('TBODY');
    table.appendChild(tableBody);
      
    for (var i=0; i<3; i++){
       var tr = document.createElement('TR');
       tableBody.appendChild(tr);
       
       for (var j=0; j<4; j++){
           var td = document.createElement('TD');
           td.width='100';
           td.appendChild(document.createTextNode(student_list[i][j]));
           tr.appendChild(td);
       }
    }
    myTableDiv.appendChild(table);
    
}



function validateStudentEmail()
{

    var email = document.getElementById('email').value;
    var result = email.match('[a-z]+.cs[0-9][0-9]@bmsce.ac.in');
    if(result==email)
    {
        return true;
    }
    else
    {
        return false;
    }

}


function validateAdminEmail()
{
    // characters.cse@bmsce.ac.in
    var email = document.getElementById('adminEmail').value;
    var result = email.match('[a-z]+.cse@bmsce.ac.in');
    if(result==email)
    {
        return true;
    }
    else
    {
        return false;
    }
}

function validateStudentDetails()
{
    if(validateStudentEmail() == true && document.getElementById('password').value != '')
    {
        location.replace("http://127.0.0.1:5500/student_register.html");

    }
    else{
        alert('Email Format is invalid or password field is empty');
    }

}

function validateAdmin()
{
    if(validateAdminEmail() == true && document.getElementById('adminPassword').value != '')
    {
        alert('Enter admin')
        location.replace("http://127.0.0.1:5500/admin_view.html");

    }
    else{
        alert('Email Format is invalid or password field is empty');
    }

}


function checkStudent()
{
    if(document.getElementById("cc1").value == '' || document.getElementById("cn1").value == '' || document.getElementById("c1").value == '' || document.getElementById("cc2").value == '' || document.getElementById("cn2").value == '' || document.getElementById("c2").value == '' || document.getElementById("cc3").value == '' || document.getElementById("cn3").value == '' || document.getElementById("c3").value == '')
    {
        alert('Please enter the values all the fields');
        return 
    }
    else{
        location.replace("http://127.0.0.1:5500/success.html")
    }
}