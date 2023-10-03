// code your solution here

function saturdayFun(activity= 'roller-skate') {
    return `This Saturday, I want to ${activity}!`
}


function mondayWork(dActivity = 'go to the office') {
    return `This Monday, I will ${dActivity}.`
}


function wrapAdjective(string="*",) {
    return function(hardW = "special") {
        return `You are ${string}${hardW}${string}!`
    }

}