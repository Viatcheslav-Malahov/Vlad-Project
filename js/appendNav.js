let navInner = document.createElement('nav')
let navContainer = document.querySelector('.navContainer')
navInner.innerHTML = `
    <div class="nav__logo">

        <a class="logo__white" href="./index.html"><img src="./images/oxg_logo_W.svg" alt=""
                style="color: white;"></a>
        <a class="logo__blue" href="./index.html"><img src="./images/oxg_logo_B.svg" alt=""
                style="color: white;"></a>
    </div>
    <ul class="nav_links">
        <li class=""><a href="./philosophy.html">PHILOSOPHY</a></li>
        <li><a href="./methotodogy.html">METHODOLOGY</a></li>
        <li><a href="./contact.html">CONTACT</a></li>
    </ul>
    <div class="nav__bar">
        <i class='fas fa-bars'></i>
    </div>
    <ul class="nav_links_bar hidden">
        <li><a href="./philosophy.html">PHILOSOPHY</a></li>
        <li><a href="./methotodogy.html">METHODOLOGY</a></li>
        <li><a href="./contact.html">CONTACT</a></li>
        <li class="version">1 . 0</li>
    </ul>
`
navContainer.append(navInner)
