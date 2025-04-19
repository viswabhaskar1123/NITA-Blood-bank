
// 📁 frontend/src/pages/PatientDashboard.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PatientDashboard = () => {
  const [requests, setRequests] = useState([]);
  const [bloodRequest, setBloodRequest] = useState({ bloodGroup: '', unit: '' });
  const [stats, setStats] = useState({});

  useEffect(() => {
    fetchRequests();
    fetchStats();
  }, []);

  const fetchRequests = async () => {
    const res = await axios.get('http://localhost:5000/api/patient/blood-requests', {
      headers: { 'x-auth-token': localStorage.getItem('token') }
    });
    setRequests(res.data);
  };

  const fetchStats = async () => {
    const res = await axios.get('http://localhost:5000/api/patient/stats', {
      headers: { 'x-auth-token': localStorage.getItem('token') }
    });
    setStats(res.data);
  };

  const handleBloodRequest = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/patient/request', bloodRequest, {
      headers: { 'x-auth-token': localStorage.getItem('token') }
    });
    alert('Request submitted!');
    fetchRequests();
  };

  return (
    <div className='p-8'>
      <h1 className='text-2xl font-bold mb-4'>Patient Dashboard</h1>

      <div className='bg-white p-4 rounded shadow mb-6'>
        <h2 className='font-semibold mb-2'>Request Blood</h2>
        <form onSubmit={handleBloodRequest}>
          <input placeholder='Blood Group' className='w-full mb-2 p-2 border rounded' value={bloodRequest.bloodGroup} onChange={e => setBloodRequest({ ...bloodRequest, bloodGroup: e.target.value })} required />
          <input placeholder='Unit' className='w-full mb-2 p-2 border rounded' value={bloodRequest.unit} onChange={e => setBloodRequest({ ...bloodRequest, unit: e.target.value })} required />
          <button className='bg-green-500 text-white px-4 py-2 rounded'>Request</button>
        </form>
      </div>

      <div className='mt-8'>
        <h2 className='text-xl font-bold'>Blood Request History</h2>
        <table className='w-full mt-2 border'>
          <thead>
            <tr>
              <th className='border p-2'>Blood Group</th>
              <th className='border p-2'>Units</th>
              <th className='border p-2'>Status</th>
              <th className='border p-2'>Date</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((r, i) => (
              <tr key={i}>
                <td className='border p-2'>{r.bloodGroup}</td>
                <td className='border p-2'>{r.unit}</td>
                <td className='border p-2'>{r.status}</td>
                <td className='border p-2'>{new Date(r.createdAt).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className='mt-6'>
        <h2 className='text-xl font-bold'>Stats</h2>
        <p>Total Requests: {stats.total}</p>
        <p>Approved: {stats.approved}</p>
        <p>Pending: {stats.pending}</p>
        <p>Rejected: {stats.rejected}</p>
      </div>
    </div>
  );
};

export default PatientDashboard;
