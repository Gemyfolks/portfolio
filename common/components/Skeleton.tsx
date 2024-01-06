import clsx from "clsx";
import { IoRefresh } from "react-icons/io5";

export default function Skeleton({
  isError,
  refetch,
}: {
  isError?: boolean;
  refetch: () => void;
}) {
  return (
    <div
      className={clsx(
        `flex items-center justify-center flex-col w-full h-[18rem] bg-gray-300 rounded-t-lg sm:w-[18rem] dark:bg-gray-700 `,
        {
          "animate-pulse": !isError,
        }
      )}
    >
      {!isError ? (
        <>
          <svg
            className="w-10 h-10 text-gray-700 dark:text-white/80"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 18"
          >
            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
          </svg>
          <p className="text-grey-700 dark:text-white/80">Loading Image...</p>
        </>
      ) : (
        <button
          onClick={(e) => {
            e.stopPropagation();
            refetch();
          }}
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-105 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
        >
          Try again
          <IoRefresh className="" />
        </button>
      )}
    </div>
  );
}
