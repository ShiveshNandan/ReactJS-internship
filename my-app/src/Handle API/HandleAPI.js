import axios from "axios"

const URL = "https://api.tvmaze.com/search/shows?q=all" 

const allMovies = async (setMovies) => {
    
    try {
        const response = await axios.get(URL);
        setMovies(response.data)
    } catch (error) {
        console.error("Error occured: ", error);        
    }
}

export {allMovies}