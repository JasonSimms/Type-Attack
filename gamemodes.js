console.log('strings loaded')
// Here are input strings for gameplay various modes
// Every letter at Random
word = 'abcdefghijklmnopqrstuvwxyz'
var strAlph = word.split('').sort(function(a,b){return 0.5-Math.random()});
// Debug mode
var strDebug = ['b','c','d','e']
// Fast mode
// See onClick