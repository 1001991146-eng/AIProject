import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronRight, 
  ChevronLeft, 
  Brain, 
  Code,
  AlertCircle,
  Home
} from 'lucide-react';
import { STEPS } from './steps';

export default function App() {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    if (currentStep < STEPS.length - 1) {
      setCurrentStep(prev => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const goToHome = () => {
    setCurrentStep(0);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const progressPercentage = currentStep === 0 ? 0 : ((currentStep) / (STEPS.length - 1)) * 100;
  const isIntro = currentStep === 0;

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 font-heebo" dir="rtl">
      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden">
        
        {/* Organizations Top Bar */}
        <div className="bg-white/90 backdrop-blur-sm border-b border-gray-100 px-8 py-2 flex flex-wrap justify-center gap-x-6 gap-y-1 text-[10px] font-bold text-gray-400 uppercase tracking-wider">
          <span>מכון ויצמן למדע</span>
          <span>המרכז לחינוך סייבר</span>
          <span>קרן טראמפ</span>
          <span>משרד החינוך - מינהל חדשנות וטכנולוגיה</span>
        </div>

        {/* Header */}
        <div className="bg-gradient-to-l from-blue-700 to-indigo-600 p-8 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 opacity-10">
            <Brain className="w-48 h-48 -mt-10 -mr-10" />
          </div>
          <div className="relative z-10 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="bg-white/20 p-3 rounded-2xl backdrop-blur-sm">
                <Code className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-extrabold tracking-tight">פרויקט מדעני בינה מלאכותית</h1>
                <p className="text-blue-100 mt-1 font-bold">בית הספר הרב תחומי למדעים ולאמנויות עמל חדרה</p>
                <p className="text-blue-50 mt-0.5">מורה מלווה: מריאלה שטיין | תכנית מדעני הבינה המלאכותית</p>
              </div>
            </div>
            
            {currentStep > 0 && (
              <button 
                onClick={goToHome}
                className="bg-white/10 hover:bg-white/20 p-3 rounded-2xl transition-colors flex flex-col items-center gap-1 group"
                title="חזרה לדף הבית"
              >
                <Home className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                <span className="text-[10px] font-bold uppercase">בית</span>
              </button>
            )}
          </div>
        </div>

        {/* Email Recommendation Note */}
        <div className="bg-amber-50 border-b border-amber-100 px-8 py-3 flex items-center gap-3">
          <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0" />
          <p className="text-amber-800 text-sm font-medium">
            <strong>טיפ חשוב:</strong> מומלץ להשתמש באותה כתובת דוא"ל בכל המשימות והטפסים. זה יאפשר לכם לרכז את כל המידע שהגשתם ולערוך בקלות את המסמכים המסכמים בסוף הפרויקט.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="px-8 pt-8">
          <div className="flex justify-between mb-2">
            <span className="text-sm font-bold text-gray-600">
              {isIntro ? "הזנקה" : `התקדמות: ${Math.round(progressPercentage)}%`}
            </span>
            <span className="text-sm font-bold text-gray-600">
              {isIntro ? "מתחילים עכשיו" : `שלב ${currentStep} מתוך ${STEPS.length - 1}`}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3 mb-8 overflow-hidden">
            <motion.div 
              className="bg-indigo-600 h-3 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progressPercentage}%` }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />
          </div>
        </div>

        {/* Main Content Area */}
        <div className="px-8 pb-8">
          <div className="min-h-[300px] relative">
            {STEPS.map((step, index) => (
              <div 
                key={index} 
                className={`${index === currentStep ? 'block' : 'hidden'}`}
              >
                <div className="flex items-center gap-4 mb-6 pb-4 border-b border-gray-100">
                  <div className="bg-gray-50 p-3 rounded-full shadow-inner">
                    <step.icon className={`w-8 h-8 ${step.iconClass}`} />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">{step.title}</h2>
                </div>
                {step.content}
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="mt-10 pt-6 border-t border-gray-100">
            <div className="bg-blue-50/50 p-3 rounded-xl mb-6 flex items-center gap-3 border border-blue-100">
              <AlertCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
              <p className="text-blue-700 text-xs font-bold">
                שימו לב: הקפידו ללחוץ על כפתור ה-Submit (שלח) בתוך הטופס לפני המעבר לשלב הבא!
              </p>
            </div>

            <div className="flex justify-between items-center">
              <button 
                onClick={prevStep}
                disabled={currentStep === 0}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold transition-all ${
                  currentStep === 0 
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed" 
                  : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 shadow-sm"
                }`}
              >
                <ChevronRight className="w-5 h-5" />
                אחורה
              </button>
              
              <button 
                onClick={nextStep}
                disabled={currentStep === STEPS.length - 1}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-xl font-bold transition-all shadow-md ${
                  currentStep === STEPS.length - 1
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-indigo-600 text-white hover:bg-indigo-700 hover:shadow-lg"
                }`}
              >
                המשך לשלב הבא
                <ChevronLeft className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-50 p-6 border-t border-gray-100 text-center">
          <p className="text-xs text-gray-400 font-medium">© {new Date().getFullYear()} תכנית מדעני הבינה המלאכותית</p>
        </div>
      </div>
    </div>
  );
}
