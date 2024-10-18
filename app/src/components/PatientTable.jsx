import * as Dialog from "@radix-ui/react-dialog";
import { Link } from "react-router-dom";
export default function PatientTable() {
  return (
    <table className="w-full divide-y divide-blue font-semibold text-xs 2xl:text-base mt-6">
      <thead className="bg-[#75BDE43D]">
        <tr>
          <th className="px-6 py-3 text-center text-xs text-gray-500 tracking-wider">
            Nome
          </th>
          <th className="px-6 py-3 text-center text-xs text-gray-500 tracking-wider">
            Último diagnóstico
          </th>
          <th className="px-6 py-3 text-center text-xs text-gray-500 tracking-wider">
            Ações
          </th>
        </tr>
      </thead>

      <tbody className="bg-white divide-y divide-blue text-center">
        <tr>
          <td className="px-6 py-4 whitespace-nowrap">Maria Helena</td>
          <td className="px-6 py-4 whitespace-nowrap">18/10/2024</td>
          <td className="px-6 py-4 whitespace-nowrap flex justify-center items-center gap-4 font-normal">
            <Link
              to={`/`}
              className="bg-blue rounded text-white text-xs py-[8px] px-[16px] font-redhat"
            >
              Realizar Diagnóstico
            </Link>

            <Dialog.Root>
              <Dialog.Trigger asChild>
                <button
                  type="button"
                  className="w-6"
                  aria-label="Editar paciente"
                >
                  <img src="edit.jpg" alt="ícone de edição" />
                </button>
              </Dialog.Trigger>

              <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-30" />

                <Dialog.Content className="fixed bg-white p-6 rounded-md shadow-lg top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <Dialog.Title>Editação de paciente</Dialog.Title>
                  <Dialog.Description className="mt-2 mb-4">
                    Atualize as informações do paciente abaixo.
                  </Dialog.Description>

                  {/* <form
                            onSubmit={handleSubmit}
                            className="md:p-2 lg:p-8 space-x-3"
                          >
                            <PatientInput register={register} />
                            <DataInput register={register} />

                            <div className="flex space-x-4 mt-4">
                              <Dialog.Close asChild>
                                <button
                                  type="button"
                                  className="bg-red-500 rounded text-white text-xs 2xl:text-xl py-2 px-4"
                                >
                                  Cancelar edição
                                </button>
                              </Dialog.Close>

                              <button
                                type="button"
                                className="bg-blue rounded text-white text-xs 2xl:text-xl py-2 px-4"
                              >
                                Salvar edição
                              </button>
                            </div>
                          </form> */}
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>

            <button type="button" className="w-6">
              <img src="delete.png" alt="ícone de lixeira" />
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
