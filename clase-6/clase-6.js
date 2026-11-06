const input = document.getElementById("input-lista");
const button = document.getElementById("button-agregar");
const lista = document.getElementById("lista");

button.addEventListener("click", () => {
  const li = document.createElement("li");
  li.textContent = input.value;
  li.style.backgroundColor = "red";
  lista.appendChild(li);

  const buttonDelete = document.createElement("button");
  buttonDelete.textContent = "Eliminar";
  li.appendChild(buttonDelete);

  buttonDelete.addEventListener("click", () => {
    lista.removeChild(li);
  });
});
