export default function PatientInputs({ register }) {
  return (
    <>
      <div className="flex flex-col gap-6">
        <input
          type="text"
          id="name"
          placeholder="Nome"
          autoComplete="off"
          {...register("name", { required: true })}
          className="placeholder:text-xs 2xl:placeholder:text-base md:p-2 xl:p-3 2xl:p-8 border rounded border-blue font-redhat 2xl:h-10"
        />
        <input
          type="text"
          id="lastname"
          placeholder="Sobrenome"
          autoComplete="off"
          {...register("lastname", { required: true })}
          className="placeholder:text-xs 2xl:placeholder:text-base md:p-2 xl:p-3 2xl:p-8 border rounded border-blue font-redhat 2xl:h-10"
        />
        <input
          type="number"
          id="age"
          placeholder="Idade"
          autoComplete="off"
          min={0}
          {...register("age", { required: true })}
          className="placeholder:text-xs 2xl:placeholder:text-base md:p-2 xl:p-3 2xl:p-8 border rounded border-blue font-redhat 2xl:h-10"
        />
      </div>

      <div className="flex items-center my-6">
        <p className="font-redhat mr-4 text-sm 2xl:text-xl">Gênero: </p>

        <input
          type="radio"
          id="male"
          value="M"
          {...register("gender", { required: true })}
        />
        <label htmlFor="male" className="font-redhat text-sm ml-1 2xl:text-xl">
          Masculino
        </label>

        <input
          type="radio"
          id="female"
          value="F"
          className="ml-4"
          {...register("gender", { required: true })}
        />
        <label
          htmlFor="female"
          className="font-redhat text-sm ml-1 2xl:text-xl"
        >
          Feminino
        </label>
      </div>
    </>
  );
}
