export const Officers = (officersObject) => {
    return `
        <div class="officers-list-card">
            <div class="officerImg"><img src="https://thumbs.dreamstime.com/b/special-police-badge-silver-police-badge-isolated-white-background-101516104.jpg" alt="image"></div>
            <div class="officerName">${officersObject.name}</div>
        </div>
    `
}