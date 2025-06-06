import React from "react";
import { getUpcoming } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from '@tanstack/react-query';
import Spinner from '../components/spinner';
import AddToUpcomingIcon from '../components/cardIcons/addToUpcoming'

const UpcomingMoviesPage = () => {
    const { data, error, isPending, isError } = useQuery({
        queryKey: ['upcoming'],
        queryFn: getUpcoming,
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
            title="Upcoming Movies"
            movies={movies}
            action={(movie) => {
                return <AddToUpcomingIcon movie={movie} />
            }}
        />
    );
};

export default UpcomingMoviesPage;