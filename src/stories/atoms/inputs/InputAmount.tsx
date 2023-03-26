interface InputAmountProps {
  value: number;
}

export const InputAmount = ({ value = 0 }: InputAmountProps) => {
  const formatNumber = (value: number) => {
    const n = value.toString();
    // Format number 1234567 to 1,234,567
    return n.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };
  return (
    <>
      <label className="relative text-gray-400 block">
        <span className="pointer-events-none absolute top-1/2 transform -translate-y-1/2 left-7 text-lg">
          $
        </span>
        <input
          type="text"
          value={formatNumber(value)}
          className="form-input py-3 px-4 bg-gray-100 text-stone-700 text-3xl appearance-none w-full block pl-14 rounded-md focus:outline-none focus:border focus:border-orange-400"
        />
      </label>
    </>
  );
};
