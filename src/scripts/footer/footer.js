export const Footer = () => {
    const footerContainer = document.querySelector('footer');
    footerContainer.innerHTML += `
        <p class="footerBlurb">Contact us at 555-0911</p>
        <p>&copy;2021 Glassdale PD &bull; NewforceWV Cohort-5 &bull; <a href="https://github.com/helloamandaball/glassdale-pd" target="_blank"><nobr>Visit us on GitHub!</nobr></a></p>
    `
}