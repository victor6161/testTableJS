        var myTable = "<table class='table table-bordered' id='nameValueTable'>";
            myTable += "<thead><tr><th>Name</th><th>Value</th></tr></thead>"      
            myTable += "<tr><td class='col-lg-1' contenteditable='true'>new name</td>";
            myTable += "<td class='col-lg-1' contenteditable='true'>new value</td>";
            myTable += "<td class='col-lg-1'><button onclick='deleteRow(this)'>Удалить</button></td>"
            myTable += "</table>";
            
            document.getElementById("tablePrint").innerHTML = myTable;

        function loadToTextArea(){
            console.log('loadToTextArea');
            var table = document.getElementById("nameValueTable");
            
            var rowLength = table.rows.length;
               
            var rows = [];
            for (var i = 0; i < rowLength ; i++){
                    //gets cells of current row  
                    var oCells = table.rows.item(i).cells;
                    var rowVal = {};
                    rowVal.name = oCells.item(0).innerHTML;
                    rowVal.value = oCells.item(1).innerHTML;
                    rows.push(rowVal);
            }
            var jsonData = JSON.stringify(rows);
            document.getElementById("dataForTable").value = jsonData;

        }

        // Method (Restricted in IE)
        function addRow(name, value){
            var table = document.getElementById("nameValueTable");
            var row = table.insertRow(1);
            var cellName = row.insertCell(0);
            var cellValue = row.insertCell(1);
            var cellDeleteButton = row.insertCell(2);
            if(name != undefined){
                cellName.innerHTML = name;
            }else {
                cellName.innerHTML = 'new Name';
            }

            if(value != undefined){
                cellValue.innerHTML = value;
            }else {
                cellValue.innerHTML = 'new Value';
            }

            cellDeleteButton.innerHTML = "<button onclick='deleteRow(this)'>Удалить</button>"
            cellName.setAttribute('contentEditable', 'true');
            cellValue.setAttribute('contentEditable', 'true');
            cellName.setAttribute('width','100px');
            cellValue.setAttribute('width','100px');
            cellDeleteButton.setAttribute('width','100px');
        }

        function deleteRow(x){
            var i = x.parentNode.parentNode.rowIndex;
            document.getElementById("nameValueTable").deleteRow(i);
        }

       
        //IMPORTANT: the JSON.parse method wont work in old old browsers IE-8
    
        function renewTable(){
            document.getElementById("nameValueTable").innerHTML = "";
            var myMessage = document.getElementById("dataForTable").value;
            var jsonData = JSON.parse(myMessage);
            var table = document.getElementById("nameValueTable");
            for(var i = 0; i < jsonData.length; i++){
                addRow(jsonData[i].name,jsonData[i].value);
            }
        }

        function updateTable(){
            var myMessage = document.getElementById("dataForTable").value;
            var jsonData = JSON.parse(myMessage);
            var table = document.getElementById("nameValueTable");
            for(var i = 0; i < jsonData.length; i++){
                addRow(jsonData[i].name,jsonData[i].value);
            }
        }
   
       
