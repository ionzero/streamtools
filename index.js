var streamtools = function() {};

module.exports = exports = streamtools;

streamtools.BufferStream = require('./lib/BufferStream.js');
streamtools.NullStream = require('./lib/NullStream.js');
streamtools.StreamRecorder = require('./lib/StreamRecorder.js');
streamtools.StreamEater = require('./lib/StreamEater.js');
streamtools.StreamCatcher = require('./lib/StreamCatcher.js');
streamtools.StreamSearcher = require('./lib/StreamSearcher.js');
streamtools.StreamTee = require('./lib/StreamTee.js');
