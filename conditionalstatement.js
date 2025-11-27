window.alert("Hello, We are the group \"404 Found: Us\"!");

        // Example 1: if / else
        const ageInput = document.getElementById('ageInput');
        const checkAgeBtn = document.getElementById('checkAgeBtn');
        const ageResult = document.getElementById('ageResult');

        checkAgeBtn.addEventListener('click', () => {
            const age = Number(ageInput.value);
            if (isNaN(age)) {
                ageResult.textContent = 'Please enter a valid number for age.';
                ageResult.style.color = 'crimson';
                return;
            }

            // Here is the if / else logic: if age is 18 or older, show Adult, otherwise show Minor.
            if (age >= 18) {
                ageResult.textContent = `You are ${age} years old — Adult.`;
                ageResult.style.color = 'green';
            } else {
                ageResult.textContent = `You are ${age} years old — Minor.`;
                ageResult.style.color = 'blue';
            }
        });

        // Example 2: if / else if / else
        const tempInput = document.getElementById('tempInput');
        const tempBtn = document.getElementById('tempBtn');
        const tempResult = document.getElementById('tempResult');

        tempBtn.addEventListener('click', () => {
            const temp = Number(tempInput.value);
            if (isNaN(temp)) {
                tempResult.textContent = 'Please enter a valid temperature.';
                tempResult.style.color = 'crimson';
                return;
            }

            // if / else if / else chain provides multiple branches depending on the temperature
            if (temp <= 0) {
                tempResult.textContent = 'Freezing! Wear a heavy coat.';
                tempResult.style.color = 'navy';
            } else if (temp <= 20) {
                tempResult.textContent = 'Cool weather. Wear a jacket.';
                tempResult.style.color = 'teal';
            } else if (temp <= 30) {
                tempResult.textContent = 'Nice and warm.';
                tempResult.style.color = 'green';
            } else {
                tempResult.textContent = 'Hot — stay hydrated and stay in the shade.';
                tempResult.style.color = 'orange';
            }
        });

         // Example 3: Guess the Animal
        const animalInput = document.getElementById('animalInput');
        const animalBtn = document.getElementById('animalBtn');
        const animalResult = document.getElementById('animalResult');

        animalBtn.addEventListener('click', () => {
            const animal = animalInput.value.trim().toLowerCase();
            if (!animal) {
                animalResult.textContent = 'Please enter an animal.';
                animalResult.style.color = 'crimson';
                return;
            }

            // if / else if / else chain provides multiple branches depending on the temperature
            if (animal = "goldfish" || "salmon" || "tuna" || "clownfish" || "shark") {
                animalResult.textContent = 'Correct! That is a fish.';
                animalResult.style.color = 'navy';
            } else if (animal = "octopus" || "squid" || "jellyfish" || "sea anemone") {
                animalResult.textContent = 'Correct! That is a sea creature.';
                animalResult.style.color = 'teal';
            } else if (animal = "Dolphin" || "Whale" || "Seal" || "Sea Otter") {
                animalResult.textContent = 'Nice and warm.';
                animalResult.style.color = 'green';
            } else if (animal = "Shrimp" || "Crab" || "Lobster" || "Krill") {
                animalResult.textContent = 'Nice and warm.';
                animalResult.style.color = 'green';
            } else if (animal = "Sea Turtle" || "Stingray" || "Starfish" || "Sea urchin") {
                animalResult.textContent = 'Nice and warm.';
                animalResult.style.color = 'green';
            } else {
                animalResult.textContent = 'Hot — stay hydrated and stay in the shade.';
                animalResult.style.color = 'orange';
            }
        });
