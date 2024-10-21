export default function HormoneDataInput({ register }) {
  return (
    <>
      <div className="flex flex-col flex-wrap gap-4 mb-2">
        <div className="flex gap-4">
          <div className="flex flex-col items-start">
            <label htmlFor="tt4" className="text-xs 2xl:text-base mb-1">
              Total T4 (mg/dL)
            </label>
            <div className="flex items-center gap-1 grow">
              <input
                type="text"
                id="tt4"
                placeholder="T4 Total"
                autoComplete="off"
                {...register("tt4", { required: true })}
                className="md:p-2 xl:p-4 2xl:p-6 border rounded border-blue font-redhat w-24 2xl:h-8"
              />
            </div>
          </div>

          <div className="flex flex-col items-start">
            <label htmlFor="fti" className="text-xs 2xl:text-base mb-1 grow">
              FTI (mcg/dL)
            </label>
            <div className="flex items-center gap-1">
              <input
                type="text"
                id="fti"
                placeholder="FTI"
                autoComplete="off"
                {...register("fti", { required: true })}
                className="md:p-2 xl:p-4 2xl:p-6 border rounded border-blue font-redhat w-24 2xl:h-8"
              />
            </div>
          </div>

          <div className="flex flex-col items-start">
            <label htmlFor="t3" className="text-xs 2xl:text-base mb-1 grow">
              T3 (ng/dL)
            </label>
            <div className="flex items-center gap-1">
              <input
                type="text"
                id="t3"
                placeholder="T3"
                autoComplete="off"
                {...register("t3", { required: true })}
                className="md:p-2 xl:p-4 2xl:p-6 border rounded border-blue font-redhat w-24 2xl:h-8"
              />
            </div>
          </div>

          <div className="flex flex-col items-start">
            <label htmlFor="tsh" className="text-xs 2xl:text-base mb-1 grow">
              TSH (μUI/mL)
            </label>
            <div className="flex items-center gap-1">
              <input
                type="text"
                id="tsh"
                placeholder="TSH"
                autoComplete="off"
                {...register("tsh", { required: true })}
                className="md:p-2 xl:p-4 2xl:p-6 border rounded border-blue font-redhat w-24 2xl:h-8"
              />
            </div>
          </div>

          <div className="flex flex-col items-start">
            <label htmlFor="t4u" className="text-xs 2xl:text-base mb-1 grow">
              T4 Livre (ng/dL)
            </label>
            <div className="flex items-center gap-1">
              <input
                type="text"
                id="t4u"
                placeholder="T4 Livre"
                autoComplete="off"
                {...register("t4u", { required: true })}
                className="md:p-2 xl:p-4 2xl:p-6 border rounded border-blue font-redhat w-24 2xl:h-8"
              />
            </div>
          </div>
        </div>
        
        <div className="flex justify-start items-center gap-5">
          <label htmlFor="sick" className="text-xs 2xl:text-base">
            Possui algum distúrbio da tireoide?
          </label>

          <div className="flex items-center gap-1">
            <input
              type="radio"
              id="yes"
              value={1}
              {...register("sick", { required: true })}
            />
            <label
              htmlFor="yes"
              className="font-redhat text-sm ml-1 2xl:text-xl"
            >
              Sim
            </label>

            <input
              type="radio"
              id="no"
              value={0}
              {...register("sick", { required: true })}
              className="ml-4"
            />
            <label
              htmlFor="no"
              className="font-redhat text-sm ml-1 2xl:text-xl"
            >
              Não
            </label>
          </div>
        </div>
      </div>
    </>
  );
}
