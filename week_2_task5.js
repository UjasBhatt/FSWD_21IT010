function loaddetails(){
    var output=" ";
    output+="<table>"
    $.getJSON("employee_data.json",function(response){
      $.each(response.Employees,function(k,v){
           console.log(this);
           console.log( v);
           
           output+="<tr>"
           output+="<td>"+ v.userId +"</td><td>"+ v.jobTitleName+"</td><td>"+ v.region +"</td>"
           output+="</tr>";
        });
    });
    output+="</table>"
    document.getElementById('demo').innerHTML=output;
};