function displayTitle() {
    document.getElementById("newtitle").innerHTML = document.getElementById('title').value + " - by " + document.getElementById('name').value;

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeBodyColor(){
    document.body.style.backgroundColor = getRandomColor();
}
