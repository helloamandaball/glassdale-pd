import { Criminals } from "./Criminals.js"
import { useCriminals, getCriminals } from "./CriminalsDataProvider.js"
import { OfficerSelect } from "../officers/OfficerSelect.js"
import { ConvictionSelect } from "../crimes/ConvictionSelect.js"
import { getFacility, useFacility } from "../facility/FacilityDataProvider.js"
import { getCriminalFacilities, useCriminalFacilities } from "../facility/CriminalFacilityProvider.js"

const contentTarget = document.querySelector(".print-list")

//Code from Ch. 14:
export const CriminalList = () => {
    // Kick off the fetching of both collections of data
    getFacility()
    .then(getCriminals)
    .then(getCriminalFacilities)
    .then(
        () => {
            // Pull in the data now that it has been fetched
            const facilities = useFacility()
            const crimFac = useCriminalFacilities()
            const criminals = useCriminals()

            // Pass all three collections of data to render()
            render(criminals, facilities, crimFac)
        }
    )
}
// See Facility List for version that renders some HTML along with this code (h2, div, etc.)
const render = (criminalsToRender, allFacilities, allRelationships) => {
    // Step 1 - Iterate all criminals
    contentTarget.innerHTML = criminalsToRender.map(
        (criminalObject) => {
            // Step 2 - Filter all relationships to get only ones for this criminal
            const facilityRelationshipsForThisCriminal = allRelationships.filter(cf => cf.criminalId === criminalObject.id)

            // Step 3 - Convert the relationships to facilities with map()
            const facilities = facilityRelationshipsForThisCriminal.map(cf => {
                const matchingFacilityObject = allFacilities.find(facility => facility.id === cf.facilityId)
                return matchingFacilityObject
            })

            // Must pass the matching facilities to the Criminal component
            return Criminals(criminalObject, facilities)
        }
    ).join("")
}


//////////////////////////////////////////////////////////////
////Code before changing CriminalsList to what Ch.14 requires:

// export const CriminalsList = (selectListName, selectedChoice) => {
//     let criminalListContainer = document.querySelector(".print-list");
//     criminalListContainer.innerHTML = ""

//     getCriminals()
//     .then(() => {
//         let criminalsArray = useCriminals();
//         let criminalsHTML = "";
    
//         if(selectListName === "crimes"){
//             criminalsArray = criminalsArray.filter(singleCriminalInLoop => {
//             // write the condition here to filter for criminals whose crime matches the convictionFilter value
//                 return singleCriminalInLoop.conviction === selectedChoice
//             })
//         } 
//         else if(selectListName === "officers"){
//             criminalsArray = criminalsArray.filter(singleOfficerlInLoop => {
//                 return singleOfficerlInLoop.arrestingOfficer === selectedChoice
//             })
//         }
        
//         // at this point, the value criminals will either be all of the criminals (if no convictionFilter was selected) or the criminals that match the crime selected 
//         // either way, we want to print them!
//         criminalsArray.forEach((singleCriminal) => {
//             criminalsHTML += Criminals(singleCriminal);
//         })

//         contentTarget.innerHTML = `
//             <button id="clearFiltersBtn" class="clearFiltersBtn">Clear Filters</button>
//             <h2>Criminals</h2>
//             <div class="criminals-list">
//                 ${criminalsHTML}
//             </div>
//         `
//     })
// }

contentTarget.addEventListener("click", (event) => {
    if(event.target.id === "clearFiltersBtn"){
        // //.value = 0 because we want it to go back to the <option value="0">Please select a crime...</option>
        document.querySelector("#crimeSelect").value = 0,
        document.querySelector("#OfficerSelect").value = 0
    }
    // CriminalsList()
})

// Nav Bar listener
document.querySelector("#criminals-nav-link").addEventListener("click", () => {
    // invoke the function that prints the criminals
    CriminalList()  
    //Triggering the bottom two functions so they only show up whe the Criminals page is clicked and not on other pages  
    ConvictionSelect()
    OfficerSelect()
})
