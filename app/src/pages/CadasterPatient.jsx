import { useForm } from "react-hook-form";
import { toast } from "sonner";
import PatientInputs from "../components/PatientInputs";
import HormoneDataInput from "../components/HormoneDataInput";
import Navbar from "../components/Navbar";
import axios from "axios";

export default function CadasterPatient() {
  const { register, handleSubmit, setValue, watch, reset } = useForm();
  const isChecked = watch("data", false);

  async function onSubmit(data) {   
    const queryParams = new URLSearchParams({
      name: `${data.name} ${data.lastname}`,
      age: data.age,
      sex: data.gender,
      patient_sick: data.sick,
      TT4: data.tt4 ?? "0",
      FTI: data.fti ?? "0",
      T3: data.t3 ?? "0",
      TSH: data.tsh ?? "0",
      T4U: data.t4u ?? "0",
    }).toString();

    try {
      await axios.get(`http://localhost:8000/cadaster_patient/?${queryParams}`);
      toast.success("Paciente cadastrado com sucesso!");
      reset();
    } catch (error) {
      toast.error("Erro ao cadastrar paciente!");
    }
  }

  function onCheckboxChange(e) {
    const { checked } = e.target;
    setValue("data", checked);
  }

  return (
    <>
      <Navbar page="cadastra paciente" />
      <div className="w-2/5 p-6 mx-auto">
        <form onSubmit={handleSubmit(onSubmit)}>
          <PatientInputs register={register} />

          <div className="flex items-center gap-2 my-10">
            <input
              type="checkbox"
              name="data"
              id="data"
              checked={isChecked}
              onChange={onCheckboxChange}
            />
            <label htmlFor="data">Paciente possui dados para predição?</label>
          </div>

          {isChecked && <HormoneDataInput register={register} />}

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
