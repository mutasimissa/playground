### JS Worker Threads

#### About Worker Threads
- JS is single threaded, which means each invoke to your JS code is processed on a single thread of the computer cpu
- It also means -> Your code is executed line by line in ONE stack
- It also means -> JS can only be synchronus
- Any async functionality we use is not executed in that ONE stack, it enters the stack and it invokes some external API to handle it, for example fetch() does that and that's why we can run it asynchronously
- Is this a bad thing? actually it's one of the reasons that makes JS implementations relatively easy, because we don't need to take care of complicated scenarios of a multi-threaded environment, there are lot of debates about that.
- Worker threads in both web and node, are a way of spawning some JS code to run on another thread separately
- An important note here is that web workers ***window.worker*** and  ***nodejs*** worker-threads are different implementations
- It's also important to say that in the case of web workers it's not possible to access the DOM elements from inside the worker, BUT there are some libraries tries to do that for example [WebGL-Worker](https://github.com/kripken/webgl-worker)
- Finally you have to know that misuse of worker threads can make the opposite of what we need, for example using worker threads for I/O operations that are already handled asynchronously using the event loop, because there is some effort your system will do while creating worker(s), and I/O operations are already offloaded from the main thread using the event loop mechanism.