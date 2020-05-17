import React from "react";
import styles from "./App.module.css";
import {Search, NavBar, Results} from "./components";
import {fetchRecipe} from"./api";
class App extends React.Component{
    state={
        recipes: []
    }

    SearchQuery = async (searchQuery) =>{
        const fetchedRecipes = await fetchRecipe(searchQuery);
        this.setState({recipes: fetchedRecipes});
    }
    render(){
        return(
            <div className={styles.container}>
            <NavBar/>
            <Search SearchQuery={this.SearchQuery}/>
            <Results recipes={this.state.recipes}/>
            </div>
        );
    }
}

export default App;