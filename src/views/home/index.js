import React, { useState, useEffect } from 'react';
import { Screen, Row, Icon } from '../../styles/home';
import List from '../../components/list';

const INITIAL_A = [1, 2, 3, 4];

const INITIAL_B = [5, 6, 7, 8];

function Home() {

  const [itensA, setItensA] = useState([]);

  const [itensB, setItensB] = useState([]);

  useEffect(() => {
    setItensA(INITIAL_A);
    setItensB(INITIAL_B);
  }, [])

  const handleChangeA = (value) => {

    setItensA([...itensA, value]);
    setItensB(itensB.filter(item => item !== value));

  }

  const handleChangeB = (value) => {

    setItensB([...itensB, value]);
    setItensA(itensA.filter(item => item !== value));

  }

  return (
    <Screen>
      <Row>
        <List label={"Lista A"} onClick={handleChangeB} data={itensA} />
        <Icon />
        <List label={"Lista B"} onClick={handleChangeA} data={itensB} />

      </Row>
    </Screen>
  );
}

export default Home;
