import GoalForm from "../components/GoalForm";
import GoalItem from "../components/GoalItem";

function Dashboard() {
  return (
    <>
      <section className="font-bold text-lg mb-[16px] py-0 px-[20px]">
        <h1>Welcome Emran</h1>
        <p className="text-red-400">Goals Dashboard</p>
      </section>
      <GoalForm />
      <section className="w-[70%] mx-auto">
        <div className="grid grid-cols-2 gap-[10px]">
          <GoalItem />
        </div>
        <h3 className="font-bold mb-[10px]">You have not set any goals</h3>
      </section>
    </>
  );
}

export default Dashboard;
