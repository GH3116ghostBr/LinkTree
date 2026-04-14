import { useState } from "react";
import facebookIcon from "../images/Facebook_icone.jpg";
import googleIcon from "../images/Google_icone.png";

export function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <div className="w-screen min-h-screen bg-[#000000fd] flex flex-col items-center justify-center p-4">
      {/* Card principal */}
      <div className="w-full max-w-md bg-gradient-to-b from-[#070aa0] to-[#000000] rounded-2xl border border-black shadow-2xl shadow-yellow-300/10 overflow-hidden">
        <div className="p-8">

          {/* Header */}
          <div className="flex flex-col items-center mb-10">
            <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mb-4 shadow-lg shadow-yellow-300/30">
              <span className="text-[#1F1422] text-4xl font-bold">🔗</span>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-white text-center">
              Bem-vindo ao Linktree
            </h1>
            <p className="text-purple-400 mt-2 text-center text-sm">
              Faça login para gerenciar seus links
            </p>
          </div>

          {/* Formulário */}
          <div className="space-y-5">

            {/* Campo: Email/Username */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-purple-300" htmlFor="username">
                Usuário ou E-mail
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-100 text-lg">
                  👤
                </span>
                <input
                  id="username"
                  name="username"
                  type="text"
                  placeholder="Digite seu usuário ou e-mail"
                  className="w-full pl-10 pr-4 py-3 bg-[#30261D]/60 text-white border border-yellow-300/20 rounded-full focus:ring-2 focus:ring-yellow-300 focus:border-transparent outline-none transition-all placeholder:text-purple-400"
                />
              </div>
            </div>

            {/* Campo: Senha */}
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <label className="text-sm font-semibold text-purple-300" htmlFor="password">
                  Senha
                </label>
                <a className="text-purple-300 hover:underline text-sm font-medium" href="#">
                  Esqueceu a senha?
                </a>
              </div>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-purple-300 text-lg">
                  🔒
                </span>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Digite sua senha"
                  className="w-full pl-10 pr-12 py-3 bg-[#30261D]/60 text-white border border-yellow-300/20 rounded-full focus:ring-2 focus:ring-yellow-300 focus:border-transparent outline-none transition-all placeholder:text-purple-400"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-purple-400 hover:text-yellow-300 transition-colors text-sm"
                >
                  {showPassword ? "🙈" : "👁️"}
                </button>
              </div>
            </div>

            {/* Lembrar de mim */}
            <div className="flex items-center gap-2 cursor-pointer group">
              <input
                type="checkbox"
                id="remember"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
                className="rounded border-yellow-300/30 text-yellow-300 focus:ring-yellow-300 bg-transparent accent-yellow-300"
              />
              <label
                htmlFor="remember"
                className="text-purple-300 text-sm group-hover:text-yellow-300 transition-colors cursor-pointer"
              >
                Lembrar de mim
              </label>
            </div>

            {/* Botão de login */}
            <button
              type="submit"
              className="w-full bg-yellow-400 hover:bg-yellow-400 text-[#1F1422] font-bold text-lg py-3 rounded-full shadow-lg shadow-yellow-300/30 transition-all active:scale-[0.98]"
            >
              Fazer login
            </button>
          </div>

          {/* Divisor */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-black-300/20" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-[#05041b] px-4 text-white tracking-widest">
                Ou se conecte com
              </span>
            </div>
          </div>

          {/* Botões sociais */}
          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-full border border-yellow-400 hover:bg-yellow-300/10 transition-colors text-sm font-medium text-white">
              <img src={facebookIcon} alt="Facebook" className="w-5 h-5 rounded-full" />
              Facebook
            </button>
            <button className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-full border border-yellow-400 hover:bg-yellow-300/10 transition-colors text-sm font-medium text-white">
              <img src={googleIcon} alt="Google" className="w-5 h-5" />
              Google
            </button>
          </div>
        </div>

        {/* Rodapé do card */}
        <div className="bg-[#00000]/40 p-5 border-t border-yellow-300/10 text-center">
          <p className="text-blue-700 text-sm">
            Não tem uma conta?{" "}
            <a className="text-yellow-400 font-bold hover:underline ml-1" href="#">
              Criar uma conta
            </a>
          </p>
        </div>
      </div>

      {/* Links do rodapé */}
      <div className="mt-6 text-white text-xs flex gap-4 uppercase tracking-widest font-semibold">
        <a className="hover:text-yellow-400 transition-colors" href="#">Privacidade</a>
        <span>•</span>
        <a className="hover:text-yellow-400 transition-colors" href="#">Termos</a>
        <span>•</span>
        <a className="hover:text-yellow-400 transition-colors" href="#">Ajuda</a>
      </div>
    </div>
  );
}