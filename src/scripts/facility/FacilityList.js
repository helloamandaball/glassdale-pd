import { Facility } from "./Facility.js";
import { useFacility, getFacility } from "./FacilityDataProvider.js";

const contentTarget = document.querySelector(".print-list")

export const FacilityList = () => {
    getFacility()
    .then(() => {
        let facilityArray = useFacility();
        let facilityHTML = "";

        facilityArray.forEach((singleFacilityObject) => {
            facilityHTML += Facility(singleFacilityObject)
        })

        contentTarget.innerHTML = `
            <h2>Facilities</h2>
            <div class="facility-list">
                ${facilityHTML}
            </div>
        `

    })
}

document.querySelector("#facility-nav-link").addEventListener("click", () => {
    FacilityList()
  })