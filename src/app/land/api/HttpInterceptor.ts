import _ from 'underscore';
import Vue from 'vue';

export default class HttpInterceptor{

  constructor(){
    Vue['http'].interceptor.before = this.preHttpIntercepter;
    Vue['http'].interceptors.push((request:{[key:string]:any}, next: (params:any)=>void) => {
      next((response:any) => {
        this.postHttpIntercepter.apply(this, [request, response]);
      });
    });
  }

  /**
   * Pre http intercepter, will be invoked before all the http request.
   * @param request - http request
   * @param next - function to move control to next 
   */
  preHttpIntercepter(request:{[key:string]:any}, next:()=>void) {
    // const invocationid = _.uniqueId('api_' + new Date().getTime().toString() + '_');
    // request.headers.set('nonghe-api-invocationid', invocationid);
    // request.headers.set('nonghe-api-timestamp', new Date().getTime().toString());
    // // if(G.sourceTrackingOptions && G.sourceTrackingOptions['nonghe-audience']){
    //   request.headers.set('nonghe-audience', G.sourceTrackingOptions['nonghe-audience']);
    // }
    next();
  };

  /**
   * Post http intercepter, will be invoked before resolve http promise,
   * this intercepter can not prevent resolving the http promise, so the
   * business logic will still be executed.
   * @param request - http request
   * @param response - http response
   */
  postHttpIntercepter(request:{[key:string]:any}, response:{[key:string]:any}) {
    // handle SE001, not signined error
    let body = response.body;
    if (response.status === 401 && body.errorCode=='SE001') {
      response.json().then(
        (result:any) => {
          // G.navigator.to('signin');
          response.errorHandled = true;
        },
        (error:any) => {
          console.error('failed to parse http response body, ' + response.body);
        } 
      );
    }
  }
}
