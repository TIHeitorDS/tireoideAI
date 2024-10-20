import * as Dialog from "@radix-ui/react-dialog";
import useFetchPatient from "../hook/useFetchPatient";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import PatientInputs from "./PatientInputs";
import HormoneDataInput from "./HormoneDataInput";

export default function PatientTable({ makeDiagnosis, patientName }) {
  const { patients } = useFetchPatient();
  const [filteredPatients, setFilteredPatients] = useState([]);
  const [searchPatient, setSearchPacient] = useState("");
  const { register, handleSubmit, setValue, getValues } = useForm();

  useEffect(() => {
    setFilteredPatients(
      patients.filter((patient) =>
        patient.name.toLowerCase().includes(searchPatient.toLowerCase())
      )
    );
  }, [searchPatient, patients]);

  function getPatientData(name) {
    const patient = patients.find(
      (e) => e.nome.toLowerCase() == name.toLowerCase()
    );

    let firstName = patient.nome.split(" ");
    let lastName = firstName.slice(1).join(" ");

    setValue("name", firstName[0]);
    setValue("lastname", lastName);
    setValue("age", patient.idade);
    setValue("sex", patient.sexo);
    setValue("tt4", patient.TT4);
    setValue("fti", patient.FTI);
    setValue("t3", patient.T3);
    setValue("tsh", patient.TSH);
    setValue("t4u", patient.T4U);
  }

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
        {filteredPatients.map((patient, key) => (
          <tr key={key}>
            <td className="px-6 py-4 whitespace-nowrap">{patient.name}</td>
            <td className="px-6 py-4 whitespace-nowrap">
              {patient.service_date}
            </td>
            <td className="px-6 py-4 whitespace-nowrap flex justify-center items-center gap-4 font-normal">
              <button
                className="bg-blue rounded text-white text-xs py-[8px] px-[16px] font-redhat"
                onClick={makeDiagnosis}
              >
                Realizar Diagnóstico
              </button>

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

                    <form
                      onSubmit={handleSubmit}
                      className="md:p-2 lg:p-8 space-x-3"
                    >
                      <PatientInputs register={register} />
                      <HormoneDataInput register={register} />

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
                    </form>
                  </Dialog.Content>
                </Dialog.Portal>
              </Dialog.Root>

              <button type="button" className="w-6">
                <img src="delete.png" alt="ícone de lixeira" />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
