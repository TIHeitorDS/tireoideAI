import { useState } from "react";
import Navbar from "../components/Navbar";
import HormoneDataInput from "../components/HormoneDataInput";
import PatientTable from "../components/PatientTable";

export default function MakeDiagnosis() {
  const [showHormoneDataInputs, setShowHormoneDataInputs] = useState(false);
  const [showPatients, setShowPatitents] = useState(false);
  const [showDiagnosis, setShowDiagnosis] = useState(false);

  function onShowHormoneDataInputs() {
    setShowHormoneDataInputs(!showHormoneDataInputs);

    if (showDiagnosis) setShowDiagnosis(false);
  }

  function onShowPatientTable() {
    setShowPatitents(!showPatients);

    if (showDiagnosis) setShowDiagnosis(false);
  }

  function onShowDiagnosis() {
    setShowDiagnosis(!showDiagnosis);

    if (showPatients) setShowPatitents(false);
    if (showHormoneDataInputs) setShowHormoneDataInputs(false);
  }

  return (
    <>
      <Navbar page={"Realizar diagnóstico"} />

      <section className="p-6 space-y-4">
        {!showHormoneDataInputs && !showPatients && !showDiagnosis && (
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
            <p className="font-bold text-2xl">
              Insira os dados obrigatórios para o diagnósticos
            </p>

            <HormoneDataInput />

            <div className="flex space-x-6">
              <button
                className="bg-blue py-2 px-12 font-medium text-white upper case"
                onClick={onShowDiagnosis}
              >
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

            <PatientTable makeDiagnosis={onShowDiagnosis} />
          </>
        )}

        {showDiagnosis && (
          <div className="space-y-14">
            <p>
              <span className="font-bold text-2xl">Nome do paciente:</span>{" "}
              Maria Helena
            </p>
            <div className="flex justify-around">
              <div>
                <p className="font-bold text-xl">Níveis hormônais </p>

                <ul>
                  <li>Total T4: </li>
                  <li>FTI: </li>
                  <li>T3: </li>
                  <li>TSH: </li>
                  <li>T4 (Livre): </li>
                </ul>
              </div>

              <div>
                <p>
                  <span className="font-bold text-xl">
                    Chances de ter a doença:
                  </span>{" "}
                  14%
                </p>
              </div>
            </div>
            <div>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque
                suscipit placeat, maxime ex est eius quisquam vero illo
                excepturi tempora veniam? Laborum, non aliquid. Incidunt
                praesentium ratione nulla ipsum expedita.
              </p>
            </div>
            <button
              className="py-2 px-12 border bg-blue p-4 font-medium text-white"
              onClick={onShowPatientTable}
            >
              Realizar novo diagnóstico
            </button>{" "}
          </div>
        )}
      </section>
    </>
  );
}
