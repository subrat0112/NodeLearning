$(function () {
    var employee = new Employee('scripts/json/employee.json');
    console.log(employee.empJson);
});

function Employee(filePath) {
    this.empJson = loadEmployeeData(filePath);
    debugger
}

function loadEmployeeData(filePath) {
    var jsonData=[];
    $.getJSON(filePath, function(data){
        jsonData= data.map(function(result){
            return result;
        })
        debugger;
        return jsonData;
    });
}