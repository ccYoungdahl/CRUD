function showData(){
    var cardInfo;



    if(localStorage.getItem("cardInfo")==null){
        cardInfo=[];
    }
    else{
        cardInfo = JSON.parse(localStorage.getItem("cardInfo"));
    }
    var html = "";
    cardInfo.forEach(function (element,index){
        html += "<tr>";
        html += "<td>" + element.number + "</td>"
        html += "<td>" + element.date + "</td>"
        html += "<td>" + element.cvv + "</td>"
        html += '<td><button onclick="deleteData('+index+')" class="btn btn-danger">Delete</button><button onclick="updateData('+index+')" class="btn btn-primary">Update</button>'
        html += "</tr>"
    });
        document.querySelector("#crudTable tbody").innerHTML = html;
}   
document.onload = showData();
function AddData(){
    var number = document.getElementById("number").value;
    var date = document.getElementById("date").value;
    var cvv = document.getElementById("cvv").value;

    var cardInfo;
    if(localStorage.getItem("cardInfo")==null){
        cardInfo=[];
    }
    else{
        cardInfo = JSON.parse(localStorage.getItem("cardInfo"));
    }
    cardInfo.push({
        number : number,
        date : date,
        cvv : cvv
    });
    localStorage.setItem("cardInfo", JSON.stringify(cardInfo));
    showData();
    var number = document.getElementById("number").value = "";
    var date = document.getElementById("date").value = "";
    var cvv = document.getElementById("cvv").value = "";
}
function deleteData(index){
    if(localStorage.getItem("cardInfo")==null){
        cardInfo=[];
    }
    else{
        cardInfo = JSON.parse(localStorage.getItem("cardInfo"));
    }
    cardInfo.splice(index,1);
    localStorage.setItem("cardInfo",JSON.stringify(cardInfo));
    showData();
}
function updateData(index){
    if(localStorage.getItem("cardInfo")==null){
        cardInfo=[];
    }
    else{
        cardInfo = JSON.parse(localStorage.getItem("cardInfo"));
    }
    document.getElementById("number").value = cardInfo[index].number;
    document.getElementById("date").value = cardInfo[index].date;
    document.getElementById("cvv").value = cardInfo[index].cvv;

    document.querySelector("#update").onclick = function(){
        cardInfo[index].number = document.getElementById("number").value;
        cardInfo[index].date = document.getElementById("date").value;
        cardInfo[index].cvv = document.getElementById("cvv").value;
    }
    localStorage.setItem("cardInfo", JSON.stringify(cardInfo));

    showData();
    var number = document.getElementById("number").value = "";
    var date = document.getElementById("date").value = "";
    var cvv = document.getElementById("cvv").value = "";
}