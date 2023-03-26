import ReactSlider, { ReactSliderProps } from "react-slider";

import cn from "classnames";

const RangeSlider = <T extends number | readonly number[]>(
  _props: ReactSliderProps<T>
) => {
  return (
    <ReactSlider
      {..._props}
      renderThumb={(props, state) => (
        <div
          {...props}
          className={cn({
            "h-full aspect-square rounded-full outline-none bg-orange-400 text-xs flex items-center justify-center cursor-grab shadow-lg ring-4 ring-orange-200":
              true,
          })}
        >
          {/* {state.valueNow} */}
        </div>
      )}
      renderTrack={(props, state) => {
        const points = Array.isArray(state.value) ? state.value.length : null;
        const isMulti = points && points > 0;
        const isLast = isMulti ? state.index === points : state.index != 0;
        const isFirst = state.index === 0;
        return (
          <div
            {...props}
            className={cn({
              "h-2/5 top-1/2 -translate-y-1/2 rounded-full": true,
              "bg-gray-100": isMulti ? isFirst || isLast : isLast,
              "bg-orange-400": isMulti ? !isFirst || !isLast : isFirst,
            })}
          ></div>
        );
      }}
    />
  );
};
export default RangeSlider;
