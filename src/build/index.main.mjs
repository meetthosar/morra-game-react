// Automatically generated with Reach 0.1.11 (27cb9643)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (27cb9643)';
export const _backendVersion = 19;

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
      1: [ctc0, ctc1, ctc1, ctc1],
      5: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1],
      7: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc2],
      8: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc2, ctc3]
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
  const ctc5 = stdlib.T_Null;
  
  
  const v201 = stdlib.protect(ctc0, interact.deadline, 'for Player1\'s interact field deadline');
  const v202 = stdlib.protect(ctc0, interact.wager, 'for Player1\'s interact field wager');
  
  const txn1 = await (ctc.sendrecv({
    args: [v202, v201],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:49:11:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [v202, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v206, v207], secs: v209, time: v208, didSend: v31, from: v205 } = txn1;
      
      sim_r.txns.push({
        amt: v206,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v218 = stdlib.safeAdd(v208, v207);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v206, v207], secs: v209, time: v208, didSend: v31, from: v205 } = txn1;
  ;
  const v218 = stdlib.safeAdd(v208, v207);
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: ['time', v218],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v205, v206, v207, v218],
      evt_cnt: 0,
      funcNum: 2,
      lct: v208,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v327, time: v326, didSend: v169, from: v325 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v205,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc4, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v327, time: v326, didSend: v169, from: v325 } = txn3;
    ;
    ;
    stdlib.protect(ctc5, await interact.informTimeout(), {
      at: './index.rsh:37:29:application',
      fs: ['at ./index.rsh:36:9:application call to [unknown function] (defined at: ./index.rsh:36:33:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:35:28:function exp)', 'at ./index.rsh:58:51:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
      msg: 'informTimeout',
      who: 'Player1'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v224, time: v223, didSend: v40, from: v222 } = txn2;
    const v226 = stdlib.safeAdd(v206, v206);
    ;
    let v227 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
    let v228 = v223;
    let v235 = v226;
    
    while (await (async () => {
      const v243 = stdlib.eq(v227, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
      
      return v243;})()) {
      const v250 = stdlib.safeAdd(v228, v207);
      const v254 = stdlib.protect(ctc1, await interact.playHandAndGuess(), {
        at: './index.rsh:68:49:application',
        fs: ['at ./index.rsh:67:17:application call to [unknown function] (defined at: ./index.rsh:67:21:function exp)'],
        msg: 'playHandAndGuess',
        who: 'Player1'
        });
      const v257 = stdlib.protect(ctc0, await interact.random(), {
        at: 'reach standard library:64:31:application',
        fs: ['at ./index.rsh:69:52:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:67:17:application call to [unknown function] (defined at: ./index.rsh:67:21:function exp)'],
        msg: 'random',
        who: 'Player1'
        });
      const v258 = stdlib.digest(ctc2, [v257, v254]);
      
      const txn3 = await (ctc.sendrecv({
        args: [v205, v206, v207, v222, v235, v250, v258],
        evt_cnt: 1,
        funcNum: 4,
        lct: v228,
        onlyIf: true,
        out_tys: [ctc3],
        pay: [stdlib.checkedBigNumberify('./index.rsh:73:13:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn3) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v261], secs: v263, time: v262, didSend: v68, from: v260 } = txn3;
          
          ;
          sim_r.isHalt = false;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: ['time', v250],
        tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc0, ctc3],
        waitIfNotPresent: false
        }));
      if (txn3.didTimeout) {
        const txn4 = await (ctc.sendrecv({
          args: [v205, v206, v207, v222, v235, v250],
          evt_cnt: 0,
          funcNum: 5,
          lct: v228,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn4) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v297, time: v296, didSend: v126, from: v295 } = txn4;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v222,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v297, time: v296, didSend: v126, from: v295 } = txn4;
        ;
        const v298 = stdlib.addressEq(v205, v295);
        const v299 = stdlib.addressEq(v222, v295);
        const v300 = v298 ? true : v299;
        stdlib.assert(v300, {
          at: 'reach standard library:197:11:dot',
          fs: ['at ./index.rsh:74:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'sender correct',
          who: 'Player1'
          });
        ;
        stdlib.protect(ctc5, await interact.informTimeout(), {
          at: './index.rsh:37:29:application',
          fs: ['at ./index.rsh:36:9:application call to [unknown function] (defined at: ./index.rsh:36:33:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:35:28:function exp)', 'at ./index.rsh:74:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'informTimeout',
          who: 'Player1'
          });
        
        return;
        
        }
      else {
        const {data: [v261], secs: v263, time: v262, didSend: v68, from: v260 } = txn3;
        ;
        const v264 = stdlib.addressEq(v205, v260);
        stdlib.assert(v264, {
          at: './index.rsh:73:13:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Player1'
          });
        const txn4 = await (ctc.recv({
          didSend: false,
          evt_cnt: 1,
          funcNum: 6,
          out_tys: [ctc1],
          timeoutAt: undefined /* mto */,
          waitIfNotPresent: false
          }));
        const {data: [v271], secs: v273, time: v272, didSend: v80, from: v270 } = txn4;
        ;
        const v274 = stdlib.addressEq(v222, v270);
        stdlib.assert(v274, {
          at: './index.rsh:83:13:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Player1'
          });
        const txn5 = await (ctc.sendrecv({
          args: [v205, v206, v207, v222, v235, v261, v271, v257, v254],
          evt_cnt: 2,
          funcNum: 7,
          lct: v272,
          onlyIf: true,
          out_tys: [ctc0, ctc1],
          pay: [stdlib.checkedBigNumberify('./index.rsh:91:13:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [v278, v279], secs: v281, time: v280, didSend: v90, from: v277 } = txn5;
            
            ;
            const v285 = v279.hand;
            const v286 = v279.guess;
            const v287 = v271.hand;
            const v288 = v271.guess;
            const v289 = stdlib.safeAdd(v285, v287);
            const v290 = stdlib.eq(v289, v286);
            const v292 = stdlib.eq(v289, v288);
            const v293 = v292 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
            const v294 = v290 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1') : v293;
            const cv227 = v294;
            const cv228 = v280;
            const cv235 = v235;
            
            await (async () => {
              const v227 = cv227;
              const v228 = cv228;
              const v235 = cv235;
              
              if (await (async () => {
                const v243 = stdlib.eq(v227, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
                
                return v243;})()) {
                const v250 = stdlib.safeAdd(v228, v207);
                sim_r.isHalt = false;
                }
              else {
                const v313 = stdlib.eq(v227, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
                const v316 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:102:10:decimal', stdlib.UInt_max, '2'), v206);
                const v318 = v313 ? v205 : v222;
                sim_r.txns.push({
                  kind: 'from',
                  to: v318,
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
          tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc3, ctc1, ctc0, ctc1],
          waitIfNotPresent: false
          }));
        const {data: [v278, v279], secs: v281, time: v280, didSend: v90, from: v277 } = txn5;
        ;
        const v282 = stdlib.addressEq(v205, v277);
        stdlib.assert(v282, {
          at: './index.rsh:91:13:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Player1'
          });
        const v283 = stdlib.digest(ctc2, [v278, v279]);
        const v284 = stdlib.digestEq(v261, v283);
        stdlib.assert(v284, {
          at: 'reach standard library:69:17:application',
          fs: ['at ./index.rsh:92:20:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
          msg: null,
          who: 'Player1'
          });
        const v285 = v279.hand;
        const v286 = v279.guess;
        const v287 = v271.hand;
        const v288 = v271.guess;
        const v289 = stdlib.safeAdd(v285, v287);
        const v290 = stdlib.eq(v289, v286);
        const v292 = stdlib.eq(v289, v288);
        const v293 = v292 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
        const v294 = v290 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1') : v293;
        const cv227 = v294;
        const cv228 = v280;
        const cv235 = v235;
        
        v227 = cv227;
        v228 = cv228;
        v235 = cv235;
        
        continue;
        
        
        
        }
      
      }
    const v313 = stdlib.eq(v227, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
    const v316 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:102:10:decimal', stdlib.UInt_max, '2'), v206);
    const v318 = v313 ? v205 : v222;
    ;
    return;
    }
  
  
  
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
  const {data: [v206, v207], secs: v209, time: v208, didSend: v31, from: v205 } = txn1;
  ;
  const v218 = stdlib.safeAdd(v208, v207);
  stdlib.protect(ctc1, await interact.acceptWager(), {
    at: './index.rsh:54:25:application',
    fs: ['at ./index.rsh:53:15:application call to [unknown function] (defined at: ./index.rsh:53:19:function exp)'],
    msg: 'acceptWager',
    who: 'Player2'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v205, v206, v207, v218],
    evt_cnt: 0,
    funcNum: 1,
    lct: v208,
    onlyIf: true,
    out_tys: [],
    pay: [v206, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v224, time: v223, didSend: v40, from: v222 } = txn2;
      
      const v226 = stdlib.safeAdd(v206, v206);
      sim_r.txns.push({
        amt: v206,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v227 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
      const v228 = v223;
      const v235 = v226;
      
      if (await (async () => {
        const v243 = stdlib.eq(v227, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
        
        return v243;})()) {
        const v250 = stdlib.safeAdd(v228, v207);
        sim_r.isHalt = false;
        }
      else {
        const v313 = stdlib.eq(v227, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
        const v316 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:102:10:decimal', stdlib.UInt_max, '2'), v206);
        const v318 = v313 ? v205 : v222;
        sim_r.txns.push({
          kind: 'from',
          to: v318,
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
    timeoutAt: ['time', v218],
    tys: [ctc5, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v205, v206, v207, v218],
      evt_cnt: 0,
      funcNum: 2,
      lct: v208,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v327, time: v326, didSend: v169, from: v325 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v205,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc5, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v327, time: v326, didSend: v169, from: v325 } = txn3;
    ;
    ;
    stdlib.protect(ctc1, await interact.informTimeout(), {
      at: './index.rsh:37:29:application',
      fs: ['at ./index.rsh:36:9:application call to [unknown function] (defined at: ./index.rsh:36:33:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:35:28:function exp)', 'at ./index.rsh:58:51:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
      msg: 'informTimeout',
      who: 'Player2'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v224, time: v223, didSend: v40, from: v222 } = txn2;
    const v226 = stdlib.safeAdd(v206, v206);
    ;
    let v227 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
    let v228 = v223;
    let v235 = v226;
    
    while (await (async () => {
      const v243 = stdlib.eq(v227, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
      
      return v243;})()) {
      const v250 = stdlib.safeAdd(v228, v207);
      const txn3 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 4,
        out_tys: [ctc2],
        timeoutAt: ['time', v250],
        waitIfNotPresent: false
        }));
      if (txn3.didTimeout) {
        const txn4 = await (ctc.sendrecv({
          args: [v205, v206, v207, v222, v235, v250],
          evt_cnt: 0,
          funcNum: 5,
          lct: v228,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn4) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v297, time: v296, didSend: v126, from: v295 } = txn4;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v222,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc5, ctc0, ctc0, ctc5, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v297, time: v296, didSend: v126, from: v295 } = txn4;
        ;
        const v298 = stdlib.addressEq(v205, v295);
        const v299 = stdlib.addressEq(v222, v295);
        const v300 = v298 ? true : v299;
        stdlib.assert(v300, {
          at: 'reach standard library:197:11:dot',
          fs: ['at ./index.rsh:74:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'sender correct',
          who: 'Player2'
          });
        ;
        stdlib.protect(ctc1, await interact.informTimeout(), {
          at: './index.rsh:37:29:application',
          fs: ['at ./index.rsh:36:9:application call to [unknown function] (defined at: ./index.rsh:36:33:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:35:28:function exp)', 'at ./index.rsh:74:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'informTimeout',
          who: 'Player2'
          });
        
        return;
        
        }
      else {
        const {data: [v261], secs: v263, time: v262, didSend: v68, from: v260 } = txn3;
        ;
        const v264 = stdlib.addressEq(v205, v260);
        stdlib.assert(v264, {
          at: './index.rsh:73:13:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Player2'
          });
        const v267 = stdlib.protect(ctc3, await interact.playHandAndGuess(), {
          at: './index.rsh:80:59:application',
          fs: ['at ./index.rsh:79:17:application call to [unknown function] (defined at: ./index.rsh:79:21:function exp)'],
          msg: 'playHandAndGuess',
          who: 'Player2'
          });
        
        const txn4 = await (ctc.sendrecv({
          args: [v205, v206, v207, v222, v235, v261, v267],
          evt_cnt: 1,
          funcNum: 6,
          lct: v262,
          onlyIf: true,
          out_tys: [ctc3],
          pay: [stdlib.checkedBigNumberify('./index.rsh:83:13:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn4) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [v271], secs: v273, time: v272, didSend: v80, from: v270 } = txn4;
            
            ;
            sim_r.isHalt = false;
            
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: undefined /* mto */,
          tys: [ctc5, ctc0, ctc0, ctc5, ctc0, ctc2, ctc3],
          waitIfNotPresent: false
          }));
        const {data: [v271], secs: v273, time: v272, didSend: v80, from: v270 } = txn4;
        ;
        const v274 = stdlib.addressEq(v222, v270);
        stdlib.assert(v274, {
          at: './index.rsh:83:13:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Player2'
          });
        const txn5 = await (ctc.recv({
          didSend: false,
          evt_cnt: 2,
          funcNum: 7,
          out_tys: [ctc0, ctc3],
          timeoutAt: undefined /* mto */,
          waitIfNotPresent: false
          }));
        const {data: [v278, v279], secs: v281, time: v280, didSend: v90, from: v277 } = txn5;
        ;
        const v282 = stdlib.addressEq(v205, v277);
        stdlib.assert(v282, {
          at: './index.rsh:91:13:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Player2'
          });
        const v283 = stdlib.digest(ctc4, [v278, v279]);
        const v284 = stdlib.digestEq(v261, v283);
        stdlib.assert(v284, {
          at: 'reach standard library:69:17:application',
          fs: ['at ./index.rsh:92:20:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
          msg: null,
          who: 'Player2'
          });
        const v285 = v279.hand;
        const v286 = v279.guess;
        const v287 = v271.hand;
        const v288 = v271.guess;
        const v289 = stdlib.safeAdd(v285, v287);
        const v290 = stdlib.eq(v289, v286);
        const v292 = stdlib.eq(v289, v288);
        const v293 = v292 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
        const v294 = v290 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1') : v293;
        const cv227 = v294;
        const cv228 = v280;
        const cv235 = v235;
        
        v227 = cv227;
        v228 = cv228;
        v235 = cv235;
        
        continue;
        
        
        
        }
      
      }
    const v313 = stdlib.eq(v227, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
    const v316 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:102:10:decimal', stdlib.UInt_max, '2'), v206);
    const v318 = v313 ? v205 : v222;
    ;
    return;
    }
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiALAAEIIAUHKAJQWDAmAwEAAAEBIjUAMRhBA7opZEkiWzUBJFs1AjYaABdJQQAHIjUEIzUGADYaAhc1BDYaAzYaARdJgQQMQAHoSYEGDEABEkkhBQxAAI8hBRJEJDQBEkQ0BEkiEkw0AhIRRChkKmRQSTUDSVcAIDX/V3gQNf5JNQVJIls1/VcIEDX8gAT3Ub6ENP0WUDT8ULA0/zEAEkQ0A1dYIDT9FjT8UAESRDT8JFs0/iRbCDX7NP80AyVbNAMhBls0A1cwICIhBzT7NP4iWxJNIzT7NPwiWxJNMgY0AyEIW0ICPkghBTQBEkQ0BEkiEkw0AhIRRChkSTUDSUpKVwAgNf8lWzX+IQZbNf1XMCA1/CEIWzX7V1ggNfpJNQU1+YAE7dWdEDT5ULA0/DEAEkQ0/zT+FlA0/RZQNPxQNPsWUDT6UDT5UChLAVcAf2cqSwFXfwlnSCQ1ATIGNQJCAj9JIQQMQABRSCEENAESRDQESSISTDQCEhFEKGRJNQNXMCA1/4AEzJmSXLAyBjQDIQlbD0Q0A1cAIDEAEjT/MQASEUSxIrIBNAMhCFuyCCOyEDT/sgezQgHLSCEENAESRDQESSISTDQCEhFEKGRJNQNJSklXACA1/yVbNf4hBls1/VcwIDX8IQhbNftJNQU1+oAEOLAjLTT6ULAyBjQDIQlbDEQ0/zEAEkQ0/zT+FlA0/RZQNPxQNPsWUDT6UChLAVcAeGdIIQU1ATIGNQJCAXBJIwxAAI5JIQcMQABAIQcSRCM0ARJENARJIhJMNAISEUQoZDUDgARBsUBNsDIGNAMhClsPRLEisgE0AyVbsggjshA0A1cAILIHs0IBB0gjNAESRDQESSISTDQCEhFEKGRJNQMlWzX/gASai5F0sDIGNAMhClsMRDT/iAFGNANXACA0/zQDIQZbMQAiMgY0/0kIQgBfSIGgjQaIASYiNAESRDQESSISTDQCEhFESTUFSSJbNf8kWzX+gASs0R/DNP8WUDT+FlCwNP+IAPYyBjT+CDX9MQA0/xZQNP4WUDT9FlAoSwFXADhnSCM1ATIGNQJCAH01/zX+Nf01/DX7Nfo1+TT9IhJBAC80/jT7CDX4NPk0+hZQNPsWUDT8UDT/FlA0+BZQKEsBVwBgZ0ghBDUBMgY1AkIAObEisgEhBzT6C7III7IQNPw0+TT9IxJNsgezQgAAMRkhBBJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKTQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRIEDMTUSRCIxNhJEIjE3EkQiNQEiNQJC/640AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 136,
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
                "name": "v206",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v207",
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
                "name": "v206",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v207",
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
    "name": "_reach_e2",
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
                "name": "v261",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T11",
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
    "name": "_reach_e5",
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
                "internalType": "struct T12",
                "name": "v271",
                "type": "tuple"
              }
            ],
            "internalType": "struct T14",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T15",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e6",
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
                "name": "v278",
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
                "internalType": "struct T12",
                "name": "v279",
                "type": "tuple"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T17",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e7",
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
    "name": "_reach_m2",
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
                "name": "v261",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T11",
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
    "name": "_reach_m5",
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
                "internalType": "struct T12",
                "name": "v271",
                "type": "tuple"
              }
            ],
            "internalType": "struct T14",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T15",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m6",
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
                "name": "v278",
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
                "internalType": "struct T12",
                "name": "v279",
                "type": "tuple"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T17",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m7",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162001932380380620019328339810160408190526200002691620002a9565b6000808055436003556040805160208082018352928152815133815284518185015284840151805182850152909301516060840152905190917fa736757a943474ef5983bb0422ab3a1e64bcd39e99635f4430c7765118231f95919081900360800190a16020820151516200009f90341460076200014a565b620000b9438360200151602001516200017560201b60201c565b81526040805160808082018352600060208084018281528486018381526060808701858152338089528b860180515186525186015184528a5182526001968790554390965588518086019690965292518589015290519084015251828401528451808303909301835260a090910190935280519192620001409260029290910190620001cc565b505050506200036d565b81620001715760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b5050565b60008262000184838262000309565b9150811015620001c65760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b604482015260640162000168565b92915050565b828054620001da9062000330565b90600052602060002090601f016020900481019282620001fe576000855562000249565b82601f106200021957805160ff191683800117855562000249565b8280016001018555821562000249579182015b82811115620002495782518255916020019190600101906200022c565b50620002579291506200025b565b5090565b5b808211156200025757600081556001016200025c565b604080519081016001600160401b0381118282101715620002a357634e487b7160e01b600052604160045260246000fd5b60405290565b60008183036060811215620002bd57600080fd5b620002c762000272565b835181526040601f1983011215620002de57600080fd5b620002e862000272565b60208581015182526040909501518582015293810193909352509092915050565b600082198211156200032b57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806200034557607f821691505b602082108114156200036757634e487b7160e01b600052602260045260246000fd5b50919050565b6115b5806200037d6000396000f3fe6080604052600436106100845760003560e01c80637eea518c116100565780637eea518c146100ea57806383230757146100fd5780638e31476914610112578063a209ad4e14610125578063ab53f2c61461013857005b80631e93b0f11461008d5780632c10a159146100b15780633388fd1d146100c45780633cbee2af146100d757005b3661008b57005b005b34801561009957600080fd5b506003545b6040519081526020015b60405180910390f35b61008b6100bf3660046110a2565b61015b565b61008b6100d23660046110c5565b6102f2565b61008b6100e53660046110d7565b610524565b61008b6100f83660046110a2565b61075a565b34801561010957600080fd5b5060015461009e565b61008b6101203660046110a2565b6108d8565b61008b6101333660046110a2565b610a73565b34801561014457600080fd5b5061014d610c64565b6040516100a89291906110e9565b61016b6001600054146009610d01565b6101858135158061017e57506001548235145b600a610d01565b60008080556002805461019790611146565b80601f01602080910402602001604051908101604052809291908181526020018280546101c390611146565b80156102105780601f106101e557610100808354040283529160200191610210565b820191906000526020600020905b8154815290600101906020018083116101f357829003601f168201915b505050505080602001905181019061022891906111ff565b905061023b81606001514310600b610d01565b7f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f1338360405161026c929190611278565b60405180910390a1610285816020015134146008610d01565b61028d610ef7565b815181516001600160a01b0390911690526020808301805183518301526040808501518451909101528251336060909101528183018051600090525143920191909152516102db9080610d27565b6020820151604001526102ed81610d7a565b505050565b6103026008600054146021610d01565b61031c8135158061031557506001548235145b6022610d01565b60008080556002805461032e90611146565b80601f016020809104026020016040519081016040528092919081815260200182805461035a90611146565b80156103a75780601f1061037c576101008083540402835291602001916103a7565b820191906000526020600020905b81548152906001019060200180831161038a57829003601f168201915b50505050508060200190518101906103bf91906112b5565b90506103d76040518060200160405280600081525090565b7fe4ad09dc2241cfc18929bfffab0a33dc80a8b172838931ba645a6ef23d6e760c3384604051610408929190611351565b60405180910390a161041c3415601e610d01565b8151610434906001600160a01b03163314601f610d01565b604080516104769161045091602080880135928801910161138f565b6040516020818303038152906040528051906020012060001c8360a00151146020610d01565b60c08201516020015161048e90606085013590610d27565b8152610498610ef7565b825181516001600160a01b039182169052602080850151835190910152604080850151835182015260608086015184519316920191909152825190850135146104f65760c0830151518251146104ef5760006104f9565b60026104f9565b60015b6020808301805192909252815143910152608084015190516040015261051e81610d7a565b50505050565b610534600760005414601c610d01565b61054e8135158061054757506001548235145b601d610d01565b60008080556002805461056090611146565b80601f016020809104026020016040519081016040528092919081815260200182805461058c90611146565b80156105d95780601f106105ae576101008083540402835291602001916105d9565b820191906000526020600020905b8154815290600101906020018083116105bc57829003601f168201915b50505050508060200190518101906105f19190611441565b90507f4379e1c9cae4e6429975191435b831d744ce43afea8a1c349f14e042526dae03338360405161062492919061145d565b60405180910390a16106383415601a610d01565b6060810151610653906001600160a01b03163314601b610d01565b61065b610f50565b81516001600160a01b0390811682526020808401518184015260408085015190840152606080850151909216918301919091526080808401519083015260a080840151908301526106b490368590038501908501611491565b60c082015260086000554360015560405161073690829060200160006101008201905060018060a01b038084511683526020840151602084015260408401516040840152806060850151166060840152506080830151608083015260a083015160a083015260c0830151805160c0840152602081015160e08401525092915050565b6040516020818303038152906040526002908051906020019061051e929190610fb4565b61076a600160005414600d610d01565b6107848135158061077d57506001548235145b600e610d01565b60008080556002805461079690611146565b80601f01602080910402602001604051908101604052809291908181526020018280546107c290611146565b801561080f5780601f106107e45761010080835404028352916020019161080f565b820191906000526020600020905b8154815290600101906020018083116107f257829003601f168201915b505050505080602001905181019061082791906111ff565b905061083b8160600151431015600f610d01565b7f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d950338360405161086c929190611278565b60405180910390a16108803415600c610d01565b805160208201516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156108bd573d6000803e3d6000fd5b50600080805560018190556108d490600290611038565b5050565b6108e86005600054146017610d01565b610902813515806108fb57506001548235145b6018610d01565b60008080556002805461091490611146565b80601f016020809104026020016040519081016040528092919081815260200182805461094090611146565b801561098d5780601f106109625761010080835404028352916020019161098d565b820191906000526020600020905b81548152906001019060200180831161097057829003601f168201915b50505050508060200190518101906109a59190611441565b90506109b98160a001514310156019610d01565b7fbe731e9f2a129299a212b8ec3ac324fa99671cd00a5a827cbd3d4fe6d7ad541d33836040516109ea929190611278565b60405180910390a16109fe34156015610d01565b8051610a32906001600160a01b03163314610a285760608201516001600160a01b03163314610a2b565b60015b6016610d01565b80606001516001600160a01b03166108fc82608001519081150290604051600060405180830381858888f193505050501580156108bd573d6000803e3d6000fd5b610a836005600054146012610d01565b610a9d81351580610a9657506001548235145b6013610d01565b600080805560028054610aaf90611146565b80601f0160208091040260200160405190810160405280929190818152602001828054610adb90611146565b8015610b285780601f10610afd57610100808354040283529160200191610b28565b820191906000526020600020905b815481529060010190602001808311610b0b57829003601f168201915b5050505050806020019051810190610b409190611441565b9050610b538160a0015143106014610d01565b6040805133815283356020808301919091528401358183015290517f117ff0fc7909f539043dcba1a015e3c49852b86bcb1c87a6cfa653f771ccbdc09181900360600190a1610ba434156010610d01565b8051610bbc906001600160a01b031633146011610d01565b610c076040518060c0016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b0316815260200160008152602001600081525090565b81516001600160a01b039081168252602080840151818401526040808501518185015260608086015190931692840192909252608080850151908401528481013560a08401526007600055436001559051610736918391016114c3565b600060606000546002808054610c7990611146565b80601f0160208091040260200160405190810160405280929190818152602001828054610ca590611146565b8015610cf25780601f10610cc757610100808354040283529160200191610cf2565b820191906000526020600020905b815481529060010190602001808311610cd557829003601f168201915b50505050509050915091509091565b816108d45760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b600082610d348382611526565b9150811015610d745760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b6044820152606401610d1e565b92915050565b604080516020810190915260008152602082015151610e3557610dad826020015160200151836000015160400151610d27565b81526040805160c0810182526000808252602080830182815283850183815260608086018581526080870186815260a088018781528b51516001600160a01b039081168a528c518801519096528b518a01519094528a5190920151909316909252878301518601519091528551905260059091554360015591519091610736918391016114c3565b602082015151600114610e4d57815160600151610e51565b8151515b6001600160a01b03166108fc610e706002856000015160200151610e98565b6040518115909202916000818181858888f193505050501580156108bd573d6000803e3d6000fd5b6000811580610ebc57508282610eae818361153e565b9250610eba908361155d565b145b610d745760405162461bcd60e51b815260206004820152600c60248201526b6d756c206f766572666c6f7760a01b6044820152606401610d1e565b6040805160c0810182526000918101828152606082018390526080820183905260a08201929092529081908152602001610f4b60405180606001604052806000815260200160008152602001600081525090565b905290565b6040518060e0016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b031681526020016000815260200160008152602001610f4b604051806040016040528060008152602001600081525090565b828054610fc090611146565b90600052602060002090601f016020900481019282610fe25760008555611028565b82601f10610ffb57805160ff1916838001178555611028565b82800160010185558215611028579182015b8281111561102857825182559160200191906001019061100d565b50611034929150611075565b5090565b50805461104490611146565b6000825580601f10611054575050565b601f0160209004906000526020600020908101906110729190611075565b50565b5b808211156110345760008155600101611076565b60006040828403121561109c57600080fd5b50919050565b6000604082840312156110b457600080fd5b6110be838361108a565b9392505050565b60006080828403121561109c57600080fd5b60006060828403121561109c57600080fd5b82815260006020604081840152835180604085015260005b8181101561111d57858101830151858201606001528201611101565b8181111561112f576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c9082168061115a57607f821691505b6020821081141561109c57634e487b7160e01b600052602260045260246000fd5b60405160e0810167ffffffffffffffff811182821017156111ac57634e487b7160e01b600052604160045260246000fd5b60405290565b6040805190810167ffffffffffffffff811182821017156111ac57634e487b7160e01b600052604160045260246000fd5b80516001600160a01b03811681146111fa57600080fd5b919050565b60006080828403121561121157600080fd5b6040516080810181811067ffffffffffffffff8211171561124257634e487b7160e01b600052604160045260246000fd5b60405261124e836111e3565b81526020830151602082015260408301516040820152606083015160608201528091505092915050565b6001600160a01b0383168152813560208083019190915260608201908301358015158082146112a657600080fd5b80604085015250509392505050565b60008183036101008112156112c957600080fd5b6112d161117b565b6112da846111e3565b815260208401516020820152604084015160408201526112fc606085016111e3565b60608201526080840151608082015260a084015160a0820152604060bf198301121561132757600080fd5b61132f6111b2565b60c085810151825260e090950151602082015293810193909352509092915050565b600060a08201905060018060a01b038416825282356020830152602083013560408301526110be606083016040850180358252602090810135910152565b828152606081016110be602083018480358252602090810135910152565b600060c082840312156113bf57600080fd5b60405160c0810181811067ffffffffffffffff821117156113f057634e487b7160e01b600052604160045260246000fd5b6040529050806113ff836111e3565b81526020830151602082015260408301516040820152611421606084016111e3565b60608201526080830151608082015260a083015160a08201525092915050565b600060c0828403121561145357600080fd5b6110be83836113ad565b6001600160a01b038316815281356020808301919091528201356040808301919091528201356060820152608081016110be565b6000604082840312156114a357600080fd5b6114ab6111b2565b82358152602083013560208201528091505092915050565b81516001600160a01b0390811682526020808401519083015260408084015190830152606080840151909116908201526080808301519082015260a0808301519082015260c08101610d74565b634e487b7160e01b600052601160045260246000fd5b6000821982111561153957611539611510565b500190565b600081600019048311821515161561155857611558611510565b500290565b60008261157a57634e487b7160e01b600052601260045260246000fd5b50049056fea26469706673582212205cac79b1aaaa5c2cf24337c1510ba588108ae6d6adf34aee86ee4d130e541efc64736f6c634300080c0033`,
  BytecodeLen: 6450,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:50:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:58:51:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:103:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:65:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:74:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:75:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  8: {
    at: './index.rsh:84:13:after expr stmt semicolon',
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
