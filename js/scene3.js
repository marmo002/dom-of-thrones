function scene3() {

  // Setup Stage
  mySrc = desert.getAttribute('src')
  stageImg = document.querySelector('#stage-img')
  stageImg.setAttribute('src', mySrc)


  // Setup Cast
  danerysContainer = document.createElement('div');
  stage.append(danerysContainer);
  danerysContainer.style.position = 'absolute';
  danerysContainer.style.width = '10%';
  danerysContainer.style.height = '35%'
  danerysContainer.style.top = '55%';
  danerysContainer.style.left = '25%';
  // danerysContainer.style.border = 'solid 2px red';

  // Character 1
  danerys = document.querySelector('#danerys');
  danerysContainer.append(danerys);
  danerys.style.width = '55%'
  blueDress = document.querySelector('#blue-dress');
  danerysContainer.append(blueDress);
  blueDress.style.position = 'absolute';
  blueDress.style.bottom = '0';
  blueDress.style.left = '0';

  // Character 2
  drogoContainer = document.createElement('div');
  stage.append(drogoContainer);
  drogoContainer.style.position = 'absolute';
  drogoContainer.style.top = '55%';
  drogoContainer.style.left = '55%';
  drogoContainer.style.width = '10%';
  drogoContainer.style.height = '35%';
  // drogoContainer.style.border = 'solid 2px orange';
  drogo = document.querySelector('#drogo');
  drogoContainer.append(drogo);
  drogo.style.position = 'absolute'
  drogo.style.width = '55%'
  drogo.style.left = '25%'
  bulkyMan = document.querySelector('#bulky-man');
  drogoContainer.append(bulkyMan);
  bulkyMan.style.position = 'absolute';
  bulkyMan.style.bottom = '0';

  // Setup Props
  egg = document.querySelector('#egg');
  stage.append(egg);
  egg.style.position = 'absolute';
  egg.style.top = '65%';
  egg.style.left = '31%';
  egg.style.width = '5%';


  // Prop 1

  // Prop 2

  // Action!

  // Stage direction 1
  frame(function() {
    egg.style.top = '65%';
    egg.style.left = '31%';
  })

  frame(function() {
    egg.style.top = '57%';
    egg.style.left = '36%';
  })

  frame(function() {
    egg.style.top = '54%';
    egg.style.left = '43%';
  })

  frame(function() {
    egg.style.top = '57%';
    egg.style.left = '50%';
  })
  // Stage direction 2

  frame(function() {
    egg.style.top = '65%';
    egg.style.left = '54%';
  })

  frame(function() {
    egg.style.top = '57%';
    egg.style.left = '50%';
  })

  frame(function() {
    egg.style.top = '54%';
    egg.style.left = '43%';
  })

  frame(function() {
    egg.style.top = '57%';
    egg.style.left = '36%';
  })

  frame(function() {
    egg.style.top = '65%';
    egg.style.left = '31%';
  })


}
