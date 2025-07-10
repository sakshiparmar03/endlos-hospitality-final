document.addEventListener("DOMContentLoaded", function () {
    fetch("footer.html")
        .then(res => res.text())
        .then(data => {
            document.querySelector("body").insertAdjacentHTML("beforeend", data);
        });
});
