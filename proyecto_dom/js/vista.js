let view = {
    "initialize": function() {
        this.generateTitle();
        this.generateForm();
    }, 
    "body": document.getElementsByTagName("body")[0],
    "generateTitle": function() {
        // <h1 style="font-size: 22px; color: brown">Filmaffinity V2</h1>
        let h1 = document.createElement("h1");
        this.body.appendChild(h1);
        h1.appendChild(document.createTextNode("Filmaffinity V2"));
        h1.setAttribute("style", "font-size: 22px; color: brown"); 
        // Mala praxis, style no le gusta a María
    },
    "generateForm": function() {
        let form = document.createElement("form");
        form.id = "filmForm";
        this.body.appendChild(form);
        // EJ 1: Crear una función (método de view) que genere un label
        // EJ 2: Para ese label, el método debe recibir un parámetro con el texo
        // Ej 3: y usar aquí para crear los label
        // EJ 3: y un input personalizado mediante parámetros (nombre campo, tipo campo...)
        // EJ 4: y usarla aquí mismo para crear los 3 inputs title, year, image

        // <label>Title: </label> <input id="inputTitle" type="text" placeholder="Give me a title"/>  

        let elNuevoLabelTitle = this.generateLabel("Title: ");
        form.appendChild(elNuevoLabelTitle);
        this.generateInput(form, "inputTitle", "text", "Give me a title");
        
        // <label>Year: </label> <input id="inputYear" type="text" placeholder="Give me a Year"/>  
        form.appendChild(this.generateLabel("Year: "));
        this.generateInput(form, "inputYear", "number", "Give me a year");
 
        this.generateTable();
        form.innerHTML += "<br/>";
        this.generateButton(form, "btnAdd", "Add film", () => {
            alert("Add");
        });
    },  
    "generateLabel": function(text) {       // Función con funtion(p1, p2) {.. }
        let label = document.createElement("label");
        label.appendChild(document.createTextNode(text));
        return label;
    }, 
    "generateInput": (f, id, t, ph) => {  // Función con  (p1, p2) => {... } Función flecha o lamda
        let input = document.createElement("input");
        f.appendChild(input);
        input.id = id;
        input.type = t;
        input.placeholder = ph;
    },  
    "generateButton": (f, id, val, functionOnClick) =>    
    {
        let but = document.createElement("input");
        f.appendChild(but);
        but.id = id;
        but.type = "button";
        but.value = val;
        but.addEventListener("click", functionOnClick);
    },
    generateTable: function () { 
        let table = document.createElement("table");
        this.body.appendChild( table);
        table.innerHTML += 
`    <thead>
        <tr>
            <td>Title</td>
            <td>Year</td>
        </tr>
    </thead>`;
    }
}