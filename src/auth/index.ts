import { Base } from "../base";
import { AuthParams } from "./types";
const encodedParams = new URLSearchParams();

const scopes = "as01.gen-connote.all as2corporate.v2trackntracewebapijson.all as2corporate.preacceptancessingle.all as2corporate.postcode-finder.all"

export class Auth extends Base {
  getAuthToken(params: AuthParams) {
    encodedParams.set('client_id', params.client_id);
    encodedParams.set('client_secret', params.client_secret);
    encodedParams.set('grant_type', params.grant_type);
    encodedParams.set('scope', scopes);

    return this.request('https://gateway-usc.pos.com.my/security/connect/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: encodedParams,
    })

  }

}