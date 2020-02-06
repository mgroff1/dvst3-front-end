import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components"

export default function Use() {

  const Card = styled.div`
  width: 400px;
  height: 200px;
  margin: 0 auto;
  margin-top: 10px;
  background: #fff;
  border: 2px solid gray;
  display: flex;
  flex-wrap: wrap;
  border-radius: 15px 40px;
  justify-content: space-between;
  `;
  
  const Columns = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  `;

  
  const Font = styled.div`
  font-size: ${props =>(props.primary ? `2rem` : `1.0rem`)};
  color: #black;
  display: flex;
  align-items: center;
  padding-bottom: ${props =>(props.primary ? `30px` : `20px`)};
  `;

  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  useEffect(() => {
    axios
      .get(`https://dvst3-be.herokuapp.com/api/users`)
      .then(response => {
        const users = response.data
        setData(users);
      });
  }, []);
  
  
  return (
    <div>
        {data.map(user => {
          return (
            <Card>
            <Columns>
                <Font primary>{user.id}</Font> 
            </Columns>
            <Columns>
                <Font>Username: {user.username}</Font>
                <Font>Email: {user.email}</Font>
            </Columns>
        </Card>
            
          )
        }
        )}
      </div>
  )
}
