// @packages
import _ from "lodash";

// @scripts
import { copyObjInCamelCase } from "./object";

export const getMockParams = (call: any) => {
  const params = copyObjInCamelCase(
    call.params || JSON.parse(call.data).params || JSON.parse(call.data)
  );
  if (params.sortKey) {
    params.sortKey = _.lowerFirst(params.sortKey);
  }
  return params;
};

export const createMockResponse = ({ data = null, httpCode = 200 }) => [
  httpCode,
  data,
];
