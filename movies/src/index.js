import React from 'react';
import {createRoot} from "react-dom/client";
import {BrowserRouter, Route, Navigate, Routes} from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavouriteMoviesPage from './pages/favouriteMoviesPage';
import MovieReviewPage from "./pages/movieReviewPage";
import UpcomingMoviesPage from './pages/upcomingMoviesPage';
import AddMovieReviewPage from './pages/addMovieReviewPage';
import TopRatedMoviesPage from './pages/topRatedMoviesPage';
import TVShowsPage from './pages/tvShowsPage';
import PeoplePage from './pages/peoplePage';
import PersonPage from './pages/peopleDetailsPage';
import TVShowPage from './pages/tvShowDetailsPage';
import TVSeasonPage from './pages/tvSeasonDetailsPage';
import LoginPage from './pages/loginPage';
import SignupPage from './pages/signupPage';
import SiteHeader from './components/siteHeader';
import MoviesContextProvider from './contexts/moviesContext';
import AuthContextProvider from './contexts/authContext';
import ProtectedRoutes from './protectedRoutes';
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 360000,
			refetchInterval: 360000,
			refetchOnWindowFocus: false
		},
	},
});

const App = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<BrowserRouter>
				<AuthContextProvider>
				<SiteHeader />
				<MoviesContextProvider>
					<Routes>
						<Route path="/movies/favourites" element={<FavouriteMoviesPage />} />
						<Route path="/" element={<HomePage />} />
						<Route path="/tvshows" element={<TVShowsPage />} />
						<Route path="/people" element={<PeoplePage />} />
						<Route path="*" element={<Navigate to="/" />} />
						<Route path="/reviews/:id" element={<MovieReviewPage />} />
						<Route path="/reviews/form" element={<AddMovieReviewPage />} />
						<Route path="/login" element={<LoginPage />} />
						<Route path="/signup" element={<SignupPage />} />
						<Route element={<ProtectedRoutes />}>
							<Route path="/movies/:id" element={<MoviePage />} />
							<Route path="/tvshows/:id" element={<TVShowPage />} />
							<Route path="/tvshows/:id/season/:season" element={<TVSeasonPage />} />
							<Route path="/people/:id" element={<PersonPage />} />
							<Route path="/movies/upcoming" element={<UpcomingMoviesPage />} />
							<Route path="/movies/top-rated" element={<TopRatedMoviesPage />} />
						</Route>
					</Routes>
				</MoviesContextProvider>
				</AuthContextProvider>
			</BrowserRouter>
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	);
};

const rootElement = createRoot(document.getElementById("root"))
rootElement.render(<App />);