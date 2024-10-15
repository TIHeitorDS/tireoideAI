export default function HormoneDataInput() {
  return (
    <>
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
              className="md:p-2 xl:p-4 2xl:p-6 border rounded border-blue font-redhat w-24 2xl:h-8"
            />
          </div>
        </div>
      </div>

      <div className="flex items-center mt-3 mb-10 2xl:mt-6">
        <input
          type="checkbox"
          id="pregnant"
          name="pregnant"
          className="w-4 h-4 border-2 border-blue bg-white checked:bg-blue checked:border-0"
        />
        <label
          htmlFor="pregnant"
          className="ml-3 font-redhat text-xs 2xl:text-xl"
        >
          Está grávida?
        </label>
      </div>
    </>
  );
}
