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

function createEmployeeRecord(array) {
    return {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

function createEmployeeRecords(records) {
    return records.map(createEmployeeRecord)
}

function createTimeInEvent(dateStamp) {
    const [date, time] = dateStamp.split(" ")
    const timeInEvent = {
        type: "TimeIn",
        date: date,
        hour: parseInt(time)
    }
    this.timeInEvents.push(timeInEvent)
    return this
}

function createTimeOutEvent(dateStamp) {
    const [date, time] = dateStamp.split(" ")
    const timeOutEvent = {
        type: "TimeOut",
        date: date,
        hour: parseInt(time)
    }
    this.timeOutEvents.push(timeOutEvent)
    return this
}

function hoursWorkedOnDate(dateStamp) {
    let inEvent = this.timeInEvents.find(function (e) {
        return e.date === dateStamp;
    })

    let outEvent = this.timeOutEvents.find(function (e) {
        return e.date === dateStamp;
    })
    return (outEvent.hour - inEvent.hour) / 100;
}

function wagesEarnedOnDate(date) {
    let hoursWorked = hoursWorkedOnDate.call(this, date)
    return hoursWorked * this.payPerHour
}
function findEmployeeByFirstName(recordArray, firstName) {
    return recordArray.find(record => record.firstName === firstName)
}

function calculatePayroll(records) {
    return records.reduce(function (total, record) {
        return total + allWagesFor.call(record)
    }, 0)
}