import {
  FaDollarSign,
  FaClock,
  FaLandmark,
  FaRegCalendar,
  FaQuestion,
  FaMoneyBill,
} from "react-icons/fa";

interface LabelProps {
  text: string;
  icon?: "money" | "clock" | "bank" | "date";
}

export const Label = ({ text = "label", icon = "money" }: LabelProps) => {
  return (
    <div className="flex gap-3 items-center">
      {icon === "money" ? (
        <FaMoneyBill className="text-gray-300 text-lg" />
      ) : icon === "clock" ? (
        <FaClock className="text-gray-300 text-lg" />
      ) : icon === "bank" ? (
        <FaLandmark className="text-gray-300 text-lg" />
      ) : icon === "date" ? (
        <FaRegCalendar className="text-gray-300 text-lg" />
      ) : (
        <FaQuestion className="text-gray-300 text-lg" />
      )}
      <label className="text-2xl text-stone-700">{text}</label>
    </div>
  );
};
