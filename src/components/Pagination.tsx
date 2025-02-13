
import {FaArrowLeft} from "react-icons/fa";
import {FaArrowRight} from "react-icons/fa6";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

export default function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
    const getPageNumbers = () => {
        const pages = [];
        const showEllipsis = totalPages > 7;

        if (!showEllipsis) {
            // Show all pages if total pages are 7 or less
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            // Always show first page
            pages.push(1);

            if (currentPage > 3) {
                pages.push('...');
            }

            // Show pages around current page
            for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
                pages.push(i);
            }

            if (currentPage < totalPages - 2) {
                pages.push('...');
            }

            // Always show last page
            pages.push(totalPages);
        }

        return pages;
    };

    const pageNumbers = getPageNumbers();

    return (
        <div className="flex items-center justify-between gap-2">
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="py-2 px-4 flex items-center gap-2 rounded-lg border hover:bg-gray-100 disabled:opacity-50 disabled:hover:bg-white"
            >
                <FaArrowLeft className="text-black" size={15} /> Previous
            </button>


            <div className="flex items-center gap-2">
                {pageNumbers.map((page, index) => (
                    <button
                        key={index}
                        onClick={() => typeof page === 'number' ? onPageChange(page) : null}
                        className={`px-4 py-2 rounded-lg border ${
                            page === currentPage
                                ? 'bg-[#F0F0F0] text-black border-0'
                                : 'hover:bg-gray-100 border-0'
                        } ${typeof page === 'string' ? 'cursor-default hover:bg-white' : ''}`}
                    >
                        {page}
                    </button>
                ))}
            </div>



            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="py-2 px-4 flex items-center gap-2  rounded-lg border hover:bg-gray-100 disabled:opacity-50 disabled:hover:bg-white"
            >
                Next <FaArrowRight className="text-black" size={15} />
            </button>
        </div>
    );
}