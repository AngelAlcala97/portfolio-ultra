const requestURL = "projects.json";
const request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = "json";
request.send();

request.onload = function () {
   const projects = request.response;
//    console.log (projects)
   mostrarProyectos(projects)
 };



 function mostrarProyectos(ANGEL) {
    console.log(ANGEL.projects.length)
    const projectsTable = document.getElementById('projects-table');
    projectsTable.innerHTML = '';
    for (var i = 0; i < ANGEL.projects.length; i++){
        const project = document.createElement('div');
        project.className = 'card';
                project.innerHTML = `
                    <a target="_blank" href="${ANGEL.projects[i].enlace}">
                    <div class="cardImage" style="background: url(${ANGEL.projects[i].imageURL}); background-size: cover;">
                        <div class="slider">
                            <img src="img/estrellas-slider1.png">
                            <img src="img/estrellas-slider1.png">
                            <img src="img/estrellas-slider1.png">
                            <img src="img/estrellas-slider1.png">
                            <img src="img/estrellas-slider1.png">
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
    