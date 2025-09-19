import {userSignin} from '../controllers/userSigin.controller.js'
import {userLogin} from '../controllers/userLogin.controller.js'

 export function userApi(app){

app.post('/api/signup',userSignin)
app.post('/api/login',userLogin)

}