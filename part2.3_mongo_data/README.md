![Imgur](http://i.imgur.com/VIKVCOf.png)

### Part 2.3 - Mongo & Data Illustration
**Led by: Rouan van der Ende**  

Class Outline
=============

You will learn how to use the Mongo database to store information and how to retrieve and display information in realtime. 

At the end of this class you should be able to build a simple database driven web interface to your IoT device. You should be able to display a history of interactions. This counts 25% of part 2 total.

Notes
=====

Install mongo from http://www.mongodb.org/

Create the /data/db folder needed and run mongod

Learn the basics of the mongo command to see and enter data manually.

Install the mongojs node module from https://github.com/mafintosh/mongojs

Use nodejs to .save entries to the database.

Use .find to retrieve entries from the database.

Use processing.js to visualise data graphically. Ideally have socket.io update graphical display as new data is available.

Learn how to search using the $gt, $lt etc.. options.

Build your IoT web interface and connect it to mongo to save and find data for display. Use socket.io to connect the user interface to the device and database. 

End of part 2.3

Continue with part 3.1
