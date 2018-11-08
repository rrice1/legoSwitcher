import $ from 'jquery';
import 'bootstrap';
import legoParts from '../../data/partsData';

// const headBuilder = (array) => {
//   let newString = '';
//   let counter = 0;
//   console.log(array.length);
//   $('#headArea').click(() => {
//     counter = (counter + 1) % array.length;
//   });
//   newString += `<h3>${array[counter].name}</h3>`;
//   console.log(array);
//   $('#headArea').html(newString);
// };

const headBuilder = (array) => {
  let newString = '';
  let i = 0;
  console.log(array.length);
  $('#headButton').click(() => {
    newString = `<h3>${array[i].name}</h3>`;
    $('#headArea').html(newString);
    newString = `<img class="headImg" src="${array[i].imageUrl}">`;
    i = (i + 1) % array.length;
    $('#headArea2').html(newString);
  });
  console.log(array);
};

const torsoBuilder = (array) => {
  let newString = '';
  let i = 0;
  console.log(array.length);
  $('#torsoButton').click(() => {
    newString = `<h3>${array[i].name}</h3>`;
    $('#torsoArea').html(newString);
    newString = `<img class="torsoImg" src="${array[i].imageUrl}">`;
    i = (i + 1) % array.length;
    $('#torsoArea2').html(newString);
  });
  console.log(array);
};

const legBuilder = (array) => {
  let newString = '';
  let i = 0;
  console.log(array.length);
  $('#legButton').click(() => {
    newString = `<h3>${array[i].name}</h3>`;
    $('#legArea').html(newString);
    newString = `<img class="legImg" src="${array[i].imageUrl}">`;
    i = (i + 1) % array.length;
    $('#legArea2').html(newString);
  });
  console.log(array);
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
