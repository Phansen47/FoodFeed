const newFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#recipe-name').value.trim();
    const instructions = document.querySelector('#recipe-instructions').value.trim();
    const category = document.querySelector('#category').value.trim();
    const area = document.querySelector('#area').value.trim();
    const ingredient1 = document.querySelector('#ingredient-1').value.trim();
    const ingredient2 = document.querySelector('#ingredient-2').value.trim();
    const ingredient3 = document.querySelector('#ingredient-3').value.trim();
    const ingredient4 = document.querySelector('#ingredient-4').value.trim();
    const ingredient5 = document.querySelector('#ingredient-5').value.trim();
    const ingredient6 = document.querySelector('#ingredient-6').value.trim();
    const ingredient7 = document.querySelector('#ingredient-7').value.trim();
    const ingredient8 = document.querySelector('#ingredient-1').value.trim();
    const ingredient9 = document.querySelector('#ingredient-9').value.trim();
    const ingredient10 = document.querySelector('#ingredient-10').value.trim();


    if (title && instructions) {
      const response = await fetch(`/api/meals`, {
        method: 'POST',
        body: JSON.stringify({ title, instructions, category, area, ingredient1, ingredient2, 
        ingredient3, ingredient4, ingredient5, ingredient6, ingredient7, ingredient8, ingredient9, ingredient10}),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to create project');
      }
    }
  };

  document
  .querySelector('#create-btn')
  .addEventListener('submit', newFormHandler);
