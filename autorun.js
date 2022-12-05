if(document.getElementsByClassName("nav-user-image") != null){
    document.getElementsByClassName("nav-user-image")[0].outerHTML = "<span class=\"nav-user-image\" style=\"background-image: url('/DayMap/Images/profile-icon.png');\"></span>";
}
if(document.getElementsByClassName("photoThumb") != null){
    document.getElementsByClassName("photoThumb")[0].remove();
}