document.addEventListener("DOMContentLoaded", function () {
    const videoGrids = document.querySelectorAll(".video-grid");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");
    const titleElement = document.querySelector(".slider-title");
    let currentIndex = 0;

    const titles = [
        "<b>Nvidia Dataset</b>",
        "<b>HyperNeRF Dataset</b>",
        "<b>Iphone Dataset</b>"
    ];

    videoGrids[currentIndex].classList.add("active");

    nextBtn.addEventListener("click", () => {
        videoGrids[currentIndex].classList.remove("active");
        currentIndex = (currentIndex + 1) % videoGrids.length;
        videoGrids[currentIndex].classList.add("active");
        
        titleElement.innerHTML = titles[currentIndex];
    });

    prevBtn.addEventListener("click", () => {
        videoGrids[currentIndex].classList.remove("active");
        currentIndex = (currentIndex - 1 + videoGrids.length) % videoGrids.length;
        videoGrids[currentIndex].classList.add("active");
    });
});
