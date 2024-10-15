import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col h-full justify-between">
      <div className="relative flex space-x-12">
        <img
          src="banner.png"
          alt="Banner"
          className="absolute inset-0 object-cover w-full"
        />

        <div className="relative z-10 w-1/2 text-white p-8 space-y-12">
          <h1 className="text-5xl font-bold">TireoidAI</h1>
          <p className="mt-4 text-lg">
            Bem-vindo(a),{" "}
            <span className="font-medium">Dr. Heitor Claudino Dantas</span>
          </p>

          <div className="mt-8">
            <p className="text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>

        <div className="relative z-10 ml-24 mt-12">
          <img src="doctor-profile.png" alt="" srcset="" />
        </div>
      </div>

      <div className="flex justify-center w-100 mt-16 relative z-10 gap-4">
        <Link
          to={"/cadastrar-paciente"}
          className="bg-white py-6 px-2 rounded border"
        >
          <span className="uppercase font-bold">cadastrar paciente</span>
        </Link>

        <button type="button" className="bg-white p-2 rounded border">
          <span className="uppercase font-bold">pacientes</span>
        </button>

        <button type="button" className="bg-white p-2 rounded border">
          <span className="uppercase font-bold">realizar diagnóstico</span>
        </button>

        <button type="button" className="bg-white p-2 rounded border">
          <span className="uppercase font-bold">sobre o modelo de ia</span>
        </button>
      </div>

      <div className="flex justify-around mx-6 gap-6 pb-8">
        <div>
          <p className="underline font-medium">Total de pacientes</p>
          <span>2</span>
        </div>

        <div>
          <p className="underline font-medium">Tireoide</p>
          <span>1</span>
        </div>

        <div>
          <p className="underline font-medium">Consultas do dia</p>
          <span>1</span>
        </div>
      </div>
    </div>
  );
}
