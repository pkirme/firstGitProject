console.log('person1 shows ticket');
console.log('person2 shows ticket');

const preMovie = async () => {

  const person3PromiseToShowTicketWhenWifeArrives = new Promise((resolve, reject) => {
    setTimeout(() => resolve('ticket'), 3000);
  });
  const getPopcorn =  new Promise((resolve, reject) => {
		setTimeout(() => resolve('popcorn'), 3000);
  });
  
  const addButter =  new Promise((resolve, reject) => {
		setTimeout(() => resolve('butter'), 3000);
  });
  
  const getColdDrinks =  new Promise((resolve, reject) => {
		setTimeout(() => resolve('cold drink'), 3000);
  });

  let ticket = await person3PromiseToShowTicketWhenWifeArrives;

  console.log(`got the ${ticket}`);
  
  let popcorn = await getPopcorn;
  console.log(`added ${popcorn}`);
	
  let butter = await addButter;
  console.log(`added ${butter}`);
    
  let coldDrink = await getColdDrinks;
  console.log(`added ${coldDrink}`);
  
  return ticket;
  
};

preMovie().then((t) => console.log(`person4 shows ${t}`));

console.log('person4 shows ticket');
