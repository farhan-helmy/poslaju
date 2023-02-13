import fetch from 'isomorphic-unfetch'

enum Stage {
  STAGING = 'staging',
  PRODUCTION = 'production',
  AUTH = 'auth',
}
type Config = {
  token: string,
  stage?: Stage,
}

export abstract class Base {
  private token: string
  private stage: string

  constructor(config: Config) {
    this.token = config.token
    this.stage = config.stage
  }

  protected request<T>(endpoint: string, options?: RequestInit): Promise<T> {
    let url: string;
    let config: RequestInit;

    if (this.stage === Stage.STAGING) {
      url = 'https://gateway-usc.pos.com.my/staging/' + endpoint
    }else if(this.stage === Stage.PRODUCTION){
      url = '/production' + endpoint
    }else if(this.stage === Stage.AUTH){
      url = endpoint
      config = {
        ...options,
      }
    }

    const headers = {
      'Authorization': 'Bearer ' + this.token,
      'Content-type': 'application/json'
    }

    config = {
      ...options,
      headers,
    }

    return fetch(url, config).then(r => {
      if (r.ok) {
        return r.json()
      }
      throw new Error(r.statusText)
    })
  }
}