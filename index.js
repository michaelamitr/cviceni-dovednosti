console.log('funguju!');

const userHTMLSkill = Number(
  prompt(
    'Zadejte čísli v rozmezí 0 až 100, které vyjadřuje vaši úroveň HTML (0 nejmenší zdatnost, 100 největší zdatnost',
  ),
);
const userCSSSkill = Number(
  prompt(
    'Zadejte čísli v rozmezí 0 až 100, které vyjadřuje vaši úroveň CSS (0 nejmenší zdatnost, 100 největší zdatnost',
  ),
);
const userJSSkill = Number(
  prompt(
    'Zadejte čísli v rozmezí 0 až 100, které vyjadřuje vaši úroveň JavaScriptu (0 nejmenší zdatnost, 100 největší zdatnost',
  ),
);

const skill1Field = document.querySelector('#skill1');
const skill2Field = document.querySelector('#skill2');
const skill3Field = document.querySelector('#skill3');

const skill1ValueField = skill1Field.querySelector('#skill__progress');
const skill2ValueField = skill2Field.querySelector('#skill__progress');
const skill3ValueField = skill3Field.querySelector('#skill__progress');

skill1ValueField.style.width = userHTMLSkill + '%';
skill2ValueField.style.width = userCSSSkill + '%';
skill3ValueField.style.width = userJSSkill + '%';
