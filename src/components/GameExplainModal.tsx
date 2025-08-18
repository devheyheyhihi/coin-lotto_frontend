'use client';

import { useState } from 'react';
import Image from 'next/image';

interface GameExplainModalProps {
    onClose: () => void;
    onEnterGame: () => void;
}

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
    },
];

const rouletteSteps = [
    { id: 1, image: '/img_rule2_1.png' },
    { id: 2, image: '/img_rule2_2.png' },
    { id: 3, image: '/img_rule2_3.png' },
    { id: 4, image: '/img_rule2_4.png' },
    { id: 5, image: '/img_rule2_5.png' },
    { id: 6, image: '/img_rule2_6.png' },
];

const GameExplainModal = ({ onClose, onEnterGame }: GameExplainModalProps) => {
    const [currentStep, setCurrentStep] = useState(0);
    const [activeTab, setActiveTab] = useState<'usdt' | 'roulette'>('usdt');
    const [rouletteStep, setRouletteStep] = useState(0);

    const handleNext = () => {
        setCurrentStep(prev => (prev < steps.length - 1 ? prev + 1 : prev));
    };

    const handlePrev = () => {
        setCurrentStep(prev => (prev > 0 ? prev - 1 : prev));
    };

    const handleRouletteNext = () => {
        setRouletteStep(prev => (prev < rouletteSteps.length - 1 ? prev + 1 : prev));
    };

    const handleRoulettePrev = () => {
        setRouletteStep(prev => (prev > 0 ? prev - 1 : prev));
    };

    const currentStepData = steps[currentStep];
    const currentRouletteData = rouletteSteps[rouletteStep];

    return (
        <div 
            className="fixed inset-0 bg-[#00000080] flex justify-center items-center z-50 p-4"
            onClick={onClose}
        >
            <div 
                className={`relative w-full max-w-[580px] aspect-[580/900] md:aspect-[580/816] rounded-lg px-6 md:px-8 relative flex flex-col font-sans max-h-[90vh] overflow-y-auto custom-scrollbar ${
                    activeTab === 'roulette' 
                        ? 'bg-white text-black' 
                        : 'bg-gradient-to-b from-[#000000] to-[#122676] text-white'
                }`}
                onClick={e => e.stopPropagation()}
            >
                <div className="absolute right-0 z-10 flex justify-end items-center pr-[3vw] py-2">
                    <button 
                        onClick={onClose}
                        className={`hover:text-gray-300 md:text-[3vw] text-[6vw] font-bold ${
                            activeTab === 'roulette' ? 'text-black' : 'text-white'
                        }`}
                    >
                        ×
                    </button>
                </div>
                {/* Tab Navigation */}
                <div className="mt-[8.6%] mb-[11.5%]">
                    <div className="flex justify-start gap-8">
                        <button
                            onClick={() => setActiveTab('usdt')}
                            className={`text-xl font-bold pb-2 transition-all duration-200 ${
                                activeTab === 'usdt' 
                                    ? 'text-whit' 
                                    : 'text-gray-500'
                            }`}
                        >
                            USDT
                        </button>
                        <button
                            onClick={() => setActiveTab('roulette')}
                            className={`text-xl font-bold pb-2 transition-all duration-200 ${
                                activeTab === 'roulette' 
                                    ? 'text-[#B51F1F]' 
                                    : 'text-gray-500'
                            }`}
                        >
                            ROULETTE
                        </button>
                    </div>
                </div>
                
                {/* USDT 탭 컨텐츠 */}
                {activeTab === 'usdt' && (
                    <>
                <h2 className="text-base md:text-lg text-center text-gray-300 mb-[7.5%] border-b border-cyan-400 pb-[1%]">Game rules</h2>
                        <div className="mx-auto w-[75%] h-[75%] relative border-2 border-cyan-400 rounded-3xl flex flex-col items-center justify-center">
                            <div className="absolute top-0 left-8 -mt-px -ml-px bg-cyan-500 text-white px-4 py-1 text-lg font-bold">
                                {currentStepData.id}
                            </div>
                            <div className="">
                                 <Image 
                                     src={currentStepData.image}
                                     alt={`Rule ${currentStepData.id}`}
                                     width={500}
                                     height={300}
                                     className="mx-auto"
                                 />
                            </div>
                        </div>

                        <div className="flex justify-center items-center mt-6 md:mt-8">
                            <button onClick={handlePrev} className="text-cyan-400 text-3xl p-2 disabled:text-gray-600" disabled={currentStep === 0}>
                                ◀
                            </button>
                            <div className="flex gap-3 md:gap-4 mx-4 md:mx-6">
                                {steps.map((_, index) => (
                                    <div 
                                        key={index}
                                        onClick={() => setCurrentStep(index)}
                                        className={`w-3 h-3 rounded-full cursor-pointer transition-all ${currentStep === index ? 'bg-cyan-400' : 'border-2 border-cyan-400'}`}
                                    />
                                ))}
                            </div>
                            <button onClick={handleNext} className="text-cyan-400 text-3xl p-2 disabled:text-gray-600" disabled={currentStep === steps.length - 1}>
                                ▶
                            </button>
                        </div>
                    </>
                )}

                {/* ROULETTE 탭 컨텐츠 */}
                {activeTab === 'roulette' && (
                    <div>
                        {/* 게임 개요 섹션 */}
                        <div className="mb-6">
                            <h3 className="text-lg font-bold mb-3">게임 개요</h3>
                            <p className="text-sm leading-relaxed mb-2">
                                1부터 10까지의 숫자 중 하나가 선택되는 룰렛 게임입니다.
                            </p>
                            <p className="text-sm leading-relaxed">
                                플레이어는 베팅 숫자가 로우(1~5) 또는 하이(6~10) 중 하나에 속할지를 예측합니다.
                            </p>
                        </div>

                        {/* 게임 방식 섹션 */}
                        <div className="mb-6">
                            <h3 className="text-lg font-bold mb-3 text-[#357FED]">게임 주기</h3>
                            <p className="text-sm leading-relaxed mb-2">
                                룰렛은 5분마다 자동으로 회전하며,
                            </p>
                            <p className="text-sm leading-relaxed">
                                결과가 베팅성공으로 공개됩니다.
                            </p>
                        </div>

                        {/* Game Rules Bar */}
                        <div className="relative w-full">
                            <div className="bg-[#4A5568] rounded-lg flex items-center justify-center relative py-1">
                                <div className="absolute left-0 bg-[#B51F1F] text-white px-2 py-1 rounded text-lg font-bold">
                                    {rouletteStep + 1}
                                </div>
                                <div className="text-white text-xl font-bold text-center">
                                    Game rules
                                </div>
                            </div>
                        </div>

                        {/* 게임 이미지 섹션 */}
                        {/* <div className="mx-auto w-[90%] relative border-2 border-[#357FED] rounded-3xl flex flex-col items-center justify-center p-4 bg-white"> */}
                            <div className="w-full h-[400px] flex items-center justify-center">
                                <Image 
                                    src={currentRouletteData.image}
                                    alt={`Roulette Rule ${currentRouletteData.id}`}
                                    width={400}
                                    height={400}
                                    className="max-w-full max-h-full object-contain"
                                />
                            </div>
                        {/* </div> */}

                        {/* 네비게이션 도트들 */}
                        <div className="flex justify-center items-center mt-6">
                            <button 
                                onClick={handleRoulettePrev}
                                className="text-[#357FED] text-2xl p-2 disabled:text-gray-400" 
                                disabled={rouletteStep === 0}
                            >
                                ◀
                            </button>
                            <div className="flex gap-2 mx-4">
                                {rouletteSteps.map((_, index) => (
                                    <div 
                                        key={index}
                                        onClick={() => setRouletteStep(index)}
                                        className={`w-2 h-2 rounded-full cursor-pointer transition-all ${
                                            rouletteStep === index 
                                                ? 'bg-[#357FED]' 
                                                : 'border border-[#357FED]'
                                        }`}
                                    />
                                ))}
                            </div>
                            <button 
                                onClick={handleRouletteNext}
                                className="text-[#357FED] text-2xl p-2 disabled:text-gray-400" 
                                disabled={rouletteStep === rouletteSteps.length - 1}
                            >
                                ▶
                            </button>
                        </div>
                    </div>
                )}    
                 <div className="flex justify-center mt-6">
                </div>    
            </div>
        </div>
    );
};

export default GameExplainModal; 