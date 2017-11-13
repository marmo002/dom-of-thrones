function scene2() {

  // Setup Stage
  stage         = document.querySelector('#stage');
  castle        = document.querySelector('#castle');
  stageImg      = stage.querySelector('#stage-img');
  castleImgSrc  = castle.getAttribute('src')
  stageImg.setAttribute('src', castleImgSrc);

  // Setup Cast

  // Character 1
  nedContainer = document.createElement('div');
  stage.appendChild(nedContainer)
  nedContainer.style.position = 'absolute';
  nedContainer.style.width = '10%';
  nedContainer.style.height = '37%';
  nedContainer.style.top = '55%';
  nedContainer.style.left = '25%';

  ned = document.querySelector('#ned')
  nedContainer.append(ned)
  ned.style.position = 'absolute';
  ned.style.top = '0';
  ned.style.width = '65%';
  leather = document.querySelector('#leather-armour')
  nedContainer.append(leather);
  leather.style.position = 'absolute';
  leather.style.bottom = '0';

  // Character 2
  joffContainer = document.createElement('div')
  joffContainer.id = 'joff-container'
  stage.append(joffContainer)
  joffContainer.style.width = '8%'
  joffContainer.style.position = 'absolute'
  joffContainer.style.height = '31%'
  joffContainer.style.top = '55%'
  joffContainer.style.left = '55%'

  joff = document.querySelector('#joffrey')
  joffContainer.append(joff)
  joff.style.width = '75%'
  joff.style.position = 'absolute'
  joff.style.left = '33%'

  kingWardrobe = document.querySelector('#king')
  joffContainer.append(kingWardrobe)
  kingWardrobe.style.position = 'absolute'
  kingWardrobe.style.bottom = 0


  // Setup Props
  sword = document.querySelector('#sword');
  stage.append(sword);

  // Prop 1
  sword.style.position = 'absolute';
  sword.style.top = '77%';
  sword.style.left = '31%';
  sword.style.height = '5%';
  sword.style.transform = 'rotateY(150deg)';

  // Prop 2

  // Action!

  // Existing Start Frame
  frame(function() {
    sword.style.top = '77%'
    sword.style.left = '31%'
  })

  // New Middle Frame
  frame(function() {
    sword.style.top = '74%'
    sword.style.left = '36%'
  })

  // New Middle Frame
  frame(function() {
    sword.style.top = '71%'
    sword.style.left = '41%'
  })

  // New Middle Frame
  frame(function() {
    sword.style.top = '68%'
    sword.style.left = '45%'
  })

  // New Middle Frame
  frame(function() {
    sword.style.top = '66%'
    sword.style.left = '50%'
  })

  // Existing End Frame
  frame(function() {
    sword.style.top = '64%'
    sword.style.left = '53%'
    sword.style.opacity = '0.6';
  })

  // Joffrey frames
  frame(function() {
    sword.style.top = '62%'
    sword.style.left = '56%'
    sword.style.opacity = '0';

    joffrey.style.top = '35';
    joffrey.style.left = '50%';
    joffrey.style.transform = 'rotateZ(220deg)';
  })

  frame(function() {
    joffrey.style.top = '55%';
    joffrey.style.left = '200%';
    joffrey.style.transform = 'rotateZ(140deg)';
  })

  frame(function() {
    joffrey.style.top = '82%';
    joffrey.style.left = '424%';
    joffrey.style.transform = 'rotateZ(260deg)';
    joffrey.style.opacity = '0.6';
  })

  frame(function() {
    joffrey.style.left = '460%';
    joffrey.style.opacity = '0';
    joffrey.style.transform = 'rotateZ(180deg)';

  })


}
