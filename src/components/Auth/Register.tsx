import React, { useState, useEffect } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { 
    Eye, 
    EyeOff, 
    Mail, 
    Lock, 
    User, 
    Phone,
    ArrowRight,
    Shield,
    CheckCircle,
    AlertCircle,
    Home,
    UserPlus
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Register = () => {
    const { isDarkMode } = useTheme();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
        agreeToTerms: false
    });
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const [registerStep, setRegisterStep] = useState('form'); // form, verification, success
    const [animatedElements, setAnimatedElements] = useState([]);

    // Animated background elements
    useEffect(() => {
        const elements = Array.from({ length: 10 }, (_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 80 + 30,
            delay: Math.random() * 3
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
        
        if (!formData.firstName.trim()) {
            newErrors.firstName = 'الاسم الأول مطلوب';
        }
        
        if (!formData.lastName.trim()) {
            newErrors.lastName = 'الاسم الأخير مطلوب';
        }
        
        if (!formData.email) {
            newErrors.email = 'البريد الإلكتروني مطلوب';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'البريد الإلكتروني غير صحيح';
        }
        
        if (!formData.phone) {
            newErrors.phone = 'رقم الهاتف مطلوب';
        } else if (!/^[0-9+\-\s()]{10,}$/.test(formData.phone)) {
            newErrors.phone = 'رقم الهاتف غير صحيح';
        }
        
        if (!formData.password) {
            newErrors.password = 'كلمة المرور مطلوبة';
        } else if (formData.password.length < 8) {
            newErrors.password = 'كلمة المرور يجب أن تكون 8 أحرف على الأقل';
        } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
            newErrors.password = 'كلمة المرور يجب أن تحتوي على حروف كبيرة وصغيرة وأرقام';
        }
        
        if (!formData.confirmPassword) {
            newErrors.confirmPassword = 'تأكيد كلمة المرور مطلوب';
        } else if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'كلمات المرور غير متطابقة';
        }
        
        if (!formData.agreeToTerms) {
            newErrors.agreeToTerms = 'يجب الموافقة على الشروط والأحكام';
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
            setRegisterStep('verification');
            
            // Auto proceed to success after verification
            setTimeout(() => {
                setRegisterStep('success');
            }, 4000);
        }, 2500);
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
                            animationDuration: `${8 + Math.random() * 6}s`
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
                <div className="w-full max-w-lg">
                    
                    {/* Registration Form */}
                    {registerStep === 'form' && (
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
                                    <UserPlus className="w-10 h-10 text-white" />
                                </div>
                                
                                <h1 className={`text-3xl font-bold mb-2 transition-colors duration-500 ${
                                    isDarkMode ? 'text-white' : 'text-gray-800'
                                }`}>
                                    إنشاء حساب جديد
                                </h1>
                                
                                <p className={`transition-colors duration-500 ${
                                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                                }`}>
                                    انضم إلينا واستمتع بخدماتنا المتميزة
                                </p>
                            </div>

                            {/* Form */}
                            <form onSubmit={handleSubmit} className="space-y-6">
                                
                                {/* Name Fields */}
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className={`block text-sm font-medium mb-2 transition-colors duration-500 ${
                                            isDarkMode ? 'text-gray-300' : 'text-gray-700'
                                        }`}>
                                            الاسم الأول
                                        </label>
                                        <input
                                            type="text"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleInputChange}
                                            className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 focus:ring-2 focus:ring-offset-2 ${
                                                errors.firstName
                                                    ? 'border-red-500 focus:ring-red-500'
                                                    : isDarkMode
                                                        ? 'bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-[#00A4FF] focus:ring-[#00A4FF]/50'
                                                        : 'bg-white/50 border-gray-300 text-gray-800 placeholder-gray-500 focus:border-[#1F3A93] focus:ring-[#1F3A93]/50'
                                            }`}
                                            placeholder="أحمد"
                                        />
                                        {errors.firstName && (
                                            <p className="mt-1 text-xs text-red-500">{errors.firstName}</p>
                                        )}
                                    </div>

                                    <div>
                                        <label className={`block text-sm font-medium mb-2 transition-colors duration-500 ${
                                            isDarkMode ? 'text-gray-300' : 'text-gray-700'
                                        }`}>
                                            الاسم الأخير
                                        </label>
                                        <input
                                            type="text"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleInputChange}
                                            className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 focus:ring-2 focus:ring-offset-2 ${
                                                errors.lastName
                                                    ? 'border-red-500 focus:ring-red-500'
                                                    : isDarkMode
                                                        ? 'bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-[#00A4FF] focus:ring-[#00A4FF]/50'
                                                        : 'bg-white/50 border-gray-300 text-gray-800 placeholder-gray-500 focus:border-[#1F3A93] focus:ring-[#1F3A93]/50'
                                            }`}
                                            placeholder="محمد"
                                        />
                                        {errors.lastName && (
                                            <p className="mt-1 text-xs text-red-500">{errors.lastName}</p>
                                        )}
                                    </div>
                                </div>

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
                                            placeholder="ahmed@example.com"
                                        />
                                    </div>
                                    {errors.email && (
                                        <p className="mt-2 text-sm text-red-500 flex items-center gap-1">
                                            <AlertCircle className="w-4 h-4" />
                                            {errors.email}
                                        </p>
                                    )}
                                </div>

                                {/* Phone Field */}
                                <div>
                                    <label className={`block text-sm font-medium mb-2 transition-colors duration-500 ${
                                        isDarkMode ? 'text-gray-300' : 'text-gray-700'
                                    }`}>
                                        رقم الهاتف
                                    </label>
                                    <div className="relative">
                                        <Phone className={`absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors duration-500 ${
                                            isDarkMode ? 'text-gray-400' : 'text-gray-500'
                                        }`} />
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            className={`w-full pr-12 pl-4 py-3 rounded-xl border transition-all duration-300 focus:ring-2 focus:ring-offset-2 ${
                                                errors.phone
                                                    ? 'border-red-500 focus:ring-red-500'
                                                    : isDarkMode
                                                        ? 'bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-[#00A4FF] focus:ring-[#00A4FF]/50'
                                                        : 'bg-white/50 border-gray-300 text-gray-800 placeholder-gray-500 focus:border-[#1F3A93] focus:ring-[#1F3A93]/50'
                                            }`}
                                            placeholder="+966 50 123 4567"
                                        />
                                    </div>
                                    {errors.phone && (
                                        <p className="mt-2 text-sm text-red-500 flex items-center gap-1">
                                            <AlertCircle className="w-4 h-4" />
                                            {errors.phone}
                                        </p>
                                    )}
                                </div>

                                {/* Password Fields */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                                                placeholder="كلمة المرور"
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
                                            <p className="mt-1 text-xs text-red-500">{errors.password}</p>
                                        )}
                                    </div>

                                    <div>
                                        <label className={`block text-sm font-medium mb-2 transition-colors duration-500 ${
                                            isDarkMode ? 'text-gray-300' : 'text-gray-700'
                                        }`}>
                                            تأكيد كلمة المرور
                                        </label>
                                        <div className="relative">
                                            <Lock className={`absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors duration-500 ${
                                                isDarkMode ? 'text-gray-400' : 'text-gray-500'
                                            }`} />
                                            <input
                                                type={showConfirmPassword ? 'text' : 'password'}
                                                name="confirmPassword"
                                                value={formData.confirmPassword}
                                                onChange={handleInputChange}
                                                className={`w-full pr-12 pl-12 py-3 rounded-xl border transition-all duration-300 focus:ring-2 focus:ring-offset-2 ${
                                                    errors.confirmPassword
                                                        ? 'border-red-500 focus:ring-red-500'
                                                        : isDarkMode
                                                            ? 'bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-[#00A4FF] focus:ring-[#00A4FF]/50'
                                                            : 'bg-white/50 border-gray-300 text-gray-800 placeholder-gray-500 focus:border-[#1F3A93] focus:ring-[#1F3A93]/50'
                                                }`}
                                                placeholder="تأكيد كلمة المرور"
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                                className={`absolute left-3 top-1/2 transform -translate-y-1/2 transition-colors duration-300 ${
                                                    isDarkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-500 hover:text-gray-700'
                                                }`}
                                            >
                                                {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                            </button>
                                        </div>
                                        {errors.confirmPassword && (
                                            <p className="mt-1 text-xs text-red-500">{errors.confirmPassword}</p>
                                        )}
                                    </div>
                                </div>

                                {/* Terms Agreement */}
                                <div>
                                    <label className="flex items-start gap-3 cursor-pointer">
                                        <input
                                            type="checkbox"
                                            name="agreeToTerms"
                                            checked={formData.agreeToTerms}
                                            onChange={handleInputChange}
                                            className={`w-5 h-5 mt-0.5 rounded border-2 transition-all duration-300 ${
                                                isDarkMode
                                                    ? 'bg-white/10 border-white/20 text-[#00A4FF] focus:ring-[#00A4FF]/50'
                                                    : 'bg-white border-gray-300 text-[#1F3A93] focus:ring-[#1F3A93]/50'
                                            }`}
                                        />
                                        <span className={`text-sm leading-relaxed transition-colors duration-500 ${
                                            isDarkMode ? 'text-gray-300' : 'text-gray-600'
                                        }`}>
                                            أوافق على{' '}
                                            <Link 
                                                to="/terms"
                                                className={`font-medium underline transition-colors duration-300 ${
                                                    isDarkMode ? 'text-[#00A4FF] hover:text-blue-300' : 'text-[#1F3A93] hover:text-blue-700'
                                                }`}
                                            >
                                                الشروط والأحكام
                                            </Link>
                                            {' '}و{' '}
                                            <Link 
                                                to="/privacy"
                                                className={`font-medium underline transition-colors duration-300 ${
                                                    isDarkMode ? 'text-[#00A4FF] hover:text-blue-300' : 'text-[#1F3A93] hover:text-blue-700'
                                                }`}
                                            >
                                                سياسة الخصوصية
                                            </Link>
                                        </span>
                                    </label>
                                    {errors.agreeToTerms && (
                                        <p className="mt-2 text-sm text-red-500 flex items-center gap-1">
                                            <AlertCircle className="w-4 h-4" />
                                            {errors.agreeToTerms}
                                        </p>
                                    )}
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
                                            جاري إنشاء الحساب...
                                        </div>
                                    ) : (
                                        <div className="flex items-center justify-center gap-2">
                                            <span>إنشاء حساب</span>
                                            <ArrowRight className="w-5 h-5" />
                                        </div>
                                    )}
                                </button>
                            </form>

                            {/* Login Link */}
                            <div className="mt-8 text-center">
                                <p className={`transition-colors duration-500 ${
                                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                                }`}>
                                    لديك حساب بالفعل؟{' '}
                                    <Link 
                                        to="/login"
                                        className={`font-bold transition-colors duration-300 hover:underline ${
                                            isDarkMode ? 'text-[#00A4FF] hover:text-blue-300' : 'text-[#1F3A93] hover:text-blue-700'
                                        }`}
                                    >
                                        تسجيل الدخول
                                    </Link>
                                </p>
                            </div>
                        </div>
                    )}

                    {/* Verification Step */}
                    {registerStep === 'verification' && (
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
                                    <Mail className="w-10 h-10 text-white animate-pulse" />
                                </div>
                                
                                <h2 className={`text-2xl font-bold mb-4 transition-colors duration-500 ${
                                    isDarkMode ? 'text-white' : 'text-gray-800'
                                }`}>
                                    تحقق من بريدك الإلكتروني
                                </h2>
                                
                                <p className={`mb-6 transition-colors duration-500 ${
                                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                                }`}>
                                    تم إرسال رسالة تأكيد إلى <strong>{formData.email}</strong>
                                    <br />
                                    يرجى النقر على الرابط لتفعيل حسابك
                                </p>

                                <div className="flex justify-center mb-6">
                                    <div className={`w-8 h-8 border-4 border-t-transparent rounded-full animate-spin ${
                                        isDarkMode ? 'border-[#00A4FF]' : 'border-[#1F3A93]'
                                    }`} />
                                </div>

                                                              <div className="space-y-3 mb-8">
                                    {[
                                        { text: 'إنشاء الحساب', completed: true },
                                        { text: 'إرسال رسالة التأكيد', completed: true },
                                        { text: 'انتظار التفعيل', completed: false }
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

                                <button
                                    onClick={() => console.log('إعادة إرسال')}
                                    className={`px-6 py-2 rounded-lg font-medium border transition-all duration-300 hover:scale-105 ${
                                        isDarkMode
                                            ? 'border-white/20 text-white hover:bg-white/10'
                                            : 'border-gray-300 text-gray-800 hover:bg-gray-100'
                                    }`}
                                >
                                    إعادة إرسال الرسالة
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Success Step */}
                    {registerStep === 'success' && (
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
                                    تم إنشاء الحساب بنجاح!
                                </h2>
                                
                                <p className={`mb-8 transition-colors duration-500 ${
                                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                                }`}>
                                    مرحباً {formData.firstName}! تم تفعيل حسابك بنجاح
                                    <br />
                                    يمكنك الآن الاستمتاع بجميع خدماتنا
                                </p>

                                <div className="space-y-4">
                                    <Link
                                        to="/login"
                                        className={`w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                                            isDarkMode
                                                ? 'bg-gradient-to-r from-[#00A4FF] to-[#1F3A93] text-white shadow-lg shadow-[#00A4FF]/25'
                                                : 'bg-gradient-to-r from-[#1F3A93] to-[#00A4FF] text-white shadow-lg shadow-[#1F3A93]/25'
                                        }`}
                                    >
                                        <User className="w-5 h-5" />
                                        <span>تسجيل الدخول</span>
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

            {/* Custom Animations - Same as Login */}
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

                input[type="checkbox"]:checked {
                    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='m13.854 3.646-7.5 7.5a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6 10.293l7.146-7.147a.5.5 0 0 1 .708.708z'/%3e%3c/svg%3e");
                }

                input:focus {
                    outline: none;
                }

                * {
                    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
                    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
                    transition-duration: 300ms;
                }
            `}</style>
        </div>
    );
};

export default Register;


