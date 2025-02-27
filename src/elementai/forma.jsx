import "bootstrap/dist/css/bootstrap.min.css";
import { db, auth, app } from "../firebase/config";
import { collection, addDoc } from "firebase/firestore";

function Forma() {
  const user = auth.currentUser;
  async function paskelpti(e) {
    e.preventDefault();
    const target = e.target;

    try {
      const docRef = await addDoc(collection(db, "uzsakymai"), {
        vardasPavarde: user.displayName,
        medelioNumeris: target.modelis.value,
        aprasimas: target.problema.value,
        paskelbimoData: new Date(),
        statusas: "Laukiama",
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (err) {
      console.error("Error adding document: ", err);
    }
  }
  return (
    <div>
        {user?
        <form onSubmit={paskelpti} class=" position-absolute top-50 start-50 translate-middle w-50">
        <div class="col-md-2">
        <label for="inputZip"  class="form-label">
        Automobilio modelis
        </label>
        <input type="text" name='modelis' class="form-control" id="inputZip"></input>
        </div>
        <div class="col-md-6 h-50 ">
        <label for="inputCity" class="form-label">
        Problema
        </label>
        <textarea name='problema'
        type="text"
        class="form-control  h-100  "
          id="inputCity"
          ></textarea>
          </div>
          
          <div class="col-12">
          <button type="submit" class="btn btn-primary">
          Paskelpti
          </button>
          </div>
          </form>
        :
        <div className="position-absolute top-50 start-50 translate-middle">
            <h1>Užasakymui paslaugai būtina <a href="/login">prisijungti</a></h1>
        </div>}
        </div>
        );
}
export default Forma;
