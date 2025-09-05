 let Select = document.querySelector(".Select");
        let Text = document.querySelector(".text");

        function updateText() {
            if (Select.value === "Geo") {
                Text.innerHTML = `
            <p>გამარჯობა, მე ვარ 16 წლის ფრონტ-ენდ დეველოპერი, ამჟამად ვსწავლობ როგორც სკოლაში, ასევე STEP IT აკადემიაში, 
            სადაც ვსწავლობ full-stack ვებ-დეველოპმენტს.
            ვლაპარაკობ ქართულად და ინგლისურად. მიყვარს კომპიუტერთან  მუშაობა და სახლში კარგად ორგანიზებული სამუშაო სივრცე მაქვს.
            სამწუხაროდ, სამუშაო გამოცდილება არ მაქვს, მაგრამ  მზად ვარ, რომ ჩემი მაქსიმუმი გავაკეთო.</p>`;
            } else if (Select.value === "Eng") {
                Text.innerHTML = `
            <p>I'm a 16-year-old front-end developer currently studying both in school and at STEP IT
            Academy, where I'm learning full-stack web development. I can speak Georgian and English. I
            love working on my computer and have a well-organized workspace at home. Unfortunately I
            don’t have any working experience, but I’m determined to give my best effort.</p> `;
            } else if (Select.value === "Rus") {
                Text.innerHTML = `
            <p>Здравствуйте! Меня зовут Лаша, мне 16 лет, и я занимаюсь фронтенд-разработкой.
            В настоящее время я учусь в школе и параллельно в STEP IT Academy, где осваиваю full-stack веб-разработку.
            Я свободно говорю на грузинском и английском языках и с удовольствием провожу время за компьютером. Дома у меня есть аккуратно организованное рабочее место,
            оторое помогает мне сосредоточиться и вдохновляет на новые проекты. У меня пока нет профессионального опыта, но я полон энтузиазма, готов учиться и прикладывать максимум усилий.</p>`;
            } else {
                Text.innerHTML = "";
            }
        }

 
        updateText();

  
        Select.addEventListener("change", updateText);
