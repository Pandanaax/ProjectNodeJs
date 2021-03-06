![Alt text](/public/images/node.jpg)
# Simple app to Node.js
## Getting Started

In order to add or edit the code, you first need to clone the repository. Open a terminal and run the following command (you may need to install git first):
```
git clone https://github.com/randabali/ProjectNodeJs.git
```
## Once you have cloned the project, please follow the guidelines below.
* install postam => https://www.postman.com/downloads/
* install mongodb => https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/
* install node.js
* install express => http://expressjs.com/en/starter/installing.html

Use /.env for your mongodb.

## Pages architecture

A page can have at most 3 packages:

* model : files that contains data classes
* controllers : controllers is a function you write to control your data.
* routes : Express.js Router is kind of nesting a mini server inside a server.

## API REST

Create in postman your 3 api :

* Show user : http://localhost:3000/users
* Create user : http://localhost:3000/users
* Find user email : http://localhost:3000/users/jp@gmail.com

