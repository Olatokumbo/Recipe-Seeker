import axios from "axios";


const url= `https://api.edamam.com/search?q=`

export const fetchRecipe = async(search) => {
    try {
        const {data:{hits}} = await axios.get(url+`${search}&app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_API_KEY}`);
        console.log(hits);
        return hits;

    } catch (error) {
        
    }
}