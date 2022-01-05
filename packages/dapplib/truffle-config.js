require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea nasty flee spot warrior ridge remind uncover gloom knee blue gasp'; 
let testAccounts = [
"0xfa36bb9e40183bc76c67a05ca904ac29ba16c190c5038f6e8a51d3f95d64f942",
"0x3f3dfa5dd2ab11c96b4be12a514702f4ff5d280a39e890c38a878df50561805c",
"0x54cd5096a9ec15dcf4e3d749f4c3e05de86110d3298b799481fc6044d405fcf3",
"0xeadc8b84b50ef8897d9467110c9297a1ad1db4eaaf18af8ac29f2ceb2a63105b",
"0x1a7f5d920e9a213bf8a0e501e33b4f5ff2f29e43d03d6d7bfdf23fcbc4373b49",
"0xfdd122a182ed8042780dd41ba02dff6b8ff995598e11e6e796dbbb84d96cbeda",
"0x69dff72241ba977dc8bf4488db7de459e5c6effcb1e4897b05eed73e10dbc862",
"0xecc8472951244cb4ff84f345126d7567ed20d5e32ae5a5c9d34d7e277815f0c6",
"0xdfe315e7eb959c24e196da91ccf9a5f33d8fc42d007da22f0b8c14c81dd547a5",
"0x81f1325f42c41fa7a71c1659cbb5e8c3b1d58e4b077ebeea396604f0f3559d6c"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


