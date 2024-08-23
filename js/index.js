const downloadCV = document.querySelector(".about-cta");



downloadCV.addEventListener("click", function () {
    var link = document.createElement('a');
    link.href = 'img/MJsResume.pdf'
    link.download = "MJ's Resume.pdf";
    document.body.appendChild(link); 
    link.click();
    document.body.removeChild(link);
});