import React, { useState, useEffect } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { 
    Eye, 
    EyeOff, 
    Mail, 
    Lock, 
    User, 
    ArrowRight,
    Shield,
    Smartphone,
    CheckCircle,
    AlertCircle,
    Home
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Login = () => {
    const { isDarkMode } = useTheme();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        rememberMe: false
    });
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const [loginStep, setLoginStep] = useState('credentials'); // credentials, verification, success
    const [animatedElements, setAnimatedElements] = useState([]);

    // Animated background elements
    useEffect(() => {
        const elements = Array.from({ length: 8 }, (_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 60 + 20,
            delay: Math.random() * 2
        }));
        setAnimatedElements(elements);
    }, []);

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
        
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const validateForm = () => {
        const newErrors = {};
        
        if (!formData.email) {
            newErrors.email = 'البريد الإلكتروني مطلوب';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'البريد الإلكتروني غير صحيح';
        }
        
        if (!formData.password) {
            newErrors.password = 'كلمة المرور مطلوبة';
        } else if (formData.password.length < 6) {
            newErrors.password = 'كلمة المرور يجب أن تكون 6 أحرف على الأقل';
        }
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!validateForm()) return;
        
        setIsLoading(true);
        
        // Simulate API call
        setTimeout(() => {
            setIsLoading(false);
            setLoginStep('verification');
            
            // Auto proceed to success after verification
            setTimeout(() => {
                setLoginStep('success');
            }, 3000);
        }, 2000);
    };

    const handleSocialLogin = (provider) => {
        console.log(`تسجيل الدخول باستخدام ${provider}`);
    };

    return (
        <div className={`min-h-screen relative overflow-hidden transition-all duration-500 ${
            isDarkMode 
                ? 'bg-gradient-to-br from-[#0A1128] via-[#1F3A93] to-[#0A1128]' 
                : 'bg-gradient-to-br from-blue-50 via-white to-indigo-100'
        }`}>
            
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                {animatedElements.map((element) => (
                    <div
                        key={element.id}
                        className={`absolute rounded-full opacity-10 animate-float ${
                            isDarkMode ? 'bg-[#00A4FF]' : 'bg-[#1F3A93]'
                        }`}
                        style={{
                            left: `${element.x}%`,
                            top: `${element.y}%`,
                            width: `${element.size}px`,
                            height: `${element.size}px`,
                            animationDelay: `${element.delay}s`,
                            animationDuration: `${6 + Math.random() * 4}s`
                        }}
                    />
                ))}
            </div>

            {/* Navigation */}
            <nav className="relative z-10 p-6">
                <Link 
                    to="/"
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 ${
                        isDarkMode 
                            ? 'bg-white/10 text-white hover:bg-white/20' 
                            : 'bg-white/50 text-gray-800 hover:bg-white/70'
                    }`}
                >
                    <Home className="w-5 h-5" />
                    <span className="font-medium">العودة للرئيسية</span>
                </Link>
            </nav>

            <div className="flex items-center justify-center min-h-screen px-4 relative z-10">
                <div className="w-full max-w-md">
                    
                    {/* Login Form */}
                    {loginStep === 'credentials' && (
                        <div className={`p-8 rounded-3xl border backdrop-blur-md transition-all duration-500 animate-slideUp ${
                            isDarkMode 
                                ? 'bg-white/10 border-white/20 shadow-2xl shadow-black/20' 
                                : 'bg-white/80 border-white/50 shadow-2xl shadow-gray-500/20'
                        }`}>
                            
                            {/* Header */}
                            <div className="text-center mb-8">
                                <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                                    isDarkMode 
                                        ? 'bg-gradient-to-r from-[#00A4FF] to-[#1F3A93] shadow-lg shadow-[#00A4FF]/25' 
                                        : 'bg-gradient-to-r from-[#1F3A93] to-[#00A4FF] shadow-lg shadow-[#1F3A93]/25'
                                }`}>
                                    <Shield className="w-10 h-10 text-white" />
                                </div>
                                
                                <h1 className={`text-3xl font-bold mb-2 transition-colors duration-500 ${
                                    isDarkMode ? 'text-white' : 'text-gray-800'
                                }`}>
                                    مرحباً بعودتك
                                </h1>
                                
                                <p className={`transition-colors duration-500 ${
                                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                                }`}>
                                    سجل دخولك للوصول إلى حسابك
                                </p>
                            </div>

                            {/* Form */}
                            <form onSubmit={handleSubmit} className="space-y-6">
                                
                                {/* Email Field */}
                                <div>
                                    <label className={`block text-sm font-medium mb-2 transition-colors duration-500 ${
                                        isDarkMode ? 'text-gray-300' : 'text-gray-700'
                                    }`}>
                                        البريد الإلكتروني
                                    </label>
                                    <div className="relative">
                                        <Mail className={`absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors duration-500 ${
                                            isDarkMode ? 'text-gray-400' : 'text-gray-500'
                                        }`} />
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className={`w-full pr-12 pl-4 py-3 rounded-xl border transition-all duration-300 focus:ring-2 focus:ring-offset-2 ${
                                                errors.email
                                                    ? 'border-red-500 focus:ring-red-500'
                                                    : isDarkMode
                                                        ? 'bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-[#00A4FF] focus:ring-[#00A4FF]/50'
                                                        : 'bg-white/50 border-gray-300 text-gray-800 placeholder-gray-500 focus:border-[#1F3A93] focus:ring-[#1F3A93]/50'
                                            }`}
                                            placeholder="أدخل بريدك الإلكتروني"
                                        />
                                    </div>
                                    {errors.email && (
                                        <p className="mt-2 text-sm text-red-500 flex items-center gap-1">
                                            <AlertCircle className="w-4 h-4" />
                                            {errors.email}
                                        </p>
                                    )}
                                </div>

                                {/* Password Field */}
                                <div>
                                    <label className={`block text-sm font-medium mb-2 transition-colors duration-500 ${
                                        isDarkMode ? 'text-gray-300' : 'text-gray-700'
                                    }`}>
                                        كلمة المرور
                                    </label>
                                    <div className="relative">
                                        <Lock className={`absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors duration-500 ${
                                            isDarkMode ? 'text-gray-400' : 'text-gray-500'
                                        }`} />
                                        <input
                                            type={showPassword ? 'text' : 'password'}
                                            name="password"
                                            value={formData.password}
                                            onChange={handleInputChange}
                                            className={`w-full pr-12 pl-12 py-3 rounded-xl border transition-all duration-300 focus:ring-2 focus:ring-offset-2 ${
                                                errors.password
                                                    ? 'border-red-500 focus:ring-red-500'
                                                    : isDarkMode
                                                        ? 'bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-[#00A4FF] focus:ring-[#00A4FF]/50'
                                                        : 'bg-white/50 border-gray-300 text-gray-800 placeholder-gray-500 focus:border-[#1F3A93] focus:ring-[#1F3A93]/50'
                                            }`}
                                            placeholder="أدخل كلمة المرور"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className={`absolute left-3 top-1/2 transform -translate-y-1/2 transition-colors duration-300 ${
                                                isDarkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-500 hover:text-gray-700'
                                            }`}
                                        >
                                            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                        </button>
                                    </div>
                                    {errors.password && (
                                        <p className="mt-2 text-sm text-red-500 flex items-center gap-1">
                                            <AlertCircle className="w-4 h-4" />
                                            {errors.password}
                                        </p>
                                    )}
                                </div>

                                {/* Remember Me & Forgot Password */}
                                <div className="flex items-center justify-between">
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input
                                            type="checkbox"
                                            name="rememberMe"
                                            checked={formData.rememberMe}
                                            onChange={handleInputChange}
                                            className={`w-4 h-4 rounded border-2 transition-all duration-300 ${
                                                isDarkMode
                                                    ? 'bg-white/10 border-white/20 text-[#00A4FF] focus:ring-[#00A4FF]/50'
                                                    : 'bg-white border-gray-300 text-[#1F3A93] focus:ring-[#1F3A93]/50'
                                            }`}
                                        />
                                        <span className={`text-sm transition-colors duration-500 ${
                                            isDarkMode ? 'text-gray-300' : 'text-gray-600'
                                        }`}>
                                            تذكرني
                                        </span>
                                    </label>
                                    
                                    <Link 
                                        to="/forgot-password"
                                        className={`text-sm font-medium transition-colors duration-300 hover:underline ${
                                            isDarkMode ? 'text-[#00A4FF] hover:text-blue-300' : 'text-[#1F3A93] hover:text-blue-700'
                                        }`}
                                    >
                                        نسيت كلمة المرور؟
                                    </Link>
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className={`w-full py-3 px-6 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-70 ${
                                        isDarkMode
                                            ? 'bg-gradient-to-r from-[#00A4FF] to-[#1F3A93] text-white shadow-lg shadow-[#00A4FF]/25 hover:shadow-[#00A4FF]/40'
                                            : 'bg-gradient-to-r from-[#1F3A93] to-[#00A4FF] text-white shadow-lg shadow-[#1F3A93]/25 hover:shadow-[#1F3A93]/40'
                                    }`}
                                >
                                    {isLoading ? (
                                        <div className="flex items-center justify-center gap-2">
                                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                            جاري تسجيل الدخول...
                                        </div>                                    ) : (
                                        <div className="flex items-center justify-center gap-2">
                                            <span>تسجيل الدخول</span>
                                            <ArrowRight className="w-5 h-5" />
                                        </div>
                                    )}
                                </button>
                            </form>

                            {/* Divider */}
                            <div className="my-8 flex items-center">
                                <div className={`flex-1 h-px transition-colors duration-500 ${
                                    isDarkMode ? 'bg-white/20' : 'bg-gray-300'
                                }`} />
                                <span className={`px-4 text-sm transition-colors duration-500 ${
                                    isDarkMode ? 'text-gray-400' : 'text-gray-500'
                                }`}>
                                    أو
                                </span>
                                <div className={`flex-1 h-px transition-colors duration-500 ${
                                    isDarkMode ? 'bg-white/20' : 'bg-gray-300'
                                }`} />
                            </div>

                            {/* Social Login */}
                            <div className="space-y-3">
                                <button
                                    onClick={() => handleSocialLogin('Google')}
                                    className={`w-full flex items-center justify-center gap-3 py-3 px-6 rounded-xl border transition-all duration-300 hover:scale-105 ${
                                        isDarkMode
                                            ? 'bg-white/5 border-white/20 text-white hover:bg-white/10'
                                            : 'bg-white/70 border-gray-300 text-gray-800 hover:bg-white'
                                    }`}
                                >
                                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                                    </svg>
                                    <span className="font-medium">تسجيل الدخول بـ Google</span>
                                </button>

                                <button
                                    onClick={() => handleSocialLogin('Apple')}
                                    className={`w-full flex items-center justify-center gap-3 py-3 px-6 rounded-xl border transition-all duration-300 hover:scale-105 ${
                                        isDarkMode
                                            ? 'bg-white/5 border-white/20 text-white hover:bg-white/10'
                                            : 'bg-white/70 border-gray-300 text-gray-800 hover:bg-white'
                                    }`}
                                >
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                                    </svg>
                                    <span className="font-medium">تسجيل الدخول بـ Apple</span>
                                </button>
                            </div>

                            {/* Sign Up Link */}
                            <div className="mt-8 text-center">
                                <p className={`transition-colors duration-500 ${
                                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                                }`}>
                                    ليس لديك حساب؟{' '}
                                    <Link 
                                        to="/register"
                                        className={`font-bold transition-colors duration-300 hover:underline ${
                                            isDarkMode ? 'text-[#00A4FF] hover:text-blue-300' : 'text-[#1F3A93] hover:text-blue-700'
                                        }`}
                                    >
                                        إنشاء حساب جديد
                                    </Link>
                                </p>
                            </div>
                        </div>
                    )}

                    {/* Verification Step */}
                    {loginStep === 'verification' && (
                        <div className={`p-8 rounded-3xl border backdrop-blur-md transition-all duration-500 animate-slideUp ${
                            isDarkMode 
                                ? 'bg-white/10 border-white/20 shadow-2xl shadow-black/20' 
                                : 'bg-white/80 border-white/50 shadow-2xl shadow-gray-500/20'
                        }`}>
                            <div className="text-center">
                                <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                                    isDarkMode 
                                        ? 'bg-gradient-to-r from-yellow-500 to-orange-500 shadow-lg shadow-yellow-500/25' 
                                        : 'bg-gradient-to-r from-yellow-400 to-orange-400 shadow-lg shadow-yellow-400/25'
                                }`}>
                                    <Smartphone className="w-10 h-10 text-white animate-pulse" />
                                </div>
                                
                                <h2 className={`text-2xl font-bold mb-4 transition-colors duration-500 ${
                                    isDarkMode ? 'text-white' : 'text-gray-800'
                                }`}>
                                    التحقق من الهوية
                                </h2>
                                
                                <p className={`mb-6 transition-colors duration-500 ${
                                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                                }`}>
                                    جاري التحقق من بياناتك وتأمين حسابك...
                                </p>

                                <div className="flex justify-center mb-6">
                                    <div className={`w-8 h-8 border-4 border-t-transparent rounded-full animate-spin ${
                                        isDarkMode ? 'border-[#00A4FF]' : 'border-[#1F3A93]'
                                    }`} />
                                </div>

                                <div className="space-y-3">
                                    {[
                                        { text: 'التحقق من البريد الإلكتروني', completed: true },
                                        { text: 'التحقق من كلمة المرور', completed: true },
                                        { text: 'تأمين الجلسة', completed: false }
                                    ].map((step, index) => (
                                        <div key={index} className="flex items-center gap-3">
                                            {step.completed ? (
                                                <CheckCircle className="w-5 h-5 text-green-500" />
                                            ) : (
                                                <div className={`w-5 h-5 border-2 border-t-transparent rounded-full animate-spin ${
                                                    isDarkMode ? 'border-[#00A4FF]' : 'border-[#1F3A93]'
                                                }`} />
                                            )}
                                            <span className={`transition-colors duration-500 ${
                                                step.completed 
                                                    ? 'text-green-500' 
                                                    : isDarkMode ? 'text-gray-300' : 'text-gray-600'
                                            }`}>
                                                {step.text}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Success Step */}
                    {loginStep === 'success' && (
                        <div className={`p-8 rounded-3xl border backdrop-blur-md transition-all duration-500 animate-slideUp ${
                            isDarkMode 
                                ? 'bg-white/10 border-white/20 shadow-2xl shadow-black/20' 
                                : 'bg-white/80 border-white/50 shadow-2xl shadow-gray-500/20'
                        }`}>
                            <div className="text-center">
                                <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center transition-all duration-500 animate-bounce ${
                                    'bg-gradient-to-r from-green-500 to-emerald-500 shadow-lg shadow-green-500/25'
                                }`}>
                                    <CheckCircle className="w-10 h-10 text-white" />
                                </div>
                                
                                <h2 className={`text-2xl font-bold mb-4 transition-colors duration-500 ${
                                    isDarkMode ? 'text-white' : 'text-gray-800'
                                }`}>
                                    تم تسجيل الدخول بنجاح!
                                </h2>
                                
                                <p className={`mb-8 transition-colors duration-500 ${
                                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                                }`}>
                                    مرحباً بك مرة أخرى، سيتم توجيهك إلى لوحة التحكم...
                                </p>

                                <div className="space-y-4">
                                    <Link
                                        to="/dashboard"
                                        className={`w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                                            isDarkMode
                                                ? 'bg-gradient-to-r from-[#00A4FF] to-[#1F3A93] text-white shadow-lg shadow-[#00A4FF]/25'
                                                : 'bg-gradient-to-r from-[#1F3A93] to-[#00A4FF] text-white shadow-lg shadow-[#1F3A93]/25'
                                        }`}
                                    >
                                        <User className="w-5 h-5" />
                                        <span>الذهاب إلى لوحة التحكم</span>
                                    </Link>
                                    
                                    <Link
                                        to="/"
                                        className={`w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-medium border transition-all duration-300 hover:scale-105 ${
                                            isDarkMode
                                                ? 'border-white/20 text-white hover:bg-white/10'
                                                : 'border-gray-300 text-gray-800 hover:bg-gray-100'
                                        }`}
                                    >
                                        <Home className="w-5 h-5" />
                                        <span>العودة للرئيسية</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Custom Animations */}
            <style jsx global>{`
                @keyframes slideUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes float {
                    0%, 100% {
                        transform: translateY(0px) rotate(0deg);
                    }
                    50% {
                        transform: translateY(-20px) rotate(180deg);
                    }
                }

                .animate-slideUp {
                    animation: slideUp 0.6s ease-out forwards;
                }

                .animate-float {
                    animation: float linear infinite;
                }

                /* Custom checkbox styles */
                input[type="checkbox"]:checked {
                    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='m13.854 3.646-7.5 7.5a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6 10.293l7.146-7.147a.5.5 0 0
                    1 .708.708z'/%3e%3c/svg%3e");
                }

                /* Focus styles */
                input:focus {
                    outline: none;
                }

                /* Smooth transitions for all elements */
                * {
                    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
                    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
                    transition-duration: 300ms;
                }

                /* Loading animation */
                @keyframes pulse {
                    0%, 100% {
                        opacity: 1;
                    }
                    50% {
                        opacity: .5;
                    }
                }

                .animate-pulse {
                    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
                }

                /* Gradient animation */
                @keyframes gradient {
                    0% {
                        background-position: 0% 50%;
                    }
                    50% {
                        background-position: 100% 50%;
                    }
                    100% {
                        background-position: 0% 50%;
                    }
                }

                .animate-gradient {
                    background-size: 200% 200%;
                    animation: gradient 3s ease infinite;
                }
            `}</style>
        </div>
    );
};

export default Login;

