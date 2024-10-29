
let globalInput 
let h1Element
let count = 1
let buttonDelete 
let contenidohtml=document.getElementById("values")


function getText(){
    let globalInput=document.getElementById("input").value

    container = document.createElement("div")
    container.id=count
    container.className="containerh3"
    
    buttonDelete = document.createElement("button")
    buttonDelete.textContent="X"
    buttonDelete.className="buttonDelete"
    let h1Element = document.createElement("h3")
    h1Element.id=count
    h1Element.className="h3Element"
    count++
    h1Element.addEventListener("click",()=>{

        h1Element.classList.toggle("tachado");
     })


   h1Element.textContent=globalInput
   if(globalInput){
    container.appendChild(h1Element)
    container.appendChild(buttonDelete)
    document.getElementById("values").appendChild(container)
   }
   
   

   const input = document.getElementById("input");
            
  


    //document.getElementById("values").appendChild(h1Element)
    //document.getElementById("values").appendChild(buttonDelete)
    container.id=count
    

    document.getElementById("save").addEventListener("click",()=>{
        localStorage.setItem("contenidoHTML",contenidohtml.innerHTML)
        alert("contenido guardado")

     })

     buttonDelete.addEventListener("click",()=>{
        document.getElementById("values").addEventListener("click", (e)=>{
            if(e.target.tagName === 'BUTTON' && e.target.textContent === "X"){
                const contenedorTexto = e.target.parentElement; // Obtener el contenedor del botón
                contenedorTexto.remove()
            }
            else{console.log("false")}
        })
    })

     document.getElementById("load").addEventListener("click",()=>{

       let contentRestore = localStorage.getItem("contenidoHTML")
        if (contentRestore) {
            contenidohtml.innerHTML = contentRestore
            alert("contenido restaurado")
        }
        else{
            alert("no se encontro contenido")
        }

     })

    

    document.getElementById("clear").addEventListener("click",()=>{
        let elementos = document.getElementById('values').childNodes
          elementos.forEach(element => {
            if(element){
                element.remove()
            }    
        });
     })

     
    document.getElementById("input").value=""
    
}

document.getElementById("input").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        // Evita que se recargue la página (si está en un formulario)
        event.preventDefault();
        getText();
        
    }
});



