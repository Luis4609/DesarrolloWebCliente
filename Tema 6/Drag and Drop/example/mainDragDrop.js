function drag(ev) {
    ev.dataTransfer.setData("id", ev.target.id);
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("id");

    try {
        document.getElementById(ev.target.parentNode.id).removeChild(document.getElementById(data));
    } catch (e) {
        console.log("This is not a child of this parent.");
    }
}

// Clean all the tag child elements from contenido container
const clearContentContainer = (parent) => {
    Array.from(parent.children).filter((child) => {
            return child.classList.contains('crema', 'contenedor-child');
        })
        .forEach(elementChild => parent.removeChild(elementChild));
};

const main = () => {
    //Variables para la descripcion Contenido
    const title = document.getElementById("title");
    const url = document.getElementById("url");
    const description = document.getElementById("description");

    //Contadores para ID etiquetas y bookmarks
    let counterEtiquetas = 0;
    let counterBookmarks = 0;

    /*
    	Funcion para agregar etiquetas y bookmarks
    */
    const agregarHijos = () => {
        // Guardamos el indice para cada elemento, el cual aumenta por cada eventListenner
        const contenedorPadre = event.target.parentNode;
        const nombreContenedorPadre = contenedorPadre.firstElementChild.innerHTML;

        var elemento = document.createElement("div");
        elemento.setAttribute("draggable", "true");
        /*
        	Si el contenedor es el de las etiquetas,
        	la etiqueta debera tener unas propiedades con el contenido,
        	si es el contenedor bookmarks, los bookmarks deberan
        	de tener una lista de tags
        */
        if (nombreContenedorPadre == "ETIQUETAS") {
            // Sumar 1 al counter por cada etiqueta añadida
            counterEtiquetas++;

            elemento.setAttribute("contenido", {
                title: "Titulo de prueba",
                url: "https://www.google.es/",
                description: "Descripción"
            });
            elemento.id = contenedorPadre.id + counterEtiquetas;
            elemento.innerHTML = "ETIQUETA " + counterEtiquetas;

            /*
            	Add the onclick funcitonality to show the content of the tag
            */
            elemento.onclick = () => {
                title.value = elemento.contenido["title"];
                url.value = elemento.contenido["url"];
                description.value = elemento.contenido["description"];

                /*
                	Add the funcitonality to change the content of the tag
                */
                title.onchange = () => {
                    elemento.contenido["title"] = title.value;
                };

                url.onchange = () => {
                    elemento.contenido["url"] = url.value;
                };

                description.onchange = () => {
                    elemento.contenido["description"] = description.value;
                };
            };
        } else if (nombreContenedorPadre == "BOOKMARKS") {
            // Sumar 1 al counter por cada bookmark añadido
            counterBookmarks++;
            // Here we'll insert duplicated tags when associated with a bookmark
            elemento.etiquetas = [];
            elemento.id = contenedorPadre.id + counterBookmarks;
            elemento.innerHTML = "BOOKMARK " + counterBookmarks;

            elemento.onclick = () => {
                clearContentContainer(document.getElementById("contenido"));
                elemento.etiquetas.forEach(etiqueta => {
                    etiqueta.setAttribute("class", "crema contenedor-child");
                    document.getElementById("contenido").insertBefore(etiqueta, document.getElementById((contenedorPadre.id, 'Drop')));
                })
            };

            /*
            	Allow associating tags to bookmarks by drag and drop
            */
            elemento.ondrop = (ev) => {
                // Check first if the target is a bookmark element
                if (ev.target.id.substring(0, 9) == "bookmarks") {
                    ev.preventDefault();
                    let duplicatedEle = document.getElementById(ev.dataTransfer.getData("id")).cloneNode(true);
                    duplicatedEle.originalId = duplicatedEle.id;
                    duplicatedEle.id += "Dup";

                    console.log(duplicatedEle.attributes);
                    elemento.etiquetas.push(duplicatedEle);

                    duplicatedEle.onclick = () => {
                        title.value = this.contenido["title"];
                        url.value = this.contenido["url"];
                        description.value = this.contenido["description"];

                        /*
                        	Add the funcitonality to change the content of the tag
                        */
                        title.onchange = () => {
                            this.contenido["title"] = title.value;
                        };

                        url.onchange = () => {
                            this.contenido["url"] = url.value;
                        };

                        description.onchange = () => {
                            this.contenido["description"] = description.value;
                        };
                    };
                }
                console.log(elemento.etiquetas);
            };

            elemento.ondragover = (ev) => {
                // Check first if the target is a bookmark element
                if (ev.target.id.substring(0, 9) == "bookmarks") {
                    ev.preventDefault();
                }
            };
        }

        elemento.setAttribute("class", "crema contenedor-child");
        document.getElementById(contenedorPadre.id).insertBefore(elemento, document.getElementById((contenedorPadre.id, 'Drop')));

        /*
        	Element drag events (event.target)
        */
        elemento.addEventListener("dragstart", function(event) {
            // The dataTransfer.setData() method sets the data type and the value of the dragged data
            event.dataTransfer.setData("id", event.target.id);
            // Change the border of the dragable element
            event.target.style.border = "1px solid grey";
        });
    }

    const addEtiquetas = document.getElementById("addEtiquetas");
    addEtiquetas.addEventListener("click", agregarHijos);

    const addBookmarks = document.getElementById("addBookmarks");
    addBookmarks.addEventListener("click", agregarHijos);
}

window.onload = main;