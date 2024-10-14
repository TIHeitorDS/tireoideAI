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
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi
              culpa voluptatum atque quam. Eum error odio, cupiditate voluptas
              quibusdam, repudiandae earum autem, officia vitae quo quas nulla
              cum eius commodi.
            </p>
          </div>
        </div>

        <div className="bg-white border p-12 h-1/2 space-y-12">
          <p className="font-bold uppercase">selecione uma opção abaixo</p>

          <div className="flex flex-col space-y-6 font-medium">
            <button
              type="button"
              className="bg-white border-2 rounded-md py-2 w-fit-content"
            >
              Continuar com Google
            </button>
            <button
              type="button"
              className="bg-blue border-2 text-white rounded py-2 w-fit-content"
            >
              Continuar com Facebook
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
