# Heroku Express Rest API (w MongoDB) 
## How to Use This
### Test
* Terminal : `npm run dev`
  * URL : http://localhost:5000/ or http://http://127.0.0.1:5000/
* Use [Postman](https://www.postman.com/) to test API
  * [Test Cases](https://www.getpostman.com/collections/a382be0b1860a3cc52ef)
## How to Build This
### Terminal
```
: npm initialization
npm init -y
: install express
npm i express
: install mongoose
npm i mongoose
: install cors
npm i cors
: install nodemon (dev tool)
npm i -D nodemon
: set Procfile for Heroku
echo "web: node ./project/app.js" > Procfile
: set Environment Var (in Windows, must restart IDE)
setx MONGODB_URI {Heroku Add-on mLab's URI}
```
### .gitignore
> use gitignore.io for Node.js ([link](https://www.toptal.com/developers/gitignore/api/node))
### npm script
```
	"scripts": {
		"dev": "nodemon ./project/app.js",
		"start": "node ./project/app.js"
	},
```