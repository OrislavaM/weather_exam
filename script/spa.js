// SPA logic

window.frames[0].location.href = "./html/today.html";

let active_block = window.menu.children;
active_block[0].classList.add("active");

const menu = document.getElementById("menu");

menu.addEventListener("click", (e) => {
    Array.from(active_block).forEach((e) => {
        if (e.classList.contains("active")) {
            e.classList.remove("active");
        }
    });

    switch (e.target.dataset.menu) {
        case "today":
            {
                window.frames[0].location.href = "./html/today.html";
                document.title = "Weather Today";
                e.target.classList.add("active");
            }
            break;
        case "five_days":
            {
                window.frames[0].location.href = "./html/five_days.html";
                document.title = "5-Day Forecast";
                e.target.classList.add("active");
            }
            break;
        default:
            console.log("no even menu");
    }
});
