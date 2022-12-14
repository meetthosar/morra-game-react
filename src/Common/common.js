import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from '../build/index.main.mjs';

import { ALGO_MyAlgoConnect as MyAlgoConnect } from '@reach-sh/stdlib';
const reach = loadStdlib('ALGO');
reach.setWalletFallback(reach.walletFallback({
  providerEnv: 'TestNet', MyAlgoConnect }));

export default class Common {
    reach = reach;
    backend = backend;
    winner = ["Draw","Player1", "Player2"];
    getAccount = async () => {
        return reach.getDefaultAccount();
    }
    getBalance = async (account) => {
        const balAtomic = await reach.balanceOf(account);       
        return reach.formatCurrency(balAtomic, 4);
    }
    getContract = async () => {
        const account = await this.getAccount();
        return  account.contract(this.backend);
    }
    getContractInfo = async(contract) => {
        const contractInfo = JSON.stringify( await contract.getInfo(), null, 2);
        return contractInfo;
    }
    attachToContract = async(contractInfo) => {
        const account = await this.getAccount();
        return await account.contract(backend, JSON.parse(contractInfo));
    }

};

