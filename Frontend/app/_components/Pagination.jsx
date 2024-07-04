function Pagination() {
  return (
    <>
      <ol className="flex justify-center gap-1 text-xs font-medium">
        <li>
          <a
            href="/"
            className="block active:bg-blue-600 active:text-white size-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
          >
            1
          </a>
        </li>
        <li>
          <a
            href="/paginate"
            className="block active:bg-blue-600 active:text-white size-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
          >
            2
          </a>
        </li>
      </ol>
    </>
  );
}

export default Pagination;
