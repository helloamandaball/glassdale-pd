// import { useOfficers, getOfficers } from "./OfficersDataProvider.js"
// import { OfficersList } from "./OfficersList.js"
import { useCriminals, getCriminals } from "../criminals/CriminalsDataProvider.js"
import { CriminalList } from "../criminals/CriminalsList.js"

    //We are using criminal list because we want to use this OfficerSelect to choose the Arresting Officer data from the CriminalList, not use the data from the OFficerDataProvider.js
const contentTarget = document.querySelector(".filters__officer")

export const OfficerSelect = () => {

    getCriminals()
    .then(() => {
        const convictions = useCriminals()
        render(convictions)
    })
}

const render = officersCollection => {

    contentTarget.innerHTML = `
        <select class="dropdown" id="OfficerSelect">
            <option value="0">Please select an officer...</option>
            ${
                officersCollection.map(officersObject => {
                    const officerName = officersObject.arrestingOfficer
                    return `<option>${officerName}</option>`
                })
            }
        </select>
    `
}

const eventHub = document.querySelector("body")
eventHub.addEventListener("change", (eventObject) => {

    if(eventObject.target.id === "OfficerSelect"){

        const selectedOfficer = eventObject.target.value
        CriminalList("officers", selectedOfficer)
    }
})

