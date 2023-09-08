function GoalForm() {
  return (
    <section className="form">
      <form>
        <div className="mb-[10px]">
          <label htmlFor="text" className="text-left block mb-[5px] ml-[3px]">
            Goal
          </label>
          <input
            type="text"
            className="w-full p-[10px] border border-green-200 rounded-md mb-[10px]"
            id="text"
            name="text"
            value="name"
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-[10px]">
          <button
            type="submit"
            className="py-[10px] px-[20px] bg-gray-800 text-white font-bold text-lg rounded-md cursor-pointer text-center flex items-center justify-center w-full mb-[20px]"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}

export default GoalForm;
