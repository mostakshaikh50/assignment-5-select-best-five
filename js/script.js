const ListOfPlayer = [];

function BindPlayerName(ListOfPlayer){
    const tableBodyField = document.getElementById("player_list");
    if(ListOfPlayer.length >= 6){
        return;
    }
    tableBodyField.innerHTML = "";
    for(let i=0; i<ListOfPlayer.length; i++){
        
        if(ListOfPlayer.length <= 5){
            const name = ListOfPlayer[i].playerName;

            const tr = document.createElement("tr");

            tr.innerHTML =`<th>${i+1}</th><td>${name}</td>`;

           tableBodyField.appendChild(tr);
        }
        
    }
}
function AddPlayerToList(elementFromClick){
   
   const playerName = elementFromClick.parentNode.parentNode.children[0].innerText;
   const PlayerObj = {
    playerName: playerName    
   }
   
   ListOfPlayer.push(PlayerObj);   
   BindPlayerName(ListOfPlayer);
}


function CalculatePerPlayerAmount(){
    const perPlayerValue = document.getElementById("perPlayerField").value;
    console.log(ListOfPlayer.length);
    if(ListOfPlayer.length == 0){
        alert("Don't Have Player in the list");
    }
    else{
        const playerExpenses = ListOfPlayer.length * perPlayerValue;
        document.getElementById("expensesMoney").innerText = parseFloat(playerExpenses);
    }
}