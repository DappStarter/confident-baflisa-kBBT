require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom kiwi office spot edge rescue spawn proof gesture cricket bottom tragic'; 
let testAccounts = [
"0xc4129939fb605c4830a46a5747b094e47044ed4528205e33c3dba5e2ff342fb9",
"0xc6d36af655e4c61c8e4adca61239931cdd957bdf81d4b881b2ce43dc2099b46b",
"0x8e9c8115d6b895723145bf5ec38560bc929a22cf0f97c46a584c01b8c2eff05d",
"0x6682634cdf8251d560216ef21c1c1680467234c4baba25fdf623cc2b66b0f6b0",
"0x527d7367838c667945e17ba79c45dfe80431dd8fea69a8b6fa197633136c537e",
"0x2a08c031ba252ce634862ca5acccde20c26b9fb1ab9ae315a85fc63635a42d7e",
"0xc8b1a0d33f762e710b7568b48c847a31bf43e9c4ffb615ad6365498c17c4eaf2",
"0xd4ff35da8e39ca996ec9653b4fc6395c4f2059507b4fc91aee6535e10a14497a",
"0x12179a54b547afbf6a6168551df48563e492c394de892ab0c9cba499502bc47a",
"0x410ada460747bc3bbcdc0338efba7e72ca9b4ff10128ec6b869247b7f8dd5a29"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

