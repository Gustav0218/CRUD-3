const boton_agregar = document.getElementById('boton-agregar');
const lista = document.getElementById('.lista');
const boton_limpiar = document.getElementById('.boton-limpiar');
////////////
boton_agregar.addEventListener('click',() =>{

}) /*Agregar*/

boton_limpiar.addEventListener('click',() =>{
    
}) /* Limpiar*/

lista.addEventListener('click',() =>{

    
}) /*Eliminar*/

lista.addEventListener('keypress',() =>{
    console.log (enter,enter)
    
}) 


/*Localstorage*/

let ArregloLista = []
let contador = 0 

const getContador = () => {
    const cont = localStorage.getItem('contador',contador)
    return cont
};

const setContador = () =>{
    const cont = localStorage.getItem('contador',contador)
};

const arregloLista = () =>{
    setContador()
    const arreglo = localStorage.getItem('arregloLista')
    return arreglo
};

const setArregloLista = () =>{
    localStorage.setItem('arregloLista',JSON.stringify(arregloLista))
};

const crearLista = (descripcion) => {
    contador++
    let objLista ={
        id: contador,
        descripcion: descripcion 
    }
    ArregloLista = getArregloLista()
    arregloLista.push(objLista)
    setArregloLista ()

    if (getArregloLista()!=null){
        arregloLista=getArregloLista()
    }
};

const mostrarLista = () =>{
    lista.innerHTML = ''
    for (const Lista of get ArregloLista()){
      lista.innerHTML =`
            <li id= "${lista.id}">
                <input type="text" class="input-area" value"${lista.descripcion}>
                <button class="boton-eliminar">X</button>
            </li>
    `
        
    }
}

/*Editar*/
const editarLista = (idLista, descripcion) =>{
    let Lista ={
        idLista,
        descripcion: descripcion
    }
    let datos = getArregloLista()
    let newArreglo = []
    if (datos!= null {
        for (const Lista of datos){
            if (Lista.id == idLista){
                newLista.push(newLista)
            } else{
                newArreglo.push(Lista)
            }
        }
    })
};

