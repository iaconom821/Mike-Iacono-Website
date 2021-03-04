function clickListener () {
    const goodTeam = document.getElementById('good-teams');
    const badTeam = document.getElementById('bad-teams');
    const mlbTeam = document.getElementById('mlb-teams');

    function goodTeams() {
        alert("Good choice!");
    }

    function badTeams() {
        alert("Are you sure?");
    }

    function mlbTeams() {
        alert("But why?");
    }

    goodTeam.addEventListener('click', function() {
        goodTeams()
    });

    badTeam.addEventListener('click', function(){
        badTeams()
    });

    mlbTeam.addEventListener('click', function() {
        mlbTeams()
    })
    
}
clickListener()

function dayCountDown () {
    const countMLB = document.getElementById("countMLB");
    const countNFL = document.getElementById("countNFL");
    const countNBA = document.getElementById("countNBA");
    const countNHL = document.getElementById("countNHL");

    const mlbCountDownDate = new Date("Apr 1, 2021").getTime();
    const nflCountDownDate = new Date("Sept 10, 2021").getTime();
    const nbaCountDownDate = new Date().getTime()
    const nhlCountDownDate = new Date().getTime()
    const now = new Date().getTime();
    const mlb = mlbCountDownDate - now;
    const nfl = nflCountDownDate - now;
    const nba = nbaCountDownDate.today - now;
    const nhl = nhlCountDownDate.today - now;

    const mlbDays = document.createTextNode(Math.floor(mlb / (1000*60*60*24)) + ' days');
    const nflDays = document.createTextNode(Math.floor(nfl / (1000*60*60*24)) + ' days');
    const nbaDays = document.createTextNode("It's happening!");
    const nhlDays = document.createTextNode("It's happening!");


    countMLB.append(mlbDays);
    countNFL.append(nflDays);
    countNBA.append(nbaDays);
    countNHL.append(nhlDays);



}

dayCountDown();