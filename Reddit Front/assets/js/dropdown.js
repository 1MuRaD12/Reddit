let dropdown = document.getElementsByClassName("dropdown-btn");
let dropdowns = document.getElementsByClassName("dropdown");


for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "grid") {
            dropdownContent.style.display = "none";
        } else {
            dropdownContent.style.display = "grid";
        }
    });
}

let files = [],
select = document.querySelector('.select'),
input = document.querySelector('.file'),
form = document.querySelector('.drop'),
dropdowncontain = document.querySelector('.contain');
select.addEventListener('click', () => input.click());

input.addEventListener('change', () => {
    let file = input.files;
    for (let i = 0; i < file.length; i++) {
        files.push(file[i]);
    }

    form.reset();
    showImages();
})

const showImages = () => {
    let images = '';
    files.forEach((e, i) => {
        images += `<div class="image">
        <img src="${URL.createObjectURL(e)}" alt="">
        <span onclick = "delImage(${i})">&times;</span>
    </div> `
    });

    dropdowncontain.innerHTML = images;
}