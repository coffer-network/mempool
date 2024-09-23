export namespace IElectrumApi {
  export interface ScriptHashBalance {
    confirmed: number;
    unconfirmed: number;
  }

  export interface ScriptHashUtxos {
    tx_hash: string;
    tx_pos: number;
    value: number;
    height: number;
  }

  export interface ScriptHashHistory {
    height: number;
    tx_hash: string;
    fee?: number;
  }
}
