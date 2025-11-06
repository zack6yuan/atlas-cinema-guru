export default function Genres() {
  return (
    <div className="">
      <div className="row">
        <p className="mb-2">Genres</p>
      </div>
      <div className="">
        <div className="flex row mb-2">
          <button className="cursor-pointer col mr-2 p-3 border-2 rounded-full border-teal-400">
            <p>Romance</p>
          </button>
          <button className="cursor-pointer col mr-2 p-3 border-2 rounded-full border-teal-400">
            <p>Horror</p>
          </button>
          <button className="cursor-pointer col mr-2 p-3 border-2 rounded-full border-teal-400">
            <p>Drama</p>
          </button>
          <button className="cursor-pointer col mr-2 p-3 border-2 rounded-full border-teal-400">
            <p>Action</p>
          </button>
          <button className="cursor-pointer col p-3 border-2 rounded-full border-teal-400">
            <p>Mystery</p>
          </button>
        </div>
        <div className="flex flex-row">
          <button className="cursor-pointer col mr-2 p-3 border-2 rounded-full border-teal-400">
            <p>Fantasy</p>
          </button>
          <button className="cursor-pointer col mr-2 p-3 border-2 rounded-full border-teal-400">
            <p>Thriller</p>
          </button>
          <button className="cursor-pointer col mr-2 p-6 border-2 rounded-full border-teal-400">
            <p>Western</p>
          </button>
          <button className="cursor-pointer col mr-2 p-3 border-2 rounded-full border-teal-400">
            <p>Sci-Fi</p>
          </button>
          <button className="cursor-pointer col p-3 border-2 rounded-full border-teal-400">
            <p>Adventure</p>
          </button>
        </div>
      </div>
    </div>
  );
}
