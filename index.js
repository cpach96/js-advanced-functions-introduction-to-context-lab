

// Your code here
function createEmployeeRecord(employee){
   let newRecord = {
       firstName: employee[0],
       familyName : employee[1],
       title: employee [2],
       payPerHour: employee[3],
       timeInEvents: [],
       timeOutEvents: []
   }
   return newRecord
}

function createEmployeeRecords(data){
    let employeeData = data
    let employeeRecords = []
    employeeData.map(function(e){
       employeeRecords.push(createEmployeeRecord(e))
    })
    return employeeRecords
}

function createTimeInEvent(record,clockIn){
    let employeeData = record
    let formattedDate = clockIn.split(' ')[0]
    let grabHour = clockIn.split(' ')[1]
    let formattedHour = parseInt(grabHour)
    let TimeIn = {
        type: "TimeIn",
        date: formattedDate,
        hour: formattedHour
    }
    employeeData.timeInEvents.push(TimeIn)
    return employeeData
}

function createTimeOutEvent(record,clockOut){
    let employeeData = record
    let formattedDate = clockOut.split(' ')[0]
    let grabHour = clockOut.split(' ')[1]
    let formattedHour = parseInt(grabHour)
    let TimeOut = {
        type: "TimeOut",
        date: formattedDate,
        hour: formattedHour
    }
    employeeData.timeOutEvents.push(TimeOut)
    return employeeData
}

function hoursWorkedOnDate(employeeData){
    let clockedOutHour = 0
    let clockedInHour = 0
    console.log(employeeData.timeOutEvents.length)
    for (let i = 0; i < employeeData.timeOutEvents.length; i++){
        clockedOutHour += employeeData.timeOutEvents[i].hour
    }
    for (let i = 0; i < employeeData.timeInEvents.length; i++){
        clockedInHour += employeeData.timeInEvents[i].hour
    }
    return((clockedOutHour - clockedInHour)/100)
}

function wagesEarnedOnDate(employeeData){
    return (hoursWorkedOnDate(employeeData) * employeeData.payPerHour)
}

function allWagesFor(employeeData){
    return(hoursWorkedOnDate(employeeData) * employeeData.payPerHour)
}

function calculatePayroll(employeeData){
    let payroll = 0
    for (let i = 0; i < employeeData.length; i++){
        payroll += wagesEarnedOnDate(employeeData[i])
    }
    return payroll
}

function findEmployeeByFirstName(names,search){
    console.log(search)
    for (let i = 0; i < names.length; i++){
        if(search === names[i].firstName){
            return names[i]
        }
    }

}