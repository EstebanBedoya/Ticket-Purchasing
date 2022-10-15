// @packages
import MockAdapter from "axios-mock-adapter";
import axios from "axios";

// @scripts
import { config } from "../config";
import { createMockResponse } from "../../utils/mock";

// @constants
const httpCodes = {
  success: 200,
  unauthorized: 401,
};

const mockedServices = {
  mockGetShows: (mockAdapter: MockAdapter) => {
    const url = config.services.getShows;
    mockAdapter.onGet(url).reply(() =>
      createMockResponse({
        data: config.mockData.shows,
        httpCode: httpCodes.success,
      })
    );
  },
};

export const initializeServiceMocker = () => {
  const mockAdapter = new MockAdapter(axios, {
    delayResponse: config.settings.serviceMocker.delayResponse,
  });
  const serviceMocker = {
    replyWithMockData: () => {
      const include = config.settings.serviceMocker.include || [];
      Object.keys(mockedServices).forEach((name) => {
        if (include.some((item: string) => item === name)) {
          mockedServices[name as keyof typeof mockedServices](mockAdapter);
        }
      });
      mockAdapter.onAny().passThrough();
    },
    replyWithNetworkError: () => {
      mockAdapter.reset();
      mockAdapter.onAny().networkError();
    },
  };

  serviceMocker.replyWithMockData();
  return serviceMocker;
};
