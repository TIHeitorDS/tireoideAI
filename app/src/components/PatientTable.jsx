import * as Dialog from "@radix-ui/react-dialog";
import useFetchPatient from "../hook/useFetchPatient";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import PatientInputs from "./PatientInputs";
import HormoneDataInput from "./HormoneDataInput";
import { toast } from "sonner";
import axios from "axios";
import { useLocation } from "react-router-dom";

export default function PatientTable({ makeDiagnosis, searchPatient }) {
  const { patients } = useFetchPatient();
  const [filteredPatients, setFilteredPatients] = useState([]);
  const { register, handleSubmit, setValue, getValues } = useForm();
  const location = useLocation();

  useEffect(() => {
    setFilteredPatients(
      patients.filter((patient) =>
        patient.name.toLowerCase().includes(searchPatient.toLowerCase())
      )
    );
  }, [searchPatient, patients]);

  function getPatientData(name) {
    const patient = patients.find(
      (e) => e.name.toLowerCase() == name.toLowerCase()
    );

    let firstName = patient.name.split(" ");
    let lastName = firstName.slice(1).join(" ");

    setValue("name", firstName[0]);
    setValue("lastname", lastName);
    setValue("age", patient.age);
    setValue("sex", patient.sex);
    setValue("tt4", patient.TT4);
    setValue("fti", patient.FTI);
    setValue("t3", patient.T3);
    setValue("tsh", patient.TSH);
    setValue("t4u", patient.T4U);
  }

  function onEditPatient(id) {
    const patient = patients.find((e) => e.patient_code == id);
    const values = getValues();
    const newName = values.name + " " + values.lastname;

    try {
      axios.put(`http://localhost:8000/edit_patient/${patient.patient_code}/`, {
        name: newName,
        age: values.age,
        sex: values.sex,
        TT4: values.tt4,
        FTI: values.fti,
        T3: values.t3,
        TSH: values.tsh,
        T4U: values.t4u,
      });

      setFilteredPatients((prevPatients) =>
        prevPatients.map((p) =>
          p.patient_code === patient.patient_code
            ? {
                ...p,
                name: newName,
                age: values.age,
                sex: values.sex,
                TT4: values.tt4,
                FTI: values.fti,
                T3: values.t3,
                TSH: values.tsh,
                T4U: values.t4u,
              }
            : p
        )
      );

      toast.success("Dados do paciente editados com sucesso!");
    } catch (error) {
      toast.error("Erro ao editar dados do paciente!");
      console.log(error);
    }
  }

  async function onDeletePatient(id) {
    try {
      axios.delete(`http://localhost:8000/edit_patient/${id}/`);

      setFilteredPatients((prevPatients) =>
        prevPatients.filter((patient) => patient.patient_code !== id)
      );

      toast.success("Paciente deletado com sucesso!");
    } catch (error) {
      toast.error("Erro ao deletar paciente!");
    }
  }

  return (
    <table className="w-full divide-y divide-blue font-semibold text-xs 2xl:text-base mt-6">
      <thead className="bg-[#5cacc4]">
        <tr>
          <th className="px-6 py-3 text-center text-xs text-black-500 tracking-wider">
            Nome
          </th>
          <th className="px-6 py-3 text-center text-xs text-black-500 tracking-wider">
            Data de cadastrado
          </th>
          <th className="px-6 py-3 text-center text-xs text-black-500 tracking-wider">
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
              {location.pathname == "/realizar-diagnostico" && (
                <button
                  className="bg-blue rounded text-white text-xs py-[8px] px-[16px] font-redhat"
                  onClick={() => makeDiagnosis(patient.patient_code)}
                >
                  Realizar Diagnóstico
                </button>
              )}

              <Dialog.Root>
                <Dialog.Trigger asChild>
                  <button
                    type="button"
                    className="w-6"
                    aria-label="Editar paciente"
                    onClick={() => getPatientData(patient.name)}
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
                          onClick={() => onEditPatient(patient.patient_code)}
                        >
                          Salvar edição
                        </button>
                      </div>
                    </form>
                  </Dialog.Content>
                </Dialog.Portal>
              </Dialog.Root>

              <button
                type="button"
                className="w-6"
                onClick={() => onDeletePatient(patient.patient_code)}
              >
                <img src="delete.png" alt="ícone de lixeira" />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
