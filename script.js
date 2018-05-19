var createPolitician = function (name) {

    var politician = {};

    politician.name = name;
    politician.electionResults = null;
    politician.totalVotes = 0;

    politician.announce = function () {
        console.log(politician.name)
    };
    politician.announce();

    politician.tallyTotal = function () {

        this.tally = 0;

        for (var i = 0; i < this.electionResults.length; i++) {
            this.tally = this.tally + this.electionResults[i];
        }
    };


    return politician;

};

var polly = createPolitician("Polly Tishon");
var barry = createPolitician("Barry Phishy");

polly.electionResults = [5, 1, 7, 2, 33, 6, 4, 2, 1, 14, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 11, 1, 3, 7, 2];
barry.electionResults = [4, 2, 4, 4, 22, 3, 3, 1, 2, 15, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 17, 3, 1, 2, 11, 2, 3, 1];

polly.electionResults[9] = 1;
polly.electionResults[4] = 17;
polly.electionResults[43] = 11;

barry.electionResults[9] = 28;
barry.electionResults[4] = 38;
barry.electionResults[43] = 27;

polly.tallyTotal();
barry.tallyTotal();

console.log(polly.tally);
console.log(barry.tally);

var winner = function () {
    if (polly.tally < barry.tally) {
        winner = barry.name;

    } else if (polly.tally > barry.tally) {
        winner = polly.name;

    } else {
        winner = "Draw!"
    }
    console.log("And the winner is..." + winner + "!!!");
}
winner();