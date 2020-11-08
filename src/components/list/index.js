import React from 'react';
import { ListContainer, ListLabelText, ListElement, List, ListLabel } from '../../styles/home'

function ListArray({ data, onClick, label }) {
  return (
    <ListContainer>
      <ListLabel> <ListLabelText>{label}</ListLabelText> </ListLabel>
      <List>
        {data.map((value, index) => <ListElement onClick={() => onClick(value)} key={index}>{value}</ListElement >)}
      </List>
    </ListContainer>
  );
}

export default ListArray;