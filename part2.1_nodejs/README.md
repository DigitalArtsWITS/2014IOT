![Imgur](http://i.imgur.com/VIKVCOf.png)

### Part 2.1 - Working with Node.JS, Express, Swig and Socket.io
**Led by: Rouan van der Ende**  

Class Outline
=============

You will learn how to use node.js to build a web server, use the express framework to handle static file hosting, session data handling, routes. We'll use swig to help us with templating html files together and socket.io to relay messages between server and clients in realtime.

At the end of this class you should be able to build a simple web chat, this counts 25% of part 2 total.

Class
=====

Install node.js from http://nodejs.org/

Learn how to use node.js as a console scripting tool. See [2.1.1_gettingStarted.md](https://github.com/DigitalArtsWITS/2014IOT/blob/master/part2.1_nodejs/2.1.1_gettingStarted.md)

Use the example code from the node.js website to get your hello world server working. [2.1.2_webserver.md](https://github.com/DigitalArtsWITS/2014IOT/blob/master/part2.1_nodejs/2.1.2_webserver.md)

Familiarise yourself with using the **node** and **npm** commands.

In the [2.1.3_express](https://github.com/DigitalArtsWITS/2014IOT/tree/master/part2.1_nodejs/2.1.3_express) folder on your local machine. Run `npm install` and then `node server.js` and open http://localhost 

Note the visit counter increasing even if visiting from several browsers. This is the power of socket.io

Disect the code to understand how it is built. 

Fix the /contact page.

Use socket.io to build a chat messaging system under the /chat url.

Links
=====

http://nodejs.org/

http://expressjs.com/

http://paularmstrong.github.io/swig/

http://socket.io/
