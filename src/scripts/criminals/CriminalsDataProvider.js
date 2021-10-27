//criminals is your array
let criminals = []
export const useCriminals = () => {
    return criminals.slice()
}


export const getCriminals = () => {
    // fetch requests the data fro the url
    return fetch("https://criminals.glassdale.us/criminals")
        //.then also is telling the server to "wait"
        //.then combined with the .json converts the JSON string response to a JavaScript structure (object or array)
        //.json will clean up the imported info form the fetch'd code and create an array to use it's called 'messy' here but elswhere it can also be called 'dirty' becaause it's not yet formated (or cleaned-up as it were).
        .then(messyCriminalsList => messyCriminalsList.json())
        //.then section below then is told to do something with the data, it's called 'sorted' because that's what the .json did with the data, elsewhere it can also be called 'clean' because the data gets cleaned up to use.
        .then(sortedCriminalsList => {
                console.table(sortedCriminalsList)
                criminals = sortedCriminalsList 
            }
        )
}
