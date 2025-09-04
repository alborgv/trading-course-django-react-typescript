import React, { useState } from 'react';

interface LoginFormProps {
    onSubmit?: (email: string, password: string) => void;
    onForgotPassword?: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit, onForgotPassword }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [showError, setShowError] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        setError('');
        setShowError(false);
        
        if (!email || !password) {
            setError('Por favor, complete todos los campos');
            setShowError(true);
            return;
        }

        if (!email.includes('@')) {
            setError('Por favor, ingrese un email válido');
            setShowError(true);
            return;
        }

        setIsLoading(true);
        
        setTimeout(() => {
            setIsLoading(false);
            setError('Email o contraseña incorrectos. Intente nuevamente.');
            setShowError(true);
            
            if (onSubmit) {
                onSubmit(email, password);
            }
        }, 1500);
    };

    const handleForgotPassword = () => {
        alert('Funcionalidad de recuperación de contraseña no implementada en esta demo');
        
        if (onForgotPassword) {
            onForgotPassword();
        }
    };

    const handleInputChange = () => {
        if (showError) {
            setShowError(false);
            setError('');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-secondary bg-gradient-to-b from-neutral-800/30 via-black/10 to-neutral-800/30 px-4">
            <div className="w-full max-w-md">
                <div className="bg-blue-950 border-2 border-l-0 border-r-0 border-t-primaryText border-b-primaryText p-8">
                    <div className="text-center mb-8">
                        <h2 className="text-2xl font-bold text-neutral-200 mb-3">
                            LOGIN
                        </h2>
                        <p className="text-neutral-300 text-sm">
                            Fill out the form to log in. Use the data provided during registration.
                        </p>
                        <div className="mt-4 p-3 bg-yellow-900/30 border border-yellow-600/50 rounded-md">
                            <p className="text-yellow-200 text-xs">
                                🎯 Demo: Este formulario es una simulación. Cualquier dato será "incorrecto".
                            </p>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {showError && (
                            <div className="p-3 bg-red-900/30 border border-red-600/50 rounded-md animate-pulse">
                                <p className="text-red-200 text-sm flex items-center">
                                    <span className="mr-2">⚠️</span>
                                    {error}
                                </p>
                            </div>
                        )}

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-neutral-200 mb-2">
                                Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                    handleInputChange();
                                }}
                                className="w-full px-4 py-3 border text-white bg-neutral-800/50 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primaryText focus:border-transparent transition-colors"
                                placeholder="Enter your email"
                                required
                                disabled={isLoading}
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-neutral-200 mb-2">
                                Password
                            </label>
                            <input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                    handleInputChange();
                                }}
                                className="w-full px-4 py-3 border text-white bg-neutral-800/50 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primaryText focus:border-transparent transition-colors"
                                placeholder="Enter your password"
                                required
                                disabled={isLoading}
                            />
                        </div>

                        <div className="flex items-center justify-between gap-4">
                            <button
                                type="submit"
                                disabled={isLoading}
                                className={`bg-primaryText hover:bg-primaryTextHover text-neutral-200 font-medium py-2 px-10 text-sm rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-primaryText focus:ring-offset-2 flex items-center gap-2 ${
                                    isLoading ? 'opacity-50 cursor-not-allowed' : ''
                                }`}
                            >
                                {isLoading ? (
                                    <>
                                        <div className="animate-spin h-4 w-4 border-2 border-neutral-200 border-t-transparent rounded-full"></div>
                                        Validating...
                                    </>
                                ) : (
                                    'Login'
                                )}
                            </button>

                            <button
                                type="button"
                                onClick={handleForgotPassword}
                                disabled={isLoading}
                                className="text-white hover:text-primaryText cursor-pointer text-sm font-medium transition-colors hover:underline disabled:opacity-50"
                            >
                                Forgot password?
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;