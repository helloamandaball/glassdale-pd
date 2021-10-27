export const Facility = (facilityObject) => {
    return `
        <div class="facility-list-card">
            <div class="facilityName">${facilityObject.facilityName}</div>
            <div class="facilityLevel">Security Level: ${facilityObject.securityLevel}</div>
            <div class="facilityCapacity">Capacity: ${facilityObject.capacity}</div>
        </div>
    `
}