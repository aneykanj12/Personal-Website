function changeTheme() {
    const currStyle = document.getElementById("page_style");
    const css_file = currStyle.getAttribute("href");

    let new_css;

    if (css_file === "style1.css") {
        new_css = "style2.css";
    } 
    else {
        new_css = "style1.css";
    }
    currStyle.setAttribute("href", new_css);
    localStorage.setItem("style", new_css);
}


window.onload = function() {
    const theme_saved = localStorage.getItem("style");
    console.log(theme_saved);
    if(theme_saved) {
        document.getElementById("page_style").setAttribute("href", theme_saved);
    }
};