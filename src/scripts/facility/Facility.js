export const Facility = (facilities, criminalsObject) => {
    return `
        <div class="facility-list-card">
            <div class="facilityName">${facilities.facilityName}</div>
            <div class="facilityLevel"><em>Security Level:</em> ${facilities.securityLevel}</div>
            <div class="facilityCapacity"><em>Capacity:</em> ${facilities.capacity}</div>
            <div class="criminalFacilityList">
                <p><em>Criminals:</em></p>
                <ul>
                    ${criminalsObject.map(c => `<li>${c.name}</li>`).join("")}
                </ul>
            </div>
        </div>
    `
}