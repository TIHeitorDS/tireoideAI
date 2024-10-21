import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import PatientTable from "../components/PatientTable";
import { useState } from "react";

export default function Patient() {
  const [name, setName] = useState("");

  return (
    <>
      <Navbar page={"Pacientes"} />
      <section className="p-6">
        <div className="flex flex-col gap-6">
          <p className="font-semibold lg:text-2xl">Busque por um paciente</p>

          <div className="mt-4">
            <input
              type="text"
              name=""
              id=""
              placeholder="Ex: Heitor"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-[496px] border border-blue rounded placeholder:text-xs p-2 placeholder:2xl:text-base 2xl:p-4 placeholder:font-semibold 2xl:h-10"
            />
          </div>
          <div>
            <Link
              to={"/cadastrar-paciente"}
              className="bg-blue rounded text-white text-xs 2xl:text-base py-[8px] px-[16px]"
            >
              Cadastrar paciente
            </Link>
          </div>
        </div>

        <div className="md:w-full md:mt-2 md:mx-auto lg:w-full grow overflow-y-scroll space-y-3.5 mb-14">
          <PatientTable searchPatient={name} />
        </div>
      </section>
    </>
  );
}
