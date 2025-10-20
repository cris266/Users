import { useState, useEffect } from "react";
import "./App.css";
import { Users } from "./components/Users";
import { Form } from "./components/Form";

function App() {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch("http://localhost:3001/users");
    const data = await response.json();
    setUsers(data.users);
  };

  const handleCreateUser = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3001/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: e.target.name.value,
        phone: e.target.phone.value,
        adress: e.target.adress.value,
        email: e.target.email.value,
        age: e.target.age.value,
        image: e.target.image.value,
      }),
    });

    if (response.ok) {
      e.target.reset();
      getUsers();
    }
  };

  /*
   useEffect: hook para ejecutar efectos secundarios como llamadas a APIs, conexiones con websockets, conexiones con bases de datos, etc.

   Cuando se carga el componente se ejecuta el getProducts.
   Llamar funciones directamente en el cuerpo del componente causa bucles infinitos porque se ejecuta en cada render, no solo al montar.
   Esta es una de las reglas fundamentales de React: los efectos secundarios (como llamadas a APIs) deben ir dentro de useEffect.
  */
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="app">
      <h1>Lista de Usuarios</h1>
      <Form onCreateUser={handleCreateUser} />
      <Users users={users} />
    </div>
  );
}

export default App;
