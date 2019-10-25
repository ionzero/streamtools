# StreamTools

Useful tools for working with node.js streams.

# Overview

Streams are an extremely powerful abstraction for processing
streams of data. This module provides a number of tools that
make working with streams easier and encapsulate some common
patterns.

## Available tools

### BufferStream

A Bufferstream turns a Buffer into something that can be
treated like a ReadableStream.  It's usage is simple:


    /* example goes here */

    var BufferStream = require('streamtools').BufferStream;

    var bs1 = new BufferStream({ buffer: Buffer.from('A Long string of text and some more text' });

### NullStream

Sometimes you have something that wants a stream of data, but
you have nothing to give it. NullStream creates a readable stream
that finishes as soon as it's read, essentially simulating an empty
file or similar scenario.

    /* example goes here */


### StreamEater

Like NullStream, sometimes you have something that produces a stream
of data, but you don't actually care about it (or you don't care
about it _anymore_). StreamEater solves that problem. StreamEater
is a Transform/Writable stream that will eat any data coming into
it until the steam is finished.

    /* example goes here */

### StreamRecorder

At times you really need to record (or otherwise see) the activity
on a stream as it is occuring. StreamRecorder to the rescue. 
StreamRecorder is a transform that passes the data on unchanged, but
can record both events and data as it passes through. 

When data is piped into a StreamRecorder in `capture_data` mode, it
will capture the passing data and allow it to be retrieved directly
later via the `get_all_data` method. 

When a StreamRecorder is in `capture_events` mode, it will record
the events that are triggered as the data flows through.  Coupled
with `capture_time` mode, `capture_events` mode can be a very powerful
diagnostic tool when working with streams.

    /* Several examples go here */

### StreamCatcher

Sometimes you just want to catch all the data from a stream into
a bucket as it passes through. StreamCatcher is a simplified 
StreamRecorder that simply records all data as it passes through.
You can pipe a stream into a StreamCatcher and it will simply record 
the data as it arrives. Then, once the original stream finishes, a 
`finished` event will fire that will provide the captured data in
its complete form.

You can also call `catch_now` on a StreamCatcher if you want the
StreamCatcher to capture the data coming out of a readable stream
and do not need to pass it on to another transform or writable 
stream.

    /* example of pipe mode, as well as catch only mode */

### StreamTee

Occasionally you need the data coming out of a stream to go to more
than one destination.  This can be challenging.  StreamTee solves
this problem. StreamTee is a writable stream that allows you
to create an arbitrary number of streams that act as outputs to
anything piped into StreamTee. 

    /* example for StreamTee */

### StreamSearcher

A `StreamSearcher` allows you to search for specific data in 
a stream.  It effectively allows search and replace in stream
data. 

    /* example for StreamSearcher */


## Byte streams vs Object streams

As of version 1.0 of `streamtools`, all the tools provided
are made to work on streams of bytes. It is theoretically
possible for some of them to work on object streams. Some
tools, such as StreamEater and StreamTee already work with
object streams.  Others expect streams of byte data and
will likely malfunction or crash when used with object streams.

This is something we plan to address in future revisions, 
but if you need this functionality or are working on it, patches
are welcome.

