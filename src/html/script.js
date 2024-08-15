
console.log("The script is working");

const navBar = document.querySelector("nav");

window.addEventListener("scroll", function () {
    if (this.scrollY >= 500 && this.scrollY < 899) {
        console.log(this.scrollY);
        console.log("above 500");
        navBar.style.backgroundColor = "#256EFF";
    } else if (this.scrollY >= 900 && this.scrollY < 1399) {
        console.log(this.scrollY);
        console.log("above 900");
        navBar.style.backgroundColor = "#3DDC97";
    } else if (this.scrollY >= 1400 && this.scrollY < 1749) {
        console.log(this.scrollY);
        console.log("above 1400");
        navBar.style.backgroundColor = "#B5D99C";
    } else if (this.scrollY >= 1750) {
        console.log(this.scrollY);
        console.log("above 1800");
        navBar.style.backgroundColor = "#FF495C";
    }
});
