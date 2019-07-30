# Nest.js 'Notes' Demo API

This is a demo of a `node.js` REST API using `Nest.js` on top of `Express` web framework. Database uses a `mongoDB` server with `mongoose`

# Features

 - Basic CRUD operations of "Note" taking
 - Search by query
 
# Prerequisites
- Install [Node.js](https://nodejs.org/en/download/)
- Install [MongoDB](https://docs.mongodb.com/manual/installation/)
- Install [GitHub cli](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

# Getting started
- Clone the repository
```
git clone https://github.com/maljukan/typescript-node-rest-starter.git <project_name>
```
- Install dependencies
```
cd <project_name>
npm install
```
- Start Server on `localhost:3000`
```
npm run start
```

# REST endpoints
- public: `/api/notes`

# CURL

Create Note
```
curl -i -d '{"body":"Hello World"}' -H "Content-Type: application/json" -X POST http://localhost:3000/api/notes/
```

Update Note
```
curl -i -d '{"body":"Hello World Updated", "_id":[ ID HERE ]}' -H "Content-Type: application/json" -X PUT http://localhost:3000/api/notes/
```

Update Note by Path
```
curl -i -d '{"body":"Hello World"}' -H "Content-Type: application/json" -X PUT http://localhost:3000/api/notes/[ ID HERE ]
```

Get All Notes
```
curl -i -H "Accept: application/json" -H "Content-Type: application/json" -X GET http://localhost:3000/api/notes/
```

Get Note by ID
```
curl -i -H "Accept: application/json" -H "Content-Type: application/json" -X GET http://localhost:3000/api/notes/[ ID HERE ]
```

Get Notes Query Matching Body
```
curl -i -H "Accept: application/json" -H "Content-Type: application/json" -X GET http://localhost:3000/api/notes?query=[ MATCHING BODY HERE ]
```

Delete Note by ID
```
curl -i -H "Accept: application/json" -H "Content-Type: application/json" -X DELETE http://localhost:3000/api/notes/[ ID HERE ]
```
