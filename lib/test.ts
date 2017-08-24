import {athlete} from './athlete';
import {vo2maxClass} from './classes';

let vm = new vo2maxClass();
var ath = new athlete();
ath.name = 'Παναγιώτης Λυπηρίδης';
vm.bicycling=23.1;
ath.vo2max=vm;
ath.vo2max.bicycling=32;

console.log(`To όνομα είναι: ${ath.name}`);