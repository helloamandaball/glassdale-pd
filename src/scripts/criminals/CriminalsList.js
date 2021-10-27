import { Criminals } from "./Criminals.js"
import { useCriminals, getCriminals } from "./CriminalsDataProvider.js"

//What is contentTarget representing? Where I want some code bits to go in the html element.
const contentTarget = document.querySelector(".print-list")

export const CriminalsList = () => {
    getCriminals()
    .then(() => {
        let criminalsArray = useCriminals();
        let criminalsHTML = "";

        criminalsArray.forEach((singleCriminalsObject) => {
            criminalsHTML += Criminals(singleCriminalsObject)
        })

        contentTarget.innerHTML = `
            <h2>Criminals</h2>
            <div class="criminals-list">
                ${criminalsHTML}
            </div>
        `

    })
}

// Nav Bar listener
document.querySelector("#criminals-nav-link").addEventListener("click", () => {
    // invoke the function that prints the criminals
    CriminalsList()    
})
