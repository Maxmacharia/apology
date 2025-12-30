import { useNavigate } from "react-router-dom";

export default function NavigationButtons({ back, next }) {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between mt-10">
      {back && (
        <button
          onClick={() => navigate(back)}
          className="px-6 py-2 bg-rose-200 rounded-full hover:bg-rose-300 transition"
        >
          ← Back
        </button>
      )}
      {next && (
        <button
          onClick={() => navigate(next)}
          className="px-6 py-2 bg-rose-400 text-white rounded-full hover:bg-rose-500 transition"
        >
          Next →
        </button>
      )}
    </div>
  );
}
