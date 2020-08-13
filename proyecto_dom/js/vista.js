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

        // <label>Title: </label>
        form.appendChild(this.generateLabel("Title: "));
        form.appendChild(this.generateLabel("Year: "));

        // <input id="inputTitle" type="text"/>
        let input = document.createElement("input");
        form.appendChild(input);
        input.id = "inputTitle";
        input.type = "text";
        input.placeholder = "Give me a title?";
    },
    "generateLabel": function(text) {
        let label = document.createElement("label");
        label.appendChild(document.createTextNode(text));
        return label;
    }
}