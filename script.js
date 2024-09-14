function funk() {
    var p = document.createElement('p');
    p.textContent = document.querySelector(".firstname").value;
    var cell = document.createElement("div");
    cell.classList.add("grid__cell");
    cell.appendChild(p);
    document.querySelector(".grid").appendChild(cell);
    
    var p = document.createElement('p');
    p.textContent = document.querySelector(".secondname").value;
    var cell = document.createElement("div");
    cell.classList.add("grid__cell");
    cell.appendChild(p);
    document.querySelector(".grid").appendChild(cell);
    
    var p = document.createElement('p');
    p.textContent = document.querySelector(".family").value;
    var cell = document.createElement("div");
    cell.classList.add("grid__cell");
    cell.appendChild(p);
    document.querySelector(".grid").appendChild(cell);
}
document.querySelector(".form__submit").addEventListener("click", funk);