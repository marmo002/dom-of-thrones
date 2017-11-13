
function scene4() {

  // Setup Stage
  divsStage = stage.querySelectorAll('div')
  divsStage.forEach(function(element){ element.remove(); });
  egg.remove();
  stage = document.querySelector('#stage');
  kingsLanding = document.querySelector('#kings-landing');
  stageImg = stage.querySelector('#stage-img');
  kingsLandingImg = kingsLanding.getAttribute('src');
  stageImg.setAttribute('src', kingsLandingImg);


  // Setup Cast
  jaimeContainer = document.createElement('div');
  stage.append(jaimeContainer)
  jaimeContainer.style.position = 'absolute';
  jaimeContainer.style.width = '10%';
  jaimeContainer.style.height = '37%';
  jaimeContainer.style.top = '55%';
  jaimeContainer.style.left = '25%';
  // jaimeContainer.style.border = 'solid 2px red';

  cerceiContainer = document.createElement('div');
  cerceiContainer.style.position = 'absolute';
  cerceiContainer.style.width = '10%';
  cerceiContainer.style.height = '37%';
  cerceiContainer.style.top = '55%';
  cerceiContainer.style.left = '50%';
  // cerceiContainer.style.border = 'solid 2px blue';
  stage.append(cerceiContainer);

  jonContainer = document.createElement('div');
  jonContainer.style.position = 'absolute';
  jonContainer.style.width = '10%';
  jonContainer.style.height = '37%';
  jonContainer.style.top = '55%';
  jonContainer.style.left = '75%';
  // jonContainer.style.border = 'solid 2px orange';
  stage.append(jonContainer);

  // Character 1
  jaime = document.querySelector('#jaime');
  jaimeContainer.append(jaime);
  jaime.style.position = 'absolute';
  jaime.style.left = '25%';
  jaime.style.width = '60%';
  jaimeArmor = document.querySelector('#armour-sword');
  jaimeContainer.append(jaimeArmor);
  jaimeArmor.style.position = 'absolute';
  jaimeArmor.style.bottom = '0';

  // Character 2
  cercei = document.querySelector('#cersei');
  cerceiContainer.append(cercei);
  cercei.style.position = 'absolute';
  cercei.style.width = '65%';
  cercei.style.left = '20%';
  cerceiDress = document.querySelector('#red-dress');
  cerceiContainer.append(cerceiDress);
  cerceiDress.style.position = 'absolute';
  cerceiDress.style.bottom = '0';

  // Character 3
  jonContainer.append(jon);
  jonContainer.append(furs);
  jon.style.position = 'absolute';
  jon.style.width = '65%';
  jon.style.left = '25%';
  furs.style.position = 'absolute';
  furs.style.bottom = '0';

  // Setup Props

  // Prop 1

  // Prop 2

  // Action!

  // Stage direction 1
  frame(function() {
    jaimeContainer.style.left = '25%';

    cerceiContainer.style.left = '50%';

    jonContainer.style.left = '75%';
  })

  frame(function() {
    jaimeContainer.style.left = '45%';

    cerceiContainer.style.left = '35%';

    jonContainer.style.left = '60%';
  })

  frame(function() {
    jaimeContainer.style.left = '75%';

    cerceiContainer.style.left = '20%';

    jonContainer.style.left = '55%';
  })

  frame(function() {
    jaimeContainer.style.left = '80%';

    cerceiContainer.style.left = '12%';

    jonContainer.style.left = '47%';
  })

  frame(function() {
    jaimeContainer.style.top = '37%';
    jaimeContainer.style.height = '55%';

    cerceiContainer.style.top = '37%';
    cerceiContainer.style.height = '55%';

    jonContainer.style.top = '37%';
    jonContainer.style.height = '55%';
  })

  frame(function() {
    jaimeContainer.style.top = '57%';
    jaimeContainer.style.height = '35%';

    cerceiContainer.style.top = '50%';
    cerceiContainer.style.height = '30%';

    jonContainer.style.top = '50%';
    jonContainer.style.height = '52%';
  })

  frame(function() {
    jaimeContainer.style.top = '77%';
    jaimeContainer.style.height = '25%';

    cerceiContainer.style.top = '60%';
    cerceiContainer.style.height = '20%';

    jonContainer.style.top = '65%';
    jonContainer.style.height = '37%';
  })

  frame(function() {
    jaimeContainer.style.top = '91%';
    jaimeContainer.style.height = '0%';

    cerceiContainer.style.top = '91%';
    cerceiContainer.style.height = '0%';

    jonContainer.style.top = '91%';
    jonContainer.style.height = '0%';

  })


}
