export default function Login() {
  return (
    <>
      <div className="flex items-center h-screen w-9/12 m-auto space-x-12">
        <div className="w-1/2">
          <div>
            <p className="text-blue font-bold text-5xl tracking-widest mb-4">
              TireoideAI
            </p>

            <p className="text-xs">
              Utilizando um modelo de Machine Learning, o sistema realiza
              predições e exibe os resultados aos médicos, servindo como uma
              ferramenta de apoio para avaliações clínicas
            </p>
          </div>
        </div>

        <div className="bg-white border p-12 h-1/2 space-y-12">
          <p className="font-bold uppercase">selecione uma opção abaixo</p>

          <div className="flex flex-col space-y-6 font-medium">
            <button
              type="button"
              className="flex items-start gap-4 bg-white border-2 rounded-md py-2 px-1 w-fit-content"
            >
              <img src="Google.png" className="w-6 h-6" alt="" srcset="" />
              Continuar com Google
            </button>
            <button
              type="button"
              className="flex items-start gap-4 bg-blue border-2 text-white rounded py-2 px-1 w-fit-content"
            >
              <img src="Facebook.png" className="w-6 h-6" alt="" srcset="" />
              Continuar com Facebook
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
