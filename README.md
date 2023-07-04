# EnverX Assignment



## Assginment For Backend Developer Role


### Dependencies

* Node, npm, git, express, tsc, ts-node, nodemon, sqlite3, @types/express, express-json-validator-middleware.


## Schema

databse consists of two tables i.e posts, categories. Categories has a few entries but doesn't have endpoints right now.

```
CREATE TABLE posts 
| post_id     | title    | content  | category_id  | created_date |
|-------------|----------|----------|--------------|--------------|
| prmiary key |  string  |  string  |  foreign key |   Datetime   |
|----------|----------|----------|----------|----------|----------|

CREATE TABLE categories 
| category_id | category_name |
|-------------|---------------|
| prmiary key |     string    |
|----------|----------|-------|
```

### Setting up and Running

* Make sure you have git, node and npm installed globally.
* Install Postman or Insomnia for api debuging

1. Clone the repo
```
git clone git@github.com:EntropyDev/enverx-be-developer-assignment.git
cd enverx-be-developer-assignment
```
2. Next, install the npm dependencies locally
```
npm install
```
3. Start the local server at port 5000
```
npm start
```
4. Open Postman or use curl to send http requests to access the api endpoints.


## GET POSTS
Retrieves all posts from posts table. With query params {category, sort_by}

### Example

**Endpoint**: `/posts`

**Description**: 

**Request**:

```http
GET /posts/
```
```json
[
    {
        "post_id": 1,
        "title": "title 1",
        "content": "lorem ipsum",
        "category_id": 1,
        "created_date": "2023-07-04"
    },
    {
        "post_id": 3,
        "title": "name 53",
        "content": "lorem ipsum gypsum ",
        "category_id": 2,
        "created_date": "2023-07-04"
    }
]
```

**Request**:

```http
GET /posts?category=1
```
```json
[
    {
        "post_id": 1,
        "title": "title 1",
        "content": "lorem ipsum",
        "category_id": 1,
        "created_date": "2023-07-04"
    }
]
```
**Request**:

```http
GET /posts?sort_by=name
```
```json
[
    {
        "post_id": 3,
        "title": "name 53",
        "content": "lorem ipsum gypsum ",
        "category_id": 2,
        "created_date": "2023-07-04"
    },
    {
        "post_id": 1,
        "title": "title 1",
        "content": "lorem ipsum",
        "category_id": 1,
        "created_date": "2023-07-04"
    }
]
```

## NEW POST
Adds a new post to the data base. Requires title:string, content:string, category_id?:number

### Example

**Endpoint**: `/posts/`

**Description**: 

**Request**:

```http
POST /posts/
```
```request Body (Type: Application/json)
{
    "title": "tilte 9",
    "content": "lorem ipsum ",
    "category_id": 2
}
```

## GET POST
Retrieves a post from posts table using the post_id primary key.

### Example

**Endpoint**: `/posts/:id`

**Description**: 

**Request**:

```http
GET /posts/:id
```
```json
{
    "post_id": 3,
    "title": "name 53",
    "content": "lorem ipsum gypsum ",
    "category_id": 2,
    "created_date": "2023-07-04"
}
```

## UPDATE POST
updates an existing post. Requires post_id:number in params. Can have title?:string, content?:string, category_id?:number

### Example

**Endpoint**: `/posts/:id`

**Description**: 

**Request**:

```http
PUT /posts/:id
```
```request Body (Type: Application/json)
{
    "title": "tilte 7",
    "category_id": 1
}
```


## DELETE POST
deletes a post from posts table using the post_id primary key.

### Example

**Endpoint**: `/posts/:id`

**Description**: 

**Request**:

```http
DELETE /posts/:id
```




## Acknowledgments
Thank you for the assignment
