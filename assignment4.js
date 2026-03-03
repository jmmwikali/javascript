// Read on arrow functions with and without parameters and research on modules in js (Have examples).

// MODULES - files with their won private scope that can share code using export and recieve code using mport
// Export - It is a keyword used to make code from a file availabel on athoer files
// Import - Keyword used to bring the exported code into the current file

import {greeting} from "./module.js"

greeting("Jessica")

import { product } from "./module.js"

console.log("The product of the two numbers is:", product(5, 2))