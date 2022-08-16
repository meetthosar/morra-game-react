import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from '../build/index.main.mjs';

import { ALGO_MyAlgoConnect as MyAlgoConnect } from '@reach-sh/stdlib';
const reach = loadStdlib('ALGO');
reach.setWalletFallback(reach.walletFallback({
  providerEnv: 'TestNet', MyAlgoConnect }));

const common = {
    getAccount : async () => {
        return reach.getDefaultAccount();
    },
    getBalance : async (account) => {
        const balAtomic = await reach.balanceOf(account);       
        return reach.formatCurrency(balAtomic, 4);
    },
    getContract : async (account) => {
        return await account.contract(backend);
    },
    getContractInfo : async(contract) => {
        return JSON.stringify( await contract.getInfo(), null, 2);
    },
    attachToContract : async(account, contractInfo) => {
        return await account.contract(backend, JSON.parse(contractInfo));
    }
};

export default common;