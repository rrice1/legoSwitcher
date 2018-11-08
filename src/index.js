import 'jquery';
import 'bootstrap';
import './index.scss';

import legoParts from './data/partsData';
import legoView from './components/LegoCharacter/legoCharacter';

const initializeLego = () => {
  legoView.initialHeadView();
  legoView.initialTorsoView();
  legoView.initialLegView();
};

initializeLego();

console.log(legoParts.getHeads);
console.log(legoParts.getTorsos);
console.log(legoParts.getLegs);
