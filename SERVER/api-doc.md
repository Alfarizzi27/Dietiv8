# Dietiv8 API Documentation

## Endpoints :

List of available endpoints:

- `POST /users/register`
- `POST /users/login`
- `PUT /users/:id`
- `GET /achievements`
- `POST /achievements`
- `GET /foods`

  &nbsp;

## 1. POST /users/register

Request:

- body:

```json
{
	"username":"sayabedjo",
	"gender":"male",
	"email":"sayabedjo1234@mail.com", 
	"password":"sayabedjo", 
	"weight":"60", 
	"height":"170",
	"dateBirth":"1997-01-26",
	"activityLevel":"1",
	"extra":"diabetes",
	"targetWeight":"70"
}
```

_Response (201 - Created)_

```json
{
	"gender": "male",
	"username": "sayabedjo",
	"email": "sayabedjo1234@mail.com",
	"weight": 60,
	"height": 170,
	"extra": "diabetes",
	"calorieLimit": 1538,
	"targetWeight": "70"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Email cannot be empty"
}
OR
{
  "message": "Invalid email format"
}
OR
{
  "message": "Password cannot be empty"
}
OR
{
  "message": "Weight cannot be empty"
}
OR
{
  "message": "Height cannot be empty"
}
OR
{
  "message": "Date Birth cannot be empty"
}
OR
{
  "message": "Activity Level cannot be empty"
}
OR
{
  "message": "Target Weight cannot be empty"
}
OR
{
  "message": "password must be 5 or greater"
}
OR
{
  "message": "Email Already Exists"
}
```

&nbsp;

## 2. POST /users/login

Request:

- body:

```json
{
  "email": "string",
  "password": "string"
}
```

_Response (200 - OK)_

```json
{
	"access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTYsImdlbmRlciI6Im1hbGUiLCJ1c2VybmFtZSI6ImFrdW5maXgydXBkYXRlMiIsImVtYWlsIjoiYWt1bmZpeDJ1cGRhdGUyQG1haWwuY29tIiwid2VpZ2h0IjoiNjAiLCJoZWlnaHQiOiIxNzAiLCJleHRyYSI6ImRpYWJldGVzIiwiY2Fsb3JpZUxpbWl0IjoxNTM4LCJ0YXJnZXRXZWlnaHQiOiI3MCIsImFjdGl2aXR5TGV2ZWwiOiIxIiwiZGF0ZUJpcnRoIjoiMTk5Ny0wMS0yNiIsImlhdCI6MTcwMDI3OTUyNX0.wm8B0nnYwohrG6Bxk-n8vC4fA_ITGRiz7bTidjjfs7E"
}
```

_Response (401 - Unauthorized)_

```json
{
  "message": "error invalid username or email or password"
}
```

&nbsp;

## 3. PUT /users/:id

Description:

- Update user by access token

Request:

- headers:

```json
{
  "access_token": "string"
}
```

- params:

```json
{
	"username":"akunfix2update2",
	"gender":"male",
	"email":"akunfix2update2@mail.com", 
	"password":"akunfix2update2", 
	"weight":"60", 
	"height":"170",
	"dateBirth":"1997-01-26",
	"activityLevel":"1",
	"extra":"diabetes",
	"targetWeight":"70"
}
```

_Response (200 - OK)_

```json
{
	"access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTYsImdlbmRlciI6Im1hbGUiLCJ1c2VybmFtZSI6ImFrdW5maXgydXBkYXRlMiIsImVtYWlsIjoiYWt1bmZpeDJ1cGRhdGUyQG1haWwuY29tIiwid2VpZ2h0IjoiNjAiLCJoZWlnaHQiOiIxNzAiLCJleHRyYSI6ImRpYWJldGVzIiwiY2Fsb3JpZUxpbWl0IjoxNTM4LCJ0YXJnZXRXZWlnaHQiOiI3MCIsImFjdGl2aXR5TGV2ZWwiOiIxIiwiZGF0ZUJpcnRoIjoiMTk5Ny0wMS0yNiIsImlhdCI6MTcwMDI3OTUyNX0.wm8B0nnYwohrG6Bxk-n8vC4fA_ITGRiz7bTidjjfs7E"
}
```

_Response (404 - Not Found)_

```json
{
  "message": "data with id 1100 not found"
}
```

&nbsp;

## 4. GET /achievements

Description:

- Get Achievements user by access token

Request:

- headers:

```json
{
  "access_token": "string"
}
```

_Response (200 - OK)_

```json
[
	{
		"id": 1,
		"idUser": 15,
		"idAchievement": 7,
		"createdAt": "2023-11-17T10:21:01.462Z",
		"updatedAt": "2023-11-17T10:21:01.462Z",
		"Achievement": {
			"id": 7,
			"date": null,
			"weightBefore": 60,
			"currentWeight": 100,
			"createdAt": "2023-11-17T10:21:00.144Z",
			"updatedAt": "2023-11-17T10:21:00.144Z"
		}
	},
	{
		"id": 2,
		"idUser": 15,
		"idAchievement": 8,
		"createdAt": "2023-11-17T10:22:15.534Z",
		"updatedAt": "2023-11-17T10:22:15.534Z",
		"Achievement": {
			"id": 8,
			"date": null,
			"weightBefore": 60,
			"currentWeight": 90,
			"createdAt": "2023-11-17T10:22:14.241Z",
			"updatedAt": "2023-11-17T10:22:14.241Z"
		}
	},
...
]
```

_Response (404 - Not Found)_

```json
{
  "message": "data with id 1100 not found"
}
```

&nbsp;

## 5. POST /achievements

Description:

- Post achievement by access token

Request:

- headers:

```json
{
  "access_token": "string"
}
```

- params:

```json
{
	"currentWeight":"90"	
}
```

_Response (200 - OK)_

```json
{
	"message": "Berhasil Menambahkan Achievement"
}
```

_Response (404 - Not Found)_

```json
{
  "message": "data with id 1100 not found"
}
```

&nbsp;

## 6. GET /foods

Description:

- Get all food from database

Request:


_Response (200 - OK)_

```json
[
	{
		"id": 1,
		"name": "Nasi Padang",
		"calorie": 300,
	},
	
  ...,
]
```

&nbsp;


## Global Error

_Response (401 - Unauthorized)_

```json
{
  "message": "Invalid token"
}
```

_Response (500 - Internal Server Error)_

```json
{
  "message": "Internal server error"
}
```
