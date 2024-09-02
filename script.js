
function toggleMenu(){
    let navBtn=document.querySelector(".navItems");
    navBtn.classList.toggle('Active');
}
document.addEventListener('DOMContentLoaded', function () {
    let currentPage = 1;
    const totalPages = 3;

    const pages = document.querySelectorAll('.page');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const pageButtons = document.querySelectorAll('.page-btn');

    function updatePage(pageNumber) {
        currentPage = pageNumber;

        pages.forEach((page, index) => {
            page.classList.toggle('active', index + 1 === pageNumber);
        });

        pageButtons.forEach((button, index) => {
            button.classList.toggle('active', index + 1 === pageNumber);
        });

        prevButton.disabled = pageNumber === 1;
        nextButton.disabled = pageNumber === totalPages;
    }

    prevButton.addEventListener('click', () => {
        if (currentPage > 1) {
            updatePage(currentPage - 1);
        }
    });

    nextButton.addEventListener('click', () => {
        if (currentPage < totalPages) {
            updatePage(currentPage + 1);
        }
    });

    pageButtons.forEach(button => {
        button.addEventListener('click', () => {
            const page = parseInt(button.dataset.page);
            updatePage(page);
        });
    });

    updatePage(currentPage);
});
let sB = document.getElementById("StickyBtn");
sB.addEventListener("click", (e) => {
    window.location.href="#";
});