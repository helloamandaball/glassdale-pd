import { Navbar } from "../navbar/navbar.js"

const contentTarget = document.querySelector(".print-list")
export const HomePage = () => {
    contentTarget.innerHTML = `
        <div class="mainImageBox">
            <div class="mainImage">
                <img src="https://thumbs.dreamstime.com/b/police-department-modern-building-sign-front-49089574.jpg" alt="image">
            </div>
        </div>
        <div class="welcomeHdr">
            <h1>Welcome to Glassdale PD</h1>
            <h4>LOCATED IN THE HISTORIC CITY OF GLASSDALE, USA</h4>
            <p class="welcomeBlurb">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div class="badgeImage">
            <img src="https://thumbs.dreamstime.com/b/special-police-badge-silver-police-badge-isolated-white-background-101516104.jpg" alt="badge" class="badgeImage">
        </div>
    `
}

Navbar()

document.querySelector("#home-link").addEventListener("click", () => {
    console.log("homepage link clicked")
    HomePage()
  })