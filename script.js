function sortAscTable(){
    let table, rows,switching, i,x,y,shouldSwitch;
    table = document.getElementById("myTable");
    switching = true;

    while(switching){
        switching = false;
        rows = table.rows;

        for(i = 1;i < (rows.length - 1); i++){
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("td")[0];
            y = rows[i+1].getElementsByTagName("td")[0];
            if(x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()){
                shouldSwitch = true;
                break;;
            }
        }
        if(shouldSwitch){
            rows[i].parentNode.insertBefore(rows[i+1],rows[i]);
            switching = true;
        }
    }
}
function sortDescTable(){
    let table, rows,switching, i,x,y,shouldSwitch;
    table = document.getElementById("myTable");
    switching = true;

    while(switching){
        switching = false;
        rows = table.rows;

        for(i = 1;i < (rows.length - 1); i++){
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("td")[0];
            y = rows[i+1].getElementsByTagName("td")[0];
            if(x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()){
                shouldSwitch = true;
                break;;
            }
        }
        if(shouldSwitch){
            rows[i].parentNode.insertBefore(rows[i+1],rows[i]);
            switching = true;
        }
    }
}