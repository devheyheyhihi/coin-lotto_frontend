(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/components/Header.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const Header = (param)=>{
    let { account, balance, connectWallet } = param;
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const baseButtonStyle = "rounded-[21px] flex-shrink-0 font-bold flex items-center justify-center text-sm w-auto px-4 h-[32px] md:text-base md:h-[34px]";
    const buttonStyle = account ? "".concat(baseButtonStyle, " border border-white bg-gradient-to-r from-[#1AEBA9] to-[#384FC0] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]") : "".concat(baseButtonStyle, " bg-black w-[110px] md:w-[139px]");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "flex items-center justify-between px-4 py-6 md:px-[8.33vw] md:py-[5.5vh]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: "/",
                className: "cursor-pointer",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: "/header_logo.svg",
                    alt: "TetherLuck Logo",
                    width: 135,
                    height: 40,
                    className: "h-auto w-[120px] md:w-[10vw]"
                }, void 0, false, {
                    fileName: "[project]/src/components/Header.tsx",
                    lineNumber: 25,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/Header.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "flex items-center space-x-2 md:space-x-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/how-to-play",
                        className: "text-sm text-white hover:text-gray-300 md:text-base md:hover:text-white",
                        children: "참여 방법"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Header.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    account ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center space-x-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "".concat(baseButtonStyle, " bg-black/50 border border-gray-600"),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        balance.toFixed(2),
                                        " USDT"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Header.tsx",
                                    lineNumber: 41,
                                    columnNumber: 21
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/Header.tsx",
                                lineNumber: 40,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    if (pathname === '/') connectWallet();
                                },
                                className: "".concat(buttonStyle, " min-w-[120px]"),
                                children: pathname.startsWith('/room/') ? "".concat(account.substring(0, 6), "...").concat(account.slice(-4)) : '게임 시작'
                            }, void 0, false, {
                                fileName: "[project]/src/components/Header.tsx",
                                lineNumber: 43,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Header.tsx",
                        lineNumber: 39,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: connectWallet,
                        className: buttonStyle,
                        children: "지갑 연결"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Header.tsx",
                        lineNumber: 51,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Header.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Header.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Header, "xbyQPtUVMO7MNj7WjJlpdWqRcTo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = Header;
const __TURBOPACK__default__export__ = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/WinnerInfoBar.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
const API_BASE_URL = 'http://localhost:3001';
const WinnerInfoBar = ()=>{
    var _winnerData_currentRound;
    _s();
    const [rounds, setRounds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [rooms, setRooms] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [winnerData, setWinnerData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true); // 로딩 상태 추가
    const [currentRoundIndex, setCurrentRoundIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [currentRoomIndex, setCurrentRoomIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WinnerInfoBar.useEffect": ()=>{
            const fetchData = {
                "WinnerInfoBar.useEffect.fetchData": async ()=>{
                    setIsLoading(true); // API 호출 시작 시 로딩 상태로 설정
                    try {
                        const response = await fetch("".concat(API_BASE_URL, "/winner-bar-data"));
                        if (!response.ok) throw new Error('Failed to fetch data');
                        const data = await response.json();
                        // Sort rooms by ticket price ascending
                        const sortedRooms = data.rooms.sort({
                            "WinnerInfoBar.useEffect.fetchData.sortedRooms": (a, b)=>parseFloat(a.ticketPrice) - parseFloat(b.ticketPrice)
                        }["WinnerInfoBar.useEffect.fetchData.sortedRooms"]);
                        setRounds(data.rounds); // Already sorted DESC from backend
                        setRooms(sortedRooms);
                        setWinnerData(data.winnerData);
                    } catch (error) {
                        console.error("Error fetching winner bar data:", error);
                    } finally{
                        setIsLoading(false); // API 호출 완료 시 로딩 상태 해제
                    }
                }
            }["WinnerInfoBar.useEffect.fetchData"];
            fetchData();
        }
    }["WinnerInfoBar.useEffect"], []);
    const handleRoundChange = (direction)=>{
        if (direction === 'prev') {
            setCurrentRoundIndex((prev)=>Math.min(prev + 1, rounds.length - 1));
        } else {
            setCurrentRoundIndex((prev)=>Math.max(prev - 1, 0));
        }
    };
    const handleRoomChange = (direction)=>{
        if (direction === 'prev') {
            setCurrentRoomIndex((prev)=>(prev - 1 + rooms.length) % rooms.length);
        } else {
            setCurrentRoomIndex((prev)=>(prev + 1) % rooms.length);
        }
    };
    const currentRound = rounds[currentRoundIndex];
    const prevRound = rounds[currentRoundIndex + 1];
    const nextRound = rounds[currentRoundIndex - 1];
    const currentRoom = rooms[currentRoomIndex];
    const currentWinnerInfo = currentRound && currentRoom ? (_winnerData_currentRound = winnerData[currentRound]) === null || _winnerData_currentRound === void 0 ? void 0 : _winnerData_currentRound[currentRoom.id] : null;
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto flex w-full h-14 items-center justify-center bg-gray-800 text-gray-500",
            children: "Loading Winner Data..."
        }, void 0, false, {
            fileName: "[project]/src/components/WinnerInfoBar.tsx",
            lineNumber: 79,
            columnNumber: 16
        }, ("TURBOPACK compile-time value", void 0));
    }
    // if (rounds.length === 0) {
    //     return <div className="mx-auto flex w-full h-14 items-center justify-center bg-gray-800 text-gray-500">이전 우승자 기록이 없습니다.</div>;
    // }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mx-auto flex w-full flex-col items-center gap-2 border-t-2 border-[#33B8D7] bg-gradient-to-t from-black/[.72] to-[#1830C9] px-4 py-2 font-['Pretendard'] font-extrabold leading-normal shadow-[inset_0_4px_4px_0_rgba(0,0,0,0.25),0_-5px_4px_0_rgba(0,0,0,0.25)] md:h-14 md:flex-row md:justify-between md:px-[5vw] md:py-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center space-x-2 sm:space-x-4 md:space-x-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>handleRoundChange('next'),
                        className: "text-xl text-[#8CFBFF]",
                        children: "◀"
                    }, void 0, false, {
                        fileName: "[project]/src/components/WinnerInfoBar.tsx",
                        lineNumber: 90,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    nextRound && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "hidden text-sm text-[#AAAAA5] sm:inline",
                        children: [
                            "회차 ",
                            nextRound,
                            "회"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/WinnerInfoBar.tsx",
                        lineNumber: 91,
                        columnNumber: 31
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xl text-[#8CFBFF]",
                        children: [
                            "회차 ",
                            currentRound,
                            "회"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/WinnerInfoBar.tsx",
                        lineNumber: 92,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    prevRound && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "hidden text-sm text-[#AAAAA5] sm:inline",
                        children: [
                            "회차 ",
                            prevRound,
                            "회"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/WinnerInfoBar.tsx",
                        lineNumber: 93,
                        columnNumber: 31
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>handleRoundChange('prev'),
                        className: "text-xl text-[#8CFBFF]",
                        children: "▶"
                    }, void 0, false, {
                        fileName: "[project]/src/components/WinnerInfoBar.tsx",
                        lineNumber: 94,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/WinnerInfoBar.tsx",
                lineNumber: 89,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center justify-center gap-x-4 gap-y-1 md:justify-end md:gap-x-6 lg:gap-x-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center space-x-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>handleRoomChange('prev'),
                                className: "text-xl text-[#8CFBFF]",
                                children: "◀"
                            }, void 0, false, {
                                fileName: "[project]/src/components/WinnerInfoBar.tsx",
                                lineNumber: 100,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-base",
                                children: currentRoom.name
                            }, void 0, false, {
                                fileName: "[project]/src/components/WinnerInfoBar.tsx",
                                lineNumber: 101,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>handleRoomChange('next'),
                                className: "text-xl text-[#8CFBFF]",
                                children: "▶"
                            }, void 0, false, {
                                fileName: "[project]/src/components/WinnerInfoBar.tsx",
                                lineNumber: 102,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/WinnerInfoBar.tsx",
                        lineNumber: 99,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    currentWinnerInfo ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xl text-yellow-400",
                                children: "🏆 Winner"
                            }, void 0, false, {
                                fileName: "[project]/src/components/WinnerInfoBar.tsx",
                                lineNumber: 106,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-base",
                                children: "".concat(currentWinnerInfo.winner.substring(0, 6), "...").concat(currentWinnerInfo.winner.slice(-4))
                            }, void 0, false, {
                                fileName: "[project]/src/components/WinnerInfoBar.tsx",
                                lineNumber: 107,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-base",
                                children: [
                                    parseFloat(currentWinnerInfo.prizePool).toFixed(2),
                                    " USDT"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/WinnerInfoBar.tsx",
                                lineNumber: 108,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-base text-gray-500",
                        children: "No winner for this round/room"
                    }, void 0, false, {
                        fileName: "[project]/src/components/WinnerInfoBar.tsx",
                        lineNumber: 111,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/WinnerInfoBar.tsx",
                lineNumber: 98,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/WinnerInfoBar.tsx",
        lineNumber: 87,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(WinnerInfoBar, "dTLfDnqLyGcf70707F06gHFE8dY=");
_c = WinnerInfoBar;
const __TURBOPACK__default__export__ = WinnerInfoBar;
var _c;
__turbopack_context__.k.register(_c, "WinnerInfoBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/Timer.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
const Timer = (param)=>{
    let { deadline, containerClassName, digitClassName } = param;
    _s();
    const [timeLeft, setTimeLeft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        hours: '--',
        minutes: '--',
        seconds: '--'
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Timer.useEffect": ()=>{
            if (!deadline) {
                setTimeLeft({
                    hours: '--',
                    minutes: '--',
                    seconds: '--'
                });
                return;
            }
            const interval = setInterval({
                "Timer.useEffect.interval": ()=>{
                    const now = new Date();
                    const deadlineTime = new Date(deadline);
                    const diff = deadlineTime.getTime() - now.getTime();
                    if (diff <= 0) {
                        setTimeLeft({
                            hours: '00',
                            minutes: '00',
                            seconds: '00'
                        });
                        clearInterval(interval);
                        return;
                    }
                    const hours = Math.floor(diff / (1000 * 60 * 60));
                    const minutes = Math.floor(diff % (1000 * 60 * 60) / (1000 * 60));
                    const seconds = Math.floor(diff % (1000 * 60) / 1000);
                    setTimeLeft({
                        hours: String(hours).padStart(2, '0'),
                        minutes: String(minutes).padStart(2, '0'),
                        seconds: String(seconds).padStart(2, '0')
                    });
                }
            }["Timer.useEffect.interval"], 1000);
            return ({
                "Timer.useEffect": ()=>clearInterval(interval)
            })["Timer.useEffect"];
        }
    }["Timer.useEffect"], [
        deadline
    ]);
    const totalSecondsLeft = deadline ? (new Date(deadline).getTime() - new Date().getTime()) / 1000 : 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: containerClassName,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "".concat(digitClassName, " ").concat(totalSecondsLeft < 3600 ? 'text-gray-100' : ''),
                children: timeLeft.hours
            }, void 0, false, {
                fileName: "[project]/src/components/Timer.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            ":",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "".concat(digitClassName, " ").concat(totalSecondsLeft < 60 ? 'text-gray-100' : ''),
                children: timeLeft.minutes
            }, void 0, false, {
                fileName: "[project]/src/components/Timer.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            ":",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "".concat(digitClassName, " ").concat(totalSecondsLeft <= 0 ? 'text-gray-100' : ''),
                children: timeLeft.seconds
            }, void 0, false, {
                fileName: "[project]/src/components/Timer.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Timer.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Timer, "QnByC1MNgSbE8qndhdV7VdhBT+E=");
_c = Timer;
const __TURBOPACK__default__export__ = Timer;
var _c;
__turbopack_context__.k.register(_c, "Timer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/EntrySection.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Timer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Timer.tsx [app-client] (ecmascript)");
'use client';
;
;
;
const EntrySection = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = (param, ref)=>{
    let { participationOptions, handleEnterRoom, deadline, globalRoundId } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: "relative text-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto flex h-14 w-full items-center justify-center bg-gradient-to-r from-[#3869A9] to-[#035ED5] shadow-[inset_0_4px_4px_0_rgba(0,0,0,0.25),0_1px_8.5px_0_rgba(0,0,0,0.73)]",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-bold",
                        children: globalRoundId ? "".concat(globalRoundId, "회") : '...'
                    }, void 0, false, {
                        fileName: "[project]/src/components/EntrySection.tsx",
                        lineNumber: 20,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/EntrySection.tsx",
                    lineNumber: 19,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-[linear-gradient(#42529E,#3C509E,#3C509E80,#08369A00)] py-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-['Pretendard'] text-xl font-semibold leading-normal text-white [text-shadow:0_4px_4px_rgba(0,0,0,0.25)]",
                            children: "2025.07.23"
                        }, void 0, false, {
                            fileName: "[project]/src/components/EntrySection.tsx",
                            lineNumber: 23,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Timer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            deadline: deadline,
                            containerClassName: "flex justify-center items-center font-['LABDigital'] text-[64px] font-normal leading-normal text-[#2BF7FF]",
                            digitClassName: "w-20"
                        }, void 0, false, {
                            fileName: "[project]/src/components/EntrySection.tsx",
                            lineNumber: 24,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/EntrySection.tsx",
                    lineNumber: 22,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-6 pb-8 md:px-12 lg:px-24",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4",
                        children: participationOptions.map((option, index)=>{
                            const fromColors = [
                                "from-[#25228A]",
                                "from-[#554671]",
                                "from-[#26475F]",
                                "from-[#491C51]"
                            ];
                            const videos = [
                                "/icon_room_1.webm",
                                "/icon_room_2.webm",
                                "/icon_room_3.webm",
                                "/icon_room_4.webm"
                            ];
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-[25px] bg-gradient-to-b from-white to-[#724444] p-[2px] shadow-[0_4px_6.7px_3px_rgba(0,0,0,0.25)]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-full w-full rounded-[23px] bg-gradient-to-b to-[#1E164F] p-6 shadow-[inset_0_4px_4px_0_rgba(0,0,0,0.25)] ".concat(fromColors[index]),
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-left",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-['Pretendard'] text-2xl font-bold leading-normal text-white [text-shadow:0_4px_4px_rgba(0,0,0,0.25)]",
                                                children: "USDT"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/EntrySection.tsx",
                                                lineNumber: 58,
                                                columnNumber: 25
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mb-4 font-['Pretendard'] text-2xl font-bold leading-normal text-white [text-shadow:0_4px_4px_rgba(0,0,0,0.25)]",
                                                children: option.amount
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/EntrySection.tsx",
                                                lineNumber: 59,
                                                columnNumber: 25
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mx-auto mb-4 flex h-full w-full items-center justify-center rounded-full",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                                    src: videos[index],
                                                    autoPlay: true,
                                                    loop: true,
                                                    muted: true,
                                                    playsInline: true,
                                                    className: "h-auto w-2/3 md:w-full rounded-full object-cover"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/EntrySection.tsx",
                                                    lineNumber: 61,
                                                    columnNumber: 27
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/EntrySection.tsx",
                                                lineNumber: 60,
                                                columnNumber: 25
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>handleEnterRoom(option.id),
                                                className: "mb-2 w-full rounded-lg bg-gradient-to-r from-[#323232] to-black py-2 px-6 font-['Pretendard'] text-base font-semibold leading-normal text-[#FC0] shadow-[inset_0_4px_4px_0_rgba(0,0,0,0.25),0_4px_4px_0_rgba(0,0,0,0.25)]",
                                                children: "참여하기"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/EntrySection.tsx",
                                                lineNumber: 70,
                                                columnNumber: 25
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-center font-['Pretendard'] text-2xl font-normal leading-normal text-[#FFE206]",
                                                children: [
                                                    option.participants,
                                                    " 명"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/EntrySection.tsx",
                                                lineNumber: 76,
                                                columnNumber: 25
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/EntrySection.tsx",
                                        lineNumber: 57,
                                        columnNumber: 23
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/EntrySection.tsx",
                                    lineNumber: 54,
                                    columnNumber: 21
                                }, ("TURBOPACK compile-time value", void 0))
                            }, option.id, false, {
                                fileName: "[project]/src/components/EntrySection.tsx",
                                lineNumber: 50,
                                columnNumber: 19
                            }, ("TURBOPACK compile-time value", void 0));
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/components/EntrySection.tsx",
                        lineNumber: 33,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/EntrySection.tsx",
                    lineNumber: 31,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/EntrySection.tsx",
            lineNumber: 18,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/EntrySection.tsx",
        lineNumber: 17,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = EntrySection;
EntrySection.displayName = "EntrySection";
const __TURBOPACK__default__export__ = EntrySection;
var _c, _c1;
__turbopack_context__.k.register(_c, "EntrySection$forwardRef");
__turbopack_context__.k.register(_c1, "EntrySection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/SideMenu.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
'use client';
;
;
const SideMenu = (param)=>{
    let { onOpenMyPage, onOpenExplain } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed right-4 top-1/2 -translate-y-1/2 w-[80px] h-[200px] flex-shrink-0 rounded-[20px] bg-gradient-to-b from-[#FFF17E] to-[#1BE6FD] p-[1px] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] md:right-[1.67vw] md:w-[6vw] md:h-[28vh]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
            className: "w-full h-full rounded-[19px] bg-gradient-to-b from-[#311A1A] to-[#13399A] flex flex-col items-center justify-center space-y-4 md:space-y-[4vh]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onOpenExplain,
                    className: "flex flex-col items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: "/icon_explain.svg",
                            alt: "Game Explain",
                            width: 48,
                            height: 48,
                            className: "w-8 h-8 md:w-10 md:h-10"
                        }, void 0, false, {
                            fileName: "[project]/src/components/SideMenu.tsx",
                            lineNumber: 14,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xs mt-1",
                            children: "게임설명"
                        }, void 0, false, {
                            fileName: "[project]/src/components/SideMenu.tsx",
                            lineNumber: 15,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/SideMenu.tsx",
                    lineNumber: 13,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onOpenMyPage,
                    className: "flex flex-col items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: "/icon_mypage.svg",
                            alt: "My Page",
                            width: 48,
                            height: 48,
                            className: "w-8 h-8 md:w-10 md:h-10"
                        }, void 0, false, {
                            fileName: "[project]/src/components/SideMenu.tsx",
                            lineNumber: 21,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xs mt-1",
                            children: "마이페이지"
                        }, void 0, false, {
                            fileName: "[project]/src/components/SideMenu.tsx",
                            lineNumber: 22,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/SideMenu.tsx",
                    lineNumber: 17,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/SideMenu.tsx",
            lineNumber: 12,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/SideMenu.tsx",
        lineNumber: 11,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
};
_c = SideMenu;
const __TURBOPACK__default__export__ = SideMenu;
var _c;
__turbopack_context__.k.register(_c, "SideMenu");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/abis/Vault.json (json)": ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("{\"_format\":\"hh-sol-artifact-1\",\"contractName\":\"Vault\",\"sourceName\":\"contracts/Vault.sol\",\"abi\":[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_usdtAddress\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_initialOwner\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"OwnableInvalidOwner\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"OwnableUnauthorizedAccount\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"Deposit\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"previousOwner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"recipient\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"Withdrawal\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"}],\"name\":\"deposit\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getBalance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"renounceOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"usdt\",\"outputs\":[{\"internalType\":\"contract IERC20\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_recipient\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"}],\"name\":\"withdraw\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"bytecode\":\"0x60a06040523480156200001157600080fd5b50604051620011b7380380620011b7833981810160405281019062000037919062000229565b80600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603620000ad5760006040517f1e4fbdf7000000000000000000000000000000000000000000000000000000008152600401620000a4919062000281565b60405180910390fd5b620000be81620000fb60201b60201c565b508173ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff168152505050506200029e565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620001f182620001c4565b9050919050565b6200020381620001e4565b81146200020f57600080fd5b50565b6000815190506200022381620001f8565b92915050565b60008060408385031215620002435762000242620001bf565b5b6000620002538582860162000212565b9250506020620002668582860162000212565b9150509250929050565b6200027b81620001e4565b82525050565b600060208201905062000298600083018462000270565b92915050565b608051610eda620002dd6000396000818161013e015281816101dd01528181610283015281816103660152818161056e015261064f0152610eda6000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c80638da5cb5b1161005b5780638da5cb5b146100c8578063b6b55f25146100e6578063f2fde38b14610102578063f3fef3a31461011e5761007d565b806312065fe0146100825780632f48ab7d146100a0578063715018a6146100be575b600080fd5b61008a61013a565b60405161009791906108ed565b60405180910390f35b6100a86101db565b6040516100b59190610987565b60405180910390f35b6100c66101ff565b005b6100d0610213565b6040516100dd91906109c3565b60405180910390f35b61010060048036038101906100fb9190610a0f565b61023c565b005b61011c60048036038101906101179190610a68565b610499565b005b61013860048036038101906101339190610a95565b61051f565b005b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b815260040161019591906109c3565b602060405180830381865afa1580156101b2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101d69190610aea565b905090565b7f000000000000000000000000000000000000000000000000000000000000000081565b610207610781565b6102116000610808565b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6000811161027f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161027690610b9a565b60405180910390fd5b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663dd62ed3e33306040518363ffffffff1660e01b81526004016102dc929190610bba565b602060405180830381865afa1580156102f9573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061031d9190610aea565b905081811015610362576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161035990610c2f565b60405180910390fd5b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166323b872dd3330866040518463ffffffff1660e01b81526004016103c193929190610c4f565b6020604051808303816000875af11580156103e0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104049190610cbe565b905080610446576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161043d90610d37565b60405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff167fe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c8460405161048c91906108ed565b60405180910390a2505050565b6104a1610781565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036105135760006040517f1e4fbdf700000000000000000000000000000000000000000000000000000000815260040161050a91906109c3565b60405180910390fd5b61051c81610808565b50565b610527610781565b6000811161056a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161056190610dc9565b60405180910390fd5b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016105c591906109c3565b602060405180830381865afa1580156105e2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106069190610aea565b90508181101561064b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161064290610e5b565b60405180910390fd5b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663a9059cbb85856040518363ffffffff1660e01b81526004016106a8929190610e7b565b6020604051808303816000875af11580156106c7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106eb9190610cbe565b90508061072d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161072490610d37565b60405180910390fd5b8373ffffffffffffffffffffffffffffffffffffffff167f7fcf532c15f0a6db0bd6d0e038bea71d30d808c7d98cb3bf7268a95bf5081b658460405161077391906108ed565b60405180910390a250505050565b6107896108cc565b73ffffffffffffffffffffffffffffffffffffffff166107a7610213565b73ffffffffffffffffffffffffffffffffffffffff1614610806576107ca6108cc565b6040517f118cdaa70000000000000000000000000000000000000000000000000000000081526004016107fd91906109c3565b60405180910390fd5b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600033905090565b6000819050919050565b6108e7816108d4565b82525050565b600060208201905061090260008301846108de565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600061094d61094861094384610908565b610928565b610908565b9050919050565b600061095f82610932565b9050919050565b600061097182610954565b9050919050565b61098181610966565b82525050565b600060208201905061099c6000830184610978565b92915050565b60006109ad82610908565b9050919050565b6109bd816109a2565b82525050565b60006020820190506109d860008301846109b4565b92915050565b600080fd5b6109ec816108d4565b81146109f757600080fd5b50565b600081359050610a09816109e3565b92915050565b600060208284031215610a2557610a246109de565b5b6000610a33848285016109fa565b91505092915050565b610a45816109a2565b8114610a5057600080fd5b50565b600081359050610a6281610a3c565b92915050565b600060208284031215610a7e57610a7d6109de565b5b6000610a8c84828501610a53565b91505092915050565b60008060408385031215610aac57610aab6109de565b5b6000610aba85828601610a53565b9250506020610acb858286016109fa565b9150509250929050565b600081519050610ae4816109e3565b92915050565b600060208284031215610b0057610aff6109de565b5b6000610b0e84828501610ad5565b91505092915050565b600082825260208201905092915050565b7f5661756c743a204465706f73697420616d6f756e74206d75737420626520677260008201527f6561746572207468616e207a65726f0000000000000000000000000000000000602082015250565b6000610b84602f83610b17565b9150610b8f82610b28565b604082019050919050565b60006020820190508181036000830152610bb381610b77565b9050919050565b6000604082019050610bcf60008301856109b4565b610bdc60208301846109b4565b9392505050565b7f5661756c743a20436865636b2074686520746f6b656e20616c6c6f77616e6365600082015250565b6000610c19602083610b17565b9150610c2482610be3565b602082019050919050565b60006020820190508181036000830152610c4881610c0c565b9050919050565b6000606082019050610c6460008301866109b4565b610c7160208301856109b4565b610c7e60408301846108de565b949350505050565b60008115159050919050565b610c9b81610c86565b8114610ca657600080fd5b50565b600081519050610cb881610c92565b92915050565b600060208284031215610cd457610cd36109de565b5b6000610ce284828501610ca9565b91505092915050565b7f5661756c743a2055534454207472616e73666572206661696c65640000000000600082015250565b6000610d21601b83610b17565b9150610d2c82610ceb565b602082019050919050565b60006020820190508181036000830152610d5081610d14565b9050919050565b7f5661756c743a20576974686472617720616d6f756e74206d757374206265206760008201527f726561746572207468616e207a65726f00000000000000000000000000000000602082015250565b6000610db3603083610b17565b9150610dbe82610d57565b604082019050919050565b60006020820190508181036000830152610de281610da6565b9050919050565b7f5661756c743a20496e73756666696369656e742062616c616e636520696e207460008201527f6865207661756c74000000000000000000000000000000000000000000000000602082015250565b6000610e45602883610b17565b9150610e5082610de9565b604082019050919050565b60006020820190508181036000830152610e7481610e38565b9050919050565b6000604082019050610e9060008301856109b4565b610e9d60208301846108de565b939250505056fea2646970667358221220ed1d731bd41d81d3efa159a5fc1ba95a15f1ce51bbe57ceaf515759a5e59a14f64736f6c63430008180033\",\"deployedBytecode\":\"0x608060405234801561001057600080fd5b506004361061007d5760003560e01c80638da5cb5b1161005b5780638da5cb5b146100c8578063b6b55f25146100e6578063f2fde38b14610102578063f3fef3a31461011e5761007d565b806312065fe0146100825780632f48ab7d146100a0578063715018a6146100be575b600080fd5b61008a61013a565b60405161009791906108ed565b60405180910390f35b6100a86101db565b6040516100b59190610987565b60405180910390f35b6100c66101ff565b005b6100d0610213565b6040516100dd91906109c3565b60405180910390f35b61010060048036038101906100fb9190610a0f565b61023c565b005b61011c60048036038101906101179190610a68565b610499565b005b61013860048036038101906101339190610a95565b61051f565b005b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b815260040161019591906109c3565b602060405180830381865afa1580156101b2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101d69190610aea565b905090565b7f000000000000000000000000000000000000000000000000000000000000000081565b610207610781565b6102116000610808565b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6000811161027f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161027690610b9a565b60405180910390fd5b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663dd62ed3e33306040518363ffffffff1660e01b81526004016102dc929190610bba565b602060405180830381865afa1580156102f9573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061031d9190610aea565b905081811015610362576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161035990610c2f565b60405180910390fd5b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166323b872dd3330866040518463ffffffff1660e01b81526004016103c193929190610c4f565b6020604051808303816000875af11580156103e0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104049190610cbe565b905080610446576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161043d90610d37565b60405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff167fe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c8460405161048c91906108ed565b60405180910390a2505050565b6104a1610781565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036105135760006040517f1e4fbdf700000000000000000000000000000000000000000000000000000000815260040161050a91906109c3565b60405180910390fd5b61051c81610808565b50565b610527610781565b6000811161056a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161056190610dc9565b60405180910390fd5b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016105c591906109c3565b602060405180830381865afa1580156105e2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106069190610aea565b90508181101561064b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161064290610e5b565b60405180910390fd5b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663a9059cbb85856040518363ffffffff1660e01b81526004016106a8929190610e7b565b6020604051808303816000875af11580156106c7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106eb9190610cbe565b90508061072d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161072490610d37565b60405180910390fd5b8373ffffffffffffffffffffffffffffffffffffffff167f7fcf532c15f0a6db0bd6d0e038bea71d30d808c7d98cb3bf7268a95bf5081b658460405161077391906108ed565b60405180910390a250505050565b6107896108cc565b73ffffffffffffffffffffffffffffffffffffffff166107a7610213565b73ffffffffffffffffffffffffffffffffffffffff1614610806576107ca6108cc565b6040517f118cdaa70000000000000000000000000000000000000000000000000000000081526004016107fd91906109c3565b60405180910390fd5b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600033905090565b6000819050919050565b6108e7816108d4565b82525050565b600060208201905061090260008301846108de565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600061094d61094861094384610908565b610928565b610908565b9050919050565b600061095f82610932565b9050919050565b600061097182610954565b9050919050565b61098181610966565b82525050565b600060208201905061099c6000830184610978565b92915050565b60006109ad82610908565b9050919050565b6109bd816109a2565b82525050565b60006020820190506109d860008301846109b4565b92915050565b600080fd5b6109ec816108d4565b81146109f757600080fd5b50565b600081359050610a09816109e3565b92915050565b600060208284031215610a2557610a246109de565b5b6000610a33848285016109fa565b91505092915050565b610a45816109a2565b8114610a5057600080fd5b50565b600081359050610a6281610a3c565b92915050565b600060208284031215610a7e57610a7d6109de565b5b6000610a8c84828501610a53565b91505092915050565b60008060408385031215610aac57610aab6109de565b5b6000610aba85828601610a53565b9250506020610acb858286016109fa565b9150509250929050565b600081519050610ae4816109e3565b92915050565b600060208284031215610b0057610aff6109de565b5b6000610b0e84828501610ad5565b91505092915050565b600082825260208201905092915050565b7f5661756c743a204465706f73697420616d6f756e74206d75737420626520677260008201527f6561746572207468616e207a65726f0000000000000000000000000000000000602082015250565b6000610b84602f83610b17565b9150610b8f82610b28565b604082019050919050565b60006020820190508181036000830152610bb381610b77565b9050919050565b6000604082019050610bcf60008301856109b4565b610bdc60208301846109b4565b9392505050565b7f5661756c743a20436865636b2074686520746f6b656e20616c6c6f77616e6365600082015250565b6000610c19602083610b17565b9150610c2482610be3565b602082019050919050565b60006020820190508181036000830152610c4881610c0c565b9050919050565b6000606082019050610c6460008301866109b4565b610c7160208301856109b4565b610c7e60408301846108de565b949350505050565b60008115159050919050565b610c9b81610c86565b8114610ca657600080fd5b50565b600081519050610cb881610c92565b92915050565b600060208284031215610cd457610cd36109de565b5b6000610ce284828501610ca9565b91505092915050565b7f5661756c743a2055534454207472616e73666572206661696c65640000000000600082015250565b6000610d21601b83610b17565b9150610d2c82610ceb565b602082019050919050565b60006020820190508181036000830152610d5081610d14565b9050919050565b7f5661756c743a20576974686472617720616d6f756e74206d757374206265206760008201527f726561746572207468616e207a65726f00000000000000000000000000000000602082015250565b6000610db3603083610b17565b9150610dbe82610d57565b604082019050919050565b60006020820190508181036000830152610de281610da6565b9050919050565b7f5661756c743a20496e73756666696369656e742062616c616e636520696e207460008201527f6865207661756c74000000000000000000000000000000000000000000000000602082015250565b6000610e45602883610b17565b9150610e5082610de9565b604082019050919050565b60006020820190508181036000830152610e7481610e38565b9050919050565b6000604082019050610e9060008301856109b4565b610e9d60208301846108de565b939250505056fea2646970667358221220ed1d731bd41d81d3efa159a5fc1ba95a15f1ce51bbe57ceaf515759a5e59a14f64736f6c63430008180033\",\"linkReferences\":{},\"deployedLinkReferences\":{}}"));}),
"[project]/src/components/MyPageModal.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__ = __turbopack_context__.i("[project]/node_modules/ethers/lib.esm/ethers.js [app-client] (ecmascript) <export * as ethers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$abis$2f$Vault$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/abis/Vault.json (json)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const API_BASE_URL = 'http://localhost:3001'; // This might need configuration
const VAULT_CONTRACT_ADDRESS = "0x43aFfaE1C51B04e772E69EfDd0453B0dC89EC3E6";
const USDT_CONTRACT_ADDRESS = "0x337610d27c682E347C9cD60BD4b3b107C9d34dDd";
// ABIs would ideally be managed better, e.g., loading from JSON files.
const vaultABI = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$abis$2f$Vault$2e$json__$28$json$29$__["default"].abi;
const usdtABI = [
    "function approve(address spender, uint256 amount) public returns (bool)",
    "function allowance(address owner, address spender) public view returns (uint256)"
];
// --- MyPage Modal Component ---
const MyPageModal = (param)=>{
    let { account, onClose, balance, onBalanceUpdate } = param;
    _s();
    const [activeMainTab, setActiveMainTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('history'); // 'history' or 'wallet'
    // --- History Tab States ---
    const [allHistory, setAllHistory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [rooms, setRooms] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [activeRoomId, setActiveRoomId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [isLoadingHistory, setIsLoadingHistory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [historyError, setHistoryError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // --- Wallet Tab States ---
    const [isLoadingBalance, setIsLoadingBalance] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false); // 초기 로딩은 부모가 하므로 false
    const [activeWalletTab, setActiveWalletTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('deposit'); // 'deposit', 'withdraw', 'transactions'
    const [transactions, setTransactions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoadingTransactions, setIsLoadingTransactions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [amount, setAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(''); // For deposit/withdraw input
    const [isProcessing, setIsProcessing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false); // For transaction processing state
    const [walletError, setWalletError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Fetch user transaction history
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MyPageModal.useEffect": ()=>{
            if (account && activeWalletTab === 'transactions') {
                const fetchTransactions = {
                    "MyPageModal.useEffect.fetchTransactions": async ()=>{
                        setIsLoadingTransactions(true);
                        // Assume a new endpoint /transactions/:address exists
                        // const res = await fetch(`${API_BASE_URL}/transactions/${account}`);
                        // const data = await res.json();
                        // setTransactions(data.transactions || []);
                        setIsLoadingTransactions(false);
                    }
                }["MyPageModal.useEffect.fetchTransactions"];
            // fetchTransactions();
            }
        }
    }["MyPageModal.useEffect"], [
        account,
        activeWalletTab
    ]);
    // Fetch game history
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MyPageModal.useEffect": ()=>{
            if (!account || activeMainTab !== 'history') return;
            const fetchHistoryAndRooms = {
                "MyPageModal.useEffect.fetchHistoryAndRooms": async ()=>{
                    setIsLoadingHistory(true);
                    setHistoryError(null);
                    try {
                        const [historyRes, roomsRes] = await Promise.all([
                            fetch("".concat(API_BASE_URL, "/user-history/").concat(account)),
                            fetch("".concat(API_BASE_URL, "/rooms"))
                        ]);
                        if (!historyRes.ok) throw new Error('Failed to fetch history.');
                        if (!roomsRes.ok) throw new Error('Failed to fetch rooms.');
                        const historyData = await historyRes.json();
                        const roomsData = await roomsRes.json();
                        setAllHistory(historyData.history || []);
                        setRooms(roomsData || []);
                        if (roomsData.length > 0 && !activeRoomId) {
                            setActiveRoomId(roomsData[0].id);
                        }
                    } catch (err) {
                        setHistoryError(err.message);
                    } finally{
                        setIsLoadingHistory(false);
                    }
                }
            }["MyPageModal.useEffect.fetchHistoryAndRooms"];
            fetchHistoryAndRooms();
        }
    }["MyPageModal.useEffect"], [
        account,
        activeMainTab
    ]);
    const handleDeposit = async ()=>{
        if (!amount || parseFloat(amount) <= 0) {
            setWalletError("Please enter a valid amount.");
            return;
        }
        if (!window.ethereum) {
            setWalletError("MetaMask is not installed.");
            return;
        }
        setIsProcessing(true);
        setWalletError(null);
        try {
            const provider = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].BrowserProvider(window.ethereum);
            const signer = await provider.getSigner();
            const usdtContract = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].Contract(USDT_CONTRACT_ADDRESS, usdtABI, signer);
            const vaultContract = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].Contract(VAULT_CONTRACT_ADDRESS, vaultABI, signer);
            const amountToDeposit = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].parseUnits(amount, 18); // Assuming USDT has 18 decimals
            // 1. Approve
            const approveTx = await usdtContract.approve(VAULT_CONTRACT_ADDRESS, amountToDeposit);
            await approveTx.wait();
            // 2. Deposit
            const depositTx = await vaultContract.deposit(amountToDeposit);
            await depositTx.wait();
            alert("Deposit successful!");
            setAmount('');
            // Refresh balance after a short delay to allow backend to process event
            setTimeout(async ()=>{
                try {
                    const res = await fetch("".concat(API_BASE_URL, "/balance/").concat(account));
                    const data = await res.json();
                    onBalanceUpdate(data.balance); // 부모의 상태를 업데이트
                } catch (err) {
                    console.error("Failed to refetch balance:", err);
                }
            }, 3000);
        } catch (err) {
            setWalletError(err.reason || "An error occurred during deposit.");
        } finally{
            setIsProcessing(false);
        }
    };
    const handleWithdrawRequest = async ()=>{
        if (!amount || parseFloat(amount) <= 0) {
            setWalletError("Please enter a valid amount.");
            return;
        }
        if (parseFloat(amount) > balance) {
            setWalletError("Withdrawal amount cannot exceed your balance.");
            return;
        }
        setIsProcessing(true);
        setWalletError(null);
        try {
            const res = await fetch("".concat(API_BASE_URL, "/withdrawals/request"), {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    userAddress: account,
                    amount: parseFloat(amount)
                })
            });
            const data = await res.json();
            if (!res.ok) {
                throw new Error(data.message || "Failed to submit withdrawal request.");
            }
            alert("Withdrawal request submitted successfully!");
            onBalanceUpdate(data.newBalance); // 부모의 상태를 업데이트
            setAmount('');
        } catch (err) {
            setWalletError(err.message);
        } finally{
            setIsProcessing(false);
        }
    };
    const filteredHistory = allHistory.filter((item)=>{
        const activeRoom = rooms.find((r)=>r.id === activeRoomId);
        return activeRoom ? item.roomName.includes(activeRoom.name) : false;
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-[#FFFFFF80] flex justify-center items-center z-50",
        onClick: onClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-[linear-gradient(#000000,#1A255D)] rounded-3xl w-full max-w-2xl text-left shadow-xl flex flex-col",
            onClick: (e)=>e.stopPropagation(),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-t-3xl flex justify-center items-center p-4 border-b border-gray-700 bg-gradient-to-r from-[#143892] to-[#0E369D] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-['Pretendard'] text-base font-bold leading-normal text-white",
                        children: "마이페이지"
                    }, void 0, false, {
                        fileName: "[project]/src/components/MyPageModal.tsx",
                        lineNumber: 210,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/MyPageModal.tsx",
                    lineNumber: 209,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between items-center p-4 border-gray-700",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setActiveMainTab('history'),
                                className: "text-xl font-semibold pb-2 ".concat(activeMainTab === 'history' ? 'text-white border-b-2 border-white' : 'text-gray-500 hover:text-white'),
                                children: "History"
                            }, void 0, false, {
                                fileName: "[project]/src/components/MyPageModal.tsx",
                                lineNumber: 214,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setActiveMainTab('wallet'),
                                className: "text-xl font-semibold pb-2 ".concat(activeMainTab === 'wallet' ? 'text-white border-b-2 border-white' : 'text-gray-500 hover:text-white'),
                                children: "Wallet"
                            }, void 0, false, {
                                fileName: "[project]/src/components/MyPageModal.tsx",
                                lineNumber: 217,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/MyPageModal.tsx",
                        lineNumber: 213,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/MyPageModal.tsx",
                    lineNumber: 212,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6 h-[500px] overflow-y-auto",
                    children: [
                        activeMainTab === 'history' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex border-b border-gray-600 mb-4",
                                    children: rooms.map((room)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setActiveRoomId(room.id),
                                            className: "py-2 px-4 font-semibold transition-colors duration-200 ".concat(activeRoomId === room.id ? 'border-b-2 border-yellow-400 text-yellow-400' : 'text-gray-400 hover:text-white'),
                                            children: room.name
                                        }, room.id, false, {
                                            fileName: "[project]/src/components/MyPageModal.tsx",
                                            lineNumber: 230,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/MyPageModal.tsx",
                                    lineNumber: 228,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                isLoadingHistory ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-8 h-8 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin mx-auto my-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/MyPageModal.tsx",
                                    lineNumber: 239,
                                    columnNumber: 49
                                }, ("TURBOPACK compile-time value", void 0)) : historyError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-red-500 text-center",
                                    children: historyError
                                }, void 0, false, {
                                    fileName: "[project]/src/components/MyPageModal.tsx",
                                    lineNumber: 240,
                                    columnNumber: 46
                                }, ("TURBOPACK compile-time value", void 0)) : filteredHistory.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-3 pr-2",
                                    children: filteredHistory.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "p-4 rounded-md flex justify-between items-center ".concat(item.wasWinner ? 'bg-yellow-500 text-black' : 'bg-gray-700'),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "bg-black text-white text-center font-bold rounded-md px-3 py-2",
                                                            children: [
                                                                "Round #",
                                                                item.roundNumber
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/MyPageModal.tsx",
                                                            lineNumber: 246,
                                                            columnNumber: 49
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "font-semibold",
                                                                    children: [
                                                                        "Winning # ",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-lg",
                                                                            children: item.roundNumber
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/MyPageModal.tsx",
                                                                            lineNumber: 248,
                                                                            columnNumber: 92
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/MyPageModal.tsx",
                                                                    lineNumber: 248,
                                                                    columnNumber: 53
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                " "
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/MyPageModal.tsx",
                                                            lineNumber: 247,
                                                            columnNumber: 49
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "font-semibold",
                                                                    children: [
                                                                        "My # ",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-lg",
                                                                            children: item.roundNumber
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/MyPageModal.tsx",
                                                                            lineNumber: 251,
                                                                            columnNumber: 87
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/MyPageModal.tsx",
                                                                    lineNumber: 251,
                                                                    columnNumber: 53
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                " "
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/MyPageModal.tsx",
                                                            lineNumber: 250,
                                                            columnNumber: 49
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/MyPageModal.tsx",
                                                    lineNumber: 245,
                                                    columnNumber: 45
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-2xl font-bold",
                                                    children: item.wasWinner ? 'WIN' : 'LOSE'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/MyPageModal.tsx",
                                                    lineNumber: 254,
                                                    columnNumber: 45
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, index, true, {
                                            fileName: "[project]/src/components/MyPageModal.tsx",
                                            lineNumber: 244,
                                            columnNumber: 41
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/MyPageModal.tsx",
                                    lineNumber: 242,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-500 text-center py-4",
                                    children: "No participation history for this room."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/MyPageModal.tsx",
                                    lineNumber: 258,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/MyPageModal.tsx",
                            lineNumber: 227,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        activeMainTab === 'wallet' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-lg text-gray-400 mb-2",
                                            children: "My Balance"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/MyPageModal.tsx",
                                            lineNumber: 265,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        isLoadingBalance ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-10 bg-gray-700 rounded-md animate-pulse"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/MyPageModal.tsx",
                                            lineNumber: 267,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-4xl font-bold text-yellow-400",
                                            children: [
                                                balance.toFixed(4),
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-2xl text-gray-300",
                                                    children: "USDT"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/MyPageModal.tsx",
                                                    lineNumber: 269,
                                                    columnNumber: 108
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/MyPageModal.tsx",
                                            lineNumber: 269,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/MyPageModal.tsx",
                                    lineNumber: 264,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex border-b border-gray-600 mb-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setActiveWalletTab('deposit'),
                                            className: "py-2 px-4 font-semibold transition-colors duration-200 ".concat(activeWalletTab === 'deposit' ? 'border-b-2 border-yellow-400 text-yellow-400' : 'text-gray-400 hover:text-white'),
                                            children: "Deposit"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/MyPageModal.tsx",
                                            lineNumber: 275,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setActiveWalletTab('withdraw'),
                                            className: "py-2 px-4 font-semibold transition-colors duration-200 ".concat(activeWalletTab === 'withdraw' ? 'border-b-2 border-yellow-400 text-yellow-400' : 'text-gray-400 hover:text-white'),
                                            children: "Withdraw"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/MyPageModal.tsx",
                                            lineNumber: 278,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setActiveWalletTab('transactions'),
                                            className: "py-2 px-4 font-semibold transition-colors duration-200 ".concat(activeWalletTab === 'transactions' ? 'border-b-2 border-yellow-400 text-yellow-400' : 'text-gray-400 hover:text-white'),
                                            children: "Transactions"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/MyPageModal.tsx",
                                            lineNumber: 281,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/MyPageModal.tsx",
                                    lineNumber: 274,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                walletError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-red-500 text-center mb-4",
                                    children: walletError
                                }, void 0, false, {
                                    fileName: "[project]/src/components/MyPageModal.tsx",
                                    lineNumber: 286,
                                    columnNumber: 45
                                }, ("TURBOPACK compile-time value", void 0)),
                                activeWalletTab === 'deposit' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-300",
                                            children: "Enter the amount of USDT to deposit from your wallet."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/MyPageModal.tsx",
                                            lineNumber: 291,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "number",
                                            value: amount,
                                            onChange: (e)=>setAmount(e.target.value),
                                            placeholder: "0.00",
                                            className: "w-full bg-gray-800 text-white p-3 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/MyPageModal.tsx",
                                            lineNumber: 292,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: handleDeposit,
                                            disabled: isProcessing,
                                            className: "w-full bg-yellow-500 text-black font-bold py-3 rounded-md hover:bg-yellow-400 disabled:bg-gray-500",
                                            children: isProcessing ? 'Processing...' : 'Deposit USDT'
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/MyPageModal.tsx",
                                            lineNumber: 293,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/MyPageModal.tsx",
                                    lineNumber: 290,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0)),
                                activeWalletTab === 'withdraw' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-300",
                                            children: "Enter the amount to withdraw to your wallet."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/MyPageModal.tsx",
                                            lineNumber: 302,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "number",
                                            value: amount,
                                            onChange: (e)=>setAmount(e.target.value),
                                            placeholder: "0.00",
                                            className: "w-full bg-gray-800 text-white p-3 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/MyPageModal.tsx",
                                            lineNumber: 303,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: handleWithdrawRequest,
                                            disabled: isProcessing,
                                            className: "w-full bg-yellow-500 text-black font-bold py-3 rounded-md hover:bg-yellow-400 disabled:bg-gray-500",
                                            children: isProcessing ? 'Processing...' : 'Request Withdraw'
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/MyPageModal.tsx",
                                            lineNumber: 304,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/MyPageModal.tsx",
                                    lineNumber: 301,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0)),
                                activeWalletTab === 'transactions' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: isLoadingTransactions ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "Loading transactions..."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/MyPageModal.tsx",
                                        lineNumber: 313,
                                        columnNumber: 62
                                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "Transaction history will be shown here."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/MyPageModal.tsx",
                                        lineNumber: 313,
                                        columnNumber: 95
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/MyPageModal.tsx",
                                    lineNumber: 312,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/MyPageModal.tsx",
                            lineNumber: 262,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/MyPageModal.tsx",
                    lineNumber: 225,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/MyPageModal.tsx",
            lineNumber: 207,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/MyPageModal.tsx",
        lineNumber: 206,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(MyPageModal, "lahxiFA1lLUBOO32fZHax0lm0Mw=");
_c = MyPageModal;
const __TURBOPACK__default__export__ = MyPageModal;
var _c;
__turbopack_context__.k.register(_c, "MyPageModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/GameExplainModal.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>GameExplainModal
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const steps = [
    {
        id: 1,
        title: 'USDT(BEP-20) 지갑을 연동하세요.',
        image: '/img_rule_1.svg'
    },
    {
        id: 2,
        title: '서비스를 이용하기 위한 포인트를 충전합니다.',
        image: '/img_rule_2.svg'
    },
    {
        id: 3,
        title: '원하는 방에 참가하여 티켓을 구매합니다.',
        image: '/img_rule_3.svg'
    },
    {
        id: 4,
        title: '매 10분마다 진행되는 추첨을 기다립니다.',
        image: '/img_rule_4.svg'
    },
    {
        id: 5,
        title: '당첨 시 포인트가 지급되며, 언제든지 출금 가능합니다.',
        image: '/img_rule_5.svg'
    },
    {
        id: 6,
        title: '게임 규칙을 확인하세요.',
        image: '/img_rule_6.svg'
    },
    {
        id: 7,
        title: '안전한 거래를 위한 보안 설정을 완료하세요.',
        image: '/img_rule_7.svg'
    },
    {
        id: 8,
        title: '고객지원 및 문의사항을 확인하세요.',
        image: '/img_rule_8.svg'
    },
    {
        id: 9,
        title: '게임을 시작하고 즐기세요!',
        image: '/img_rule_9.svg'
    }
];
function GameExplainModal(param) {
    let { onClose, onConnectWallet } = param;
    _s();
    const [currentStep, setCurrentStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const handleNext = ()=>{
        setCurrentStep((prev)=>(prev + 1) % steps.length);
    };
    const handlePrev = ()=>{
        setCurrentStep((prev)=>(prev - 1 + steps.length) % steps.length);
    };
    const handleConnect = ()=>{
        onClose();
        onConnectWallet();
    };
    const currentStepData = steps[currentStep];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-[#FFFFFF80] flex justify-center items-center z-50 p-4",
        onClick: onClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-gradient-to-b from-[#000000] to-[#122676] w-full max-w-[580px] aspect-[580/816] rounded-lg border-8 border-[#1ACFF8] px-6 md:px-8 relative flex flex-col text-white font-sans max-h-[90vh] overflow-y-auto custom-scrollbar",
            onClick: (e)=>e.stopPropagation(),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-white font-['Pretendard'] mt-[8.6%] mb-[11.5%] text-2xl font-semibold leading-normal text-center",
                    children: "게임 룰 설명"
                }, void 0, false, {
                    fileName: "[project]/src/components/GameExplainModal.tsx",
                    lineNumber: 86,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-base md:text-lg text-center text-gray-300 mb-[7.5%] border-b border-cyan-400 pb-[1%]",
                    children: "참가 방법"
                }, void 0, false, {
                    fileName: "[project]/src/components/GameExplainModal.tsx",
                    lineNumber: 87,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto w-[75%] h-[75%] relative border-2 border-cyan-400 rounded-3xl flex flex-col items-center justify-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute top-0 left-8 -mt-px -ml-px bg-cyan-500 text-white px-4 py-1 text-lg font-bold",
                            children: currentStepData.id
                        }, void 0, false, {
                            fileName: "[project]/src/components/GameExplainModal.tsx",
                            lineNumber: 90,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: currentStepData.image,
                                alt: "Rule ".concat(currentStepData.id),
                                width: 500,
                                height: 300,
                                className: "mx-auto"
                            }, void 0, false, {
                                fileName: "[project]/src/components/GameExplainModal.tsx",
                                lineNumber: 94,
                                columnNumber: 26
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/GameExplainModal.tsx",
                            lineNumber: 93,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/GameExplainModal.tsx",
                    lineNumber: 89,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-center items-center mt-6 md:mt-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handlePrev,
                            className: "text-cyan-400 text-3xl p-2",
                            children: "◀"
                        }, void 0, false, {
                            fileName: "[project]/src/components/GameExplainModal.tsx",
                            lineNumber: 105,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-3 md:gap-4 mx-4 md:mx-6",
                            children: steps.map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    onClick: ()=>setCurrentStep(index),
                                    className: "w-3 h-3 rounded-full cursor-pointer transition-all ".concat(currentStep === index ? 'bg-cyan-400' : 'border-2 border-cyan-400')
                                }, index, false, {
                                    fileName: "[project]/src/components/GameExplainModal.tsx",
                                    lineNumber: 110,
                                    columnNumber: 29
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/GameExplainModal.tsx",
                            lineNumber: 108,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleNext,
                            className: "text-cyan-400 text-3xl p-2",
                            children: "▶"
                        }, void 0, false, {
                            fileName: "[project]/src/components/GameExplainModal.tsx",
                            lineNumber: 117,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/GameExplainModal.tsx",
                    lineNumber: 104,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/GameExplainModal.tsx",
            lineNumber: 82,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/GameExplainModal.tsx",
        lineNumber: 78,
        columnNumber: 9
    }, this);
}
_s(GameExplainModal, "1sJm2lQ2mRX7Y0EEARB7TDldOEM=");
_c = GameExplainModal;
var _c;
__turbopack_context__.k.register(_c, "GameExplainModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>MainPage
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Header.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WinnerInfoBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/WinnerInfoBar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$EntrySection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/EntrySection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SideMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/SideMenu.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MyPageModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/MyPageModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GameExplainModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/GameExplainModal.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
function MainPage() {
    _s();
    const [account, setAccount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [balance, setBalance] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isMyPageVisible, setIsMyPageVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isExplainModalVisible, setIsExplainModalVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mainDeadline, setMainDeadline] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [mainGlobalRoundId, setMainGlobalRoundId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const entrySectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MainPage.useEffect": ()=>{
            // Fetch the deadline and round ID for a default room to show a general countdown.
            const fetchMainData = {
                "MainPage.useEffect.fetchMainData": async ()=>{
                    try {
                        // We'll use room '1' as the reference for the main page timer.
                        const response = await fetch("http://localhost:3001/lottery-status/1");
                        if (response.ok) {
                            const data = await response.json();
                            setMainGlobalRoundId(data.globalRoundId);
                            if (data.status === 'OPEN') {
                                setMainDeadline(data.deadline);
                            } else {
                                setMainDeadline(null);
                            }
                        }
                    } catch (error) {
                        console.error("Failed to fetch main data:", error);
                    }
                }
            }["MainPage.useEffect.fetchMainData"];
            fetchMainData();
            // Refresh timer data periodically
            const interval = setInterval(fetchMainData, 10000); // every 10 seconds
            return ({
                "MainPage.useEffect": ()=>clearInterval(interval)
            })["MainPage.useEffect"];
        }
    }["MainPage.useEffect"], []);
    // Fetch balance whenever account changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MainPage.useEffect": ()=>{
            if (account) {
                const fetchBalance = {
                    "MainPage.useEffect.fetchBalance": async ()=>{
                        try {
                            console.log("account:", account);
                            const response = await fetch("http://localhost:3001/balance/".concat(account));
                            if (response.ok) {
                                const data = await response.json();
                                console.log("response.ok:", data);
                                setBalance(data.balance);
                            } else {
                                setBalance(0);
                            }
                        } catch (error) {
                            console.error("Failed to fetch balance:", error);
                            setBalance(0);
                        }
                    }
                }["MainPage.useEffect.fetchBalance"];
                fetchBalance();
            } else {
                setBalance(0);
            }
        }
    }["MainPage.useEffect"], [
        account
    ]);
    const handleEnterRoom = (roomId)=>{
        router.push("/room/".concat(roomId));
    };
    const connectWallet = async ()=>{
        // If account already exists, scroll to entry section
        if (account) {
            var _entrySectionRef_current;
            (_entrySectionRef_current = entrySectionRef.current) === null || _entrySectionRef_current === void 0 ? void 0 : _entrySectionRef_current.scrollIntoView({
                behavior: 'smooth'
            });
            return;
        }
        // If no account, proceed with connection logic
        if (typeof window.ethereum !== 'undefined') {
            try {
                const accounts = await window.ethereum.request({
                    method: 'eth_requestAccounts'
                });
                setAccount(accounts[0]);
            } catch (err) {
                console.error('Failed to connect wallet.', err);
            }
        } else {
            alert('Please install MetaMask.');
        }
    };
    const handleOpenMyPage = ()=>{
        if (account) {
            setIsMyPageVisible(true);
        } else {
            alert('Please connect your wallet first.');
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MainPage.useEffect": ()=>{
            const handleAccountsChanged = {
                "MainPage.useEffect.handleAccountsChanged": (accounts)=>{
                    setAccount(accounts.length > 0 ? accounts[0] : null);
                }
            }["MainPage.useEffect.handleAccountsChanged"];
            if (window.ethereum) {
                window.ethereum.on('accountsChanged', handleAccountsChanged);
                // Check for existing accounts on initial load
                ({
                    "MainPage.useEffect": async ()=>{
                        const accounts = await window.ethereum.request({
                            method: 'eth_accounts'
                        });
                        handleAccountsChanged(accounts);
                    }
                })["MainPage.useEffect"]();
                return ({
                    "MainPage.useEffect": ()=>{
                        // Clean up the event listener
                        if (window.ethereum.removeListener) {
                            window.ethereum.removeListener('accountsChanged', handleAccountsChanged);
                        }
                    }
                })["MainPage.useEffect"];
            }
        }
    }["MainPage.useEffect"], []);
    const participationOptions = [
        {
            id: '1',
            amount: 1,
            participants: '1,144,999'
        },
        {
            id: '2',
            amount: 10,
            participants: '1,144,999'
        },
        {
            id: '3',
            amount: 50,
            participants: '1,144,999'
        },
        {
            id: '4',
            amount: 100,
            participants: '1,144,999'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-[#1a1a2e] min-h-screen text-white font-sans bg-[url('/bg.png')] bg-[length:100%_100%] bg-fixed",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                account: account,
                balance: balance,
                connectWallet: connectWallet
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 145,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WinnerInfoBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 148,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$EntrySection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            ref: entrySectionRef,
                            participationOptions: participationOptions,
                            handleEnterRoom: handleEnterRoom,
                            deadline: mainDeadline,
                            globalRoundId: mainGlobalRoundId
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 150,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 149,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 147,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SideMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onOpenMyPage: handleOpenMyPage,
                onOpenExplain: ()=>setIsExplainModalVisible(true)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 160,
                columnNumber: 7
            }, this),
            isMyPageVisible && account && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MyPageModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                account: account,
                onClose: ()=>setIsMyPageVisible(false),
                balance: balance,
                onBalanceUpdate: setBalance
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 163,
                columnNumber: 9
            }, this),
            isExplainModalVisible && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GameExplainModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onClose: ()=>setIsExplainModalVisible(false),
                onConnectWallet: connectWallet
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 172,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 144,
        columnNumber: 5
    }, this);
}
_s(MainPage, "9gpzz/1enbRNLyGdpVOAux9+8Uo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = MainPage;
var _c;
__turbopack_context__.k.register(_c, "MainPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_bdb988f5._.js.map