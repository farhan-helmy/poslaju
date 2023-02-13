import { Base } from "../base";
import { AuthParams } from "./types";
const encodedParams = new URLSearchParams();

export class Auth extends Base {
  getAuthToken(params: AuthParams) {
    encodedParams.set('client_id', params.client_id);
    encodedParams.set('client_secret', params.client_secret);
    encodedParams.set('grant_type', params.grant_type);
    params.scope.toString().split(',').forEach((scope) => {
      encodedParams.append('scope', scope);
    });
    
    return this.request('https://gateway-usc.pos.com.my/security/connect/token', {
      method: 'POST',
      body: encodedParams,
    })
  }

}