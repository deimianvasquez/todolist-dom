let input = document.querySelector("input")
let ul = document.querySelector("ul")
let error = document.querySelector("#message-error")
let p = document.querySelector("#tasks")
let tasks = ul.children


input.addEventListener("keydown", function(event){
    if(event.key == "Enter"){
        if(input.value.trim() != ""){
            let li = document.createElement("li")
            li.textContent = input.value

            li.addEventListener("click", function(){
                ul.removeChild(li)
                allTasks(tasks)
            })
            
            ul.appendChild(li)
            let span = document.createElement("span")
            span.innerHTML = `<i class="fas fa-times"></i>`
            li.appendChild(span)
            input.value = ""
            //quitar el mensaje de error
            error.classList.remove("alert", "alert-danger", "my-3")
            error.textContent = ""

            allTasks(tasks)

        }else{
            error.classList.add("alert", "alert-danger", "my-3")
            error.textContent = "No puedes agregar una tarea vacía"
        }
    }
})

function allTasks(long){
    p.textContent = tasks.length <= 0
    ? "No tienes tareas pendientes"
    : tasks.length == 1
    ? "Tienes una tarea pendiente"
    : `Tienes ${tasks.length} tareas pendientes`
}


