
function textField(){

    //create element
    var lbl = document.createElement("LABEL");
    var elm = document.createElement("INPUT");

    // those lines for 
    var labelText = document.getElementById("labelSelector").value;
    var textNode = document.createTextNode(labelText);
    lbl.appendChild(textNode)

    //get the value from input
    var a = document.getElementById("nameSelector").value;
    var b = document.getElementById("placeholderSelector").value;

    //Set attributes
    elm.setAttribute('type','text');
    elm.setAttribute('name',a);
    elm.setAttribute('placeholder',b)
    
    //Append everything
    document.getElementById("dynamicForm").appendChild(lbl);
    document.getElementById("dynamicForm").appendChild(elm);
    
    //Clear all field
    var labelText = document.getElementById("labelSelector").value='';
    var a = document.getElementById("nameSelector").value='';
    var b = document.getElementById("placeholderSelector").value='';
}
