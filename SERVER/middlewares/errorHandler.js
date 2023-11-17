function errorHandler(err, req, res, next) {
  console.log(err,'ERRORR');
  let status = 500;
  let message = "Internal Server Error";
  console.log(err)
  if (err.name === "unauthenticated" || err.name === "JsonWebTokenError") {
    status = 401;
    message = "Invalid Token";
  } else if (err.name === "SequelizeUniqueConstraintError") {
    status = 400;
    message = `Email Already Exists`;
  } else if (err.name === "invalid_email_password") {
    status = 401;
    message = `error invalid email or password`;
  } else if (err.name === "not_found") {
    status = 404;
    message = `data with id ${err.id} not found`;
  } else if (err.name === "forbidden") {
    status = 403;
    message = `forbidden`;
  } else if (err.name === `SequelizeValidationError`) {
    status = 400;
    message = err.errors[0].message;
  } else if(err.name==='tag_require'){
    status= 400;
    message = 'Tag is require'
  }

  res.status(status).json({ message });
}
module.exports = { errorHandler };
