function print(param, clas) {
  var cell = document.createElement("p");
  /*cell.classList.add("grid__cell");
  cell.classList.add(clas);*/
  cell.className = "grid__cell clas"
  cell.innerHTML = param;
  document.querySelector(".grid").appendChild(cell);
}

function ciclies(par1, par2) {
  var arr = [];
  for (let index = 0; index < 80; index++) {
    arr[0] = par1;
    arr[1] = par2;
    arr[(index + 2)] = arr[index] + (arr[(index + 1)] * 1);
    print(arr[(index)], "column1");
  }
  for (let index = 0; index < 80; index++) {
    arr[0] = par1;
    arr[1] = par2;
    arr[(index + 2)] = arr[index] - (arr[(index + 1)] * 1);
    print(arr[(index)], "column2");
  }
  for (let index = 0; index < 80; index++) {
    arr[0] = par1;
    arr[1] = par2;
    arr[(index + 2)] = arr[index] *3 - (arr[(index + 1)] * 2);
    print(arr[(index)], "column3");
  }
}

function sort() {
  document.querySelector(".grid").innerHTML = null;
  var arr = document.querySelectorAll(".form__input");
  var a = arr[0].value;
  var b = arr[1].value;

  if (a == "" || b == "") {
    document.querySelector(".content__text").innerHTML = "Fill in both fields";
  }
  else {
    a = Number(a);
    b = Number(b);
    if (isNaN(a) || isNaN(b)) {
      document.querySelector(".content__text").innerHTML = "Input only numbers";
    }
    else {
      document.querySelector(".content__text").innerHTML = null;
      ciclies(a, b)};
  }
}
function clear() {
  document.querySelector(".content__text").innerHTML = null;
  document.querySelector(".grid").innerHTML = null;
}
document.querySelector(".reset").addEventListener("click", clear);
document.querySelector(".submit").addEventListener("click", sort);
