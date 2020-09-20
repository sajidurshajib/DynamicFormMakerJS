
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
        else if(ob.field == 'dropDown'){
            dropDownShow(MainArray[i]);
        }
        else if(ob.field == 'radioBtn'){
            radioBtnShow(MainArray[i]);
        }
        else if(ob.field == 'checkBox'){
            checkBoxShow(MainArray[i]);
        }

        i+=1;
    }
    document.getElementById("btnForMainArray").style.display="block";
    console.log(MainArray);
}


// +---------------------------------+
// |                                 |
// |        textField code           |
// |                                 |
// +---------------------------------+

// Button code

function textFieldShowClick(){
    document.getElementById("forTextField").style.display="block";
    document.getElementById("textFieldShowBtn").style.display="none";
    document.getElementById("textFieldHideBtn").style.display="block";
}

function textFieldHideClick(){
    document.getElementById("forTextField").style.display="none";
    document.getElementById("textFieldShowBtn").style.display="block";
    document.getElementById("textFieldHideBtn").style.display="none";
}

// Main code 
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
    rqrd = document.getElementById("requiredTextField").checked=false;

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

// Button code

function textAreaShowClick(){
    document.getElementById("forTextArea").style.display="block";
    document.getElementById("textAreaShowBtn").style.display="none";
    document.getElementById("textAreaHideBtn").style.display="block";
}

function textAreaHideClick(){
    document.getElementById("forTextArea").style.display="none";
    document.getElementById("textAreaShowBtn").style.display="block";
    document.getElementById("textAreaHideBtn").style.display="none";
}

// Main code 
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
    rqrd = document.getElementById("requiredTextArea").checked=false;

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








// +---------------------------------+
// |                                 |
// |        dropDown code            |
// |                                 |
// +---------------------------------+

// Button code

function dropDownShowClick(){
    document.getElementById("forDropDown").style.display="block";
    document.getElementById("dropDownShowBtn").style.display="none";
    document.getElementById("dropDownHideBtn").style.display="block";
}

function dropDownHideClick(){
    document.getElementById("forDropDown").style.display="none";
    document.getElementById("dropDownShowBtn").style.display="block";
    document.getElementById("dropDownHideBtn").style.display="none";
}

// Main code 
function dropDownOptionAdd(){
    var input1 = document.createElement('INPUT');
    var input2 = document.createElement('INPUT');

    input1.setAttribute('class','dropText');
    input2.setAttribute('class','dropValue');

    input1.setAttribute('placeholder','Text');
    input2.setAttribute('placeholder','Value');

    document.getElementById('dropDownMakerDiv').appendChild(input1);
    document.getElementById('dropDownMakerDiv').appendChild(input2);
}


function dropDownOptionRemove(){
    var clearNode = document.getElementById('dropDownMakerDiv');
    clearNode.removeChild(clearNode.lastElementChild);
    clearNode.removeChild(clearNode.lastElementChild);
}


function dropDownTake(){
    var lbl = document.getElementById("labelDropDown").value; 
    var nm = document.getElementById("nameDropDown").value;
    var rqrd = document.getElementById("requiredDropDown").checked;

    count += 1;
    var dropDown = {
        id:count,
        field: 'dropDown',
        label: lbl,
        name: nm,
        required:rqrd,
        textArr:[],
        valueArr:[]
    }
   
    //dropDown text and value
    document.querySelectorAll('.dropText').forEach(function(el){
        dropDown.textArr.push(el.value);
    });

    document.querySelectorAll('.dropValue').forEach(function(el){
        dropDown.valueArr.push(el.value);
    });


    MainArray.push(dropDown);

    //Clear all field
    lbl = document.getElementById("labelDropDown").value=''; 
    nm = document.getElementById("nameDropDown").value='';
    rqrd = document.getElementById("requiredDropDown").checked=false;

    var clearNode = document.getElementById('dropDownMakerDiv');
    while (clearNode.firstElementChild) {
        clearNode.removeChild(clearNode.lastElementChild);
    }

    viewAll();
}


function dropDownShow(dropDownObject){
    var id = dropDownObject.id;
    var labelText = dropDownObject.label;
    var nameText = dropDownObject.name;
    var requiredConfirm = dropDownObject.required;
    var textArr = dropDownObject.textArr;
    var valueArr = dropDownObject.valueArr;

    var lbl = document.createElement("LABEL");
    var elm = document.createElement("SELECT");

    var textNode = document.createTextNode(labelText);
    lbl.appendChild(textNode)

    elm.setAttribute('id',nameText);
    elm.setAttribute('name',nameText);
    elm.setAttribute('class','form-control');

    if(requiredConfirm == true){
        elm.setAttribute('required','');
    }

    document.getElementById("dynamicForm").appendChild(lbl);
    document.getElementById("dynamicForm").appendChild(elm);

    var n = textArr.length;
    var i = 0;
    while(i<n){
        // append option
        var elmChild = document.createElement("OPTION");
        
        var textNodeChild = document.createTextNode(textArr[i]);
        elmChild.appendChild(textNodeChild);

        elmChild.setAttribute('value',valueArr[i]);
        //elmChild.setAttribute('class','dropdown-item');

        document.getElementById(nameText).appendChild(elmChild);
        i+=1;
    }

}









// +---------------------------------+
// |                                 |
// |        RadioButton code         |
// |                                 |
// +---------------------------------+

// Button code

function radioShowClick(){
    document.getElementById("forRadio").style.display="block";
    document.getElementById("radioShowBtn").style.display="none";
    document.getElementById("radioHideBtn").style.display="block";
}

function radioHideClick(){
    document.getElementById("forRadio").style.display="none";
    document.getElementById("radioShowBtn").style.display="block";
    document.getElementById("radioHideBtn").style.display="none";
}

// Main code 

function radioOptionAdd(){
    var input1 = document.createElement('INPUT');
    var input2 = document.createElement('INPUT');

    input1.setAttribute('class','radioText');
    input2.setAttribute('class','radioValue');

    input1.setAttribute('placeholder','Text');
    input2.setAttribute('placeholder','Value');

    document.getElementById('radioMakerDiv').appendChild(input1);
    document.getElementById('radioMakerDiv').appendChild(input2);
}


function radioOptionRemove(){
    var clearNode = document.getElementById('radioMakerDiv');
    clearNode.removeChild(clearNode.lastElementChild);
    clearNode.removeChild(clearNode.lastElementChild);
}


function radioTake(){
    var lbl = document.getElementById("labelRadio").value; 
    var nm = document.getElementById("nameRadio").value;
    var rqrd = document.getElementById("requiredRadio").checked;

    count += 1;
    var radioBtn = {
        id:count,
        field: 'radioBtn',
        label: lbl,
        name: nm,
        required:rqrd,
        textArr:[],
        valueArr:[]
    }
   
    //dropDown text and value
    document.querySelectorAll('.radioText').forEach(function(el){
        radioBtn.textArr.push(el.value);
    });

    document.querySelectorAll('.radioValue').forEach(function(el){
        radioBtn.valueArr.push(el.value);
    });


    MainArray.push(radioBtn);

    //Clear all field
    lbl = document.getElementById('labelRadio').value=''; 
    nm = document.getElementById('nameRadio').value='';
    rqrd = document.getElementById('requiredRadio').checked=false;

    var clearNode = document.getElementById('radioMakerDiv');
    while (clearNode.firstElementChild) {
        clearNode.removeChild(clearNode.lastElementChild);
    }

    viewAll();
}





function radioBtnShow(radioBtnObject){
    var id = radioBtnObject.id;
    var labelText = radioBtnObject.label;
    var nameText = radioBtnObject.name;
    var requiredConfirm = radioBtnObject.required;
    var textArr = radioBtnObject.textArr;
    var valueArr = radioBtnObject.valueArr;

    var lbl = document.createElement('LABEL');

    var textNode = document.createTextNode(labelText);
    lbl.appendChild(textNode)

    document.getElementById('dynamicForm').appendChild(lbl);

    var n = textArr.length;
    var i = 0;
    while(i<n){
        var elm = document.createElement('INPUT');
        elm.setAttribute('type','radio');
        elm.setAttribute('name',nameText);
        elm.setAttribute('value',valueArr[i]);

        if(i==0 && requiredConfirm == true){
            elm.setAttribute('checked','')
        }

        var elmLabel = document.createElement('LABEL');
        elmLabel.setAttribute('class','radioLabel')
        var textNodeChild = document.createTextNode(textArr[i]);
        elmLabel.appendChild(textNodeChild);

        var elmBr = document.createElement('BR');

        document.getElementById('dynamicForm').appendChild(elm);
        document.getElementById('dynamicForm').appendChild(elmLabel);
        document.getElementById('dynamicForm').appendChild(elmBr);
        i+=1;
    }

}











// +---------------------------------+
// |                                 |
// |          CheckBox code          |
// |                                 |
// +---------------------------------+

// Button code

function checkBoxShowClick(){
    document.getElementById("forCheckBox").style.display="block";
    document.getElementById("checkBoxShowBtn").style.display="none";
    document.getElementById("checkBoxHideBtn").style.display="block";
}

function checkBoxHideClick(){
    document.getElementById("forCheckBox").style.display="none";
    document.getElementById("checkBoxShowBtn").style.display="block";
    document.getElementById("checkBoxHideBtn").style.display="none";
}

// Main code 

function checkBoxOptionAdd(){
    var input1 = document.createElement('INPUT');
    var input2 = document.createElement('INPUT');

    input1.setAttribute('class','checkBoxText');
    input2.setAttribute('class','checkBoxValue');

    input1.setAttribute('placeholder','Text');
    input2.setAttribute('placeholder','Value');

    document.getElementById('checkBoxMakerDiv').appendChild(input1);
    document.getElementById('checkBoxMakerDiv').appendChild(input2);
}


function checkBoxOptionRemove(){
    var clearNode = document.getElementById('checkBoxMakerDiv');
    clearNode.removeChild(clearNode.lastElementChild);
    clearNode.removeChild(clearNode.lastElementChild);
}


function checkBoxTake(){
    var lbl = document.getElementById("labelCheckBox").value; 
    var nm = document.getElementById("nameCheckBox").value;
    var rqrd = document.getElementById("requiredCheckBox").checked;

    count += 1;
    var checkBox = {
        id:count,
        field: 'checkBox',
        label: lbl,
        name: nm,
        required:rqrd,
        textArr:[],
        valueArr:[]
    }
   
    //dropDown text and value
    document.querySelectorAll('.checkBoxText').forEach(function(el){
        checkBox.textArr.push(el.value);
    });

    document.querySelectorAll('.checkBoxValue').forEach(function(el){
        checkBox.valueArr.push(el.value);
    });


    MainArray.push(checkBox);

    //Clear all field
    lbl = document.getElementById('labelCheckBox').value=''; 
    nm = document.getElementById('nameCheckBox').value='';
    rqrd = document.getElementById('requiredCheckBox').checked=false;

    var clearNode = document.getElementById('checkBoxMakerDiv');
    while (clearNode.firstElementChild) {
        clearNode.removeChild(clearNode.lastElementChild);
    }

    viewAll();
}





function checkBoxShow(checkBoxObject){
    var id = checkBoxObject.id;
    var labelText = checkBoxObject.label;
    var nameText = checkBoxObject.name;
    var requiredConfirm = checkBoxObject.required;
    var textArr = checkBoxObject.textArr;
    var valueArr = checkBoxObject.valueArr;

    var lbl = document.createElement('LABEL');

    var textNode = document.createTextNode(labelText);
    lbl.appendChild(textNode)

    document.getElementById('dynamicForm').appendChild(lbl);

    var n = textArr.length;
    var i = 0;
    while(i<n){
        var elm = document.createElement('INPUT');
        elm.setAttribute('type','checkbox');
        elm.setAttribute('name',nameText);
        elm.setAttribute('value',valueArr[i]);

        if(i==0 && requiredConfirm == true){
            elm.setAttribute('checked','')
        }

        var elmLabel = document.createElement('LABEL');
        elmLabel.setAttribute('class','checkBoxLabel')
        var textNodeChild = document.createTextNode(textArr[i]);
        elmLabel.appendChild(textNodeChild);

        var elmBr = document.createElement('BR');

        document.getElementById('dynamicForm').appendChild(elm);
        document.getElementById('dynamicForm').appendChild(elmLabel);
        document.getElementById('dynamicForm').appendChild(elmBr);
        i+=1;
    }

}

