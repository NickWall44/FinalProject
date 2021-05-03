const todoInput = document.querySelector("#todoInput");
const section = document.querySelector("section");
const listItems = [];
var i = 0;
var tempTemplate;


document.querySelector("#todoForm").addEventListener("submit", function(submit) {   //submit event
    submit.preventDefault();

    var item = {    //object template
        text: todoInput.value,
        complete: false,
        id: i
    }

    listItems.push(item);   //push to array
    console.log(listItems);

    const template = listItems.map(listItem => `
    <p class="todoItem" id="${listItem.id}">
    <input type="checkbox" class="check" id="${listItem.id}">
    ${listItem.text}
    <button class="xButton" id="${listItem.id}">x</button>
    </p>
    `); //list template literal
    
    section.innerHTML = template.join("");  //display list
    i++;
    document.getElementById("todoForm").reset();
})

document.addEventListener('click', function(xButton) {  //button event
    if(xButton.target && xButton.target.className == 'xButton'){
        var j = xButton.target.id   //j = element id
        delete listItems[j]; //delete element in array

        var del = document.getElementById(j);
        del.remove();   //delete object off page
   }
});

document.addEventListener('click', function(check) {    //checkbox event
    if(check.target && check.target.className == 'check'){
        var k = check.target.id; //k = element id

        if(listItems[k].complete == false){ //if item is not complete
            listItems[k].complete = true;
            listItems[k].textBackup = listItems[k].text
            listItems[k].text = listItems[k].text.strike(); //strikethrough
            tempTemplate = listItems.map(listItem => `
            <p class="todoItem" id="${listItem.id}">
            <input type="checkbox" class="check" id="${listItem.id}">
            ${listItem.text}
            <button class="xButton" id="${listItem.id}">x</button>
            </p>
            `);
            section.innerHTML = tempTemplate.join("");
        }
        else{   //if item is complete
            listItems[k].complete = false;
            listItems[k].text = listItems[k].textBackup;    //normal text
            tempTemplate = listItems.map(listItem => `
            <p class="todoItem" id="${listItem.id}">
            <input type="checkbox" class="check" id="${listItem.id}">
            ${listItem.text}
            <button class="xButton" id="${listItem.id}">x</button>
            </p>
            `);
            section.innerHTML = tempTemplate.join("");
        }
    }
 });