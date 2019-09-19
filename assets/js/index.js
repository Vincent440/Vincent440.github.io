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

    const localeyes = new App("LocalEyes", "./assets/images/apps/localeyes.png",
    "https://github.com/Vincent440/local_eyes", true, "https://vincent440.github.io/local_eyes/");

    const eMarketplace = new App("eMarketplace","./assets/images/apps/emarketplace.png",
    "https://github.com/Vincent440/emarketplace", true,"https://emarketplace.herokuapp.com/");

    const techScraper = new App("Cheerio Web Scraper","./assets/images/apps/techscraper.png",
    "https://github.com/Vincent440/mongoose-cheerio-scraper",true,"https://cheerio-web-scraper.herokuapp.com");

    const sequelBurger = new App("Sequelized Burger","./assets/images/apps/sequelburger.png",
    "https://github.com/Vincent440/sequelized-burger",true,"https://sequelized-eat-the-burger.herokuapp.com");

    const eatBurger = new App("MySQL Eat The Burger","./assets/images/apps/burgerapp.png",
    "https://github.com/Vincent440/burger",true,"https://mysql-eat-the-burger-app.herokuapp.com/");

    const friend = new App("Friend Finder","./assets/images/apps/friendfinder.png",
    "https://github.com/Vincent440/friendfinder",true,"https://vince-friendfinder.herokuapp.com/");

    const train = new App("Train Scheduler","./assets/images/apps/trainapp.png",
    "https://github.com/Vincent440/firebase-train-tracker", true,"https://vincent440.github.io/firebase-train-tracker/");

    const trivia = new App("Space Trivia","./assets/images/apps/triviagame.png",
    "https://github.com/Vincent440/timed-trivia-game",true,"https://vincent440.github.io/timed-trivia-game/");

    const gifapp = new App("Giphy App","./assets/images/apps/giphyapp.png",
    "https://github.com/Vincent440/jif-tastic-api", true, "https://vincent440.github.io/jif-tastic-api/" );

    const psychic = new App("Psychic Game","./assets/images/apps/psychicgame.png",
    "https://github.com/Vincent440/guess-a-letter", true , "https://vincent440.github.io/guess-a-letter/");

    const crystals = new App("Crystal Collector","./assets/images/apps/crystalgame.png",
    "https://github.com/Vincent440/jquery-crystal-game", true , "https://vincent440.github.io/jquery-crystal-game/");

    const reactClicks = new App("React Memory Game","./assets/images/apps/reactclicker.png",
    "https://github.com/Vincent440/react-memory-game", true , "https://vincent440.github.io/react-memory-game/");

    const reactBooks = new App("React Google Books","./assets/images/apps/react-google-books.png",
    "https://github.com/Vincent440/react-books-search",true,"https://googlereactbooks.herokuapp.com/");

    const hotelWorx = new App("Hotel Worx","./assets/images/apps/hotelworx.png",
    "https://github.com/Vincent440/hotel-worx",true,"https://hotel-worx.herokuapp.com/");

    const appsArray = [hotelWorx,localeyes,eMarketplace,reactBooks,reactClicks,techScraper,sequelBurger,eatBurger,friend,train,trivia,gifapp,psychic,crystals];

    appsArray.forEach(app => {
        let cardDiv = $("<div class='card p-1 col-sm-6 col-lg-4 col-xl-3'></div>");
        let cardHeader = $("<div class='card-header'>").html(`<h4 class="card-title">${app.name}</h4>`);
        let cardBody = $("<div class='card-body'>").html(`<img class="card-img" src="${app.img}" alt="${app.name}">`);
        let cardFooter = $("<div class='card-footer btn-group'>");
        if(app.hosted) {
            cardFooter.html(`<a href="${app.repo}" class="btn btn-primary" target="_blank" rel=”noreferrer” ><i class="fab fa-github"> Github</i></a>
            <a href="${app.hostedUrl}" class="btn btn-primary" target="_blank" rel=”noreferrer”><i class="fas fa-link"> Live App.</i></a>`);
        }
        else{
            cardFooter.html(`<a href="${app.repo}" class="btn btn-primary" target="_blank" rel=”noreferrer”><i class="fab fa-github"> Github</i></a>`);
        }
        cardDiv.append(cardHeader);
        cardDiv.append(cardBody);
        cardDiv.append(cardFooter);
        $("#app-box").append(cardDiv);
    });
});