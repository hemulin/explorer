export interface Config {
  port: number;
  cacheEnabled: boolean;
  dataApiHost: string;

  info: InfoConfig;
  ol: OlConfig;
  s3: S3Config;
  clickhouse: ClickhouseConfig;
  apn?: ApnConfig;
  firebase?: FirebaseConfig;
  nats: NatsConfig;
  neo4j: Neo4jConfig;
}

export interface InfoConfig {
  build?: string;
}

export interface OlConfig {
  provider: string;
  dataApiHost: string;
  validatorHandlesUrl?: string | undefined;
  communityWalletsUrl?: string | undefined;
  knwonAddressesUrl?: string | undefined;
}

export interface S3Config {
  region: string;
  endpoint: string;
  accessKey: string;
  secretKey: string;
  port: number;
  useSSL: boolean;
  bucket: string;
  storageClass: string;
}

export interface ClickhouseConfig {
  username: string;
  password: string;
  host: string;
  port: number;
  database: string;
}

export interface ApnConfig {
  privateKey: Buffer;
  keyId: string;
  teamId: string;
}

export interface FirebaseConfig {
  serviceAccount: string;
}

export interface NatsConfig {
  servers: string;
}

export interface Neo4jConfig {
  url: string;
  username: string;
  password: string;
}
