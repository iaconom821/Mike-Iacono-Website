function clickListener () {
    const goodTeam = document.getElementById('good-teams');
    const badTeam = document.getElementById('bad-teams');

    function goodTeams() {
        alert("Good choice!");
    }

    function badTeams() {
        alert("Are you sure?");
    }

    goodTeam.addEventListener('click', function() {
        goodTeams()
    });

    badTeam.addEventListener('click', function(){
        badTeams()
    })
    
}