// 📁 frontend/src/pages/AdminDashboard.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    const res = await axios.get('http://localhost:5000/api/admin/dashboard', {
      headers: { 'x-auth-token': localStorage.getItem('token') }
    });
    setData(res.data);
  };

  useEffect(() => { fetchData(); }, []);

  if (!data) return <div>Loading...</div>;

  return (
    <div className='p-8'>
      <h1 className='text-2xl font-bold mb-4'>Admin Dashboard</h1>
      <div className='grid grid-cols-2 gap-4'>
        {data.bloodStocks.map((stock, i) => (
          <div key={i} className='bg-red-100 p-4 rounded shadow'>
            <p><strong>Blood Group:</strong> {stock.bloodGroup}</p>
            <p><strong>Units:</strong> {stock.unit}</p>
          </div>
        ))}
      </div>
      <div className='mt-6'>
        <p><strong>Donors:</strong> {data.donorCount}</p>
        <p><strong>Total Requests:</strong> {data.requestCount}</p>
        <p><strong>Approved Requests:</strong> {data.approvedRequests}</p>
        <p><strong>Total Units:</strong> {data.totalUnits}</p>
      </div>
    </div>
  );
};

export default AdminDashboard;
