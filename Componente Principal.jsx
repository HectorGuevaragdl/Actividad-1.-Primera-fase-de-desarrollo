// pages/CustomersPage.jsx
import { useState, useEffect } from 'react';
import { getCustomers, addCustomer } from '../services/api';
import CustomerList from '../components/CustomerList';
import CustomerForm from '../components/CustomerForm';

export default function CustomersPage() {
  const [customers, setCustomers] = useState([]);
  const [editingCustomer, setEditingCustomer] = useState(null);

  useEffect(() => {
    loadCustomers();
  }, []);

  const loadCustomers = async () => {
    const data = await getCustomers();
    setCustomers(data);
  };

  const handleSubmit = async (customer) => {
    if (editingCustomer) {
      // Lógica para editar (simulada)
      setCustomers(customers.map(c => c.id === customer.id ? customer : c));
    } else {
      // Lógica para crear
      const newCustomer = await addCustomer(customer);
      setCustomers([...customers, newCustomer]);
    }
    setEditingCustomer(null);
  };

  return (
    <div>
      <h1>Gestión de Clientes</h1>
      <CustomerForm onSubmit={handleSubmit} initialData={editingCustomer} />
      <CustomerList 
        customers={customers} 
        onEdit={setEditingCustomer} 
        onDelete={id => setCustomers(customers.filter(c => c.id !== id))} 
      />
    </div>
  );
}