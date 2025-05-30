// src/pages/Matches.jsx
import { useEffect, useState } from 'react';
import { Table, Spin, message } from 'antd';
import api from '../services/api';

const Matches = () => {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchMatches = async () => {
    setLoading(true);
    try {
      const res = await api.get('/matches/');
      setMatches(res.data);
    } catch {
      message.error('Failed to fetch matches');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMatches();
  }, []);

  const columns = [
    { title: 'Team 1', dataIndex: 'team_1_name', key: 'team_1_name' },
    { title: 'Team 2', dataIndex: 'team_2_name', key: 'team_2_name' },
    { title: 'Date', dataIndex: 'match_date', key: 'match_date' },
    { title: 'Winner', dataIndex: 'winner_name', key: 'winner_name' },
  ];

  return loading ? <Spin /> : <Table dataSource={matches} columns={columns} rowKey="id" />;
};

export default Matches;
