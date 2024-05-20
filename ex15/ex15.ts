/*
Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a
 new set of invitations.You’ll have to think of someone else to invite.
 */

 let guestArr : string[] = ["Mariam","Qurat","Rubab","Amber"];
 let canNotAttend :string ="Mariam"

 //console.log(canNotAttend +" " "can not attend the dinner.")

 let newGuest : string = "Shabbir"

 guestArr[guestArr.indexOf(canNotAttend)] = newGuest;
 //console.log(guestArr)

 guestArr.map((items) =>
 console.log(`Dear ${items}, you are invited to the dinner.`)
 )


