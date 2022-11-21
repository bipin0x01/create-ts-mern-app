import example from "./exampleRoutes";

export const rootRoutes = (app) => {
  app.use("/example", example);
};
