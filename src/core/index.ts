// @scripts
import { store as reduxStore} from './store';
import { initializeServiceMocker } from './service-mocker';
import { addAjaxInterceptors } from './ajax-interceptors';

const initializeApp = () => {
  const serviceMocker = initializeServiceMocker();
  addAjaxInterceptors();
  globalThis.core = {
    store: reduxStore,
    serviceMocker
  };

  return globalThis.core;
};

const { store } = initializeApp();

export { store };
