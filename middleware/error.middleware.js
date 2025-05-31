const errorMiddleware = (err. req, res, next) => {
  try {
    let error = {...err};
    error.message = err.message;



    if (error.name === 'CastError') {
      const message = 'Resourse not found'
      error = new Error(message);
      error.statusCode = 404;
    }
    if (error.code === 11000) {
      const message = 'Duplicate feild value entered'
      error = new Error(message);
      error.statusCode = 400;
    }
     // Mongoose validation error
     if (err.name === 'ValidationError') {
      const message = Object.values(err.errors).map(val => val.message);
      error = new Error(message.join(', '));
      error.statusCode = 400;
    }

    res.status(error.statusCode || 500).json({ success: false, error: error.message || 'Server Error' });
  } catch (error) {
    next(error);
  }
};

export default errorMiddleware; 