// Author : Sara Woodford
// Description : Desribes the attributes of a motel guest
// Date(s) : March 14, 2024 

let customer = {
    firstName: "John",
    lastName: "Doe",
    bday: new Date(1999,10,10),
    gender: "Male",
    phoneNum: "(709)456-7890",
    mailAddr: {
        streetAdd: "123 Kenmount Rd",
        city: "St. Johns",
        postal: "A1B 1W3",
        province: "Newfoundland",
        country: "Canada"
    },
    roomPref: ["123", "124", "125"],
    payMethod: "Credit",
    checkDates: {
        checkIn: new Date (2024,4,10),
        checkOut: new Date (2024,4,15),
    },
    secAnswer: "Dog",
    reservationNum: "12480",
    servedBy : "Jane",
    valet : "No",
    age: function() {
        let birthYear = this.bday.getFullYear();
        let today = new Date();
        let todayYear = today.getFullYear();
        let age = todayYear - birthYear;
        return age;
    },

    durationofstay: function() {
        let durationMs = this.checkDates.checkOut - this.checkDates.checkIn
        let dayMS = (1000*60*60*24)
        let durationDays = (durationMs/dayMS)
        return durationDays
    },
    checkinformat: function() {
        let checkInfor = this.checkDates.checkIn.toISOString().slice(0,10)
        return checkInfor
    },
    checkoutformat: function() {
        let checkOutFor = this.checkDates.checkOut.toISOString().slice(0,10)
        return checkOutFor
    },
    bdayformat: function(){
        let bdayfor = this.bday.toISOString().slice(0,10)
        return bdayfor
    }
}

let Para = `Employee ${customer.servedBy} checked in ${customer.firstName} ${customer.lastName}, ${customer.gender}, who will be staying at Sara's Motel for ${customer.durationofstay()} days, arriving on ${customer.checkinformat()} and will be staying until ${customer.checkoutformat()} under reservation number ${customer.reservationNum}. ${customer.firstName} ${customer.lastName} can be reached at ${customer.phoneNum} or via mail. Mailing adrress is as follows: ${customer.mailAddr.streetAdd}, ${customer.mailAddr.city} ${customer.mailAddr.postal}, ${customer.mailAddr.province}, ${customer.mailAddr.country}. ${customer.lastName} is ${customer.age()} years old, born ${customer.bdayformat()}. He prefers rooms ${customer.roomPref}, answered ${customer.valet} to valet service, and will be paying ${customer.payMethod}. Security question to access his reservation is "What Was Your First Pet?" and ${customer.lastName}'s answer is "${customer.secAnswer}".`


console.log(Para)

document.body.innerHTML = Para
