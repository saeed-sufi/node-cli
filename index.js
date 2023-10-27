#!/usr/bin/env node
const pkgJSON = require('./package.json')
const clearConsole = require('clear-any-console')

clearConsole()
console.log(`
  NAME: ${pkgJSON.name}
  DESCRIPTION: ${pkgJSON.description}
  VERSION: ${pkgJSON.version}
`)

console.log(`

Saeed Sufi.
A Digital Analyst

`)
