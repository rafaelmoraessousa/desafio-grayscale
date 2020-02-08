async function getTenHeroesWithSyncAwait() {
  //Parâmetros do fetch: fetch('<url>',)
  const get = await fetch(
    'https://akabab.github.io/superhero-api/api/all.json',
    { method: 'GET' }
  );

  const tenHeroes = await get.json();
  

  const tenFirstHeros = tenHeroes.filter((hero, index) =>{
        if(hero.id <= 10){
          return true;
        } else {
          return false;
        }
  })
  console.log(tenFirstHeros);
}

async function getHeroesWithDC() {
  //Parâmetros do fetch: fetch('<url>',)
  const get = await fetch(
    'https://akabab.github.io/superhero-api/api/all.json',
    { method: 'GET' }
  );

  const tenHeroes = await get.json();
  

  const tenFirstHeros = tenHeroes.filter((hero) =>{
        if(hero.biography.publisher === 'DC Comics'){
          return true;
        } else {
          return false;
        }
  })
  console.log(tenFirstHeros);
}

async function getHeroesInitialsNames(){
  const get = await fetch(
    'https://akabab.github.io/superhero-api/api/all.json',
    { method: 'GET' }
  );

  const heroesInitials = await get.json();
  
  const heroesInitialsNames = heroesInitials.filter((hero, index) =>{
    if(hero.name === 'A-Bomb'){
      return true;
    } else {
      return false;
    }
})

  

}

  getHeroesWithDC();
getTenHeroesWithSyncAwait();
getHeroesInitialsNames();
