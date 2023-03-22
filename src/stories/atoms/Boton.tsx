interface BotonProps {
  label: string;
}

export const Boton = ({ label }: BotonProps) => {
  return (
    <button className="bg-red-700 text-white px-5 py-2 rounded-md">
      {label}
    </button>
  );
};
