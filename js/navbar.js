let NavBar = document.querySelector('.nav__bar')
let NavBarItem = NavBar.querySelector('.fas')

NavBar.addEventListener('click', () => {
    if (NavBarItem.classList.contains('fa-bars')) {
        NavBarItem.classList.add('fa-times')
        NavBarItem.classList.remove('fa-bars')
        document.querySelector('.nav_links_bar').classList.remove('hidden')
        document.querySelector('header').classList.add('passive_sec')
        document.querySelector('main').classList.add('passive_sec')
        document.querySelector('footer').classList.add('passive_sec')
        document.querySelector('section').classList.add('passive_sec')
    }
    else {
        NavBarItem.classList.add('fa-bars')
        NavBarItem.classList.remove('fa-times')
        document.querySelector('.nav_links_bar').classList.add('hidden')
        document.querySelector('header').classList.remove('passive_sec')
        document.querySelector('main').classList.remove('passive_sec')
        document.querySelector('footer').classList.remove('passive_sec')
        document.querySelector('section').classList.remove('passive_sec')
    }
})

window.onresize = function (event) {
    if (screen.availWidth > 960) {
        NavBarItem.classList.add('fa-bars')
        NavBarItem.classList.remove('fa-times')
        document.querySelector('.nav_links_bar').classList.add('hidden')
        document.querySelector('header').classList.remove('passive_sec')
        document.querySelector('main').classList.remove('passive_sec')
        document.querySelector('footer').classList.remove('passive_sec')
        document.querySelector('section').classList.remove('passive_sec')
    }
};

let nav = document.querySelector('nav')

let sticky = nav.offsetTop

window.onscroll = () => {
    if (window.pageYOffset >= sticky) {
        nav.classList.add('sticky')
    }
    else {
        nav.classList.remove('sticky')
    }
    if (window.pageYOffset <= sticky) {
        nav.classList.remove('sticky')
    }
}