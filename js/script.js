const ListOfPlayer = [];


function BindPlayerName(ListOfPlayer){
    const tableBodyField = document.getElementById("player_list");
    if(ListOfPlayer.length >= 6){
        alert("you have added already 5 player");
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
   const perPlayerValue  = document.getElementById("perPlayerField").value;
    
    if(ListOfPlayer.length == 0){
        alert("Don't Have Player in the list");
    }
    else{
        const playerExpenses = ListOfPlayer.length * perPlayerValue;
        document.getElementById("expensesMoney").innerText = parseFloat(playerExpenses);
    }
}

function TotalCalculatePerPlayerAmount(){
    const perPlayerValue1  = document.getElementById("perPlayerField").value;
    const playerExpenseCost = ListOfPlayer.length * perPlayerValue1;
    const managerCost = document.getElementById("managerField").value;
    const coachCost = document.getElementById("coachField").value;
console.log(playerExpenseCost)
    const totalCost = parseFloat(playerExpenseCost) +parseFloat(managerCost) + parseFloat(coachCost); 
    document.getElementById("totalCost").innerText = parseFloat(totalCost);
}