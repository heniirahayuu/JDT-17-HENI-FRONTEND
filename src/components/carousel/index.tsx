import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Props {
  items: React.ReactNode[];
  itemsPerPage?: number;
}

const Carousel = ({ items, itemsPerPage = 3 }: Props) => {
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(items.length / (itemsPerPage || 3));
  const startIndex = currentPage * (itemsPerPage || 3);
  const endIndex = startIndex + (itemsPerPage || 3);

  const handlePrev = () => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  return (
    <div className="flex gap-4 items-center">
      <button
        onClick={handlePrev}
        className="p-2 hover:bg-gray-100 rounded-full border border-gray-200 transition"
      >
        <ChevronLeft size={24} className="text-gray-700" />
      </button>

      <div className="flex gap-4 flex-1 overflow-hidden">
        {items.slice(startIndex, endIndex)}
      </div>

      <button
        onClick={handleNext}
        className="p-2 hover:bg-gray-100 rounded-full border border-gray-200 transition"
      >
        <ChevronRight size={24} className="text-gray-700" />
      </button>
    </div>
  );
};

export default Carousel;
