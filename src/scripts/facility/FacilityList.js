import { Facility } from "./Facility.js";
import { useFacility, getFacility } from "./FacilityDataProvider.js";
import { useCriminals, getCriminals } from "../criminals/CriminalsDataProvider.js"
import { getCriminalFacilities, useCriminalFacilities } from "./CriminalFacilityProvider.js"

const contentTarget = document.querySelector(".print-list")

export const FacilityList = () => {
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
            render(facilities, criminals, crimFac)
        }
    )
}

const render = (facilitiesToRender, allCriminals, allRelationships) => {
    // Step 1 - Iterate all facilities
    contentTarget.innerHTML = `
        <h2>Facilities</h2>
        <div class="facility-list">
            ${facilitiesToRender.map(
                (facilityObject) => {
                    // Step 2 - Filter all relationships to get only ones for this facility
                    const criminalRelationshipsForThisFacility = allRelationships.filter(cf => cf.facilityId === facilityObject.id)

                    // Step 3 - Convert the relationships to criminals with map()
                    const criminals = criminalRelationshipsForThisFacility.map(cf => {
                        const matchingFacilityObject = allCriminals.find(criminal => criminal.id === cf.criminalId)
                        return matchingFacilityObject
                    })

                    // Must pass the matching facilities to the Criminal component
                    return Facility(facilityObject, criminals)
                }
            ).join("")}    
        </div>
    `
}

//////////////////////////////////////////////////////////////
////Code before changing CriminalsList to what Ch.14 requires:
// export const FacilityList = () => {
//     getFacility()
//     .then(() => {
//         let facilityArray = useFacility();
//         let facilityHTML = "";

//         facilityArray.forEach((singleFacilityObject) => {
//             facilityHTML += Facility(singleFacilityObject)
//         })

//         contentTarget.innerHTML = `
        //     <h2>Facilities</h2>
        //     <div class="facility-list">
        //         ${facilityHTML}
        //     </div>
        // `

//     })
// }

document.querySelector("#facility-nav-link").addEventListener("click", () => {
    FacilityList()
    // document.querySelector(".filterMenuContainer").innerHTML = ""
    document.querySelector(".filters__crime").innerHTML = ""
    document.querySelector(".filters__officer").innerHTML = ""
  })