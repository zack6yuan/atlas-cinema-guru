export default function Genres() {
  return (
    <div className="">
      <div className="row">
        <p className="mb-2">Genres</p>
      </div>
      <div className="flex row mb-2">
        <div className="col mr-2 p-3 border-2 rounded-full border-teal-400"><p>Romance</p></div>
        <div className="col mr-2 p-3 border-2 rounded-full border-teal-400"><p>Horror</p></div>
        <div className="col mr-2 p-3 border-2 rounded-full border-teal-400"><p>Drama</p></div>
        <div className="col mr-2 p-3 border-2 rounded-full border-teal-400"><p>Action</p></div>
        <div className="col p-3 border-2 rounded-full border-teal-400"><p>Mystery</p></div>
      </div>
      <div className="flex row">
        <div className="col mr-2 p-3 border-2 rounded-full border-teal-400 opacity-100"><p>Fantasy</p></div>
        <div className="col mr-2 p-3 border-2 rounded-full border-teal-400"><p>Thriller</p></div>
        <div className="col mr-2 p-6 border-2 rounded-full border-teal-400"><p>Western</p></div>
        <div className="col mr-2 p-3 border-2 rounded-full border-teal-400"><p>Sci-Fi</p></div>
        <div className="col p-3 border-2 rounded-full border-teal-400"><p>Adventure</p></div>
      </div>
    </div>
  );
}
