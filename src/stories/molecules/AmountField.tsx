import { useState } from "react";
import { InputAmount } from "../atoms/inputs/InputAmount";
import { Label } from "../atoms/Label";
import RangeSlider from "../atoms/RangeSlider";

export const AmountField = () => {
  const [amount, setAmount] = useState<number>(10_000_000);

  return (
    <div className="flex flex-col">
      <Label text="Monto" icon="money" />
      {/* FIXME: Implement onChange event */}
      <InputAmount value={amount} />
      <RangeSlider
        min={10_000_000}
        max={1_000_000_000}
        value={amount}
        className="h-6 mt-3"
        onChange={(v) => setAmount(Number(v))}
      />
    </div>
  );
};
