import process from 'node:process';
import { Config } from './config.interface.js';

export default (): Config => {
  const ENV = process.env;

  const config: Config = {
    port: ENV.PORT !== undefined ? parseInt(ENV.PORT, 10) : 3000,
    cacheEnabled: ENV.CACHE_ENABLED === 'true',
    dataApiHost: ENV.DATA_API_HOST!,

    info: {
      build: ENV.CI_COMMIT_SHA,
    },

    ol: {
      provider: ENV.RPC_PROVIDER_URL!,
      dataApiHost: ENV.DATA_API_HOST!,
      validatorHandlesUrl: ENV.VALIDATOR_HANDLES_URL || undefined,
      communityWalletsUrl: ENV.COMMUNITY_WALLETS_URL || undefined,
      knwonAddressesUrl: ENV.KNOWN_ADDRESSES_URL || undefined,
    },

    s3: {
      region: ENV.S3_REGION!,
      endpoint: ENV.S3_ENDPOINT!,
      accessKey: ENV.S3_ACCESS_KEY_ID!,
      secretKey: ENV.S3_SECRET_ACCESS_KEY!,
      port: ENV.S3_PORT ? parseInt(ENV.S3_PORT, 10) : 443,
      useSSL: ENV.S3_USE_SSL ? ENV.S3_USE_SSL === 'true' : true,
      bucket: ENV.S3_BUCKET!,
      storageClass: ENV.S3_STORAGE_CLASS!,
    },

    clickhouse: {
      username: ENV.CLICKHOUSE_USERNAME!,
      password: ENV.CLICKHOUSE_PASSWORD!,
      host: ENV.CLICKHOUSE_HOST!,
      port: parseInt(ENV.CLICKHOUSE_PORT!, 10),
      database: ENV.CLICKHOUSE_DATABASE!,
    },

    apn: ENV.APN_PRIVATE_KEY
      ? {
          privateKey: Buffer.from(ENV.APN_PRIVATE_KEY, 'base64'),
          keyId: ENV.APN_KEY_ID!,
          teamId: ENV.APN_TEAM_ID!,
        }
      : undefined,

    firebase: ENV.FIREBASE_SERVICE_ACCOUNT
      ? {
          serviceAccount: ENV.FIREBASE_SERVICE_ACCOUNT,
        }
      : undefined,

    nats: {
      servers: ENV.NATS_SERVERS!,
    },

    neo4j: {
      url: ENV.NEO4J_URL || 'bolt://localhost:7687',
      username: ENV.NEO4J_USERNAME || 'neo4j',
      password: ENV.NEO4J_PASSWORD || 'password',
    },
  };

  return config;
};
