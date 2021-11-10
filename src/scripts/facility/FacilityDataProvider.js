let facility = []

export const useFacility = () => {
    return facility.slice()
}

export const getFacility = () => {
    return fetch ("https://criminals.glassdale.us/facilities")

    .then(messyFacilityList => messyFacilityList.json())

    .then(sortedFacilityList => {
            // console.table(sortedFacilityList)
            facility = sortedFacilityList
        }
    )
}