declare global {
  namespace NodeJS {
    interface ProcessEnv {
      OMDB_API_KEY: string
      NEXT_PUBLIC_CLIENT_URL: string
    }
  }
}

export {}
