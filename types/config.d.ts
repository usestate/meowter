declare module 'config' {
  interface Config {
    api: {
      protocol: 'http' | 'https'
      host: string
    }
    socket: {
      protocol: 'ws' | 'wss'
      host: string
    }
  }

  export = config as Config
}
