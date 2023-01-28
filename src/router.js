import {
    createBrowserRouter,
    createRoutesFromElements,
    Route
} from "react-router-dom"
import App from "./App"
import Index from "./views/Index"
import Show from "./views/Show"
import Create from "./views/Create"
import Update from "./views/Update"
import UserLogin from "./views/User_login_signup/UserLogin"
import UserSignup from "./views/User_login_signup/UserSignup"
import { recipeLoader, recipesLoader } from "./loaders"
import { createRecipe, updateRecipe, deleteRecipe } from "./actions"

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App/>}>
            <Route path="" element={<Index/>} loader={recipesLoader}/>
            <Route path="/new" element={<Create/>}/>
            <Route path="create" action={createRecipe}/>
            <Route path="/edit/:id" element={<Update/>} loader={recipeLoader}/>
            <Route path="update/:id" action={updateRecipe}/>
            <Route path="delete/:id" action={deleteRecipe}/>
            <Route path="/:id" element={<Show/>} loader={recipeLoader}/>
            <Route path="/signup" element={<UserSignup/>}/>
            <Route path="/login" element={<UserLogin/>}/>
        </Route>
    )
)

export default router