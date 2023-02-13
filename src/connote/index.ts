import qs from 'querystringify'
import { Base } from "../base";
import { ConnoteParams } from "./types";

const resourceName = 'as01/gen-connote/v1/api/GConnote'

export class Connote extends Base {

   getConnote (params: ConnoteParams) {
      let query = `${resourceName}`
      if (params) {
         query += qs.stringify(params, '?')
      }
      return this.request(query)
   }
}