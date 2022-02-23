import styled from "styled-components";

export const colors = {
    primary: "#000509",
    secondary: "#171A22",
    tertiary: "#E6E6E6",
    alternative: "#999999",
};

export const FlexRow = styled.View`
  justify-content: space-between;
  flex-direction: row;
`;

// Header
export const HeaderView = styled.View`
  margin-top: 10px;
  margin-bottom: 20px;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

export const HeaderTitle = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: black;
  letter-spacing: 2px;
  font-family: Roboto;
`;
//Header-End

//Body
export const BodyView = styled.View`
  width: 100%;
  border-radius: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const BodyBox = styled.View`
  margin: 5%;
  width: 95%;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  borderBottomWidth: 2px;
  borderBottomColor: black;
`;

export const BodyTitle = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: black;
  letter-spacing: 2px;
  font-family: sans-serif-thin;
`;

export const BodySeconds = styled.View`
  margin-top: 20px;
  width: 50%;
  height: 8px;
  border-radius: 10px;
  background-color: black;
`;
//Body-End

//Authenticate Button
