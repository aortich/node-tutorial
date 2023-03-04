// local dependency (use only in this project)
// npm i <packageName>

// global dependency (use on any project)
// npm install -g <packageName>

// package.json - manifest file (info about packages)
// manually write package.json
// npm init
// npm init -y (automated init)

const _ = require('lodash')

const items = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)