import React, { useState } from "react";
import { Button, Card, message, Result, Steps, theme } from "antd";
import { FaDatabase } from "react-icons/fa";

const { Meta } = Card;

const steps = [
  {
    title: "Connect",
    content: (
      <div className="container align-center text-center">
        <Card
          hoverable
          style={{ width: 240 }}
          cover={
            <img
              alt="example"
              src="https://images.unsplash.com/photo-1658204238967-3a81a063d162?q=80&w=2062&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          }
        >
          <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
      </div>
    ),
  },
  {
    title: "Create",
    content: "Second-content",
  },
  {
    title: "Secure",
    content: "Last-content",
  },
  {
    title: "Request",
    content: "Last-content",
  },
];

const gridStyle: React.CSSProperties = {
  width: "25%",
  textAlign: "center",
};

const Dashboard: React.FC = () => {
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const items = steps.map((item) => ({ key: item.title, title: item.title }));

  const contentStyle: React.CSSProperties = {
    lineHeight: "260px",
    textAlign: "center",
    color: token.colorTextTertiary,
    backgroundColor: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: `1px dashed ${token.colorBorder}`,
    marginTop: 16,
  };

  return (
    <div className="container">
        <div className='row'>
        <h3 className="col custom-title"> My Dashboard </h3>
       
          </div>
        <br />
      <div className="row">
        <Card.Grid style={gridStyle}>
          <div className="container align-center text-center">
            <Card
              hoverable
              style={{ width: 240, height : 250 }}
              cover={
                <img
                  alt="example"
                  src="https://cdn.dribbble.com/users/464226/screenshots/16838523/media/3c673dbb3d32506d5590b84f7b2a1904.png?resize=450x338&vertical=center"
                />
              }
            >
              <Meta
                title="Connect Database"  
              />
            </Card>
          </div>
        </Card.Grid>
        <Card.Grid hoverable={false} style={gridStyle}>
          <div className="container align-center text-center">
            <Card
              hoverable
              style={{ width: 240 , height : 250 }}
              cover={
                <img
                  alt="example"
                  src="https://cdn.dribbble.com/userupload/13694161/file/original-93af0b134915de0add4455500ac0a55e.png?resize=450x338&vertical=center"
                />
              }
            >
              <Meta
                title="Create API" 
              />
            </Card>
          </div>
        </Card.Grid>
        <Card.Grid style={gridStyle}>
          <div className="container align-center text-center">
            <Card
              hoverable
              style={{ width: 240, height : 250 }}
              cover={
                <img
                  alt="example"
                  src="https://cdn.dribbble.com/userupload/3891768/file/original-2ad0c2f87c9b923621749b0060c07df9.jpg?resize=1024x768"
                />
              }
            >
              <Meta
                title="Secure Data" 
              />
            </Card>
          </div>
        </Card.Grid>
        <Card.Grid style={gridStyle}>
          <div className="container align-center text-center">
            <Card
              hoverable
              style={{ width: 240, height : 250 }}
              cover={
                <img
                  alt="example"
                  src="https://cdn.dribbble.com/userupload/8879892/file/original-be57429750ed9b6c5cbb157383375ce3.jpg?resize=1024x768"
                />
              }
            >
              <Meta
                title="Trigger API Requests" 
              />
            </Card>
          </div>
        </Card.Grid>
      </div>
    </div>
  );
};

export default Dashboard;
