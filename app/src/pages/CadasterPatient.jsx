import { Link } from "react-router-dom";
import PatientInput from "../components/PacienteInputs";
import { useState } from "react";
import HormoneDataInput from "../components/HormoneDataInput";

export default function CadasterPatient() {
  const [isChecked, setIsChecked] = useState(false);

  function onShowHomoneDataInput(e) {
    setIsChecked(e.target.checked);
  }

  return (
    <>
      <nav className="flex gap-2 bg-blue p-6">
        <Link to={"/"}>⬅️</Link>

        <p className="text-white font-medium">Cadastrar paciente</p>
      </nav>

      <div className="w-1/3 p-6">
        <form>
          <PatientInput />

          <div className="flex items-center gap-2 my-10">
            <input type="checkbox" name="data" id="data" checked={isChecked} onChange={onShowHomoneDataInput}/>
            <label htmlFor="data">Paciente possui dados para predição?</label>
          </div>

          {isChecked && <HormoneDataInput />}

          <button
            type="submit"
            className="bg-blue text-white p-3 text-xs rounded 2xl:text-lg 2xl:p-3"
          >
            Cadastrar
          </button>
        </form>
      </div>
    </>
  );
}
