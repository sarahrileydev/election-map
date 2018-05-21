var createPolitician = function (name, partyColor) {

    var politician = {};

    politician.name = name;
    politician.partyColor = partyColor;
    // politician.electionResults = null;
    // politician.totalVotes = 0;

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

var polly = createPolitician("Polly Tishon", [132, 17, 11]);
var barry = createPolitician("Barry Phishy", [245, 141, 136]);

polly.electionResults = [5, 1, 7, 2, 33, 6, 4, 2, 1, 14, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 11, 1, 3, 7, 2];
barry.electionResults = [4, 2, 4, 4, 22, 3, 3, 1, 2, 15, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 17, 3, 1, 2, 11, 2, 3, 1];

polly.electionResults[9] = 1;
polly.electionResults[4] = 17;
polly.electionResults[43] = 11;

barry.electionResults[9] = 28;
barry.electionResults[4] = 38;
barry.electionResults[43] = 27;

function setStateResults(state) {
    theStates[state].winner = null;

    if (polly.electionResults[state] > barry.electionResults[state]) {
        theStates[state].winner = polly;

    } else if (polly.electionResults[state] < barry.electionResults[state]) {
        theStates[state].winner = barry;
    }

    var stateWinner = theStates[state].winner;

    if (stateWinner !== null) {
        theStates[state].rgbColor = stateWinner.partyColor;
    } else {
        theStates[state].rgbColor = [11, 32, 57];
    }
    var stateInfoTable = document.getElementById('stateResults');

    var header = stateInfoTable.children[0].children[0];
    var stateName = header.children[0];
    stateName.innerText = theStates[state].nameFull;
    var abbrev = header.children[1];
    abbrev.innerText = theStates[state].nameAbbrev;

    var body = stateInfoTable.children[1];
    var candidate1Name = body.children[0].children[0];
    candidate1Name.innerText = polly.name;

    var candidate2Name = body.children[1].children[0];
    candidate2Name.innerText = barry.name;

    var candidate1Results = body.children[0].children[1];
    candidate1Results.innerText = polly.electionResults[state];

    var candidate2Results = body.children[1].children[1];
    candidate2Results.innerText = barry.electionResults[state];

    var winnersName = body.children[2].children[1];

    if (theStates[state].winner === null){
        winnersName.innerText = "DRAW";
    } else {
        winnersName.innerText = theStates[state].winner.name;
    }
}

polly.tallyTotal();
barry.tallyTotal();

console.log(polly.tally);
console.log(barry.tally);

console.log(polly.partyColor);
console.log(barry.partyColor);

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

var countryResults = document.getElementById('countryResults');

countryResults.children[0].children[0].children[0].innerText = "Polly Tishon";
countryResults.children[0].children[0].children[1].innerText = polly.tally;
countryResults.children[0].children[0].children[2].innerText = "Barry Phishy";
countryResults.children[0].children[0].children[3].innerText = barry.tally;
countryResults.children[0].children[0].children[4].innerText = "Winner";
countryResults.children[0].children[0].children[5].innerText = winner;





