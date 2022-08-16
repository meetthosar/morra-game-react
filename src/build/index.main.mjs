// Automatically generated with Reach 0.1.11 (7d2358ff)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (7d2358ff)';
export const _backendVersion = 17;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Digest;
  const ctc3 = stdlib.T_Object({
    guess: ctc1,
    hand: ctc1
    });
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1],
      4: [ctc0, ctc1, ctc0],
      5: [ctc0, ctc1, ctc0, ctc2],
      6: [ctc0, ctc1, ctc0, ctc2, ctc3]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Player1(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Player1 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Player1 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Object({
    guess: ctc0,
    hand: ctc0
    });
  const ctc2 = stdlib.T_Tuple([ctc0, ctc1]);
  const ctc3 = stdlib.T_Digest;
  const ctc4 = stdlib.T_Address;
  
  
  const v136 = stdlib.protect(ctc0, interact.deadline, 'for Player1\'s interact field deadline');
  const v137 = stdlib.protect(ctc0, interact.wager, 'for Player1\'s interact field wager');
  
  const txn1 = await (ctc.sendrecv({
    args: [v137, v136],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:40:11:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [v137, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v141, v142], secs: v144, time: v143, didSend: v31, from: v140 } = txn1;
      
      sim_r.txns.push({
        amt: v141,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v141, v142], secs: v144, time: v143, didSend: v31, from: v140 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v151, time: v150, didSend: v40, from: v149 } = txn2;
  ;
  let v154 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
  let v155 = v150;
  
  while (await (async () => {
    const v170 = stdlib.eq(v154, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
    
    return v170;})()) {
    const v173 = stdlib.protect(ctc1, await interact.playHandAndGuess(), {
      at: './index.rsh:58:49:application',
      fs: ['at ./index.rsh:57:17:application call to [unknown function] (defined at: ./index.rsh:57:21:function exp)'],
      msg: 'playHandAndGuess',
      who: 'Player1'
      });
    const v176 = stdlib.protect(ctc0, await interact.random(), {
      at: 'reach standard library:64:31:application',
      fs: ['at ./index.rsh:59:52:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:57:17:application call to [unknown function] (defined at: ./index.rsh:57:21:function exp)'],
      msg: 'random',
      who: 'Player1'
      });
    const v177 = stdlib.digest(ctc2, [v176, v173]);
    
    const txn3 = await (ctc.sendrecv({
      args: [v140, v141, v149, v177],
      evt_cnt: 1,
      funcNum: 3,
      lct: v155,
      onlyIf: true,
      out_tys: [ctc3],
      pay: [stdlib.checkedBigNumberify('./index.rsh:63:13:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v180], secs: v182, time: v181, didSend: v68, from: v179 } = txn3;
        
        ;
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc4, ctc0, ctc4, ctc3],
      waitIfNotPresent: false
      }));
    const {data: [v180], secs: v182, time: v181, didSend: v68, from: v179 } = txn3;
    ;
    const v183 = stdlib.addressEq(v140, v179);
    stdlib.assert(v183, {
      at: './index.rsh:63:13:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Player1'
      });
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 4,
      out_tys: [ctc1],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v190], secs: v192, time: v191, didSend: v80, from: v189 } = txn4;
    ;
    const v193 = stdlib.addressEq(v149, v189);
    stdlib.assert(v193, {
      at: './index.rsh:72:13:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Player1'
      });
    const txn5 = await (ctc.sendrecv({
      args: [v140, v141, v149, v180, v190, v176, v173],
      evt_cnt: 2,
      funcNum: 5,
      lct: v191,
      onlyIf: true,
      out_tys: [ctc0, ctc1],
      pay: [stdlib.checkedBigNumberify('./index.rsh:80:13:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn5) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v197, v198], secs: v200, time: v199, didSend: v90, from: v196 } = txn5;
        
        ;
        const v204 = v198.hand;
        const v205 = v198.guess;
        const v206 = v190.hand;
        const v207 = v190.guess;
        const v208 = stdlib.add(v204, v206);
        const v209 = stdlib.eq(v208, v205);
        const v211 = stdlib.eq(v208, v207);
        const v212 = v211 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
        const v213 = v209 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1') : v212;
        const cv154 = v213;
        const cv155 = v199;
        
        await (async () => {
          const v154 = cv154;
          const v155 = cv155;
          
          if (await (async () => {
            const v170 = stdlib.eq(v154, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
            
            return v170;})()) {
            sim_r.isHalt = false;
            }
          else {
            const v214 = stdlib.eq(v154, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
            const v217 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:91:10:decimal', stdlib.UInt_max, '2'), v141);
            const v219 = v214 ? v140 : v149;
            sim_r.txns.push({
              kind: 'from',
              to: v219,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }})();
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc4, ctc0, ctc4, ctc3, ctc1, ctc0, ctc1],
      waitIfNotPresent: false
      }));
    const {data: [v197, v198], secs: v200, time: v199, didSend: v90, from: v196 } = txn5;
    ;
    const v201 = stdlib.addressEq(v140, v196);
    stdlib.assert(v201, {
      at: './index.rsh:80:13:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Player1'
      });
    const v202 = stdlib.digest(ctc2, [v197, v198]);
    const v203 = stdlib.digestEq(v180, v202);
    stdlib.assert(v203, {
      at: 'reach standard library:69:17:application',
      fs: ['at ./index.rsh:81:20:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
      msg: null,
      who: 'Player1'
      });
    const v204 = v198.hand;
    const v205 = v198.guess;
    const v206 = v190.hand;
    const v207 = v190.guess;
    const v208 = stdlib.add(v204, v206);
    const v209 = stdlib.eq(v208, v205);
    const v211 = stdlib.eq(v208, v207);
    const v212 = v211 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
    const v213 = v209 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1') : v212;
    const cv154 = v213;
    const cv155 = v199;
    
    v154 = cv154;
    v155 = cv155;
    
    continue;
    
    
    
    
    
    }
  const v214 = stdlib.eq(v154, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
  const v217 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:91:10:decimal', stdlib.UInt_max, '2'), v141);
  const v219 = v214 ? v140 : v149;
  ;
  return;
  
  
  
  
  };
export async function Player2(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Player2 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Player2 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Digest;
  const ctc3 = stdlib.T_Object({
    guess: ctc0,
    hand: ctc0
    });
  const ctc4 = stdlib.T_Tuple([ctc0, ctc3]);
  const ctc5 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v141, v142], secs: v144, time: v143, didSend: v31, from: v140 } = txn1;
  ;
  stdlib.protect(ctc1, await interact.acceptWager(), {
    at: './index.rsh:45:25:application',
    fs: ['at ./index.rsh:44:15:application call to [unknown function] (defined at: ./index.rsh:44:19:function exp)'],
    msg: 'acceptWager',
    who: 'Player2'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v140, v141],
    evt_cnt: 0,
    funcNum: 1,
    lct: v143,
    onlyIf: true,
    out_tys: [],
    pay: [v141, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v151, time: v150, didSend: v40, from: v149 } = txn2;
      
      sim_r.txns.push({
        amt: v141,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v154 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
      const v155 = v150;
      
      if (await (async () => {
        const v170 = stdlib.eq(v154, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
        
        return v170;})()) {
        sim_r.isHalt = false;
        }
      else {
        const v214 = stdlib.eq(v154, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
        const v217 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:91:10:decimal', stdlib.UInt_max, '2'), v141);
        const v219 = v214 ? v140 : v149;
        sim_r.txns.push({
          kind: 'from',
          to: v219,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc5, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v151, time: v150, didSend: v40, from: v149 } = txn2;
  ;
  let v154 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
  let v155 = v150;
  
  while (await (async () => {
    const v170 = stdlib.eq(v154, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
    
    return v170;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc2],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v180], secs: v182, time: v181, didSend: v68, from: v179 } = txn3;
    ;
    const v183 = stdlib.addressEq(v140, v179);
    stdlib.assert(v183, {
      at: './index.rsh:63:13:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Player2'
      });
    const v186 = stdlib.protect(ctc3, await interact.playHandAndGuess(), {
      at: './index.rsh:69:59:application',
      fs: ['at ./index.rsh:68:17:application call to [unknown function] (defined at: ./index.rsh:68:21:function exp)'],
      msg: 'playHandAndGuess',
      who: 'Player2'
      });
    
    const txn4 = await (ctc.sendrecv({
      args: [v140, v141, v149, v180, v186],
      evt_cnt: 1,
      funcNum: 4,
      lct: v181,
      onlyIf: true,
      out_tys: [ctc3],
      pay: [stdlib.checkedBigNumberify('./index.rsh:72:13:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn4) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v190], secs: v192, time: v191, didSend: v80, from: v189 } = txn4;
        
        ;
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc5, ctc0, ctc5, ctc2, ctc3],
      waitIfNotPresent: false
      }));
    const {data: [v190], secs: v192, time: v191, didSend: v80, from: v189 } = txn4;
    ;
    const v193 = stdlib.addressEq(v149, v189);
    stdlib.assert(v193, {
      at: './index.rsh:72:13:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Player2'
      });
    const txn5 = await (ctc.recv({
      didSend: false,
      evt_cnt: 2,
      funcNum: 5,
      out_tys: [ctc0, ctc3],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v197, v198], secs: v200, time: v199, didSend: v90, from: v196 } = txn5;
    ;
    const v201 = stdlib.addressEq(v140, v196);
    stdlib.assert(v201, {
      at: './index.rsh:80:13:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Player2'
      });
    const v202 = stdlib.digest(ctc4, [v197, v198]);
    const v203 = stdlib.digestEq(v180, v202);
    stdlib.assert(v203, {
      at: 'reach standard library:69:17:application',
      fs: ['at ./index.rsh:81:20:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
      msg: null,
      who: 'Player2'
      });
    const v204 = v198.hand;
    const v205 = v198.guess;
    const v206 = v190.hand;
    const v207 = v190.guess;
    const v208 = stdlib.add(v204, v206);
    const v209 = stdlib.eq(v208, v205);
    const v211 = stdlib.eq(v208, v207);
    const v212 = v211 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
    const v213 = v209 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1') : v212;
    const cv154 = v213;
    const cv155 = v199;
    
    v154 = cv154;
    v155 = cv155;
    
    continue;
    
    
    
    
    
    }
  const v214 = stdlib.eq(v154, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
  const v217 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:91:10:decimal', stdlib.UInt_max, '2'), v141);
  const v219 = v214 ? v140 : v149;
  ;
  return;
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiAIAAEFCCAEAgYmAgEAACI1ADEYQQKjKWRJIls1ASVbNQI2GgAXSUEAByI1BCM1BgA2GgIXNQQ2GgM2GgEXSYEDDEABTkkhBQxAAOxJJAxAAIMkEkQhBzQBEkQ0BEkiEkw0AhIRRChkSTUDSVcAIDX/V2gQNf5JNQVJIls1/VcIEDX8gATT82QpNP0WUDT8ULA0/zEAEkQ0A1dIIDT9FjT8UAESRDT8JVs0/iVbCDX7NP80AyEEWzQDVyggIiEGNPs0/iJbEk0jNPs0/CJbEk0yBkIBTEgkNAESRDQESSISTDQCEhFEKGRJNQNJSlcAIDX/IQRbNf5XKCA1/VdIIDX8STUFNfuABICquPA0+1CwNP0xABJENP80/hZQNP1QNPxQNPtQKEsBVwB4Z0ghBzUBMgY1AkIBTkghBTQBEkQ0BEkiEkw0AhIRRChkSTUDSUlXACA1/yEEWzX+VyggNf1JNQU1/IAEE+7qUTT8ULA0/zEAEkQ0/zT+FlA0/VA0/FAoSwFXAGhnSCQ1ATIGNQJCAPNJIwxAADgjEkQjNAESRDQESSISTDQCEhFEKGRJNQMhBFs1/4AEmouRdLA0/4gBFjQDVwAgNP8xACIyBkIAUEiBoI0GiAD/IjQBEkQ0BEkiEkw0AhIRREk1BUkiWzX/JVs1/oAErNEfwzT/FlA0/hZQsDT/iADPMQA0/xZQKEsBVwAoZ0gjNQEyBjUCQgBlNf81/jX9Nfw1+zT+IhJBABw0+zT8FlA0/VAoSwFXAEhnSCEFNQEyBjUCQgA4sSKyASEGNPwLsggjshA0/TT7NP4jEk2yB7NCAAAxGSQSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCk0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkQhBjE1EkQiMTYSRCIxNxJEIjUBIjUCQv+uNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJ`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 120,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v141",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v142",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v141",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v142",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v180",
                "type": "uint256"
              }
            ],
            "internalType": "struct T9",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "_guess",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_hand",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T11",
                "name": "v190",
                "type": "tuple"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v197",
                "type": "uint256"
              },
              {
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "_guess",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_hand",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T11",
                "name": "v198",
                "type": "tuple"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v180",
                "type": "uint256"
              }
            ],
            "internalType": "struct T9",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "_guess",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_hand",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T11",
                "name": "v190",
                "type": "tuple"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v197",
                "type": "uint256"
              },
              {
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "_guess",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_hand",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T11",
                "name": "v198",
                "type": "tuple"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x6080604052604051620012e9380380620012e98339810160408190526200002691620001ff565b6000805543600355604080513381528251602080830191909152808401518051838501520151606082015290517fa736757a943474ef5983bb0422ab3a1e64bcd39e99635f4430c7765118231f959181900360800190a1602081015151620000929034146007620000f8565b604080518082018252600060208083018281523380855286830151518252600193849055439093558451808301939093525182850152835180830385018152606090920190935280519192620000ef926002929091019062000122565b5050506200029c565b816200011e5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b82805462000130906200025f565b90600052602060002090601f0160209004810192826200015457600085556200019f565b82601f106200016f57805160ff19168380011785556200019f565b828001600101855582156200019f579182015b828111156200019f57825182559160200191906001019062000182565b50620001ad929150620001b1565b5090565b5b80821115620001ad5760008155600101620001b2565b604080519081016001600160401b0381118282101715620001f957634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360608112156200021357600080fd5b6200021d620001c8565b835181526040601f19830112156200023457600080fd5b6200023e620001c8565b60208581015182526040909501518582015293810193909352509092915050565b600181811c908216806200027457607f821691505b602082108114156200029657634e487b7160e01b600052602260045260246000fd5b50919050565b61103d80620002ac6000396000f3fe60806040526004361061006e5760003560e01c8063832307571161004b57806383230757146100c1578063ab53f2c6146100d6578063c553b209146100f9578063f4cedab01461010c57005b80631e93b0f1146100775780632c10a1591461009b5780633d0655f0146100ae57005b3661007557005b005b34801561008357600080fd5b506003545b6040519081526020015b60405180910390f35b6100756100a9366004610bb0565b61011f565b6100756100bc366004610bd3565b610281565b3480156100cd57600080fd5b50600154610088565b3480156100e257600080fd5b506100eb610488565b604051610092929190610be5565b610075610107366004610c42565b610525565b61007561011a366004610bb0565b61073b565b61012f60016000541460096108f3565b6101498135158061014257506001548235145b600a6108f3565b60008080556002805461015b90610c54565b80601f016020809104026020016040519081016040528092919081815260200182805461018790610c54565b80156101d45780601f106101a9576101008083540402835291602001916101d4565b820191906000526020600020905b8154815290600101906020018083116101b757829003601f168201915b50505050508060200190518101906101ec9190610cdc565b90507f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f1338360405161021f929190610d15565b60405180910390a16102388160200151341460086108f3565b610240610a28565b815181516001600160a01b0390911690526020808301518251820152815133604090910152808201805160009052514391015261027c8161091c565b505050565b61029160056000541460116108f3565b6102ab813515806102a457506001548235145b60126108f3565b6000808055600280546102bd90610c54565b80601f01602080910402602001604051908101604052809291908181526020018280546102e990610c54565b80156103365780601f1061030b57610100808354040283529160200191610336565b820191906000526020600020905b81548152906001019060200180831161031957829003601f168201915b505050505080602001905181019061034e9190610d52565b90507fbe0bd92eb159819dccaaa1e6856aa76f27ada69b01718087d20b434404768fe13383604051610381929190610dd2565b60405180910390a16103953415600f6108f3565b60408101516103b0906001600160a01b0316331460106108f3565b6103b8610a73565b81516001600160a01b0390811682526020808401518184015260408085015190921691830191909152606080840151908301526103fd90368590038501908501610e06565b60808281019182526006600055436001556040805184516001600160a01b0390811660208084019190915280870151838501529286015116606080830191909152850151928101929092529151805160a08301529091015160c082015260e0015b60405160208183030381529060405260029080519060200190610482929190610ac9565b50505050565b60006060600054600280805461049d90610c54565b80601f01602080910402602001604051908101604052809291908181526020018280546104c990610c54565b80156105165780601f106104eb57610100808354040283529160200191610516565b820191906000526020600020905b8154815290600101906020018083116104f957829003601f168201915b50505050509050915091509091565b61053560066000541460166108f3565b61054f8135158061054857506001548235145b60176108f3565b60008080556002805461056190610c54565b80601f016020809104026020016040519081016040528092919081815260200182805461058d90610c54565b80156105da5780601f106105af576101008083540402835291602001916105da565b820191906000526020600020905b8154815290600101906020018083116105bd57829003601f168201915b50505050508060200190518101906105f29190610e38565b905061060a6040518060200160405280600081525090565b7fe999c0be54475180f61a566fb60d21fb556045bc69d60e0804084366d0fdda77338460405161063b929190610eeb565b60405180910390a161064f341560136108f3565b8151610667906001600160a01b0316331460146108f3565b604080516106a991610683916020808801359288019101610f29565b6040516020818303038152906040528051906020012060001c83606001511460156108f3565b6080820151602001516106c0906060850135610f5d565b81526106ca610a28565b825181516001600160a01b03918216905260208085015183519091015260408085015183519216918101919091528251908501351461071e57608083015151825114610717576000610721565b6002610721565b60015b60208083018051929092529051439101526104828161091c565b61074b600460005414600d6108f3565b6107658135158061075e57506001548235145b600e6108f3565b60008080556002805461077790610c54565b80601f01602080910402602001604051908101604052809291908181526020018280546107a390610c54565b80156107f05780601f106107c5576101008083540402835291602001916107f0565b820191906000526020600020905b8154815290600101906020018083116107d357829003601f168201915b50505050508060200190518101906108089190610f75565b6040805133815284356020808301919091528501358183015290519192507f96fec920882ac36be2ad80273a3572d38922662f78edb2ef77dc6748d3fd2cc1919081900360600190a161085d3415600b6108f3565b8051610875906001600160a01b03163314600c6108f3565b604080516080808201835260008083526020808401828152848601838152606080870185815289516001600160a01b03908116808a528b87015186528b8b0151821685528c8701358352600590975543600155895195860196909652925197840197909752519092169481019490945251908301529060a00161045e565b816109185760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b6020810151516109a9576040805160608082018352600080835260208084018281528486018381528751516001600160a01b03908116808852895185015184528951890151821683526004909555436001558751808501959095529151848801525116828401528451808303909301835260809091019093528051919261027c9260029290910190610ac9565b6020810151516001146109c1578051604001516109c5565b8051515b6001600160a01b03166108fc82600001516020015160026109e69190610fe8565b6040518115909202916000818181858888f19350505050158015610a0e573d6000803e3d6000fd5b5060008080556001819055610a2590600290610b4d565b50565b6040805160a08101825260009181018281526060820183905260808201929092529081908152602001610a6e604051806040016040528060008152602001600081525090565b905290565b6040518060a0016040528060006001600160a01b031681526020016000815260200160006001600160a01b0316815260200160008152602001610a6e604051806040016040528060008152602001600081525090565b828054610ad590610c54565b90600052602060002090601f016020900481019282610af75760008555610b3d565b82601f10610b1057805160ff1916838001178555610b3d565b82800160010185558215610b3d579182015b82811115610b3d578251825591602001919060010190610b22565b50610b49929150610b83565b5090565b508054610b5990610c54565b6000825580601f10610b69575050565b601f016020900490600052602060002090810190610a2591905b5b80821115610b495760008155600101610b84565b600060408284031215610baa57600080fd5b50919050565b600060408284031215610bc257600080fd5b610bcc8383610b98565b9392505050565b600060608284031215610baa57600080fd5b82815260006020604081840152835180604085015260005b81811015610c1957858101830151858201606001528201610bfd565b81811115610c2b576000606083870101525b50601f01601f191692909201606001949350505050565b600060808284031215610baa57600080fd5b600181811c90821680610c6857607f821691505b60208210811415610baa57634e487b7160e01b600052602260045260246000fd5b6040805190810167ffffffffffffffff81118282101715610cba57634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b0381168114610cd757600080fd5b919050565b600060408284031215610cee57600080fd5b610cf6610c89565b610cff83610cc0565b8152602083015160208201528091505092915050565b6001600160a01b038316815281356020808301919091526060820190830135801515808214610d4357600080fd5b80604085015250509392505050565b600060808284031215610d6457600080fd5b6040516080810181811067ffffffffffffffff82111715610d9557634e487b7160e01b600052604160045260246000fd5b604052610da183610cc0565b815260208301516020820152610db960408401610cc0565b6040820152606083015160608201528091505092915050565b6001600160a01b03831681528135602080830191909152820135604080830191909152820135606082015260808101610bcc565b600060408284031215610e1857600080fd5b610e20610c89565b82358152602083013560208201528091505092915050565b600081830360c0811215610e4b57600080fd5b60405160a0810181811067ffffffffffffffff82111715610e7c57634e487b7160e01b600052604160045260246000fd5b604052610e8884610cc0565b815260208401516020820152610ea060408501610cc0565b6040820152606084015160608201526040607f1983011215610ec157600080fd5b610ec9610c89565b608085810151825260a090950151602082015293810193909352509092915050565b600060a08201905060018060a01b03841682528235602083015260208301356040830152610bcc606083016040850180358252602090810135910152565b82815260608101610bcc602083018480358252602090810135910152565b634e487b7160e01b600052601160045260246000fd5b60008219821115610f7057610f70610f47565b500190565b600060608284031215610f8757600080fd5b6040516060810181811067ffffffffffffffff82111715610fb857634e487b7160e01b600052604160045260246000fd5b604052610fc483610cc0565b815260208301516020820152610fdc60408401610cc0565b60408201529392505050565b600081600019048311821515161561100257611002610f47565b50029056fea26469706673582212203dc5cc12a470d9e47bf8a336a30a2e819b7161886833239226eba8a540c9383c64736f6c634300080c0033`,
  BytecodeLen: 4841,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:41:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:92:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:55:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:64:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:73:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Player1": Player1,
  "Player2": Player2
  };
export const _APIs = {
  };
