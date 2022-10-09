// @json
import services from "./services.json";

// @types
import { Services } from "../../../utils/types";

export const getServices = (servicesPlaceholders: Services) => {
  const servicesString = JSON.stringify(services);

  const parsedServices = Object.entries(servicesPlaceholders).reduce(
    (servicesStrings, [serviceName, serviceUrl]) =>
      servicesStrings.replace(new RegExp(`{${serviceName}}`, "g"), serviceUrl),
    servicesString
  );

  return JSON.parse(parsedServices);
};
