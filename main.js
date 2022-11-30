const elForim = document.querySelector(".forim_cart");
const elBoxs = document.querySelector(".todos");
const elInput = document.querySelector("#tel");
const elUrl = document.querySelector("#url");
const elEmail = document.querySelector("#email");
const elTel = document.querySelector("#tel");
const elPassword = document.querySelector("#password");
const elAll = document.querySelector(".button_all");

let arr = [];

elForim.addEventListener("submit", function (e) {
  e.preventDefault();
  elBoxs.textContent = "";

  const newItem = {
    url: elUrl.value,
    email: elEmail.value,
    tel: elInput.value,
    password: elPassword.value,
  };

  arr.push(newItem);
  console.log(arr);

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];

    const div = document.createElement("div");
    const itemImg = document.createElement("img");
    const itemEmail = document.createElement("p");
    const ItemTel = document.createElement("p");
    const itemPassword = document.createElement("p");
    itemImg.src = newItem.url;
    itemEmail.textContent = newItem.email;
    ItemTel.textContent = newItem.tel;
    itemPassword.textContent = newItem.password;
    div.appendChild(itemImg);
    div.style.background = "#fff";
    div.style.borderRadius = "12px";

    itemImg.style.width = "300px";
    itemImg.style.borderRadius = "12px 12px 0px 0px";
    div.appendChild(itemEmail);
    div.appendChild(ItemTel);
    div.appendChild(itemPassword);
    elBoxs.appendChild(div);
  }
});

elAll.addEventListener("click", clearAll);
function clearAll() {
  elBoxs.innerHTML = "";
  arr = [];
}
