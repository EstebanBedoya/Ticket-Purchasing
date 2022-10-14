// @packages
import _ from "lodash";

export const copyObjInCamelCase: any = (source: any) => {
  if (Array.isArray(source)) {
    return source.map((item) => copyObjInCamelCase(item));
  }
  if (source !== null && source.constructor === Object) {
    return Object.keys(source).reduce(
      (result, key) => ({
        ...result,
        [_.lowerFirst(key)]: copyObjInCamelCase(source[key]),
      }),
      {}
    );
  }
  return source;
};
