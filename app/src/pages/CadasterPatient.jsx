import { useState } from "react";
import PatientInputs from "../components/PatientInputs";
import HormoneDataInput from "../components/HormoneDataInput";
import Navbar from "../components/Navbar";

export default function CadasterPatient() {
  const [isChecked, setIsChecked] = useState(false);

  function onShowHomoneDataInput(e) {
    setIsChecked(e.target.checked);
  }

  return (
    <>
      <Navbar page="cadastra paciente" />
      <div className="w-2/3 p-6 mx-auto">
        <form>
          <PatientInputs />

          <div className="flex items-center gap-2 my-10">
            <input
              type="checkbox"
              name="data"
              id="data"
              checked={isChecked}
              onChange={onShowHomoneDataInput}
            />
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
