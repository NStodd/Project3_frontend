import {
    createBrowserRouter,
    createRoutesFromElements,
    Route
} from "react-router-dom"
import App from "./App"
import Index from "./pages/Index"
import Show from "./pages/Show"
import Create from "./pages/Create"
import Update from "./pages/Update"
import { recipeLoader, recipesLoader } from "./loaders"
import { createRecipe, updateRecipe, deleteRecipe } from "./actions"

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App/>}>
            <Route path="" element={<Index/>} loader={recipesLoader}/>
            <Route path=":id" element={<Show/>} loader={recipeLoader}/>
            <Route path="new" element={<Create/>}/>
            <Route path="create" action={createRecipe}/>
            <Route path="edit/:id" element={<Update/>} loader={recipeLoader}/>
            <Route path="update/:id" action={updateRecipe}/>
            <Route path="delete/:id" action={deleteRecipe}/>
        </Route>
    )
)

export default router