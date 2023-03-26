interface TitleProps {
  /**
   * Content of the title
   */
  text: string;
  /**
   * How large the title should be?
   */
  size?: "small" | "medium" | "large";
}

export const Title = ({ text = "title", size = "large" }: TitleProps) => {
  return (
    <>
      {size === "large" ? (
        <div className="text-violet-500 text-2xl uppercase font-semibold">
          {text}
        </div>
      ) : size === "medium" ? (
        <div className="text-violet-500 text-xl uppercase font-semibold">
          {text}
        </div>
      ) : (
        <div className="text-violet-500 text-base uppercase font-semibold">
          {text}
        </div>
      )}
    </>
  );
};
