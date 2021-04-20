let footerInner = document.createElement('footer')
let footerContainer = document.querySelector('.footerContainer')
footerInner.innerHTML = `
<section class="footer__up">

    <div class="footer__item1">
        <img src="./images/oxg_logo_W.svg" alt="">
        <p>Designed by 🌍</p>
        <p>Made with 💚</p>
    </div>

    <div class="footer__item2 footer__item2_1 footer__item">
        <h2>Company</h2>
        <ul>
            <li><a href="./philosophy.html">About Us</a></li>
            <li><a href="./blog.html">Blog</a></li>
            <li>Careers</li>
            <li><a href="./contact.html">Contact</a></li>
        </ul>
    </div>

    <div class="footer__item2 footer__item2_2 footer__item ">
        <h2>Members</h2>
        <ul>
            <li class="selected">
                <a href="./calendly.html" target="_blank">Schedule a call</a>
            </li>
            <li><a href="./form.html">One Pager</a></li>
            <li><a href="./form.html">Pitch Deck</a></li>
            <li><a href="./form.html">White Paper</a></li>
        </ul>
    </div>

    <div class="footer__item3 footer__item">
        <h2>Join the community</h2>
        <ul>
            <li class='li__socials'>
                <ul class="footer__socials">
                    <li><img src="./images/youtube.svg" alt=""></li>
                    <li><img src="./images/linkedin.svg" alt=""></li>
                    <li><img src="./images/twitter.svg" alt=""></li>
                    <li><img src="./images/facebook.svg" alt=""></li>
                    <li><img src="./images/instagram.svg" alt=""></li>
                    <li><img src="./images/reddit.svg" alt=""></li>
                    <li><img src="./images/telegram.svg" alt=""></li>
                </ul>
            </li>
            <ul class="li__grid">
                <li><a href="./termsOfServise.html">Terms of Use</a></li>
                <li><a href="./privacyPolicy.html">Privacy Policy</a></li>
                <li><a href="./CoockiePolicy.html">Cookies Policy</a></li>
            </ul>
        </ul>
    </div>
</section>
<section class="footer__borderline"></section>
<section class="footer__down">
    <p>Copyright © DZEME LTD 2021</p>
</section>
`
footerContainer.append(footerInner)
