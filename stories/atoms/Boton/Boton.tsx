import React from "react";

interface BotonProps {
  label: string;
  onClick?: () => void;
}

const Boton = ({ label, ...props }: BotonProps) => {
  return (
    <div>
      <button
        type="button"
        className="bg-violet-500 text-white px-5 py-3 rounded-md font-semibold hover:bg-violet-600"
        {...props}
      >
        {label}
      </button>
    </div>
  );
};

export default Boton;
