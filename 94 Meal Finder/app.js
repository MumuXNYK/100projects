const form = document.querySelector('form')
const magnifier = document.querySelector('.magnifier')

form.addEventListener('submit',searchMeal)
magnifier.addEventListener('click',searchMeal)

async function searchMeal(e) {
    e.preventDefault();

    const input = document.querySelector('.input')
    const title = document.querySelector('.title')
    const info = document.querySelector('.info')
    const img = document.querySelector('.img')
    const ingredientsOut = document.querySelector('.ingredients')

    const showMealInfo = (meal) =>{
        const {strMeal, strMealThumb, strInstructions} = meal;

        title.textContent = strMeal;
        img.style.backgroundImage = `url(${strMealThumb})`;
        info.textContent = strInstructions;

        const ingredients = [];

       for (let i = 1; i <= 20; i++) {
        if (meal[`strIngredient${i}`]) {
            ingredients.push(
                `${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`
            );
        } else {
            break;
        }
        }

        const html = `
            <span>${ingredients
                .map((ing) => `<li class="ing">${ing}</li>`)
                .join("")}</span>
        `
        ingredientsOut.innerHTML = html;
    } 

    const showAlert = () =>{
        alert('Meal not Found :(')
    }

    const fetchMeal = async (val) =>{
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${val}`);
        const {meals} = await res.json();
        return meals;
    }

    const val = input.value.trim()
    if (val) {
        const meals = await fetchMeal(val);

        if (!meals) {
            showAlert()
            return;
        }

        meals.forEach(showMealInfo)
    } else {
        alert('Please search a food item')
    }


}