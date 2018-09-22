let celebrities = [
    {
        name: "Abdul Sattar Edhi",
        imgURL: "edhi.jpg",
        title: "Founder of Edhi Foundation",
        quote: "No religion is higher than humanity.",
        wikiLink: "https://en.wikipedia.org/wiki/Abdul_Sattar_Edhi"

    },

    {
        name: "Allama Iqbal",
        imgURL: "allama-iqbal.png",
        title: "Poet, Philosopher and Politician",
        quote: "The ultimate aim of the ego is not to see something, but to be something.",
        wikiLink: "https://en.wikipedia.org/wiki/Muhammad_Iqbal"
    },

    {
        name: "Quaid-e-Azam",
        imgURL: "quaid-e-azam.jpg",
        title: "Founder of Pakistan.",
        quote: "With faith, discipline and selfless devotion to duty, there is nothing worthwhile that you cannot achieve.",
        wikiLink: "https://en.wikipedia.org/wiki/Muhammad_Ali_Jinnah"
    },

    {
        name: "Abdul Qadeer Khan",
        imgURL: "aq-khan.jpg",
        title: " Nuclear Physicist and a Metallurgical Engineer,",
        quote: "Some people are ok with doing nothing all day after they retire, but then some people if they had nothing to do would go mad and start banging their heads against a wall.",
        wikiLink: "https://en.wikipedia.org/wiki/Abdul_Qadeer_Khan"
    },

    {
        name: "Arfa Karim",
        imgURL: "arfa-karim.jpg",
        title: "Computer Prodigy, Youngest Microsoft Certified Professional",
        quote: "If you want to do something big in your life, you must remember that shyness is only the mind. If you think shy, you act shy. If you think confident you act confident. Therefore never let shyness conquer your mind.",
        wikiLink: "https://en.wikipedia.org/wiki/Arfa_Karim"
    },

    {
        name: "Benazir Bhutto",
        imgURL: "benazir.jpeg",
        title: "Pakistani Politician",
        quote: "Democracy is necessary to peace and to undermining the forces of terrorism.",
        wikiLink: "https://en.wikipedia.org/wiki/Benazir_Bhutto"
    },

    {
        name: "Noor Jahan",
        imgURL: "noor-jahan.jpg",
        title: "Playback Singer and Actress",
        quote: "My life is a song, My life is music, I am the voice of life, May the World find me.",
        wikiLink: "https://en.wikipedia.org/wiki/Noor_Jehan"
    }
]

function initialize() {
    let divEl = document.querySelector(".celebrities-list");

    for (let i = 0; i < celebrities.length; i++) {
        divEl.innerHTML += `<div class='celebrity-img-div' 
        style="background-image: url(images/${celebrities[i].imgURL});" onclick="changeDetails(${i})">
        <p class="celebrity-name"> ${celebrities[i].name}</p>
        </div>`;
    }
}

function changeDetails(indexNum) {
    document.querySelector(".celebrity").innerHTML = celebrities[indexNum].name;
    document.querySelector(".celebrity-title").innerHTML = celebrities[indexNum].title;    
    document.querySelector(".celebrity-img").style = `background-image: url(images/${celebrities[indexNum].imgURL});`
    document.querySelector(".celebrity-quote").innerHTML = celebrities[indexNum].quote;
    document.querySelector(".read-more-link").href = celebrities[indexNum].wikiLink;        

}