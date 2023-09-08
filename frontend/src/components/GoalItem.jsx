function GoalItem() {
  return (
    <div className="bg-gray-200 my-[10px] px-0 relative rounded-md p-6">
      <div className="font-bold">Date</div>
      <h2 className="font-bold">Text</h2>
      <button className="absolute top-[10px] right-[15px] cursor-pointer border-none font-bold">
        X
      </button>
    </div>
  );
}

export default GoalItem;
