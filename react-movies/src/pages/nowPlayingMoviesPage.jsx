import React from "react";
import { getNowPlaying } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from '@tanstack/react-query';
import Spinner from '../components/spinner';
import AddToUpcomingIcon from '../components/cardIcons/addToUpcoming';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites';

const NowPlayingMoviesPage = () => {
    const { data, error, isPending, isError } = useQuery({
        queryKey: ['nowPlaying'],
        queryFn: getNowPlaying,
    })

    if (isPending) {
        return <Spinner />
    }

    if (isError) {
        return <h1>{error.message}</h1>
    }

    const movies = data.results;

    return (
        <PageTemplate
            title="Now Playing Movies"
            movies={movies}
            action={(movie) => {

                return (
                    <>
                        <AddToFavoritesIcon movie={movie} />
                        <AddToUpcomingIcon movie={movie} />
                    </> )
            }}
        />
    );
};

export default NowPlayingMoviesPage;