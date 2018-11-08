import $ from 'jquery';
import 'bootstrap';
import legoParts from '../../data/partsData';

const headBuilder = (array) => {
  let newString = '';
  newString += `<h3>${array[0].name}</h3>`;
  console.log(array);
  $('#headArea').html(newString);
};

const torsoBuilder = (array) => {
  let newString = '';
  newString += `<h3>${array}</h3>`;
  console.log(array);
  $('#torsoArea').html(newString);
};

const legBuilder = (array) => {
  let newString = '';
  newString += `<h3>${array}</h3>`;
  console.log(array);
  $('#legArea').html(newString);
};

const initialHeadView = () => {
  legoParts.getHeads()
    .then((data) => {
      headBuilder(data.data);
    })
    .catch((error) => {
      console.error({ error });
    });
};

const initialTorsoView = () => {
  legoParts.getTorsos()
    .then((data) => {
      torsoBuilder(data.data);
    })
    .catch((error) => {
      console.error({ error });
    });
};

const initialLegView = () => {
  legoParts.getLegs()
    .then((data) => {
      legBuilder(data.data);
    })
    .catch((error) => {
      console.error({ error });
    });
};

export default { initialHeadView, initialLegView, initialTorsoView };
