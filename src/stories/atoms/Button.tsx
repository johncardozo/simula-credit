interface BotonProps {
  label: string;
  onClick?: () => void;
}

export const Button = ({ label, ...props }: BotonProps) => {
  return (
    <button
      type="button"
      className="bg-violet-500 text-white text-lg px-10 py-5 rounded-md hover:bg-violet-600"
      {...props}
    >
      {label}
    </button>
  );
};
