function createEmployeeRecord(array){
  // [fNameInput, lNameInput, titleInput, hourlyPayInput]
  let employeeObject = {
    firstName: array[0],
    familyName: array[1],
    title: array[2],
    payPerHour: array[3],
    timeInEvents: [],
    timeOutEvents: [],
  }
  return employeeObject;
}

createEmployeeRecord();

function createEmployeeRecords(employeeObject){
  let employeeObjectArray = Object.entries(employeeObject)
  return employeeObjectArray
}
