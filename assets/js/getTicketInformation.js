const name = sessionStorage.getItem("name");
const type = sessionStorage.getItem("type");
const ticketName = document.querySelector("#ticket-name");
const ticketType = document.querySelector("#ticket-type");
ticketName.textContent = name;
ticketType.textContent = type;
