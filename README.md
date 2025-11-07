# meowcoin-sign-transaction

Signs raw Meowcoin transactions (standard MEWC or assets) using nothing but JavaScript.

## Install

```
npm install @meowcoin-foundation/meowcoin-sign-transaction
```

## Quick start

```ts
import Signer from "@meowcoin-foundation/meowcoin-sign-transaction";

const network = "mewc"; // or "mewc-test"

const rawUnsignedTransaction =
  "02000000010d5fc31678777ee0c338379325df8cd0bc75249a607c408de6c012fa007c50ae0100000000ffffffff0200e40b54020000001976a9141239cd8e03d180a55b75763f9ef7424b7e2eee8f88acc0958bc42e0800001976a9147ba628b84127e132b1352022b2bb58eaeaed340888ac00000000";

const UTXOs = [
  {
    address: "mgRYHdMqD1gwm9QQqBRUPcDKdEZ9oVeChA",
    assetName: "MEWC",
    txid: "ae507c00fa12c0e68d407c609a2475bcd08cdf25933738c3e07e777816c35f0d",
    outputIndex: 1,
    script: "76a91409f2017224efdaf3633d26b1cf11a1df418496f688ac",
    satoshis: 9006961000000,
  },
];

const privateKeys = {
  mgRYHdMqD1gwm9QQqBRUPcDKdEZ9oVeChA:
    "Hhk5AVqybqe3TyyCUhE6DjE7VrdMnxQzYLxLXa4vAknH3n7ge8T8",
};

const signed = Signer.sign(network, rawUnsignedTransaction, UTXOs, privateKeys);

console.log(signed); // hex string ready to broadcast
```

### API

`Signer.sign(network, rawTxHex, utxos, privateKeys)`

- `network`: `"mewc" | "mewc-test" | "evr" | "evr-test"`
- `rawTxHex`: string – unsigned transaction hex
- `utxos`: array of objects containing `address`, `txid`, `outputIndex`, `script`, and `satoshis`
- `privateKeys`: object keyed by address with WIF strings for the selected network

Returns the signed transaction hex. Broadcasting is up to you (RPC, electrum, etc.).

