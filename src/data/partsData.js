import axios from 'axios';

const getHeads = () => axios.get('http://localhost:3002/heads');
const getTorsos = () => axios.get('http://localhost:3002/torsos');
const getLegs = () => axios.get('http://localhost:3002/legs');

// console.log(getHeads);
// console.log(getTorsos);
// console.log(getLegs);

export default { getHeads, getTorsos, getLegs };
