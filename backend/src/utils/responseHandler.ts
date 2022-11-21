import { Response } from "express";

export const sendSuccess = ({
  res,
  statusCode = 200,
  data,
  message,
}: {
  res: Response;
  statusCode?: number;
  data: any;
  message: string;
}) => {
  res.status(statusCode).json({
    status: "success",
    message,
    data,
  });
};

export const sendError = ({
  res,
  statusCode,
  data,
  message,
}: {
  res: Response;
  statusCode: number;
  data: any;
  message: string;
}) => {
  res.status(statusCode).json({
    status: "error",
    message,
    data,
  });
};
