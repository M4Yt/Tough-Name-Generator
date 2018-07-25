"use strict"

const data = require("./data.json")

exports.get = get

function get() {
    const layout = diceRoll()
    const linVarCh = coinFlip()
    const sc = coinFlip()
    const linc = diceRoll()
    switch(linc) {
        case 1:
            return tc(layout) + " " + nthName()
        case 2:
            return tc(layout) + " " + nthName() + ": " + doer()
        default:
            return tc(layout)
    }
}

// Utilities
function randomChoice(choices) {
    return choices[Math.floor(Math.random() * choices.length)]
}

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function coinFlip() {
    return randomInt(1, 2)
}

function diceRoll() {
    return randomInt(1, 6)
}

// Get parts for name
function nthName() {
    return "The " + randomChoice(data.lineage)
}

function suffix() {
    return randomChoice(data.suffix)
}

function tc(layout) {
    switch(layout) {
        case 1:
            return randomChoice(data.names) + randomChoice(data.names)
        case 2:
            return randomChoice(data.names) + " " + randomChoice(data.names) +
            randomChoice(data.names)
        case 3:
            return randomChoice(data.names) + randomChoice(data.names) + " " +
            randomChoice(data.names) + randomChoice(data.names)
        case 4:
            return randomChoice(data.names) + randomChoice(data.names) + " " +
            randomChoice(data.names) + " " + randomChoice(data.names) +
            randomChoice(data.names)
        case 5:
            return randomChoice(data.names) + randomChoice(data.names) + " " +
            randomChoice(data.names)
        case 6:
            return randomChoice(data.names) + " " + randomChoice(data.names)
    }
}

function doer() {
    return "The " + randomChoice(data.things) + " " + randomChoice(data.actions)
}
