import { Criminals } from "./Criminals.js"
import { useCriminals, getCriminals } from "./CriminalsDataProvider.js"
import { OfficerSelect } from "../officers/OfficerSelect.js"
import { ConvictionSelect } from "../crimes/ConvictionSelect.js"

const contentTarget = document.querySelector(".print-list")

export const CriminalsList = (selectListName, selectedChoice) => {
    let criminalListContainer = document.querySelector(".print-list");
    criminalListContainer.innerHTML = ""

    getCriminals()
    .then(() => {
        let criminalsArray = useCriminals();
        let criminalsHTML = "";
    
        if(selectListName === "crimes"){
            criminalsArray = criminalsArray.filter(singleCriminalInLoop => {
            // write the condition here to filter for criminals whose crime matches the convictionFilter value
                return singleCriminalInLoop.conviction === selectedChoice
            })
        } 
        else if(selectListName === "officers"){
            criminalsArray = criminalsArray.filter(singleOfficerlInLoop => {
                return singleOfficerlInLoop.arrestingOfficer === selectedChoice
            })
        }
        
        // at this point, the value criminals will either be all of the criminals (if no convictionFilter was selected) or the criminals that match the crime selected 
        // either way, we want to print them!
        criminalsArray.forEach((singleCriminal) => {
            criminalsHTML += Criminals(singleCriminal);
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
    //Triggering the bottom two functions so they only show up whe the Criminals page is clicked and not on other pages  
    ConvictionSelect()
    OfficerSelect()
})
