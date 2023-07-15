// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const pistaApi = createApi({
    reducerPath: 'pistaApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://127.0.0.1:3000'
    }),
    endpoints: (builder) => ({
        getPistaByName: builder.query({
            query: () => `carruseles/`,
        }),
        getFlights: builder.query({
            query: () => `flights/`,
        }),
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPistaByNameQuery, useGetFlightsQuery } = pistaApi