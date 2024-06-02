/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_API_URL: string;
    readonly VITE_API_KEY: string;
    // Adicione outras variáveis de ambiente que você tenha aqui
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
  