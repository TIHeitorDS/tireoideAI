import { useState } from "react";
import Navbar from "../components/Navbar";
import HormoneDataInput from "../components/HormoneDataInput";
import PatientTable from "../components/PatientTable";

export default function MakeDiagnosis() {
  const [showHormoneDataInputs, setShowHormoneDataInputs] = useState(false);
  const [showPatients, setShowPatitents] = useState(false);

  function onShowHormoneDataInputs() {
    setShowHormoneDataInputs(!showHormoneDataInputs);
  }

  function onShowPatientTable() {
    setShowPatitents(!showPatients);
  }

  return (
    <>
      <Navbar page={"Realizar diagnóstico"} />

      <section className="p-6 space-y-4">
        {!showHormoneDataInputs && !showPatients && (
          <div className="flex flex-col justify-center gap-8 w-2/3 mx-auto">
            <p className="font-bold text-center text-2xl">
              Selecione uma das opções abaixo para relizar o diagnóstico
            </p>
            <div className="flex justify-center gap-6">
              <button
                className="bg-blue p-4 font-medium text-white"
                onClick={onShowPatientTable}
              >
                Paciente com cadastro
              </button>

              <button
                className="border border-blue p-4 font-medium"
                onClick={onShowHormoneDataInputs}
              >
                Paciente sem cadastro
              </button>
            </div>
          </div>
        )}

        {showHormoneDataInputs && (
          <div className="flex flex-col justify-center gap-8 w-1/2 mx-auto">
            <p className="font-bold text-2xl">Insira os dados obrigatórios para o diagnósticos</p>
            
            <HormoneDataInput />

            <div className="flex space-x-6">
              <button className="bg-blue py-2 px-12 font-medium text-white upper case">
                Realizar diagnóstico
              </button>

              <button
                className="py-2 px-12 border border-blue p-4 font-medium"
                onClick={onShowHormoneDataInputs}
              >
                voltar
              </button>
            </div>
          </div>
        )}

        {showPatients && (
          <>
            <p className="font-bold text-2xl">
              Selecione um paciente cadastrado para realizer o diagnóstico
            </p>
            <button
              className="py-2 px-12 border border-blue p-4 font-medium"
              onClick={onShowPatientTable}
            >
              voltar
            </button>

            <PatientTable />
          </>
        )}
      </section>
    </>
  );
}
