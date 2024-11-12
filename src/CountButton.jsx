import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";
export default function CountButton({ type, setCount }) {
  function handleClick() {
    setCount((prev) => {
      if (type === "plus") {
         return prev = prev + 1;
      } else {
        return prev > 0 ? prev - 1 : prev = 0;
      }
    });
  }
  return (
    <button className="count-btn" onClick={handleClick}>
      {type === "plus" ? (
        <PlusIcon className="count-btn-icon " />
      ) : (
        <MinusIcon className="count-btn-icon " />
      )}
    </button>
  );
}
