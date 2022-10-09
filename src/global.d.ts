/* eslint-disable no-var */
import store from "./core/store";
import "@testing-library/jest-dom/extend-expect";

declare global {
  var core: { store: typeof store; serviceMocker: unknown };
}

declare module "axios" {
  export interface AxiosRequestConfig {
    settings: {
      ignoreToken?: boolean;
    };
  }
}
