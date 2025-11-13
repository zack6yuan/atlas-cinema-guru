export default function PaginationButtons() {
  return (
    <div className="flex gap-1 h-10">
      <a href="/" className="cursor-pointer bg-teal-500 hover:opacity-80 transition duration-200 pr-6 pl-5 rounded-tl-full rounded-bl-full">
        <button className="mt-2">
          Previous
        </button>
      </a>
      <a href="/next-page" className="cursor-pointer bg-teal-500 hover:opacity-80 transition duration-200 pr-6 pl-5 rounded-tr-full rounded-br-full">
        <button className="mt-2">
          Next
        </button>
      </a>
    </div>
  );
}
