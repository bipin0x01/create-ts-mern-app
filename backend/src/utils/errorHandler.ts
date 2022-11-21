const errorHandler = (res, err) => {
  console.log(err);
  if (err.errors && err.errors.length > 0) {
    return res.status(400).json({
      status: "error",
      message: err.message,
      data: null,
      path: err.path,
    });
  }

  return res.status(500).json({
    status: "error",
    message: "Internal Server Error",
    data: null,
    path: "",
  });
};

export default errorHandler;
