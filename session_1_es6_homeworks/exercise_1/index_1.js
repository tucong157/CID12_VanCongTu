function myFunction() {

}
document.getElementById('createTbl').addEventListener('click', function (evt) {
    var row = document.getElementById('rowNum').value;
    var col = document.getElementById('colNum').value;
    // console.log(`${row} and ${col}`)
    if (row < 1 && col < 1) {
        alert("pls enter num >= 1")
    } else Create_Table(row, col);

});

function Create_Table(row, col) {
    var tbl = document.createElement('table');
    for (var i = 0; i < row; i++) {
        let tr = document.createElement('tr');
        tbl.appendChild(tr);
        for (var j = 0; j < col; j++) {
            let td = document.createElement('td');
            tr.appendChild(td);
        }
    }
    document.getElementById('new_tbl').appendChild(tbl);
}