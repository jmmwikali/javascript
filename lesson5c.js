// Exporting modules
// We export modules so that we can use/utilize them in other files/modules in our program

export const calculator = (x, y) => {
    let difference = x - y
    console.log("The difference of the two numbers is:", difference)
};

export const simple_interest = (principle, rate, time) => {
    let si = (principle * rate * time) / 100
    console.log("The Simple Interest gained is:", si)
};

const BMI = (weight, height) => {
    let answer = weight / (height ** 2)
    console.log("The BMI of the person is", answer + "kg/m\u00B2")
}
export {BMI}