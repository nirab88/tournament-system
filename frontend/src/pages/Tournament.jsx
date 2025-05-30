// src/pages/Tournaments.jsx
import { useEffect, useState } from 'react';
import { Table, Spin, message } from 'antd';
import api from '../services/api';

const Tournaments = () => {
  const [tournaments, setTournaments] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchTournaments = async () => {
    setLoading(true);
    try {
      const res = await api.get('/tournaments/');
      setTournaments(res.data);
    } catch {
      message.error('Failed to fetch tournaments');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTournaments();
  }, []);

  const columns = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Location', dataIndex: 'location', key: 'location' },
    { title: 'Start Date', dataIndex: 'start_date', key: 'start_date' },
    { title: 'End Date', dataIndex: 'end_date', key: 'end_date' },
  ];

  return loading ? <Spin /> : <Table dataSource={tournaments} columns={columns} rowKey="id" />;
};

export default Tournaments;
