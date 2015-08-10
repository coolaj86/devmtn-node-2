# devmtn-node-2
Our dreary time together... because of the weather

# Install

```bash
git clone git@github.com:coolaj86/devmtn-node-2.git

pushd ./devmtn-node-2

npm install
```

# Usage

```bash
npm start
# same as node serve.js
```

# Concepts

** Create an express App**

```js
var app = express()
```

** Create a serve static files **

```
var staticServer = express.static();

app.use('/', staticServer);
```

** Parse JSON **

```
app.use('/', staticServer);
```
