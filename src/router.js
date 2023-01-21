import {
    createBrowserRouter,
    createRoutesFromElements,
    Route
} from "react-router-dom"
import App from "./App"
import { recipeLoader, recipesLoader } from "./loaders"
import { createRecipe, updateRecipe, deleteRecipe } from "./actions"
import Index from "./pages/Index"
import Show from "./page/Show"

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="" element={<App/>}>
            <Route path="" element={<Index/>} loader={recipesLoader}/>
            <Route path=":id" element={<Show/>} loader={recipeLoader}/>
            <Route path="new" element={<Create/>}/>
            <Route path="create" action={createRecipe}/>
            <Route path="edit/:id" element={<Edit/>}/>  {/*TODO: set this to the appropriate component*/}
            <Route path="update/:id" action={updateRecipe}/>
            <Route path="delete/:id" action={deleteRecipe}/>
        </Route>
    )
)

export default router