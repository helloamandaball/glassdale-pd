export const Criminals = (criminalsObject) => {
    return `
        <div class="criminals-list-card">
            <div class="criminalsName">Name: ${criminalsObject.name}</div>
            <div class="criminalsAge">Age: ${criminalsObject.age}</div>
            <div class="conviction">Conviction: ${criminalsObject.conviction}</div>
            <div class="termStart">Term Start: ${new Date(criminalsObject.incarceration.start).toLocaleDateString('en-US')}
            </div>
            <div class="termEnd">Term End: ${new Date(criminalsObject.incarceration.end).toLocaleDateString('en-US')}
            </div>
        </div>
    `
}
//age, eyeColor, name, workHistory, phone, address, incarceration (start & end), conviction, arrestingOfficer, known_associates (name & alibi)