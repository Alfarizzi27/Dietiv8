# Dietiv8 API Documentation

## Endpoints :

List of available endpoints:

- `POST /users/register`
- `POST /users/login`
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
	"gender": "male",
	"username": "sayabedjo",
	"email": "sayabedjo@mail.com",
	"weight": 60,
	"height": 170,
	"extra": "diabetes",
	"calorieLimit": 1538,
	"targetWeight": "70"
}
```

_Response (401 - Unauthorized)_

```json
{
  "message": "error invalid username or email or password"
}
```

&nbsp;

## 3. GET /foods

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
