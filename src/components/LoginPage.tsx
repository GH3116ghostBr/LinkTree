import facebookIcon from "../images/Facebook_icone.jpg";
import googleIcon from "../images/Google_icone.png";

export function LoginPage() {

  return(
    <div className="w-screen h-screen bg-[#1F1422] flex items-center justify-center overflow-y-scroll">
      <div className="min-h-screen bg-gradient-to-b from-[#4B3A5C] to-[#3A2A4A]">
        <div className="p-2 m-4">
          <h1 className="text-center text-5xl">Bem-vindo ao Linktree</h1>
          <p className="text-center">Crie uma conta no linktree</p>
        </div>
        
        {/* Texto e campo de texto para digitar email */}
        <div className="p-6">
          <p className="px-6 py-1">Digite email ou username</p>
          <div className="flex justify-center">
            <input type="text" placeholder="Digite o seu email" className="bg-[#30261D] text-white rounded-full border-transparent border-yellow-300 focus:border-yellow-300 px-4 py-3 w-140"/>
          </div>
        </div>

        {/* Texto e campo de texto para digitar a senha */}
        <div className="flex justify-between">
        <p className="px-12 py-1">Digite sua senha</p>
        <a className="px-12 text-yellow-300 hover:underline">Esqueceu a senha?</a>
        </div>
        <div className="flex justify-center">
          <input type="password" placeholder="Digite a sua senha" className="text-mauve-400 bg-[#30261D] text-white rounded-full px-4 py-3 w-140"/>
        </div>

        <div className="flex justify-center">
          <button className="bg-yellow-300 font-bold text-3xl rounded-3xl hover:animate-spin px-4 py-1 m-5 hover:bg-yellow-200">Fazer login</button>
        </div>

        <p className="flex justify-center m-12 text-gray-400">---------------------------------Ou se conecte com---------------------------------</p>


        <div className="flex justify-evenly">
          <button className="flex items-center gap-2 border-2 border-yellow-300 rounded-3xl text-mauve-400 px-3 py-2 hover:underline">
            <img src={facebookIcon} className="w-5 h-5" />
            Facebook
          </button>

          <button className="flex items-center gap-2 border-2 border-yellow-300 rounded-3xl text-mauve-400 px-3 py-2 hover:underline">
            <img src={googleIcon} className="w-5 h-5" />
            Google
          </button> 
        </div>

        
      </div>
    </div>

  );
}
