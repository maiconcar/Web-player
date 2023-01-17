import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


    export const shazamCoreAPI = createApi ({
        reducerPath: 'shazamCoreAPI',
        baseQuery: fetchBaseQuery({
            baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
            prepareHeaders: (headers) => {
                headers.set('X-RapidAPI-KEY','9f2db6c388msha54a6ff35ba871fp1adc98jsn7ba339b23914');

                return headers;
            }
        }),

        endpoints: (builder) => ({
            getTopCharts: builder.query({query: () => '/charts/world'}),
            getSongsByGenre: builder.query({ query: (genre) => `/charts/genre-world?genre_code=${genre}` }),
            getSongsDetails: builder.query({query: ({songid}) => `/tracks/details?track_id=${songid}`}),
            getSongsRelated: builder.query({query: ({songid}) => `/tracks/related?track_id=${songid}`}),
            getArtistDetails: builder.query({ query: (artistId) => `/artists/details?artist_id=${artistId}` }),
            getSongsByCountry: builder.query({ query: (countryCode) => `/charts/country?country_code=${countryCode}`}),
            getSongsBySearch: builder.query({ query: (searchTerm) => `search/multi?search_type=SONGS_ARTISTS&query=${searchTerm}`}),
        }),

    });

    export const {
        useGetTopChartsQuery,
        useGetSongsDetailsQuery,
        useGetSongsRelatedQuery,
        useGetArtistDetailsQuery,
        useGetSongsByCountryQuery,
        useGetSongsByGenreQuery,
        useGetSongsBySearchQuery,

    } = shazamCoreAPI;