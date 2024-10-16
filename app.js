
function scrollToFooter() {
    var footer = document.getElementById("footer-section");
    if (footer) {
        footer.scrollIntoView({ behavior: "smooth" });
    }
}
function scrollToProject() {
    var footer = document.getElementById("project-section");
    if (footer) {
        footer.scrollIntoView({ behavior: "smooth" });
    }
}
window.history.scrollRestoration = 'manual';
function redirectToGitHub() {
    window.open("https://github.com/BriouaNorElHouda/");
}
function redirectToLinkedIn() {
   window.open("https://www.linkedin.com/in/nor-el-houda-brioua/");
}
function sendEmail() {
   window.location.href = "mailto:nor.el.houda.brioua@gmail.com";
}
window.onload = function () {
    window.scrollTo(0, 0);  // Forces the page to load at the top
};