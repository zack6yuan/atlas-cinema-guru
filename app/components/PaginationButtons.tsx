export default function PaginationButtons() {
  return (
    <div className="flex gap-1">
      <button className="cursor-pointer bg-teal-500 pr-3 pl-6 p-3 rounded-tl-full rounded-bl-full">Previous</button>
      <button className="cursor-pointer bg-teal-500 pr-6 pl-5 rounded-tr-full rounded-br-full">Next</button>
    </div>
  )
}