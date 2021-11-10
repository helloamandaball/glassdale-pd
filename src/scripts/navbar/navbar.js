export const Navbar = () => {
    const footerContainer = document.querySelector('nav');
    footerContainer.innerHTML += `
        <div class="nav-component">
            <div class="glassdale-pd">
                <a id="home-link" href="index.html">Glassdale PD</a>
            </div>
            <div id="navBar">
                <ul>
                    <li class="navLink">
                        <a id="criminals-nav-link" href="#">Criminals</a>
                    </li>
                    <li class="navLink">
                        <a id="officers-nav-link" href="#">Officers</a>
                    </li>
                    <li class="navLink">
                        <a id="facility-nav-link" href="#">Facilities</a>
                    </li>
                    <li class="navLink">
                        <a id="notes-nav-link" href="#">Notes</a>
                    </li>
                    <!-- practice example button: -->
                    <!-- <li>
                        <button id="dark-mode">Dark Mode</button>
                    </li> -->
                </ul>
            </div>
        </div>
    `
}