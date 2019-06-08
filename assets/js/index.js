/* eslint-disable no-undef */
$(()=>{
    class App {
        constructor(name, img, repo, hosted = false , hostedUrl = "" ){
            this.name = name,
            this.img = img,           
            this.repo = repo,
            this.hosted = hosted,
            this.hostedUrl = hostedUrl
        }
    }

    const localeyes = new App("LocalEyes","./assets/images/apps/localeyes.png",
    "https://github.com/mike14747/LocalEyes",true,"https://mike14747.github.io/LocalEyes/");

    const eMarketplace = new App("eMarketplace","./assets/images/apps/emarketplace.png",
    "https://github.com/letscook1/project2", true,"https://glacial-bayou-58542.herokuapp.com/");

    const techScraper = new App("Tech Scraper","./assets/images/apps/techscraper.png",
    "https://github.com/Vincent440/mongoose-cheerio-scraper",true,"https://secret-atoll-83145.herokuapp.com/");

    const sequelBurger = new App("Sequelized Burger","./assets/images/apps/sequelburger.png",
    "https://github.com/Vincent440/sequelized-burger",true,"https://obscure-atoll-61774.herokuapp.com/");

    const eatBurger = new App("Eat The Burger","./assets/images/apps/burgerapp.png",
    "https://github.com/Vincent440/burger",true,"https://blooming-everglades-90768.herokuapp.com/");

    const friend = new App("Friend Finder","./assets/images/apps/friendfinder.png",
    "https://github.com/Vincent440/friendfinder",true,"https://vince-friendfinder.herokuapp.com/");

    const train = new App("Train Scheduler","./assets/images/apps/trainapp.png",
    "https://github.com/Vincent440/unit-7-firebase", true,"https://vincent440.github.io/unit-7-firebase/");

    const trivia = new App("Space Trivia","./assets/images/apps/triviagame.png",
    "https://github.com/Vincent440/TriviaGame",true,"https://vincent440.github.io/TriviaGame/");

    const gifapp = new App("Giphy App","./assets/images/apps/giphyapp.png",
    "https://github.com/Vincent440/jif-tastic-api", true, "https://vincent440.github.io/jif-tastic-api/" );

    const psychic = new App("Psychic Game","./assets/images/apps/psychicgame.png",
    "https://github.com/Vincent440/Psychic-Game", true , "https://vincent440.github.io/Psychic-Game/");

    const crystals = new App("Crystal Collector","./assets/images/apps/crystalgame.png",
    "https://github.com/Vincent440/Unit-4-game", true , "https://vincent440.github.io/Unit-4-game/");

    

    const appsArray = [ localeyes , eMarketplace , techScraper , sequelBurger , eatBurger ,
     friend , train, trivia, gifapp , psychic, crystals];

    appsArray.forEach(app => {
        let cardDiv = $("<div class='card p-0 col-sm-6 col-lg-4'></div>");
        let cardHeader = $("<div class='card-header'>").html(`<h4 class="card-title">${app.name}</h4>`);
        let cardBody = $("<div class='card-body'>").html(`<img class="card-img" src="${app.img}" alt="${app.name}">`);
        let cardFooter = $("<div class='card-footer btn-group'>");
        if(app.hosted) {
            cardFooter.html(`<a href="${app.repo}" class="btn btn-primary"><i class="fab fa-github"> Github</i></a>
            <a href="${app.hostedUrl}" class="btn btn-primary"><i class="fas fa-link"> Live App.</i></a>`);
        }
        else{
            cardFooter.html(`<a href="${app.repo}" class="btn btn-primary"><i class="fab fa-github"> Github</i></a>`);
        }
        cardDiv.append(cardHeader);
        cardDiv.append(cardBody);
        cardDiv.append(cardFooter);
        $("#app-box").append(cardDiv);
    });
});