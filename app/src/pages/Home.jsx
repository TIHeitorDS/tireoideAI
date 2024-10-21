import { Link } from "react-router-dom";
import useFetchPatient from "../hook/useFetchPatient";
import * as Dialog from "@radix-ui/react-dialog";

export default function Home() {
  const { totalPatients, patientsWithTiroid, appointmentsToday } =
    useFetchPatient();

  return (
    <div className="flex flex-col h-full justify-between">
      <div className="relative flex space-x-12">
        <img
          src="banner.png"
          alt="Banner"
          className="absolute inset-0 object-cover w-full"
        />

        <div className="relative z-10 w-1/2 text-white p-8 space-y-12">
          <h1 className="text-5xl font-bold">TireoideAI</h1>
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

        <Link to={"/pacientes"} className="bg-white py-6 px-2 rounded border">
          <span className="uppercase font-bold">pacientes</span>
        </Link>

        <Link
          to={"/realizar-diagnostico"}
          className="bg-white py-6 px-2 rounded border"
        >
          <span className="uppercase font-bold">realizar diagnóstico</span>
        </Link>

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <button className="bg-white p-2 rounded border">
              <span className="uppercase font-bold">Sobre o modelo de ia</span>
            </button>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-30 z-40" />
            <Dialog.Content className="fixed bg-white p-6 rounded-md shadow-lg top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
              <Dialog.Title>
                <p className="text-xl font-medium">Sobre o modelo de IA</p>
              </Dialog.Title>
              <p className="mt-2">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam,
                quibusdam ratione eos magnam architecto ea consequatur ipsum
                pariatur perspiciatis nam perferendis aut dolore inventore
                distinctio quos accusamus vero tenetur? Maiores?
              </p>

              <div className="flex justify-end mt-6">
                <Dialog.Close asChild>
                  <button
                    className="bg-red-500 py-2 px-4 rounded rounded-5 text-white"
                    aria-label="Close"
                  >
                    Fechar
                  </button>
                </Dialog.Close>
              </div>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <button className="bg-white p-2 rounded border">
              <span className="uppercase font-bold">Configurações</span>
            </button>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-30 z-40" />
            <Dialog.Content className="fixed w-1/2 bg-white p-6 rounded-md shadow-lg top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
              <Dialog.Title>
                <p className="text-xl font-medium p-2 mb-4">Configurações</p>
              </Dialog.Title>

              <div className="flex flex-col gap-5">
                <p className="font-medium">Conta</p>

                <div className="space-x-6">
                  <Link
                    className="bg-blue py-2 px-4 rounded rounded-5 text-white"
                    to={"/login"}
                  >
                    Sair do sistema
                  </Link>

                  <Link
                    className="bg-blue py-2 px-4 rounded rounded-5 text-white"
                    to={"http://localhost:8000/admin/"}
                  >
                    Área administrativa
                  </Link>
                </div>
              </div>

              <div className="flex justify-end mt-6">
                <Dialog.Close asChild>
                  <button
                    className="bg-red-500 py-2 px-4 rounded rounded-5 text-white"
                    aria-label="Close"
                  >
                    Fechar
                  </button>
                </Dialog.Close>
              </div>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>

      <div className="flex justify-around mx-6 gap-6 pb-8">
        <div>
          <p className="underline font-medium">Total de pacientes</p>
          <span>{totalPatients}</span>
        </div>

        <div>
          <p className="underline font-medium">Tireoide</p>
          <span>{patientsWithTiroid}</span>
        </div>

        <div>
          <p className="underline font-medium">Consultas do dia</p>
          <span>{appointmentsToday}</span>
        </div>
      </div>
    </div>
  );
}
