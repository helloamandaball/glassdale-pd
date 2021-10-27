import { Officers } from "./Officers.js";
import { useOfficers, getOfficers } from "./OfficersDataProvider.js";

const contentTarget = document.querySelector(".print-list")

export const OfficersList = () => {
    getOfficers()
    .then(() => {
        let officersArray = useOfficers();
        let officersHTML = "";

        officersArray.forEach((singleOfficersObject) => {
            officersHTML += Officers(singleOfficersObject)
        })

        contentTarget.innerHTML = `
            <h2>Officers</h2>
            <div class="officers-list">
                ${officersHTML}
            </div>
        `

    })
}

document.querySelector("#officers-nav-link").addEventListener("click", () => {
    OfficersList()
  })