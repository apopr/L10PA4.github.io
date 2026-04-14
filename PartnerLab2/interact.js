function enterName()
{
   let name = document.getElementById("enterName").value;
   let bgColor = document.getElementById("colorPick").value;
   let message = document.getElementById("enterMessage").value;
   let greeting = document.getElementById("greeting");
   let briefMessage = document.getElementById("message");

   greeting.innerHTML = "Hello " + name + "!";
   briefMessage.innerHTML = message;

   document.body.style.background = bgColor;
}

function addTodo() {
    let item = document.getElementById("todoInput").value;

    if (item.trim() !== "") {
        let li = document.createElement("li");
        li.innerText = item;
        document.getElementById("todoList").appendChild(li);
        document.getElementById("todoInput").value = "";
    }
}