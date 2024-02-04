window.addEventListener('DOMContentLoaded', function() {
    updateImg();
});
window.addEventListener('resize', function() {
    updateImg();
});
function updateImg() {
    var windowWidth = window.innerWidth;
    if (windowWidth <= 768 && windowWidth > 600) 
    {
        document.querySelector('.first-block-img').src="./../source/man768.png";
        document.querySelector('.seventh-block-img').src="./../source/man768.png";
    }
     else {
        document.querySelector('.first-block-img').src="./../source/man-img.jpg";
        document.querySelector('.seventh-block-img').src="./../source/man768.png";
    } 
    if (windowWidth <=600)
        document.querySelector('.seventh-block-img').src="./../source/hand-img.png";
    else
        document.querySelector('.seventh-block-img').src="./../source/7block-img.png";
}
       
