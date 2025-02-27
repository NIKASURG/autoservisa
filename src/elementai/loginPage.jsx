import 'bootstrap/dist/css/bootstrap.min.css';
import './css/login.css'
import { prisijungtiSuGoogle } from '../firebase/googleLogin';
function LoginPage(){

    return(
        <div className='d-flex align-items-center py-4 bg-body-tertiary  position-absolute top-50 start-50 translate-middle shadow-lg '>
<main className="form-signin w-100 m-auto ">
  <form>
    <h1 className="h3 mb-3 fw-normal">Prisijunkite</h1>

    <div className="form-floating">
      <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"></input>
      <label for="floatingInput">El. Paštas</label>
    </div>
    <div className="form-floating">
      <input type="password" className="form-control" id="floatingPassword" placeholder="Password"></input>
      <label for="floatingPassword">Slaptažodis</label>
    </div>

 
    <button className="btn btn-primary w-100 py-2" type="submit">Prisijunti</button>
    <p className="mt-5 mb-3 text-body-secondary">© 1253-2025</p>
  </form>
  <p>arba</p>
  <button onClick={prisijungtiSuGoogle} class="google-btn">
   <img src="https://img.icons8.com/color/48/000000/google-logo.png" alt="Google Logo"></img>
    <span>Prisijungti su google</span>
</button>
</main>

         </div>
    )
}
export default LoginPage;