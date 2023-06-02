function main () {
    let confirm = document.getElementById("mainResult").innerHTML;
    if (confirm == "You Lost !!") {
        alert("Game over ! Please restart the game");
    } else {
        let x;
    do {
        x = Math.floor(Math.random() * 100 / 7.6);
    } while (x == 0);

    let currentt = parseInt(document.getElementById("result").innerHTML);
    let Total = currentt + x;
    document.getElementById("result").innerHTML = Total;

    if (Total < 21) {
        document.getElementById("mainResult").innerHTML = "Generate another card?";
    } else if (Total == 21) {
        document.getElementById("mainResult").innerHTML = "You've won !!";
        alert("Congratulation...!");
        document.getElementById("btn_res").style.display = "block";
    } else if (Total > 21) {
        document.getElementById("mainResult").innerHTML = "You Lost !!";
        alert("Lost :( Click restart to play again");
        document.getElementById("btn_res").style.display = "block";
    }

    var img = document.createElement("img");
    img.src = "imgs/" + x + ".png";
    img.height = 150;
    img.style.margin = "6px";

    document.body.appendChild(img);
}
    }

function restart() {
    location.reload();
}