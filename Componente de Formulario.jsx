// components/CustomerForm.jsx
import { useState, useEffect } from 'react';

export default function CustomerForm({ onSubmit, initialData }) {
  const [customer, setCustomer] = useState(initialData || { name: '', email: '' });

  useEffect(() => {
    if (initialData) setCustomer(initialData);
  }, [initialData]);

  const handleChange = (e) => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(customer);
    setCustomer({ name: '', email: '' }); // Resetear formulario
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={customer.name}
        onChange={handleChange}
        placeholder="Nombre"
        required
      />
      <input
        type="email"
        name="email"
        value={customer.email}
        onChange={handleChange}
        placeholder="Email"
        required
      />
      <button type="submit">
        {initialData ? 'Actualizar' : 'Crear'}
      </button>
    </form>
  );
}