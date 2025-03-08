document.addEventListener("DOMContentLoaded", function () {
    const imageGrids = document.querySelectorAll(".image-grid");
    const prevBtn = document.querySelector(".prev-btn1");
    const nextBtn = document.querySelector(".next-btn1");
    const titleElement = document.querySelector(".img-slider-title");
    
    let currentIndex = 0;

    const titles = [
        "<b>Nvidia Dataset - Balloon1</b>",
        "<b>Nvidia Dataset - Balloon2</b>",
        "<b>Nvidia Dataset - Playground</b>",
        "<b>Nvidia Dataset - Jumping</b>",
        "<b>Nvidia Dataset - Skating</b>",
        "<b>Nvidia Dataset - Truck</b>",
        "<b>Nvidia Dataset - Umbrella</b>"
    ];

    function updateGrid() {
        imageGrids.forEach((grid) => grid.style.display = "none");
        imageGrids[currentIndex].style.display = "grid";
        titleElement.innerHTML = titles[currentIndex];
    }

    nextBtn.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % imageGrids.length; 
        updateGrid();
    });

    prevBtn.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + imageGrids.length) % imageGrids.length; 
        updateGrid();
    });

    updateGrid(); 
});
