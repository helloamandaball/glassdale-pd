export const Officers = (officersObject) => {
    return `
        <div class="officers-list-card">
            <div class="officerImg"><img src="https://www.digidescorp.com/wp-content/uploads/2016/08/FPO-Image-Squares.jpg" alt="image"></div>
            <div class="officerName">${officersObject.name}</div>
        </div>
    `
}