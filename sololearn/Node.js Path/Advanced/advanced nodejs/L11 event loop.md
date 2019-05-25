The Event Loop
The entity that handles external events and converts them into callback invocations

A loop that picks events from the event queue and pushes their callbacks to the call stack.

npm start ----> loop ----> process.exit()
