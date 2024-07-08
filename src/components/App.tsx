import BackgroundHeading from "./BackgroundHeading";
import Footer from "./Footer";
import Haeder from "./Header";
import Sidebar from "./Sidebar";
import TodoList from "./TodoList";

function App() {
  return (
    <div className=" flex justify-center items-center flex-col font-sans bg-[#f1d4b3] min-h-screen">
      <BackgroundHeading />
      <main
        className="grid grid-cols-[7fr_4fr] grid-rows-[59px_1fr] rounded-[8px] shadow-[0_4px_4px_rgba(0,0,0,0.08)] relative  
      w-[972px] h-[636px] bg-white overflow-hidden"
      >
        <Haeder />
        <TodoList />
        <Sidebar />
      </main>
      <Footer />
    </div>
  );
}

export default App;
