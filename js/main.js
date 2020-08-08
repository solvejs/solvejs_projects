// toggle notes top of div
(function toggleFunc() {
    let notesDiv = document.getElementById("hide-toggle");
    let toggle = document.createElement("button");
    let toggleText = document.createTextNode("Hide Notes");
    toggle.appendChild(toggleText);
    notesDiv.prepend(toggle);
    toggle.addEventListener('click', () => notesDiv.setAttribute("class", "hide"));
})();
