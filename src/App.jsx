

function App() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-screen">
      <h1 className="text-3xl text-red-500 font-bold underline">
        Hello world!
      </h1>

      <input type="email" class="form-input px-4 py-3 rounded-full" />

      <select class="form-select px-4 py-3 rounded-full">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>

      <input type="checkbox" class="form-checkbox rounded text-red-500" />
    </div>
  );
}

export default App;
