function ToggleDarkMode() {
    document.body.classList.toggle('darkMode')

    let $btn = document.getElementById('btn_darkmode')

    if (document.body.classList.contains('darkMode')) {
        $btn.innerText = 'LIGHT MODE'
    } else {
        $btn.innerText = 'DARK MODE'
    }
}