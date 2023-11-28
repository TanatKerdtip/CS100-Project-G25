const themeSwitch = document.getElementById("theme");
const currentTheme = localStorage.getItem("theme");

if (currentTheme) {
    document.documentElement.setAttribute("data-theme", currentTheme);

    if (currentTheme === "second") {
        themeSwitch.value = "2";
    } else {
        themeSwitch.value = "1";
    }
}

function switchTheme() {
    if (themeSwitch.value == "2") {
        document.documentElement.setAttribute("data-theme", "second");
        localStorage.setItem("theme", 'second');
        themeSwitch.value = "1";
    } else if (themeSwitch.value == "1") {
        document.documentElement.setAttribute("data-theme", "first");
        localStorage.setItem("theme", "first");
        themeSwitch.value = "2";
    }
}
