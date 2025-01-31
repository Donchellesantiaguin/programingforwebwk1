const myGames = [
    {
        name: "The Devil Wears Prada",
        type: "Chick Flick",
        graphics: "Cinematic",
        numberOfPlayers: "a single player",
        shortDesc: "Step into the high heels of *The Devil Wears Prada* with this stylish and fast-paced custom game! As the new assistant to the iconic Miranda Priestly, you’ll not only dress up the main character in a wardrobe full of designer pieces — from Chanel to Valentino — but you’ll also take on the challenge of managing a buzzing fashion office. Juggle tasks, meet tight deadlines, and handle high-profile clients while staying on top of the latest trends. Will you have what it takes to thrive in the high-stakes world of fashion, or will the pressure get the best of you",

    },
    {
        name: "American Sniper",
        type: "Multiplayer Online",
        graphics: "3D rendered and 2D rendered",
        numberOfPlayers: "players all nation",
        shortDesc: "Step into the boots of a highly skilled marksman and engage in intense multiplayer combat across a variety of tactical missions. Whether you're playing on PC or console, the game challenges players to outsmart and outshoot each other in real-time, testing precision, strategy, and quick reflexes. Team up with friends or go head-to-head in high-stakes sniper duels, where every shot counts and every decision could mean the difference between victory and defeat. Are you sharp enough to make the perfect kill or will your enemies take you down first? The battlefield is waiting.",
    },
    {
        name: "soda customizer",
        type: "annimator",
        graphics: "2D graphics",
        numberOfPlayers: "one player",
        shortDesc: "Unleash your creativity and build your own soda empire from the ground up! Design unique soda cans with custom logos, vibrant colors, and eye-catching artwork. Craft delicious, one-of-a-kind soda flavors that will blow people away, and then launch your own brand to sell to teammates and players online. Compete in a fun, fast-paced marketplace where the most popular sodas rise to the top, and your sales success depends on innovation, marketing, and flavor combos. Will your soda brand become the next big thing, or will your fizz fall flat? The carbonated world is yours to conquer!",
    }
];
Number.game = window.prompt("I have three games. Please pick a number from 1-3 and I will tell you about a game") - 1;

window.alert("This game is" + myGames[Number.game].name + '. It is a ' + myGames[Number.game].type + "with" + myGames[Number.game].graphics + "graphics for" + myGames[Number.game].numberOfPlayers + '. In this game ' + myGames[Number.game].shortDesc);