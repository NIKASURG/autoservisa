import 'bootstrap/dist/css/bootstrap.min.css';
import { signOut } from "firebase/auth";
import {auth} from "../firebase/config"
import './css/header.css'

function atsijungti(){
  signOut(auth).then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });
}

function Header(){
  const user = auth.currentUser
    return(
        <header classNameName="p-3 mb-3 border-bottom ">
    <div className="container">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 link-body-emphasis text-decoration-none">
        </a>

        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><a href="/uzsakymas" className="nav-link px-2 link-secondary">Užsakyti</a></li>
          <li><a href="/manoUsakymai" className="nav-link px-2 link-body-emphasis">Mano užsakymai</a></li>
     
        </ul>
        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
          <input type="search" className="form-control" placeholder="Search..." aria-label="Search"></input>
        </form>

        
        
        {!user? <div class="text-end">
        <a href="/login">
          <button  type="button" class="btn me-2 peleAnt border-dark">Prisijungti</button>
        </a>
        <a href="/register">

          <button   type="button" class="btn btn-warning">Registracija</button>
          </a>
        </div>:
        <div>
<p>Sveika/s {user.displayName}</p>

        <button onClick={atsijungti} type="button" class="btn btn-default btn-sm border border-primary">
          <span class="glyphicon glyphicon-log-out" ></span>Atsijungti
        </button>
      
        </div>
        }
        
      </div>
    </div>
  </header>
    )
}
export default Header; 