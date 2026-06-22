import { useEffect, useState } from "react";
import type { Movie, VideoResult } from "../../service/Movies";
import { Label } from "../label";
import Button from "../button";
import { getMovieTrailers } from "../../service/Movies/api";
import { Play, X, Calendar, Users } from "lucide-react";

interface Props {
  movie: Movie;
}

const MoviesComponent = ({ movie }: Props) => {
  const [showDetail, setShowDetail] = useState(false);
  const [showTrailer, setShowTrailer] = useState(false);
  const [trailerKey, setTrailerKey] = useState<string | null>(null);
  const [trailers, setTrailers] = useState<VideoResult[]>([]);

  useEffect(() => {
    const fetchTrailers = async () => {
      const data = await getMovieTrailers(movie.id);
      if (data && data.results) {
        setTrailers(data.results);
        const official = data.results.find(
          (v) => v.type === "Trailer" && v.site === "YouTube"
        );
        if (official) {
          setTrailerKey(official.key);
        }
      }
    };
    fetchTrailers();
  }, [movie.id]);

  const handlePlayTrailer = () => {
    if (trailerKey) {
      setShowTrailer(true);
    }
  };

  const ratingStars = movie.vote_average ? Math.round(movie.vote_average / 2) : 0;

  return (
    <>
      <div className="min-w-[240px] max-w-[280px] rounded-2xl border border-gray-200 bg-white shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
        {/* Poster Image */}
        <div className="relative overflow-hidden bg-gray-200 h-[360px]">
          <img
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            alt={movie.original_title}
            className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
          />
          {trailerKey && (
            <button
              onClick={handlePlayTrailer}
              className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300"
            >
              <div className="bg-pink-500 rounded-full p-4 transform hover:scale-110 transition shadow-lg">
                <Play size={24} className="text-white fill-white" />
              </div>
            </button>
          )}
        </div>

        {/* Content */}
        <div className="space-y-3 p-4">
          {/* Title */}
          <Label className="text-gray-900 text-lg font-bold leading-tight line-clamp-2" style={{ fontFamily: 'Montserrat' }}>
            {movie.original_title}
          </Label>

          {/* Rating */}
          {movie.vote_average && (
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className={`text-lg ${
                    i < ratingStars ? "text-yellow-400" : "text-gray-300"
                  }`}
                >
                  ★
                </span>
              ))}
              <span className="text-sm text-gray-600 ml-2 font-semibold">
                {movie.vote_average.toFixed(1)}
              </span>
            </div>
          )}

          {/* Release Date */}
          {movie.release_date && (
            <p className="text-xs text-gray-500 flex items-center gap-1">
              <Calendar size={14} />
              {new Date(movie.release_date).toLocaleDateString("id-ID")}
            </p>
          )}

          {/* Description */}
          <p className="min-h-[2.5rem] text-sm leading-5 text-gray-600 line-clamp-2">
            {movie.overview || "Sinopsis belum tersedia."}
          </p>

          {/* Buttons */}
          <div className="flex gap-2 pt-2">
            <Button onClick={() => setShowDetail(true)} content="Detail" />
            {trailerKey && (
              <button
                onClick={handlePlayTrailer}
                className="flex-1 bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-3 rounded-lg transition duration-300 flex items-center justify-center gap-1"
              >
                <Play size={16} className="fill-white" /> Trailer
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Detail Modal */}
      {showDetail && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 py-6 overflow-y-auto">
          <div className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-gray-200 my-8">
            {/* Backdrop */}
            <div className="relative overflow-hidden h-96 bg-gradient-to-b from-gray-300 to-gray-200">
              <img
                src={`https://image.tmdb.org/t/p/original${
                  movie.backdrop_path || movie.poster_path
                }`}
                alt={movie.original_title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-white via-white/90 to-transparent p-8 pt-24">
                <h2 className="text-4xl font-bold text-gray-900" style={{ fontFamily: 'Montserrat' }}>
                  {movie.original_title}
                </h2>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6 p-8">
              {/* Rating and Date */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-gray-200">
                {movie.vote_average && (
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className={`${
                            i < ratingStars ? "text-yellow-400" : "text-gray-300"
                          }`}
                        >
                          ★
                        </span>
                      ))}
                    </span>
                    <div>
                      <p className="text-sm text-gray-600">Rating</p>
                      <p className="text-lg font-bold text-gray-900">{movie.vote_average.toFixed(1)}/10</p>
                    </div>
                  </div>
                )}
                {movie.release_date && (
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar size={20} className="text-pink-500" />
                    <div>
                      <p className="text-sm">Tanggal Rilis</p>
                      <p className="font-semibold text-gray-900">
                        {new Date(movie.release_date).toLocaleDateString("id-ID", {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Overview */}
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-gray-900" style={{ fontFamily: 'Montserrat' }}>
                  Sinopsis
                </h3>
                <p className="text-base leading-relaxed text-gray-700">
                  {movie.overview || "Sinopsis tidak tersedia."}
                </p>
              </div>

              {/* Trailer Section */}
              {trailerKey && (
                <div className="space-y-4 bg-gray-50 rounded-2xl p-6 border border-gray-200">
                  <div className="flex items-center gap-2">
                    <Play size={24} className="text-pink-500 fill-pink-500" />
                    <h3 className="text-xl font-bold text-gray-900" style={{ fontFamily: 'Montserrat' }}>
                      Tonton Trailer
                    </h3>
                  </div>
                  <div className="relative w-full bg-black rounded-xl overflow-hidden" style={{ paddingBottom: "56.25%" }}>
                    <iframe
                      className="absolute top-0 left-0 w-full h-full"
                      src={`https://www.youtube.com/embed/${trailerKey}?autoplay=0`}
                      title={movie.original_title}
                      allowFullScreen
                      style={{ border: 'none' }}
                    />
                  </div>
                </div>
              )}

              {/* Buttons */}
              <div className="flex flex-wrap gap-3 pt-6 border-t border-gray-200">
                {trailerKey && !showTrailer && (
                  <button
                    onClick={handlePlayTrailer}
                    className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-8 rounded-xl transition duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl"
                  >
                    <Play size={18} className="fill-white" />
                    Tonton Fullscreen
                  </button>
                )}
                <Button onClick={() => setShowDetail(false)} content="Tutup" />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Trailer Fullscreen Modal */}
      {showTrailer && trailerKey && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 px-4 py-6">
          <div className="w-full max-w-5xl">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <button
                onClick={() => setShowTrailer(false)}
                className="absolute top-4 right-4 z-10 bg-red-500 hover:bg-red-600 text-white p-3 rounded-full transition transform hover:scale-110"
              >
                <X size={24} />
              </button>
              <div className="relative w-full bg-black" style={{ paddingBottom: "56.25%" }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1`}
                  title={movie.original_title}
                  allowFullScreen
                  style={{ border: 'none' }}
                />
              </div>
            </div>
            <div className="mt-6 text-center">
              <p className="text-white text-2xl font-semibold" style={{ fontFamily: 'Montserrat' }}>
                {movie.original_title}
              </p>
              <p className="text-gray-300 mt-2 text-sm">{movie.overview?.substring(0, 100)}...</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MoviesComponent;