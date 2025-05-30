import React from 'react';
import { 
  Card, 
  Row, 
  Col, 
  Statistic, 
  Typography, 
  Progress, 
  List, 
  Avatar, 
  Badge, 
  Button, 
  Tag, 
  Timeline,
  Table,
  Space
} from 'antd';
import { 
  TrophyOutlined, 
  UserOutlined, 
  VideoCameraOutlined,
  FireOutlined,
  RiseOutlined,
  EyeOutlined,
  PlayCircleOutlined,
  CalendarOutlined,
  TeamOutlined,
  DollarOutlined,
  ThunderboltOutlined,
  CrownOutlined
} from '@ant-design/icons';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';

const { Title, Text } = Typography;

const Dashboard = () => {
  // Removed unused activeTab state

  // Mock data
  const viewershipData = [
    { name: 'Mon', viewers: 2400 },
    { name: 'Tue', viewers: 1398 },
    { name: 'Wed', viewers: 9800 },
    { name: 'Thu', viewers: 3908 },
    { name: 'Fri', viewers: 4800 },
    { name: 'Sat', viewers: 12800 },
    { name: 'Sun', viewers: 15600 }
  ];

  const gamePopularity = [
    { name: 'Valorant', value: 35, color: '#ff6b6b' },
    { name: 'CS2', value: 25, color: '#4ecdc4' },
    { name: 'LOL', value: 20, color: '#45b7d1' },
    { name: 'Dota 2', value: 12, color: '#96ceb4' },
    { name: 'Others', value: 8, color: '#feca57' }
  ];

  const activeTournaments = [
    { key: '1', name: 'Valorant Champions', participants: 128, prize: '$50,000', status: 'Live', progress: 75 },
    { key: '2', name: 'CS2 Major', participants: 64, prize: '$25,000', status: 'Upcoming', progress: 0 },
    { key: '3', name: 'LoL World Cup', participants: 256, prize: '$100,000', status: 'Registration', progress: 45 }
  ];

  const topStreamers = [
    { name: 'ProGamer_X', viewers: 15420, game: 'Valorant', status: 'live' },
    { name: 'StreamKing', viewers: 12350, game: 'CS2', status: 'live' },
    { name: 'GameMaster', viewers: 8940, game: 'LoL', status: 'offline' },
    { name: 'eSports_Pro', viewers: 7650, game: 'Dota 2', status: 'live' }
  ];

  const recentActivities = [
    { time: '2 min ago', action: 'New tournament registered: "Apex Legends Championship"', type: 'tournament' },
    { time: '5 min ago', action: 'ProGamer_X started streaming Valorant', type: 'stream' },
    { time: '12 min ago', action: '50 new users registered today', type: 'user' },
    { time: '1 hour ago', action: 'Tournament "CS2 Major" moved to Semi-Finals', type: 'tournament' }
  ];

  const tournamentColumns = [
    {
      title: 'Tournament',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <Text strong style={{ color: '#1890ff' }}>{text}</Text>
    },
    {
      title: 'Participants',
      dataIndex: 'participants',
      key: 'participants',
      render: (participants) => (
        <Space>
          <TeamOutlined />
          {participants}
        </Space>
      )
    },
    {
      title: 'Prize Pool',
      dataIndex: 'prize',
      key: 'prize',
      render: (prize) => (
        <Text style={{ color: '#52c41a', fontWeight: 'bold' }}>{prize}</Text>
      )
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status) => {
        let color = status === 'Live' ? 'red' : status === 'Upcoming' ? 'blue' : 'orange';
        return <Tag color={color}>{status}</Tag>;
      }
    },
    {
      title: 'Progress',
      dataIndex: 'progress',
      key: 'progress',
      render: (progress) => <Progress percent={progress} size="small" />
    }
  ];

  return (
    <div style={{ padding: '24px', background: '#f0f2f5', minHeight: '100vh' }}>
      {/* Header */}
      <div style={{ marginBottom: '24px' }}>
        <Title level={2} style={{ margin: 0, color: '#1890ff' }}>
          🎮 Gaming Tournament Dashboard
        </Title>
        <Text type="secondary">Manage tournaments, streams, and community</Text>
      </div>

      {/* Stats Cards */}
      <Row gutter={[16, 16]} style={{ marginBottom: '24px' }}>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="Active Tournaments"
              value={12}
              prefix={<TrophyOutlined style={{ color: '#faad14' }} />}
              valueStyle={{ color: '#faad14' }}
            />
            <div style={{ marginTop: '8px' }}>
              <Text type="secondary">+3 this week</Text>
            </div>
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="Registered Users"
              value={15847}
              prefix={<UserOutlined style={{ color: '#52c41a' }} />}
              valueStyle={{ color: '#52c41a' }}
            />
            <div style={{ marginTop: '8px' }}>
              <Text type="secondary">+286 today</Text>
            </div>
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="Live Streams"
              value={24}
              prefix={<VideoCameraOutlined style={{ color: '#f5222d' }} />}
              valueStyle={{ color: '#f5222d' }}
            />
            <div style={{ marginTop: '8px' }}>
              <Badge status="processing" text="Currently broadcasting" />
            </div>
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="Total Viewers"
              value={48920}
              prefix={<EyeOutlined style={{ color: '#1890ff' }} />}
              valueStyle={{ color: '#1890ff' }}
            />
            <div style={{ marginTop: '8px' }}>
              <Text type="secondary">Peak: 65.2K</Text>
            </div>
          </Card>
        </Col>
      </Row>

      {/* Charts Row */}
      <Row gutter={[16, 16]} style={{ marginBottom: '24px' }}>
        <Col xs={24} lg={16}>
          <Card title="Viewership Analytics" extra={<Button size="small">View Details</Button>}>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={viewershipData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="viewers" stroke="#1890ff" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </Col>
        <Col xs={24} lg={8}>
          <Card title="Popular Games">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={gamePopularity}
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={120}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {gamePopularity.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div style={{ marginTop: '16px' }}>
              {gamePopularity.map((item, index) => (
                <div key={index} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                  <span style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{ width: '12px', height: '12px', backgroundColor: item.color, marginRight: '8px', borderRadius: '2px' }}></div>
                    {item.name}
                  </span>
                  <span>{item.value}%</span>
                </div>
              ))}
            </div>
          </Card>
        </Col>
      </Row>

      {/* Content Row */}
      <Row gutter={[16, 16]} style={{ marginBottom: '24px' }}>
        <Col xs={24} lg={12}>
          <Card title="Active Tournaments" extra={<Button type="primary" size="small">Create New</Button>}>
            <Table 
              dataSource={activeTournaments} 
              columns={tournamentColumns} 
              pagination={false}
              size="small"
            />
          </Card>
        </Col>
        <Col xs={24} lg={12}>
          <Card title="Top Streamers" extra={<Button size="small">View All</Button>}>
            <List
              itemLayout="horizontal"
              dataSource={topStreamers}
              renderItem={(item) => (
                <List.Item>
                  <List.Item.Meta
                    avatar={<Avatar style={{ backgroundColor: '#1890ff' }}>{item.name[0]}</Avatar>}
                    title={
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        {item.name}
                        {item.status === 'live' && <Badge status="error" text="LIVE" />}
                      </div>
                    }
                    description={
                      <div>
                        <div>{item.game}</div>
                        <div style={{ color: '#1890ff', fontWeight: 'bold' }}>
                          <EyeOutlined /> {item.viewers.toLocaleString()} viewers
                        </div>
                      </div>
                    }
                  />
                  {item.status === 'live' && (
                    <Button type="primary" size="small" icon={<PlayCircleOutlined />}>
                      Watch
                    </Button>
                  )}
                </List.Item>
              )}
            />
          </Card>
        </Col>
      </Row>

      {/* Bottom Row */}
      <Row gutter={[16, 16]}>
        <Col xs={24} lg={12}>
          <Card title="Recent Activity" extra={<Button size="small">View All</Button>}>
            <Timeline
              items={recentActivities.map((activity) => ({
                dot: activity.type === 'tournament' ? <TrophyOutlined style={{ color: '#faad14' }} /> :
                     activity.type === 'stream' ? <VideoCameraOutlined style={{ color: '#f5222d' }} /> :
                     <UserOutlined style={{ color: '#52c41a' }} />,
                children: (
                  <div>
                    <div>{activity.action}</div>
                    <Text type="secondary" style={{ fontSize: '12px' }}>{activity.time}</Text>
                  </div>
                )
              }))}
            />
          </Card>
        </Col>
        <Col xs={24} lg={12}>
          <Card title="Quick Actions">
            <Row gutter={[8, 8]}>
              <Col span={12}>
                <Button block icon={<TrophyOutlined />} style={{ height: '60px' }}>
                  Create Tournament
                </Button>
              </Col>
              <Col span={12}>
                <Button block icon={<VideoCameraOutlined />} style={{ height: '60px' }}>
                  Start Stream
                </Button>
              </Col>
              <Col span={12}>
                <Button block icon={<UserOutlined />} style={{ height: '60px' }}>
                  Manage Users
                </Button>
              </Col>
              <Col span={12}>
                <Button block icon={<DollarOutlined />} style={{ height: '60px' }}>
                  Prize Pools
                </Button>
              </Col>
            </Row>
            
            <div style={{ marginTop: '16px', padding: '16px', background: '#f6ffed', border: '1px solid #b7eb8f', borderRadius: '6px' }}>
              <Title level={5} style={{ margin: 0, color: '#52c41a' }}>
                <ThunderboltOutlined /> System Status
              </Title>
              <Text>All systems operational • 99.9% uptime</Text>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;