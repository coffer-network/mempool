import config from '../../config';
import { AbstractBitcoinApi } from './bitcoin-api-abstract-factory';
import EsploraApi from './esplora-api';
import BitcoinApi from './bitcoin-api';
import BitcoindElectrsApi from './electrum-api';
import bitcoinClient from './bitcoin-client';
import logger from '../../logger';

function bitcoinApiFactory(): AbstractBitcoinApi {
  switch (config.MEMPOOL.BACKEND) {
    case 'esplora':
      logger.info('using esplora api');
      return new EsploraApi();
    case 'electrum':
      logger.info('using electrum api');
      return new BitcoindElectrsApi(bitcoinClient);
    case 'none':
    default:
      logger.info('using default api');
      return new BitcoinApi(bitcoinClient);
  }
}

export const bitcoinCoreApi = new BitcoinApi(bitcoinClient);

export default bitcoinApiFactory();
