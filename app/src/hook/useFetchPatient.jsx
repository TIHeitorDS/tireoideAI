import { useState, useEffect } from "react";
import axios from "axios";

export default function useFetchPatient() {
  const [patients, setPatients] = useState([]);
  const [totalPatients, setTotalPatients] = useState(0);
  const [patientsWithHypo, setPatientsWithHypo] = useState(0);
  const [appointmentsToday, setAppointmentsToday] = useState(0);

  useEffect(() => {
    const getPatients = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/patients/");
        const data = response.data;

        setPatients(data.pacientes);
        setTotalPatients(data.total_pacientes);
        setPatientsWithHypo(data.pacientes_com_hipo);
        setPatients(data.pacientes);
        setAppointmentsToday(data.consultas_hoje);
      } catch (error) {
        console.log(error);
      }
    };

    getPatients();
  }, []);

  return { patients, totalPatients, patientsWithHypo, appointmentsToday };
}
