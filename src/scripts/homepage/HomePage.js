export const HomePage = () => {
    const contentTarget = document.querySelector(".print-list")
    contentTarget.innerHTML = `
        <div class="mainImageBox">
        <div class="mainImage">
            <img src="https://thumbs.dreamstime.com/b/police-department-modern-building-sign-front-49089574.jpg" alt="image">
        </div>
        </div>
        <div class="welcomeHdr">
            <h2>Welcome to Glassdale PD</h2>
            <h4>Located in the historic city of Glassdale</h4>
            <p class="welcomeBlurb">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
    `
}

document.querySelector("#home-link").addEventListener("click", () => {
    HomePage()
  })