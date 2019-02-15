"use strict"
// Require module locally and log results
const t = require('./tough')
for (let i = 0; i < 10; i++) {
    console.log(t.get())
}
