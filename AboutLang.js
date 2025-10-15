const dropdown = document.querySelector(".dropdown");
const btn = dropdown.querySelector(".dropdown-btn");
const menu = dropdown.querySelector(".dropdown-content");
const textBox = document.querySelector(".text");

const texts = {
  Geo: `<p>გამარჯობა, მე ვარ 16 წლის ფრონტ-ენდ დეველოპერი, ამჟამად ვსწავლობ როგორც სკოლაში, ასევე STEP IT აკადემიაში, 
  სადაც ვსწავლობ full-stack ვებ-დეველოპმენტს.
  ვლაპარაკობ ქართულად და ინგლისურად. მიყვარს კომპიუტერთან მუშაობა და სახლში კარგად ორგანიზებული სამუშაო სივრცე მაქვს.
  სამწუხაროდ, სამუშაო გამოცდილება არ მაქვს, მაგრამ მზად ვარ, რომ ჩემი მაქსიმუმი გავაკეთო.</p>`,

  Eng: `<p>I'm a 16-year-old front-end developer currently studying both in school and at STEP IT
  Academy, where I'm learning full-stack web development. I can speak Georgian and English. I
  love working on my computer and have a well-organized workspace at home. Unfortunately I
  don’t have any working experience, but I’m determined to give my best effort.</p>`,

  Rus: `<p>Здравствуйте! Меня зовут Лаша, мне 16 лет, и я занимаюсь фронтенд-разработкой.
  В настоящее время я учусь в школе и параллельно в STEP IT Academy, где осваиваю full-stack веб-разработку.
  Я свободно говорю на грузинском и английском языках и с удовольствием провожу время за компьютером. 
  Дома у меня есть аккуратно организованное рабочее место,
  которое помогает мне сосредоточиться и вдохновляет на новые проекты. 
  У меня пока нет профессионального опыта, но я полон энтузиазма, готов учиться и прикладывать максимум усилий.</p>`
};

btn.addEventListener("click", () => {
  dropdown.classList.toggle("open");
});

menu.querySelectorAll("div").forEach(option => {
  option.addEventListener("click", () => {
    const value = option.dataset.value;
    btn.textContent = option.textContent;
    updateText(value);
    dropdown.classList.remove("open");
  });
});

document.addEventListener("click", e => {
  if (!dropdown.contains(e.target)) {
    dropdown.classList.remove("open");
  }
});

function updateText(value) {
  textBox.innerHTML = texts[value] || "";

  textBox.classList.remove("show");
  void textBox.offsetWidth;
  textBox.classList.add("show");
}

updateText("Geo");
btn.textContent = "ქართული";