const Signer = require("./dist/index.cjs");

test("Verify MEWC sign transaction", () => {
  const testData = require("./mock/test_mewc_transaction.json");
  const network = "mewc";
  const UTXOs = testData.debug.mewcUTXOs;
  const privateKeys = testData.debug.privateKeys;
  const rawUnsignedTransaction = testData.debug.rawUnsignedTransaction;

  const expectedResult = testData.debug.signedTransaction;
  const asdf = Signer.sign(network, rawUnsignedTransaction, UTXOs, privateKeys);

  expect(asdf).toBe(expectedResult);
});
test("Verify MEWC sign ASSET transaction", () => {
  const testData = require("./mock/test_asset_transaction.json");
  const network = "mewc";
  const UTXOs = testData.debug.mewcUTXOs.concat(testData.debug.assetUTXOs);

  const privateKeys = testData.debug.privateKeys;
  const rawUnsignedTransaction = testData.debug.rawUnsignedTransaction;

  const expectedResult = testData.debug.signedTransaction;
  const asdf = Signer.sign(network, rawUnsignedTransaction, UTXOs, privateKeys);

  expect(asdf).toBe(expectedResult);
});
test("Verify EVR sign transaction", () => {
  const testData = require("./mock/test_evr_transaction.json");
  const network = "evr";
  const UTXOs = testData.debug.UTXOs;

  const privateKeys = testData.debug.privateKeys;
  const rawUnsignedTransaction = testData.debug.rawUnsignedTransaction;

  const expectedResult = testData.debug.signedTransaction;
  const asdf = Signer.sign(network, rawUnsignedTransaction, UTXOs, privateKeys);

  expect(asdf).toBe(expectedResult);
});

test("Verify EVR sign ASSET transaction", () => {
  const testData = require("./mock/test_asset_transaction_evr.json");
  const network = "evr";
  const UTXOs = testData.debug.UTXOs;

  const privateKeys = testData.debug.privateKeys;
  const rawUnsignedTransaction = testData.debug.rawUnsignedTransaction;

  const expectedResult = testData.debug.signedTransaction;
  const asdf = Signer.sign(network, rawUnsignedTransaction, UTXOs, privateKeys);

  expect(asdf).toBe(expectedResult);
});
