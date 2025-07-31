(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/app/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>Home
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__ = __turbopack_context__.i("[project]/node_modules/ethers/lib.esm/ethers.js [app-client] (ecmascript) <export * as ethers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '../../../backend/smart-contract/artifacts/contracts/Lottery.sol/Lottery.json'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
// --- Constants ---
const BNB_CHAIN_ID = '0x61';
const LOTTERY_CONTRACT_ADDRESS = '0xeC6653e23410B139c489721f02eBbA2cCe2D4dAC';
const USDT_CONTRACT_ADDRESS = '0x337610d27c682E347C9cD60BD4b3b107C9d34dDd';
const API_BASE_URL = 'http://localhost:3001';
const usdtABI = [
    "function approve(address spender, uint256 amount) public returns (bool)",
    "function allowance(address owner, address spender) public view returns (uint256)"
];
function Home() {
    var _lotteryStatus_players, _lotteryStatus_players1;
    _s();
    const [account, setAccount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isCorrectNetwork, setIsCorrectNetwork] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isOwner, setIsOwner] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isProcessing, setIsProcessing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [lotteryStatus, setLotteryStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [displayedLogs, setDisplayedLogs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isAnimationRunning, setIsAnimationRunning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hasAnimationRun, setHasAnimationRun] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const prevRoundIdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const logContainerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            if (lotteryStatus && lotteryStatus.id !== prevRoundIdRef.current) {
                setHasAnimationRun(false); // New round, reset animation flag
                // setDisplayedLogs([]); // DO NOT CLEAR LOGS FOR CONTINUITY
                prevRoundIdRef.current = lotteryStatus.id;
            }
        }
    }["Home.useEffect"], [
        lotteryStatus
    ]);
    // --- Utility: Auto-scroll logs ---
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            if (logContainerRef.current) {
                logContainerRef.current.scrollTop = logContainerRef.current.scrollHeight;
            }
        }
    }["Home.useEffect"], [
        displayedLogs
    ]);
    const addFrontendLog = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Home.useCallback[addFrontendLog]": (type, message)=>{
            const newLog = {
                id: Date.now(),
                type,
                message,
                timestamp: new Date().toISOString()
            };
            setDisplayedLogs({
                "Home.useCallback[addFrontendLog]": (prev)=>[
                        ...prev,
                        newLog
                    ]
            }["Home.useCallback[addFrontendLog]"]);
        }
    }["Home.useCallback[addFrontendLog]"], []);
    // --- State & Data Fetching ---
    const fetchStatus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Home.useCallback[fetchStatus]": async ()=>{
            if (isAnimationRunning) return;
            try {
                const response = await fetch("".concat(API_BASE_URL, "/lottery-status"));
                if (!response.ok) throw new Error('Network response was not ok');
                const data = await response.json();
                setLotteryStatus(data);
                // Log management
                setDisplayedLogs({
                    "Home.useCallback[fetchStatus]": (prevLogs)=>{
                        const existingIds = new Set(prevLogs.map({
                            "Home.useCallback[fetchStatus]": (l)=>l.id
                        }["Home.useCallback[fetchStatus]"]));
                        let newLogs = data.logs.filter({
                            "Home.useCallback[fetchStatus].newLogs": (log)=>!existingIds.has(log.id)
                        }["Home.useCallback[fetchStatus].newLogs"]);
                        // While drawing, hide the winner log until the animation is complete
                        if (data.status === 'DRAWING' || isAnimationRunning) {
                            newLogs = newLogs.filter({
                                "Home.useCallback[fetchStatus]": (log)=>log.type !== 'WINNER'
                            }["Home.useCallback[fetchStatus]"]);
                        }
                        return [
                            ...prevLogs,
                            ...newLogs
                        ].sort({
                            "Home.useCallback[fetchStatus]": (a, b)=>a.id - b.id
                        }["Home.useCallback[fetchStatus]"]);
                    }
                }["Home.useCallback[fetchStatus]"]);
            } catch (error) {
                console.error("Failed to fetch lottery status:", error);
                setError('Failed to connect to server.');
            }
        }
    }["Home.useCallback[fetchStatus]"], [
        isAnimationRunning
    ]);
    // --- Web3 Callbacks & Lifecycle ---
    const checkNetwork = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Home.useCallback[checkNetwork]": async ()=>{
            if (window.ethereum) {
                const chainId = await window.ethereum.request({
                    method: 'eth_chainId'
                });
                setIsCorrectNetwork(chainId === BNB_CHAIN_ID);
            }
        }
    }["Home.useCallback[checkNetwork]"], []);
    const checkOwner = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Home.useCallback[checkOwner]": async (currentAccount)=>{
            if (window.ethereum && currentAccount && isCorrectNetwork) {
                const provider = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].BrowserProvider(window.ethereum);
                const contract = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].Contract(LOTTERY_CONTRACT_ADDRESS, lotteryABI.abi, provider);
                const ownerAddress = await contract.owner();
                setIsOwner(ownerAddress.toLowerCase() === currentAccount.toLowerCase());
            } else {
                setIsOwner(false);
            }
        }
    }["Home.useCallback[checkOwner]"], [
        isCorrectNetwork
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            const handleAccountsChanged = {
                "Home.useEffect.handleAccountsChanged": (accounts)=>{
                    const newAccount = accounts.length > 0 ? accounts[0] : null;
                    setAccount(newAccount);
                    if (newAccount) checkOwner(newAccount);
                    else setIsOwner(false);
                }
            }["Home.useEffect.handleAccountsChanged"];
            if (window.ethereum) {
                window.ethereum.on('accountsChanged', handleAccountsChanged);
                window.ethereum.on('chainChanged', checkNetwork);
                ({
                    "Home.useEffect": async ()=>{
                        const accounts = await window.ethereum.request({
                            method: 'eth_accounts'
                        });
                        handleAccountsChanged(accounts);
                        await checkNetwork();
                    }
                })["Home.useEffect"]();
                return ({
                    "Home.useEffect": ()=>{
                        window.ethereum.removeListener('accountsChanged', handleAccountsChanged);
                        window.ethereum.removeListener('chainChanged', checkNetwork);
                    }
                })["Home.useEffect"];
            }
        }
    }["Home.useEffect"], [
        checkNetwork,
        checkOwner
    ]);
    // --- Main Drawing and Polling Logic ---
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            // Condition to start the animation
            if ((lotteryStatus === null || lotteryStatus === void 0 ? void 0 : lotteryStatus.status) === 'DRAWING' && !isAnimationRunning && !hasAnimationRun) {
                setIsAnimationRunning(true);
                setHasAnimationRun(true); // Mark that animation has run for this round
                const runDrawingSequence = {
                    "Home.useEffect.runDrawingSequence": async ()=>{
                        // 1. Countdown
                        addFrontendLog('SYSTEM', 'Draw starting in 3...');
                        await new Promise({
                            "Home.useEffect.runDrawingSequence": (res)=>setTimeout(res, 1000)
                        }["Home.useEffect.runDrawingSequence"]);
                        addFrontendLog('SYSTEM', 'Draw starting in 2...');
                        await new Promise({
                            "Home.useEffect.runDrawingSequence": (res)=>setTimeout(res, 1000)
                        }["Home.useEffect.runDrawingSequence"]);
                        addFrontendLog('SYSTEM', 'Draw starting in 1...');
                        await new Promise({
                            "Home.useEffect.runDrawingSequence": (res)=>setTimeout(res, 1000)
                        }["Home.useEffect.runDrawingSequence"]);
                        // 2. Scrolling Animation
                        const players = lotteryStatus.players_snapshot ? JSON.parse(lotteryStatus.players_snapshot) : [];
                        if (players.length > 0) {
                            const animationDuration = 5000; // 5 seconds of scrolling
                            const startTime = Date.now();
                            const animationInterval = setInterval({
                                "Home.useEffect.runDrawingSequence.animationInterval": ()=>{
                                    if (Date.now() - startTime > animationDuration) {
                                        clearInterval(animationInterval);
                                        addFrontendLog('SYSTEM', 'Verification complete. Announcing winner...');
                                        // Reveal the winner log from the server
                                        const winnerLog = lotteryStatus.logs.find({
                                            "Home.useEffect.runDrawingSequence.animationInterval.winnerLog": (l)=>l.type === 'WINNER'
                                        }["Home.useEffect.runDrawingSequence.animationInterval.winnerLog"]);
                                        if (winnerLog) {
                                            setDisplayedLogs({
                                                "Home.useEffect.runDrawingSequence.animationInterval": (prev)=>[
                                                        ...prev,
                                                        winnerLog
                                                    ]
                                            }["Home.useEffect.runDrawingSequence.animationInterval"]);
                                        } else {
                                            // If for some reason the winner log isn't there, add a placeholder
                                            addFrontendLog('WINNER', "🎉 Congratulations to the winner: ".concat(lotteryStatus.winner));
                                        }
                                        setIsAnimationRunning(false); // End of animation
                                    } else {
                                        const randomIndex = Math.floor(Math.random() * players.length);
                                        addFrontendLog('PROCESS', "Verifying: ".concat(players[randomIndex]));
                                    }
                                }
                            }["Home.useEffect.runDrawingSequence.animationInterval"], 100);
                        } else {
                            addFrontendLog('ERROR', 'No participants in the draw.');
                            setIsAnimationRunning(false);
                        }
                    }
                }["Home.useEffect.runDrawingSequence"];
                runDrawingSequence();
            }
        }
    }["Home.useEffect"], [
        lotteryStatus,
        isAnimationRunning,
        hasAnimationRun,
        addFrontendLog
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            fetchStatus(); // Initial fetch
            const interval = setInterval({
                "Home.useEffect.interval": ()=>{
                    if (!isAnimationRunning) {
                        fetchStatus();
                    }
                }
            }["Home.useEffect.interval"], 3000); // Poll slightly faster to catch state changes
            return ({
                "Home.useEffect": ()=>clearInterval(interval)
            })["Home.useEffect"];
        }
    }["Home.useEffect"], [
        fetchStatus,
        isAnimationRunning
    ]);
    // --- User Actions ---
    const connectWallet = async ()=>{
        if (!window.ethereum) return setError('Please install MetaMask.');
        try {
            const accounts = await window.ethereum.request({
                method: 'eth_requestAccounts'
            });
            setAccount(accounts[0]);
        } catch (error) {
            setError('Failed to connect wallet.');
        }
    };
    const handleParticipate = async ()=>{
        if (!account || !isCorrectNetwork) return;
        setIsProcessing(true);
        setError(null);
        try {
            const provider = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].BrowserProvider(window.ethereum);
            const signer = await provider.getSigner();
            const usdtContract = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].Contract(USDT_CONTRACT_ADDRESS, usdtABI, signer);
            const lotteryContract = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].Contract(LOTTERY_CONTRACT_ADDRESS, lotteryABI.abi, signer);
            const participationFee = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].parseUnits("0.01", 18);
            const allowance = await usdtContract.allowance(account, LOTTERY_CONTRACT_ADDRESS);
            if (allowance < participationFee) {
                const approveTx = await usdtContract.approve(LOTTERY_CONTRACT_ADDRESS, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].MaxUint256);
                await approveTx.wait();
            }
            const participateTx = await lotteryContract.participate();
            await participateTx.wait();
            await fetch("".concat(API_BASE_URL, "/participate"), {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    userAddress: account
                })
            });
            await fetchStatus();
        } catch (error) {
            setError("Participation failed: ".concat(error.reason || error.message));
        } finally{
            setIsProcessing(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-screen bg-gray-900 text-white font-sans",
        children: [
            isProcessing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center z-50",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-16 h-16 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 249,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-4 text-white text-xl font-semibold",
                        children: "Processing Transaction..."
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 250,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 248,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-1/3 border-r border-gray-700 flex flex-col p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-3xl font-bold mb-4",
                        children: "Lotto Game"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 255,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-lg text-yellow-400 mb-4",
                        children: [
                            "Prize Pool: ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-bold",
                                children: parseFloat((lotteryStatus === null || lotteryStatus === void 0 ? void 0 : lotteryStatus.prizePool) || '0').toFixed(4)
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 257,
                                columnNumber: 33
                            }, this),
                            " USDT"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 256,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-4",
                        children: account ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm bg-green-500 rounded px-2 py-1",
                                    children: "".concat(account.substring(0, 6), "...").concat(account.substring(account.length - 4))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 262,
                                    columnNumber: 29
                                }, this),
                                isOwner && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/admin",
                                    className: "text-sm bg-red-600 rounded px-2 py-1",
                                    children: "Admin"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 263,
                                    columnNumber: 41
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/history",
                                    className: "text-sm bg-blue-600 rounded px-2 py-1",
                                    children: "History"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 264,
                                    columnNumber: 30
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 261,
                            columnNumber: 25
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: connectWallet,
                            className: "w-full bg-blue-600 p-2 rounded",
                            children: "Connect Wallet"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 267,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 259,
                        columnNumber: 17
                    }, this),
                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-red-500 text-xs my-2",
                        children: error
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 270,
                        columnNumber: 28
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleParticipate,
                        disabled: isProcessing || (lotteryStatus === null || lotteryStatus === void 0 ? void 0 : lotteryStatus.status) !== 'OPEN' || !account || !isCorrectNetwork,
                        className: "w-full bg-yellow-500 text-black font-bold p-3 rounded disabled:bg-gray-600",
                        children: (lotteryStatus === null || lotteryStatus === void 0 ? void 0 : lotteryStatus.status) === 'OPEN' ? 'Participate (0.01 USDT)' : "Round is ".concat((lotteryStatus === null || lotteryStatus === void 0 ? void 0 : lotteryStatus.status) || 'Loading...')
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 271,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xl font-bold mt-6 mb-2",
                        children: [
                            "Participants (",
                            (lotteryStatus === null || lotteryStatus === void 0 ? void 0 : (_lotteryStatus_players = lotteryStatus.players) === null || _lotteryStatus_players === void 0 ? void 0 : _lotteryStatus_players.length) || 0,
                            ")"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 278,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-gray-800 rounded p-2 flex-grow overflow-y-auto",
                        children: lotteryStatus === null || lotteryStatus === void 0 ? void 0 : (_lotteryStatus_players1 = lotteryStatus.players) === null || _lotteryStatus_players1 === void 0 ? void 0 : _lotteryStatus_players1.map((player, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm truncate font-mono",
                                children: player
                            }, index, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 280,
                                columnNumber: 69
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 279,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 254,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-2/3 flex flex-col h-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: logContainerRef,
                    className: "flex-grow p-4 bg-black font-mono text-sm h-full overflow-y-auto",
                    children: displayedLogs.map((log, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "".concat(log.type === 'WINNER' ? 'text-yellow-400 font-bold text-lg' : log.type === 'ERROR' ? 'text-red-500' : log.type === 'JOIN' ? 'text-blue-400' : log.type === 'PROCESS' ? 'text-green-400' : 'text-gray-400'),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-gray-600 mr-2",
                                    children: new Date(log.timestamp).toLocaleTimeString()
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 295,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: log.message
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 296,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, log.id || i, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 288,
                            columnNumber: 25
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 286,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 285,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 246,
        columnNumber: 9
    }, this);
}
_s(Home, "QRl0YBvobDBokcuTKmsLQvJDq0g=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_app_page_tsx_b025fed5._.js.map