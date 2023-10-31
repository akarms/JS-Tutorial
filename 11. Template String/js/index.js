let fname = "Akar Ahamed";
let age = 22;
let city = "puttalam";
let role = "student";

let output = "";
//meth 1
output = "<table border =  1><tr><th>Name</th><td>"+ fname+"</td></tr><tr><th>Age</th><td>"+ age+"</td></tr><tr><th>City</th><td>"+ city+"</td></tr><tr><th>Role</th><td>"+ role+"</td></tr></table>";

//meth 2 by adding + and contradic everything
output += "<hr> "+  
"<table border = 1>" +
          "<tr>"  +
               "<th>Name</th>"+
               "<td>"+fname+"</td>"+
          "</tr>"+
          "<tr>"  +
                "<th>Age</th>"+
                "<td>"+age+"</td>"+
          "</tr>"+
          "<tr>"  +
                "<th>City</th>"+
                "<td>"+city+"</td>"+
          "</tr>"+
          "<tr>"  +
                "<th>Role</th>"+
                "<td>"+role+"</td>"+
          "</tr>"+                    
"</table>"

// or else we  can use ` key like below

output += `<hr>  
<table border = 1>
          <tr>
               <th>Name</th>
               <td>${fname}</td>
          </tr>
          <tr>
                <th>Age</th>
                <td>${age}</td>
          </tr>
          <tr>
                <th>City</th>
                <td>${city}</td>
          </tr>
          <tr>
                <th>Role</th>
                <td>${role}</td>
          </tr>                    
</table>`;

document.body.innerHTML = output;