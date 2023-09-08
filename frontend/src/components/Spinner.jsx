const styleSpinner = {
  borderColor: "#000 transparent #555 transparent",
};

function Spinner() {
  return (
    <div className="fixed top-0 right-0 bottom-0 left-0 bg-gray-600 z-50 flex items-center justify-center">
      <div
        className="w-[64px] h-[64px] border-[8px] rounded-full"
        style={styleSpinner}
      ></div>
    </div>
  );
}

export default Spinner;
