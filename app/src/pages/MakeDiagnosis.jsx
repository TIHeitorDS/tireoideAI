import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import HormoneDataInput from "../components/HormoneDataInput";
import PatientTable from "../components/PatientTable";
import useFetchPatient from "../hook/useFetchPatient";

export default function MakeDiagnosis() {
  const { register, handleSubmit } = useForm();
  const { patients } = useFetchPatient();
  const [showHormoneDataInputs, setShowHormoneDataInputs] = useState(false);
  const [showPatients, setShowPatitents] = useState(false);
  const [showDiagnosis, setShowDiagnosis] = useState(false);
  const [patient, setPatient] = useState(null);
  const [pred, setPred] = useState("");

  function onShowHormoneDataInputs() {
    setShowHormoneDataInputs(!showHormoneDataInputs);

    if (showDiagnosis) setShowDiagnosis(false);
  }

  function onShowPatientTable() {
    setShowPatitents(!showPatients);

    if (showDiagnosis) setShowDiagnosis(false);
  }

  function onShowDiagnosis(id) {
    setShowDiagnosis(!showDiagnosis);

    setPred(onSearchPatient(id).positive);

    setPatient(onSearchPatient(id));

    if (showPatients) setShowPatitents(false);
    if (showHormoneDataInputs) setShowHormoneDataInputs(false);
  }

  function onSearchPatient(id) {
    return patients.find((patient) => patient.patient_code == id);
  }

  function onHandleSubmit(data) {
    setShowDiagnosis(true);
    setPatient(onSearchPatient(data.patient_code));
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

            <form onSubmit={handleSubmit(onHandleSubmit)}>
              <HormoneDataInput register={register} />

              <div className="flex space-x-6">
                <button
                  type="submit"
                  className="bg-blue py-2 px-12 font-medium text-white upper case"
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
            </form>
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

            <PatientTable makeDiagnosis={onShowDiagnosis} searchPatient={""} />
          </>
        )}

        {showDiagnosis && (
          <div className="space-y-14">
            <p>
              <span className="font-bold text-2xl">Nome do paciente:</span>{" "}
              {patient.name}
            </p>
            <div className="flex justify-around">
              <div>
                <p className="font-bold text-xl">Níveis hormônais </p>

                <ul>
                  <li>Total T4: {patient.T4U}</li>
                  <li>FTI: {patient.FTI}</li>
                  <li>T3: {patient.T3}</li>
                  <li>TSH: {patient.TSH}</li>
                  <li>T4 (Livre): {patient.TT4}</li>
                </ul>
              </div>

              <div>
                <p>
                  <span className="font-bold text-xl">
                    Chances de ter a doença:
                  </span>{" "}
                  {pred ? "Alta" : "Baixa"}
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
