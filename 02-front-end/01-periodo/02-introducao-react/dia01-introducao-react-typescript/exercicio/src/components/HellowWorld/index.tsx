import { calculateAge } from '../../utils/age';
import { ModuleDetails } from '../ModuleDetails';
import { Title } from '../Title';

import './styles.css';

export function HelloWorld() {
  const name = 'Priscilla';
  const birth = '16/08/1994';
  const age = calculateAge(birth);

  return (
    <>
      <h1 className="titleName">{name}</h1>
      <p>{`Sua Idade ${age}`}</p>
      <Title />
      <ModuleDetails />
    </>
  );
}
