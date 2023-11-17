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
  "username": "string",
  "email": "string",
  "password": "string",
  "weight": "integer",
  "height": "integer",
  "dateBirth": "date",
  "activityLevel": "integer",
  "targetWeight": "string",
  "extra": "string",
  "calorieLimit": "integer",
}
```

_Response (201 - Created)_

```json
{
  "id": "integer",
  "email": "string"
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
  "message": "string"
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
