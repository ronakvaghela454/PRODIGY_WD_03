let currrentPlayer = "X";
// Put data according click on array
let arr = Array(9).fill(null);

let gameWon=false;


function checkWin() {
    if (
        (arr[0] !== null && arr[0] == arr[1] && arr[1] == arr[2]) ||
        (arr[3] !== null && arr[3] == arr[4] && arr[4] == arr[5]) ||
        (arr[6] !== null && arr[6] == arr[7] && arr[7] == arr[8]) ||
        (arr[0] !== null && arr[0] == arr[3] && arr[3] == arr[6]) ||
        (arr[1] !== null && arr[1] == arr[4] && arr[4] == arr[7]) ||
        (arr[2] !== null && arr[2] == arr[5] && arr[5] == arr[8]) ||
        (arr[0] !== null && arr[0] == arr[4] && arr[4] == arr[8]) ||
        (arr[2] !== null && arr[2] == arr[4] && arr[4] == arr[6])
    ) {
        document.getElementById("winning-msg").innerHTML=`Winner: ${currrentPlayer}`;
        gameWon=true;

    }
    if(!arr.some((e) => e === null))
    
    {
        document.getElementById("winning-msg").innerHTML=`Winner:Draw`;

    }
}



function handleClick(el) {
    if(gameWon) return;
    const id = (el.id);
    if(arr[id] !== null) return;
    arr[id] = currrentPlayer;
    el.innerText = currrentPlayer;
    checkWin();
    currrentPlayer = currrentPlayer === 'X' ? "O" : "X";

}

function Reset()
{
    currrentPlayer = "X";
    gameWon=false;
    arr = Array(9).fill(null);
    document.querySelectorAll('.cell').forEach(cell => cell.innerText = "");
    document.getElementById("winning-msg").innerHTML = "";

}