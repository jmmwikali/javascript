let distance = 800
if(distance >= 0 && distance <= 100) {
    console.log("Amount To Pay is: 5 USD")
}
else if(distance >= 101 && distance <= 500) {
    console.log("Amount To Pay is: 10 USD")
}
else if(distance >= 501 && distance <= 1000) {
    console.log("Amount To Pay is: 20 USD")
}
else {
    console.log("Amount To Pay is: 40 USD")
}