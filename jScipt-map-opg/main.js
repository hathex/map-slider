function personTemplate(person) {
    return `<article class='person'>
                <h3> ${person.navn} </h3>   
                <h4> Fritidsinteresser:</h4>  
                <ul>
                    ${person.fritidsinteresser.map(f => <li>${f}</li>).join(" ")}  
                </ul>
                <p> Nuværende job: ${ person.job} </p>                         
           </article>`;
}





document.querySelector("#wrapper").innerHTML += personTemplate({
    navn: "Ole Halgrimsson",
    fritidsinteresser: ["Syning", "Fiskeri", "Toglyde"],
    job: "Direktør"
});
document.querySelector("#wrapper").innerHTML += personTemplate({
    navn: "Karen Boeslum",
    fritidsinteresser: ["Jagt", "Pileflet", "Heste", "Vandreture"],
    job: "Handelsassistent"
});
document.querySelector("#wrapper").innerHTML += personTemplate({
    navn: "Tinnus Erikson",
    fritidsinteresser: ["Madlavning", "Astrologi"],
    job: "Pædagogmedhjælper"
});