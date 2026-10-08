import {
  HttpClient,
  HttpHeaders,
  Injectable,
  environment,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-V7X2DIQ7.js";

// src/app/services/data-api.service.ts
var DataApiService = class _DataApiService {
  constructor(http) {
    this.http = http;
  }
  GetDataApi(url, params, module) {
    return this.http.get(this.urlModule(module) + url + params);
  }
  PostDataApi(url, params, module) {
    return this.http.post(this.urlModule(module) + url, params);
  }
  DeleteDataApi(url, params, module) {
    const options = {
      headers: new HttpHeaders({ "Content-Type": "application/json" }),
      body: params
    };
    return this.http.delete(this.urlModule(module) + url, options);
  }
  DeleteDataApiUrl(url, params, module) {
    return this.http.delete(this.urlModule(module) + url + params);
  }
  PutDataApi(url, params, module) {
    const options = {
      headers: new HttpHeaders({ "Content-Type": "application/json" }),
      body: params
    };
    return this.http.put(this.urlModule(module) + url, params);
  }
  urlModule(module) {
    return environment.apiUrl;
  }
  static {
    this.\u0275fac = function DataApiService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DataApiService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DataApiService, factory: _DataApiService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DataApiService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  DataApiService
};
//# sourceMappingURL=chunk-YWXN2VJ2.js.map
