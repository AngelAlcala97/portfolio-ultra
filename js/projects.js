// const { response } = require("express");

// const requestURL = "projects.json";
// const request = new XMLHttpRequest();
// request.open("GET", requestURL);
// request.responseType = "json";
// request.send();

// request.onload = function () {
//    const projects = request.response;
// //    console.log (projects)
//    mostrarProyectos(projects)
//  };

 fetch('projects.json')
 .then(response=> response.json())
 .then (data=> {
    mostrarProyectos(data)
 })


 function mostrarProyectos(ANGEL) {
    console.log(ANGEL.projects.length)
    const projectsTable = document.getElementById('projects-table');
    projectsTable.innerHTML = '';
    for (var i = 0; i < ANGEL.projects.length; i++){
        const project = document.createElement('div');
        project.className = 'card';
                project.innerHTML = `
                    <a target="_blank" href="${ANGEL.projects[i].enlace}">
                    <div class="cardImage" style="background-image: url(${ANGEL.projects[i].imageURL});">
                        <div class="slider">
                            <img alt="star-card-decoration" src="img/projects/estrellas-slider1.webp">
                            <img alt="star-card-decoration" src="img/projects/estrellas-slider1.webp">
                            <img alt="star-card-decoration" src="img/projects/estrellas-slider1.webp">
                            <img alt="star-card-decoration" src="img/projects/estrellas-slider1.webp">
                            <img alt="star-card-decoration" src="img/projects/estrellas-slider1.webp">
                        </div>
                    </div>
                    <div class="cardText">
                        <h1>${ANGEL.projects[i].name}</h1>
                        <p>${ANGEL.projects[i].description}</p>
                    </div>
                    </a>`
                    projectsTable.appendChild(project);
      }

    }
    