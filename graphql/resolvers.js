import {getMovies} from "./apidb";



const resolvers = {
    Query: {
      movie_list: (_, {limit,rating}) => getMovies(limit, rating) 
    }
};

export default resolvers;