// const form = document.querySelector('form');
// form.addEventListener('submit', function(e) {
//     e.preventDefault();
    
//    const height =  parseInt(document.queryselector('#height').value);
//    const weight =  parseInt(document.queryselector('#weight').value);
//     const results = document.queryselector('#results')
//    if(height ===''|| height<0 ||isNaN(height)){
//     results.innerHTML= `Please enter valid numbers for height ${height}`;
//    }
//    else if(weight ===''|| weight<0 ||isNaN(weight)){
//     results.innerHTML= `Please enter valid numbers for weight ${weight}`;
//    }
//    else {
//        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
//        results.innerHTML = `<span>${bmi}</span>`;
//    }
// });


const form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    results.innerHTML = `<span>${bmi}</span>`;

  if (bmi < 18.5) {
    results.innerHTML += `<p>You are underweight</p>`;
  }
  else if (bmi >= 18.5 && bmi < 24.9) {
    results.innerHTML += `<p>You have a normal weight</p>`;
  } else (bmi >= 25 ) 
  {
    results.innerHTML += `<p>You are overweight</p>`;
  }
}
});
