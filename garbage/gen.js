var modules = ['doepfer', 'morphagene', 'sto', 'tune', 'pluck', 'moddemix', 'maths', 'freez', 'vca matrix', 'pedal', 'steppy', 'quadratt', 'digiverb'];
var motors = ['doepfer', 'morphagene', 'sto', 'maths', 'quadratt'];
var final = new Array;

function myScore() {
  document.getElementById('tit').classList.remove('pre');
  document.getElementById('tit').classList.add('post');
  var ctrl = Math.floor(Math.random() * motors.length);
  final.push(motors[ctrl]);

  while (modules[ctrl] == final[0]) {
    ctrl = Math.floor(Math.random() * modules.length);
  }
  final.push(modules[ctrl]);

  while (modules[ctrl] == final[0] || modules[ctrl] == final[1]) {
    ctrl = Math.floor(Math.random() * modules.length);
  }
  final.push(modules[ctrl]);

  while (modules[ctrl] == final[0] || modules[ctrl] == final[1] || modules[ctrl] == final[2]) {
    ctrl = Math.floor(Math.random() * modules.length);
  }
  final.push(modules[ctrl]);

  for (i = 0; i < final.length; i++) {
    var j = i + 1;
    document.getElementById('params').innerHTML += '<b>Module ' + j + ':</b> ' + final[i] + '<br>';
  }

  document.getElementById('params').innerHTML += '<br>';

  var k = Math.ceil(Math.random() * 32);

  for (i = 0; i < k; i++) {
    var l = Math.floor(Math.random() * 3);
    if (l == 0) {
      document.getElementById('notes').innerHTML += '_';
    } else if (l == 1) {
      document.getElementById('notes').innerHTML += '.';
    } else {
      document.getElementById('notes').innerHTML += '/';
    }
    var m = i % 8;
    if (m == 7) {
      document.getElementById('notes').innerHTML += '<br>';
    }
  }

  document.getElementById('generate').style.display += 'none';
}
