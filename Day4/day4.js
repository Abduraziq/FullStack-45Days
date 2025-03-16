document.querySelectorAll(".sidebar ul li").forEach(item => {
    item.addEventListener("click", () => alert(`You clicked on ${item.innerText}`));
});
