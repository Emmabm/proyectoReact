import { useState, useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { db } from "../../services/config";
import { collection, addDoc, updateDoc, getDoc, doc } from "firebase/firestore";
import Swal from 'sweetalert2';
import "./Checkout.css";

const Checkout = () => {
  const { carrito, vaciarCarrito, total } = useContext(CarritoContext);

  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [emailConfirmacion, setEmailConfirmacion] = useState("");
  const [ordenId, setOrdenId] = useState("");
  const [error, setError] = useState("");

  const manejadorSubmit = (event) => {
    event.preventDefault();

    if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
      setError("Por favor completa los espacios vacios.");
      return;
    }

    if (email !== emailConfirmacion) {
      setError("Los emails no coinciden.");
      return;
    }

    const orden = {
      items: carrito.map((producto) => ({
        id: producto.item.id,
        nombre: producto.item.nombre,
        cantidad: producto.cantidad,
      })),
      total: total,
      fecha: new Date(),
      nombre,
      apellido,
      telefono,
      email,
    };

    Promise.all(
      orden.items.map(async (productoOrden) => {
        const productoRef = doc(db, "inventario", productoOrden.id);
        const productoDoc = await getDoc(productoRef);
        const stockActual = productoDoc.data().stock;

        await updateDoc(productoRef, {stock: stockActual - productoOrden.cantidad});
        

      }) 
    )
    .then(()=> {
      addDoc(collection(db, "ordenes"), orden)
          .then(docRef => {
              setOrdenId(docRef.id);
              vaciarCarrito();
              Swal.fire({
                position: "center-center",
                icon: "success",
                title: "Orden generada con exito",
                text: `Tu número de orden es: ${docRef.id}`,
                timer: 5000
              });
          })
          .catch(error => console.log("Error al crear la orden de compra", error))
  })
  .catch(error => {
      console.log("No pudimos actualizar el stock", error);
      setError("Error al actualizar el stock");
  })
}
  return (
    <div className="contendor-checkout">
      <h2>Checkout - Finalizamos la Compra </h2>

      <form onSubmit={manejadorSubmit}>
        {carrito.map((producto) => (
          <div key={producto.item.id}>
            <p>
              {" "}
              {producto.item.nombre} x {producto.cantidad}{" "}
            </p>
            <p> $ {producto.item.precio} </p>
            <hr />
          </div>
        ))}
        <section className="form-registro">
          <h4>Registro de orden de compra.</h4>
          <input className="controles"  type="text" id="nombre" placeholder="Nombre" onChange={(e) => setNombre(e.target.value)}/>
      
          <input className="controles"  type="text" id="apellido" placeholder="Apellido" onChange={(e) => setApellido(e.target.value)}/>

          <input className="controles"  type="text" id="telefono" placeholder="Teléfono" onChange={(e) => setTelefono(e.target.value)}/>

          <input className="controles"  type="email" id="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>

          <input className="controles"  type="email" id="emailcon" placeholder="Email confirmación" onChange={(e) => setEmailConfirmacion(e.target.value)}/>
       

          {error && <p style={{ color: "red" }}> {error} </p>}

          <br />

          <input className="finalizar-orden" type="submit" value="Finalizar orden"/>

          <br />

        </section>
      </form>
    </div>
  );
};

export default Checkout;
