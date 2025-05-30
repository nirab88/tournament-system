// src/pages/Teams.jsx
import { useEffect, useState } from 'react';
import { Table, Spin, message } from 'antd';
import api from '../services/api';

const Teams = () => {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchTeams = async () => {
    setLoading(true);
    try {
      const res = await api.get('/teams/');
      setTeams(res.data);
    } catch {
      message.error('Failed to fetch teams');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTeams();
  }, []);

  const columns = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Coach', dataIndex: 'coach', key: 'coach' },
  ];

  return loading ? <Spin /> : <Table dataSource={teams} columns={columns} rowKey="id" />;
};

export default Teams;
