const accordionHeaders = document.querySelectorAll(".accordion__header");

accordionHeaders.forEach(header => {
    header.addEventListener("click", () => {
        const accordionItem = header.parentElement;
        const accordionActive = accordionItem.classList.contains("active");

    accordionActive ? accordionItem.classList.remove("active") : accordionItem.classList.add("active");
    })
})

const menuLinks = document.querySelectorAll(".menu__link");

 menuLinks.forEach(item => {
    item.addEventListener("click", ()) => {
        menuLinks.forEach(i => i.classList.remove("active"));
        item.classList.add("active");
    } 
})