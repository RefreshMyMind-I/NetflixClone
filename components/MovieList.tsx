import React from 'react';

import { MovieInterface } from '@/types';
import MovieCard from '@/components/MovieCard';

interface MovieListProps {
  data: MovieInterface[];
  title: string;
}

const MovieList: React.FC<MovieListProps> = ({ data, title }) => {
  return (
    <div className="px-4 md:px-12 mt-4 space-y-8">
      {data && data.length > 0 && (
        <div>
          <p className="text-white text-md md:text-xl lg:text-2xl font-semibold mb-4">{title}</p>
          <div className="grid grid-cols-4 gap-2">
            {data.map((movie) => (
              <MovieCard key={movie.id} data={movie} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default MovieList;