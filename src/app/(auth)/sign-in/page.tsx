/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
import Link from 'next/link';
import React from 'react';

export default function login() {
  return (
        <main className="flex h-full w-screen">
            <div className='h-full w-1/2 bg-gradient-to-r from-indigo-900 to-blue-500 flex flex-col items-center justify-center text-white gap-5'>
                <h2 className='font-bold text-5xl'>Seja muito bem-vindo(a)!</h2>
                <p className='font-semibold text-xl'>Insira suas credenciais para acessar sua conta.</p>
            </div>
            <div className='h-full w-1/2 bg-slate-100 flex items-center justify-center'>
                <div className='h-3/4 w-2/3 bg-slate-500 shadow-lg shadow-black rounded-xl flex flex-col items-center justify-center gap-10'>
                    <div className='flex flex-col items-center justify-center'>
                        <h1 className='font-bold text-4xl text-white'>Entrar</h1>
                        <p className='font-bold text-2xl text-white'>Conecte-se a sua conta</p>
                    </div>
                    <form className='flex flex-col items-center justify-center gap-5 w-full'>
                        <div className='w-4/5'>
                            <label htmlFor="input-group-1" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">E-mail</label>
                            <div className="relative mb-6 w-full">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                                        <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                                        <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                                    </svg>
                                </div>
                                <input type="text" id="input-group-1" className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="E-mail" />
                            </div>
                        </div>
                        <div className='w-4/5'>
                            <label htmlFor="input-group-2" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Senha</label>
                            <div className="relative mb-6 w-full">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 24 24">
                                        <path d="M5 9H19V21H5z" opacity=".3"></path><path d="M12,1C8.636,1,6,3.636,6,7v2h2V7c0-2.243,1.757-4,4-4s4,1.757,4,4v2h2V7C18,3.636,15.364,1,12,1z"></path><path d="M18,8H6c-1.1,0-2,0.9-2,2v10c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V10C20,8.9,19.1,8,18,8z M18,20H6V10h12V20z"></path><path d="M12 14A1 1 0 1 0 12 16 1 1 0 1 0 12 14zM16 14A1 1 0 1 0 16 16 1 1 0 1 0 16 14zM8 14A1 1 0 1 0 8 16 1 1 0 1 0 8 14z"></path>
                                    </svg>
                                </div>
                                <input type="password" id="input-group-2" className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Senha" />
                            </div>
                            <Link href={''} className='text-blue-800'>Esqueçeu sua senha?</Link>
                        </div>

                        <button type="submit" className="w-4/5 shadow-sm shadow-sky-500 bg-sky-500 hover:bg-sky-700 text-white font-bold py-2.5 px-5 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Entrar</button>
                    </form>
                </div>
            </div>
        </main>
  );
}
