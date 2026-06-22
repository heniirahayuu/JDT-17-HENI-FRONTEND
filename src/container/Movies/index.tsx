import { useEffect, useState } from "react";
import { ACCESS_TOKEN, BASE_URL } from "../../constant";
import { usePopular } from "../../hooks/Movies/usePopular";
import MoviesComponent from "../../components/movies";
import Carousel from "../../components/carousel";
import { searchMovies, getUpcomingMovies, getTopRatedMovies } from "../../service/Movies/api";
import type { Movie } from "../../service/Movies";
import { Search, X, Sparkles, Flame, Star, TrendingUp } from "lucide-react";

const Movies = () => {
  const [nowPlayingList, setNowPlayingList] = useState<Movie[]>([]);
  const [upcomingList, setUpcomingList] = useState<Movie[]>([]);
  const [topRatedList, setTopRatedList] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searchResults, setSearchResults] = useState<Movie[]>([]);
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const { popularMovie } = usePopular();

  const getNowPlayingList = (page: number) => {
    fetch(BASE_URL + `movie/now_playing?page=${page}&language=en-US`, {
      method: "get",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    })
      .then((res) => res.json())
      .then((response) => {
        setNowPlayingList(response.results);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getNowPlayingList(1);
    fetchUpcoming();
    fetchTopRated();
    return () => {};
  }, []);

  const fetchUpcoming = async () => {
    const results = await getUpcomingMovies();
    if (results) {
      setUpcomingList(results.results || []);
    }
  };

  const fetchTopRated = async () => {
    const results = await getTopRatedMovies();
    if (results) {
      setTopRatedList(results.results || []);
    }
  };

  const handleSearch = async (query: string) => {
    setSearchQuery(query);
    if (query.trim() === "") {
      setSearchResults([]);
      setIsSearching(false);
      return;
    }
    setIsSearching(true);
    const results = await searchMovies(query);
    if (results) {
      setSearchResults(results.results || []);
    }
  };

  const allMovies = [...nowPlayingList, ...popularMovie].reduce(
    (acc: Movie[], movie) => {
      if (!acc.some((item) => item.id === movie.id)) acc.push(movie);
      return acc;
    },
    [] as Movie[]
  );

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Hero Section */}
          <div className="text-center space-y-4 mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Sparkles className="w-8 h-8 text-pink-500" />
              <h1 className="text-6xl font-bold text-gray-900" style={{ fontFamily: 'Montserrat' }}>
                FilmHub
              </h1>
              <Sparkles className="w-8 h-8 text-pink-500" />
            </div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Temukan ribuan film dari berbagai genre, tonton trailer, dan nikmati pengalaman menonton terbaik.
            </p>
          </div>

          {/* Search Bar */}
          <div className="flex items-center gap-2 bg-white rounded-full px-6 py-4 border-2 border-gray-200 shadow-lg hover:shadow-xl hover:border-pink-300 transition-all max-w-2xl mx-auto">
            <Search size={24} className="text-pink-500" />
            <input
              type="text"
              placeholder="Cari film favoritmu..."
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              className="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-400 text-lg"
              style={{ fontFamily: 'Poppins' }}
            />
            {searchQuery && (
              <button
                onClick={() => handleSearch("")}
                className="text-gray-400 hover:text-gray-600 p-1"
              >
                <X size={20} />
              </button>
            )}
          </div>

          {/* Search Results Section */}
          {isSearching && searchQuery && (
            <div className="space-y-6 bg-white rounded-3xl p-8 shadow-lg border border-gray-200">
              <div className="flex items-center gap-3">
                <Search size={28} className="text-pink-500" />
                <h2 className="text-3xl font-bold text-gray-900" style={{ fontFamily: 'Montserrat' }}>
                  Hasil untuk "{searchQuery}"
                </h2>
              </div>
              <div className="mt-4">
                {searchResults.length > 0 ? (
                  <Carousel
                    items={searchResults.map((movie) => (
                      <MoviesComponent key={movie.id} movie={movie} />
                    ))}
                    itemsPerPage={4}
                  />
                ) : (
                  <div className="text-center py-12 text-gray-500">
                    <p className="text-lg">Tidak ada film yang ditemukan. Coba cari dengan kata kunci lain.</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {!isSearching && (
            <>
              {/* Now Playing Section */}
              <div className="space-y-6 bg-gradient-to-r from-red-500/10 to-pink-500/10 rounded-3xl p-8 shadow-lg border border-red-200">
                <div className="flex items-center gap-3">
                  <Flame size={28} className="text-red-500" />
                  <h2 className="text-3xl font-bold text-gray-900" style={{ fontFamily: 'Montserrat' }}>
                    Sedang Tayang
                  </h2>
                </div>
                <div className="mt-4">
                  {loading ? (
                    <div className="text-center py-12 text-gray-500">
                      <div className="inline-block">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-500"></div>
                      </div>
                      <p className="mt-4 text-lg">Loading film...</p>
                    </div>
                  ) : nowPlayingList.length > 0 ? (
                    <Carousel
                      items={nowPlayingList.map((movie) => (
                        <MoviesComponent key={movie.id} movie={movie} />
                      ))}
                      itemsPerPage={4}
                    />
                  ) : (
                    <div className="text-center py-12 text-gray-500">
                      Tidak ada film yang sedang tayang.
                    </div>
                  )}
                </div>
              </div>

              {/* Popular Movies Section */}
              <div className="space-y-6 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-3xl p-8 shadow-lg border border-yellow-200">
                <div className="flex items-center gap-3">
                  <TrendingUp size={28} className="text-orange-500" />
                  <h2 className="text-3xl font-bold text-gray-900" style={{ fontFamily: 'Montserrat' }}>
                    Film Populer
                  </h2>
                </div>
                <div className="mt-4">
                  {popularMovie && popularMovie.length > 0 ? (
                    <Carousel
                      items={popularMovie.map((movie) => (
                        <MoviesComponent key={movie.id} movie={movie} />
                      ))}
                      itemsPerPage={4}
                    />
                  ) : (
                    <div className="text-center py-12 text-gray-500">
                      Tidak ada film populer.
                    </div>
                  )}
                </div>
              </div>

              {/* Top Rated Section */}
              <div className="space-y-6 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-3xl p-8 shadow-lg border border-purple-200">
                <div className="flex items-center gap-3">
                  <Star size={28} className="text-purple-500" />
                  <h2 className="text-3xl font-bold text-gray-900" style={{ fontFamily: 'Montserrat' }}>
                    Film Terbaik
                  </h2>
                </div>
                <div className="mt-4">
                  {topRatedList && topRatedList.length > 0 ? (
                    <Carousel
                      items={topRatedList.map((movie) => (
                        <MoviesComponent key={movie.id} movie={movie} />
                      ))}
                      itemsPerPage={4}
                    />
                  ) : (
                    <div className="text-center py-12 text-gray-500">
                      Tidak ada film terbaik.
                    </div>
                  )}
                </div>
              </div>

              {/* Upcoming Section */}
              <div className="space-y-6 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-3xl p-8 shadow-lg border border-blue-200">
                <div className="flex items-center gap-3">
                  <Sparkles size={28} className="text-blue-500" />
                  <h2 className="text-3xl font-bold text-gray-900" style={{ fontFamily: 'Montserrat' }}>
                    Akan Datang
                  </h2>
                </div>
                <div className="mt-4">
                  {upcomingList && upcomingList.length > 0 ? (
                    <Carousel
                      items={upcomingList.map((movie) => (
                        <MoviesComponent key={movie.id} movie={movie} />
                      ))}
                      itemsPerPage={4}
                    />
                  ) : (
                    <div className="text-center py-12 text-gray-500">
                      Tidak ada film yang akan datang.
                    </div>
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Movies;
