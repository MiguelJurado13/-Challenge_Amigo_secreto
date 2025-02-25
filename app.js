let participants = [];

function agregarParticipante(){
    const Participante = document.getElementById("participante").value;
    if(participante !== '' && Participante !== ""){
        participants.push(Participante);
        console.log(participants);
        listarParticipants();
        document.getElementById("participante").value = "";

    }else{
        alert("Favor de insertar un Nombre");
    }
}


function listarParticipants(){
    var list = document.getElementById('listParticipants');
    list.innerHTML = '';


for (var i = 0; i < participants.length; i++)
{
    var li = document.createElement("li");
    li.textContent = participants[i];
    list.appendChild(li);
}
}


function sortearParticipante(){
    let numberWin = Math.floor(Math.random() * participants.length);
    let participantNumber = participants[numberWin];
    if (participants.length > 0) {
       document.getElementById('result').innerHTML = "Participante GANADOR: " + participantNumber;

       document.getElementById("listParticipants").innerHTML = '';
       participants.length = 0;
        
    }else{
        console.log("Array Vacio")
        alert("No existen Participantes para Sortear.")
    }

}