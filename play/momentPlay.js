var moment = require('moment');

console.log(moment().format());

var now = moment();

console.log('curent timestamp', now.format('MMM D,YYYY @ h:mm a'));

var timestamp = 2459111648;

var curent = moment.unix(timestamp);

console.log('other moment', curent.format('MMM D,YYYY @ h:mm A'));
