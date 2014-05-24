#!/usr/bin/env node
/* k (C) 2014 SheetJS -- http://sheetjs.com */
/* vim: set ts=2: */
var K;
try { K = require('../'); } catch(e) { K = require('k'); }
var fs = require('fs'), program = require('commander');
program
	.version(K.version)
	.usage('[options] <file1> <file2>')

program.parse(process.argv);
if(!program.args[1]) {
	console.error("k: must specify two files");
	process.exit(1);
}

var f1 = program.args[0], f2 = program.args[1];

if(!fs.existsSync(f1)) {
	console.error("k: " + f1 + ": No such file or directory");
	process.exit(2);
}

if(!fs.existsSync(f2)) {
	console.error("k: " + f2 + ": No such file or directory");
	process.exit(3);
}

var opts = {};

var w1, X1, wb1;
var w2, X2, wb2;
try {
	w1 = K.J.readFile(f1, opts);
	X1 = w1[0]; wb1 = w1[1];
} catch(e) {
	var msg = "k: error parsing ";
	msg += f1 + ": " + e;
	console.error(msg);
	process.exit(4);
}
try {
	w2 = K.J.readFile(f2, opts);
	X2 = w2[0]; wb2 = w2[1];
} catch(e) {
	var msg = "k: error parsing ";
	msg += f2 + ": " + e;
	console.error(msg);
	process.exit(4);
}

var csv1 = K.J.utils.to_csv(w1);
var csv2 = K.J.utils.to_csv(w2);

for(var i=0, j=0; i<wb1.SheetNames.length || j<wb2.SheetNames.length; ++i, ++j){
	/* verify sheet names are equal */
	if(wb1.SheetNames[i] !== wb2.SheetNames[j]) {
		console.error("k: sheet " + i + "," + j + " mismatch: " + wb1.SheetNames[i] + " != " + wb2.SheetNames[j]);
		process.exit(5); 
	}
	var s = wb1.SheetNames[i];
	/* verify csv outputs are equal */
	if(csv1[s] != csv2[s]) {
		console.error("k: sheet " + s + " csv mismatch");
		process.exit(6);
	}
}
process.exit(0);
