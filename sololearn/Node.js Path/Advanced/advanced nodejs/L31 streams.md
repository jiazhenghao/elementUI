Streams
collections of data that might not be available all at once
and don't have to fit in memory.

All streams are EventEmitter
src.pipe(dist);
src must be readable
dist must be writable
a.pipe(b).pipe(c).pipe(d) equals a.pipe(b) b.pipe(c) c.pipe(d)

implementing streams   require('stream')
consuming streams      piping/events

readable streams                writable streams
Events                          Events
-data                           -drain
-end                            -finish
-error                          -error
-close                          -close
-readable                       -pipe/unpipe
Functions                       Functions
pipe(),unpipe()                 write()
read(),unshift(),resume()       end()
pause(), ispaused()             cork(),uncork()
setEncoding()                   setDefaultEncoding()

as for readable streams
paused mode  stream.read()   stream.resume()              
flowing mode  EventEmitter   stream.pause()
