interface InputMonthsProps {
  value: number;
}

export const InputMonths = ({ value = 0 }: InputMonthsProps) => {
  return (
    <>
      <label className="relative text-gray-400 block">
        <input
          type="text"
          value={value}
          className="form-input py-3 px-4 bg-gray-200 text-stone-700 text-3xl appearance-none w-full block pl-14 rounded-md focus:outline-none focus:border focus:border-orange-400"
        />
        <span className="pointer-events-none absolute top-1/2 transform -translate-y-1/2 left-32 text-lg mt-1">
          meses
        </span>
      </label>
    </>
  );
};
