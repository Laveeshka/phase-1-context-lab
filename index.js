/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function createEmployeeRecord(arr){
    return {
        firstName: arr[0],
        familyName: arr[1],
        title: arr[2],
        payPerHour: arr[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

function createEmployeeRecords(arrayOfArrays){
    return arrayOfArrays.map(arr => createEmployeeRecord(arr))
}

function createTimeInEvent(dateTime){
    //YYYY-MM-DD HHMM
    let [date, hour] = dateTime.split(" ");
    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour),
        date 
    })

    return this
}

function createTimeOutEvent(dateTime){
    //YYYY-MM-DD HHMM
    let [date, hour] = dateTime.split(" ");
    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour),
        date 
    })

    return this
}

function hoursWorkedOnDate(date){
    const {hour:hourIn} = this.timeInEvents.find(timeInEvent => timeInEvent.date === date)
    const {hour:hourOut} = this.timeOutEvents.find(timeOutEvent => timeOutEvent.date === date)
    const hoursWorked = (hourOut-hourIn)/100
    return hoursWorked;
}

function wagesEarnedOnDate(matchedDate){
    return this.payPerHour * hoursWorkedOnDate.call(this, matchedDate);
}

function findEmployeeByFirstName(collectionOfEmployees, firsNameString){
    const foundEmployee = collectionOfEmployees.find(employee => employee.firstName === firsNameString);
    return foundEmployee;
}

function calculatePayroll(collectionOfEmployees){
    const payroll = collectionOfEmployees.reduce((acc, employeeRecord) => {
        return acc + allWagesFor.call(employeeRecord)
    }, 0);

    return payroll;
}

