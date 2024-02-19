document.addEventListener('DOMContentLoaded', function () {
    const botonAgregar = document.getElementById('botonAgregar');
    
    if (botonAgregar) {
        botonAgregar.addEventListener('click', handler);
    } else {
        console.error('El botón "botonAgregar" no fue encontrado en el DOM.');
    }
});
const botonAgregar = document.getElementById('botonAgregar');


botonAgregar.addEventListener('click', handler);

document.addEventListener('DOMContentLoaded', function () {
    const inputTitle = document.getElementById('titulo');
    const inputdescripcion = document.getElementById('descripcion');
    const inputurlImagen = document.getElementById('urlImagen');
    const botonRestablecer = document.getElementById('botonAgregar');


    botonRestablecer.addEventListener('click', function () {
        inputTitle.value = '';
        inputdescripcion.value ='';
        inputurlImagen.value = ''; 
    });
});

function mostrarImagenes() {
    var imagenesContainer = document.getElementById('imagenesContainer');
    if (imagenesContainer.style.display === 'none') {
        imagenesContainer.style.display = 'block';
    } else {
        imagenesContainer.style.display = 'none';
    }
}


class Activity {
    constructor(Id, Title, Description, imgUrl) {
        this.Id = Id;
        this.Title = Title;
        this.Description = Description;
        this.imgUrl = imgUrl;
    }
}

class Repository {
    constructor() {
        this.activities = [];
        this.lastId = 0;
    }
    getAllActivity() {
        return this.activities;
    }
    createActivity(Title, Description, imgUrl) {
        if (this.activities.length === 0) {
            this.lastId++;
        } else {
            this.lastId += 1;
        }
        const Actividad = new Activity(this.lastId, Title, Description, imgUrl);
        this.activities.push(Actividad);

        
    }
    deleteActivity(Id) {
        const activityIndex = this.activities.findIndex(activity => activity.Id === Id);
    
        if (activityIndex !== -1) {
            this.activities.splice(activityIndex, 1);
            alert('Actividad eliminada');
            
            // Ajustar los Id
            this.activities.forEach((activity, index) => {
                activity.Id = index + 1;
            });
    
            this.lastId = this.activities.length > 0 ? this.activities[this.activities.length - 1].Id : 0;
        } else {
            console.log('No existe la actividad con el Id especificado');
            
        }
    }

}

const dom = new Repository(); 

function crearActividad(activityInstance) {

    const {Title,Description,imgUrl} = activityInstance;

    const actividadDiv = document.createElement('div');
    const titleElement = document.createElement('h1');
    const descriptionElement = document.createElement('h2')
    const imgElement = document.createElement('img');

    titleElement.innerHTML = Title ;
    descriptionElement.innerHTML = Description;
    imgElement.src = imgUrl;

    //boton borrar const deleteButton = document.createElement('button');
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Eliminar';
    deleteButton.addEventListener('click', function() {
        const confirmDelete = confirm('¿Realmente deseas eliminar esta actividad?');
        if (confirmDelete) {
            const activityId = activityInstance.Id;
            dom.deleteActivity(activityId);
            renderActividades();
        }
    });


    

    //clase css

    actividadDiv.classList.add('cuadro-negro');
    titleElement.classList.add('tituloActividad');
    descriptionElement.classList.add('descriptionActividad');
    imgElement.classList.add('imagenActividad');
    deleteButton.classList.add('deleteButton');
    
    


       actividadDiv.appendChild(titleElement);
       actividadDiv.appendChild(descriptionElement);
       actividadDiv.appendChild(imgElement);
       actividadDiv.appendChild(deleteButton);

       return actividadDiv;
}

function renderActividades(){
    const containerActividades = document.getElementById('Actividades-container');
    containerActividades.innerHTML='';

    const allActivities = dom.getAllActivity();
    const activityElements = allActivities.map(Activity => crearActividad(Activity))

    activityElements.forEach(activityElements=> {
        containerActividades.appendChild(activityElements)
    });
}

function handler (event) {
    event.preventDefault();
    const titleInput = document.getElementById('titulo');
    const descriptionInput = document.getElementById('descripcion');
    const imgUrlInput = document.getElementById('urlImagen');

    const title = titleInput.value;
    const description = descriptionInput.value;
    const imgUrl = imgUrlInput.value;

    if (!title || !description || !imgUrl) {
        alert('Por favor, completa todos los campos.');
        return; 
    }

    dom.createActivity(title,description,imgUrl);

    console.log(dom.getAllActivity());
    renderActividades();
    
}


//jasmine export

module.exports =  {Activity , Repository} ;






   



