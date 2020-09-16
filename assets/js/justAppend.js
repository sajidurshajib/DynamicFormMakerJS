
var MainArray = [];
var count = 0;



// +---------------------------------+
// |                                 |
// |       viewAll (viewForm)        |
// |                                 |
// +---------------------------------+

function viewAll(){
    var clearNode = document.getElementById('dynamicForm');
    while (clearNode.firstElementChild) {
        clearNode.removeChild(clearNode.lastElementChild);
    }

    var mainLength = MainArray.length;
    var i=0;
    while(i<mainLength){
        var ob = MainArray[i];
        
        if(ob.field == 'textField'){
            textFieldShow(MainArray[i]);
        }
        else if(ob.field == 'textArea'){
            textAreaShow(MainArray[i]);
        }

        i+=1;
    }
    console.log(MainArray);
}




// +---------------------------------+
// |                                 |
// |        textField code           |
// |                                 |
// +---------------------------------+


function textFieldTake(){
    
    var lbl = document.getElementById("labelTextField").value; 
    var nm = document.getElementById("nameTextField").value;
    var plchldr = document.getElementById("placeholderTextField").value;
    var rqrd = document.getElementById("requiredTextField").checked;

    count += 1;
    var textField = {
        id:count,
        field: 'textField',
        label: lbl,
        name: nm,
        placeholder: plchldr,
        required:rqrd
    }
   
    MainArray.push(textField)
    //var test = Object.values(MainArray[0]);

    lbl = document.getElementById("labelTextField").value=''; 
    nm = document.getElementById("nameTextField").value='';
    plchldr = document.getElementById("placeholderTextField").value='';

    // For show
    //textFieldShow(MainArray[0])
    viewAll();
}



function textFieldShow(textFieldObject){
    
    var id = textFieldObject.id;
    var labelText = textFieldObject.label;
    var nameText = textFieldObject.name;
    var placeText = textFieldObject.placeholder;
    var requiredConfirm = textFieldObject.required;

    var lbl = document.createElement("LABEL");
    var elm = document.createElement("INPUT");

    var textNode = document.createTextNode(labelText);
    lbl.appendChild(textNode)

    elm.setAttribute('type','text');
    elm.setAttribute('name',nameText);
    elm.setAttribute('placeholder',placeText);
    if(requiredConfirm == true){
        elm.setAttribute('required','');
    }
    

    document.getElementById("dynamicForm").appendChild(lbl);
    document.getElementById("dynamicForm").appendChild(elm);

}




// +---------------------------------+
// |                                 |
// |        textArea code            |
// |                                 |
// +---------------------------------+


function textAreaTake(){
    
    var lbl = document.getElementById("labelTextArea").value; 
    var nm = document.getElementById("nameTextArea").value;
    var plchldr = document.getElementById("placeholderTextArea").value;
    var rqrd = document.getElementById("requiredTextArea").checked;

    count += 1;
    var textArea = {
        id:count,
        field: 'textArea',
        label: lbl,
        name: nm,
        placeholder: plchldr,
        required:rqrd
    }
   
    MainArray.push(textArea)
    //var test = Object.values(MainArray[0]);

    lbl = document.getElementById("labelTextArea").value=''; 
    nm = document.getElementById("nameTextArea").value='';
    plchldr = document.getElementById("placeholderTextArea").value='';

    viewAll();
}



function textAreaShow(textAreaObject){
    
    var id = textAreaObject.id;
    var labelText = textAreaObject.label;
    var nameText = textAreaObject.name;
    var placeText = textAreaObject.placeholder;
    var requiredConfirm = textAreaObject.required;

    var lbl = document.createElement("LABEL");
    var elm = document.createElement("TEXTAREA");

    var textNode = document.createTextNode(labelText);
    lbl.appendChild(textNode)

    elm.setAttribute('name',nameText);
    elm.setAttribute('placeholder',placeText);
    if(requiredConfirm == true){
        elm.setAttribute('required','');
    }

    document.getElementById("dynamicForm").appendChild(lbl);
    document.getElementById("dynamicForm").appendChild(elm);

}

