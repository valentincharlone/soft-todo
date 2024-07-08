type ButtonProps = {
  buttonType?: "primary" | "secondary";
  children: React.ReactNode;
  onClick?: () => Promise<void>;
};

export default function Button({ buttonType, children, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      type="submit"
      className={`${
        buttonType === "secondary" ? "opacity-[85%]" : ""
      } h-[45px] bg-[#473a2b] hover:bg-[#322618] w-full text-white rounded-[5px] cursor-pointer`}
    >
      {children}
    </button>
  );
}
