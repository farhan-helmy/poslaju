export enum Scope {
  'as01.gen-connote.all',
  'as2corporate.tracking-reason-list.all',
  'as2corporate.tracking-office-list.all',
  'as2corporate.tracking-event-list.all', 
  'as01.routing-code.all', 
  'as2corporate.v2trackntracewebapijson.all',
  'as2corporate.preacceptancessingle.all', 
  'as01.generate-pl9-with-connote.all',
  'as2corporate.postcode-finder.all',
}

export type AuthParams = {
  client_id: string,
  client_secret: string,
  grant_type: string,
  scope: Scope
}