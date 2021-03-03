function clickListener () {
    const goodTeam = document.getElementById('good-teams');
    const badTeam = document.getElementById('bad-teams');
    const mlbTeam = document.getElementById('mlb-team');

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