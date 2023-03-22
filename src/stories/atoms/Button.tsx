interface BotonProps {
  label: string;
  onClick?: () => void;
}

export const Button = ({ label, ...props }: BotonProps) => {
  return (
    <button
      type="button"
      className="bg-violet-500 text-white px-8 py-4 rounded-md"
      {...props}
    >
      {label}
    </button>
  );
};
