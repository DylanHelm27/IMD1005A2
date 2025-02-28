let darkmode = localStorage.getItem("darkmode") || 'false'
SetDarkMode()

function ToggleDarkMode() {
    if (darkmode == 'false') {
        darkmode = 'true' 
    } else {
        darkmode = 'false'
    }
    SetDarkMode()
}

function SetDarkMode() {
    let $btn = document.getElementById('btn_darkmode')

    if (darkmode == 'true') {
        document.body.classList.remove('darkMode')
        $btn.innerText = 'DARK MODE'
    } else {
        document.body.classList.add('darkMode')
        $btn.innerText = 'LIGHT MODE'
    }

    localStorage.setItem("darkmode", darkmode)
}
