 var table = document.getElementById("pixelCanvas"); 

 var color = document.getElementById("colorPicker");
 
 var width , height;
// var sizePicker = document.getElementById("sizePicker");

$("#sizePicker").submit(function(e){
    e.preventDefault(); //prevents the form from submitting 

    makeGrid();
})


 function makeGrid(){
     table.innerHTML=""; //table can change

width = document.getElementById("inputWeidtt").value;

height = document.getElementById("inputHeight").value;



for(var i = 0; i < height; i++){
    let row=table.insertRow(i);
    for(var j = 0; j < width; j++){
        let col=row.insertCell(j);

        col.addEventListener("click", function() {
            col.style.backgroundColor = color.value;
          });
        
$(col).dblclick(function(){
    col.style.backgroundColor = "";
})
    }
}
 }
