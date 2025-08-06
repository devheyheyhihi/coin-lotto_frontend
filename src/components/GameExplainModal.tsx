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

const GameExplainModal = ({ onClose, onEnterGame }: GameExplainModalProps) => {
    const [currentStep, setCurrentStep] = useState(0);

    const handleNext = () => {
        setCurrentStep(prev => (prev < steps.length - 1 ? prev + 1 : prev));
    };

    const handlePrev = () => {
        setCurrentStep(prev => (prev > 0 ? prev - 1 : prev));
    };

    const currentStepData = steps[currentStep];

    return (
        <div 
            className="fixed inset-0 bg-[#FFFFFF80] flex justify-center items-center z-50 p-4"
            onClick={onClose}
        >
            <div 
                className="bg-gradient-to-b from-[#000000] to-[#122676] w-full max-w-[580px] aspect-[580/816] rounded-lg border-8 border-[#1ACFF8] px-6 md:px-8 relative flex flex-col text-white font-sans max-h-[90vh] overflow-y-auto custom-scrollbar"
                onClick={e => e.stopPropagation()}
            >
                <h1 className="text-white font-['Pretendard'] mt-[8.6%] mb-[11.5%] text-2xl font-semibold leading-normal text-center">게임 룰 설명</h1>
                <h2 className="text-base md:text-lg text-center text-gray-300 mb-[7.5%] border-b border-cyan-400 pb-[1%]">참가 방법</h2>
                
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
                 <div className="flex justify-center mt-6">
                    <button
                        onClick={() => {
                            onEnterGame();
                            onClose();
                        }}
                        className="rounded-full bg-gradient-to-r from-[#3A89E1] to-[#6336E0] px-8 py-3 font-bold text-lg text-white shadow-lg"
                    >
                        {currentStep === steps.length - 1 ? '게임 시작하기' : '다음'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default GameExplainModal; 