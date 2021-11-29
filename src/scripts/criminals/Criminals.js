export const Criminals = (criminalsObject, facilities) => {
    return `
        <div class="criminals-list-card">
            <div class="criminalsName">${criminalsObject.name}</div>
            <div class="criminalsAge"><em>Age:</em> ${criminalsObject.age}</div>
            <div class="conviction"><em>Conviction:</em> <span class="convictionName">${criminalsObject.conviction}</span></div>
            <div class="termStart"><em>Term Start:</em> ${new Date(criminalsObject.incarceration.start).toLocaleDateString('en-US')}
            </div>
            <div class="termEnd"><em>Term End:</em> ${new Date(criminalsObject.incarceration.end).toLocaleDateString('en-US')}
            </div>
            <div class="arrestingOfficer"><em>Arresting Officer:</em> ${criminalsObject.arrestingOfficer}</div>
            <div class="criminalFacilityList">
                <p><em>Facilities:</em></p>
                <ul>
                    ${facilities.map(f => `<li>${f.facilityName}</li>`).join("")}
                </ul>
            </div>
        </div>
    `
}
//age, eyeColor, name, workHistory, phone, address, incarceration (start & end), conviction, arrestingOfficer, known_associates (name & alibi)

//line 15 code, the <li> to render the list of facilities, is copy pasted from chapter 14

//<button id="associates--${criminalsObject.id}">Show Associates</button>