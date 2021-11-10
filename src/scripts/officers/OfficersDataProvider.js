let officers = []

export const useOfficers = () => {
    return officers.slice()
}

export const getOfficers = () => {
    return fetch ("https://criminals.glassdale.us/officers")

    .then(messyOfficersList => messyOfficersList.json())

    .then(sortedOfficersList => {
            // console.table(sortedOfficersList)
            officers = sortedOfficersList
        }
    )
}