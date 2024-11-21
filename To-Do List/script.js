const elementoInput = document.querySelector(".input");
const botonAgregar = document.querySelector(".boton-agregar");
const elementosContainer = document.querySelector(".container");

class Item {
    constructor(tarea) {
        this.tarea = tarea;
        this.itemDiv = this.crearDiv(); 
        elementosContainer.appendChild(this.itemDiv); 
    }

    crearDiv() {
        // creo el div
        const itemDiv = this.crearElemento("div", { className: "item" });

        //creo el input de cada tarea
        const inputItem = this.crearElemento("input", {
            type: "text",
            className: "item-input",
            value: this.tarea,
            disabled: true,
        });

        // acá cambia el botón editar
        const botonEditar = this.crearElemento("button", {
            innerHTML: "🔒",
            className: "boton-editar",
        });

        botonEditar.addEventListener("click", () => {
            inputItem.disabled = !inputItem.disabled;
            botonEditar.innerHTML = inputItem.disabled ? "🔒" : "🔓";
        });

        const botonRemover = this.crearElemento("button", {
            innerHTML: `<i class="fas fa-trash"></i>`,
            className: "boton-remover",
        });

        botonRemover.addEventListener("click", () => itemDiv.remove());

        itemDiv.append(inputItem, botonEditar, botonRemover);

        return itemDiv;
    }

    crearElemento(tag, atributos) {
        const elemento = document.createElement(tag);
        Object.assign(elemento, atributos); 
        return elemento;
    }
}

//ver que no esté vacío o que les avise :v
function chequearInput() {
    const tarea = elementoInput.value.trim();
    if (tarea) {
        new Item(tarea); 
        elementoInput.value = ""; 
    } else {
        alert("Por favor, ingresa una tarea válida.");
    }
}

botonAgregar.addEventListener("click", chequearInput);
