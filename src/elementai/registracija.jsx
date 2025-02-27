import "bootstrap/dist/css/bootstrap.min.css";
import "./css/registracija.css";
import {register} from '../firebase/registracija' 
function RegisterPage() {
    function prisiregistruoti(e){
        e.preventDefault();
        const target = e.target;
        console.log(
        target.vardas.value

        )
        if(target.vardas.value,target.pavarde.value,target.ELpastas.value,target.slaptazodis.value){

        }
        register(target.vardas.value,target.pavarde.value,target.ELpastas.value,target.slaptazodis.value)
    }
  return (
    <div className="d-flex align-items-center py-4 bg-body-tertiary  position-absolute top-50 start-50 translate-middle shadow-lg ">
      <main className="form-signin w-100 m-auto ">
        <form onSubmit={prisiregistruoti}>
          <h1 className="h3 mb-3 fw-normal">Prisijunkite</h1>

          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              name='ELpastas'
            ></input>
            <label for="floatingInput">El. Paštas</label>
          </div>
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="Vardenis"
              name='vardas'

            ></input>
            <label for="floatingInput">Vardas</label>
          </div>
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="pavardianis"
              name='pavarde'

            ></input>
            <label for="floatingInput">Pavardė</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Slaptažodis"
              name='slaptazodis'

            ></input>
            <label for="floatingPassword">Slaptažodis</label>
          </div>

          <button className="btn btn-primary w-100 py-2" type="submit">
            Prisiregistruoti
          </button>
          <p>Jau turite paskyra?<a href="/login">Prisijunkite</a></p>
          
          <p className="mt-5 mb-3 text-body-secondary">© 1253-2025</p>

        </form>
      </main>
    </div>
  );
}
export default RegisterPage;
