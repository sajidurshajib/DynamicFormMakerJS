
var MainArray = [];

function textFieldTake(){
    
    var lbl = document.getElementById("labelSelector").value; 
    var nm = document.getElementById("nameSelector").value;
    var plchldr = document.getElementById("placeholderSelector").value;

    var textField = {
        field: "textField",
        label: lbl,
        name: nm,
        placeholder: plchldr
    }
   
    MainArray.push(textField)
    //var test = Object.values(MainArray[0]);

    lbl = document.getElementById("labelSelector").value=''; 
    nm = document.getElementById("nameSelector").value='';
    plchldr = document.getElementById("placeholderSelector").value='';

    // For show
    textFieldShow(MainArray[0])
}



function textFieldShow(textFieldInfo){
    
    var labelText = textFieldInfo['label'];
    var nameText = textFieldInfo['name'];
    var placeText = textFieldInfo['placeholder'];

    var lbl = document.createElement("LABEL");
    var elm = document.createElement("INPUT");

    var textNode = document.createTextNode(labelText);
    lbl.appendChild(textNode)

    elm.setAttribute('type','text');
    elm.setAttribute('name',nameText);
    elm.setAttribute('placeholder',placeText);

    document.getElementById("dynamicForm").appendChild(lbl);
    document.getElementById("dynamicForm").appendChild(elm);

}







// Raw code.... 


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
