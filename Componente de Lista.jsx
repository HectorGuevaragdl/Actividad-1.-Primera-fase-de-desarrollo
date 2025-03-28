// components/CustomerList.jsx
export default function CustomerList({ customers, onEdit, onDelete }) {
    return (
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {customers.map(customer => (
            <tr key={customer.id}>
              <td>{customer.name}</td>
              <td>{customer.email}</td>
              <td>
                <button onClick={() => onEdit(customer)}>Editar</button>
                <button onClick={() => onDelete(customer.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }