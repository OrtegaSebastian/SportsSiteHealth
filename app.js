// Sports data
const sports = [
  { name: 'Running', image: 'running.jpg', description: 'Running is a popular form of exercise that is known to improve cardiovascular health, reduce stress, and promote weight loss.' },
  { name: 'Cycling', image: 'cycling.jpg', description: 'Cycling is a low-impact activity that is great for building endurance, toning muscles, and improving joint mobility.' },
  { name: 'Swimming', image: 'swimming.jpg', description: 'Swimming is a full-body workout that can help improve muscle strength, endurance, and cardiovascular health.' },
  { name: 'Yoga', image: 'yoga.jpg', description: 'Yoga is a mind-body practice that combines physical postures, breathing exercises, and meditation to improve flexibility, balance, and relaxation.' },
  { name: 'Basketball', image: 'basketball.jpg', description: 'Basketball is a high-energy sport that can improve cardiovascular health, build endurance, and promote teamwork and social interaction.' },
  { name: 'Soccer', image: 'soccer.jpg', description: 'Soccer is a popular team sport that can improve cardiovascular health, coordination, and promote teamwork and communication.' },
];

// Navigation menu
const navMenu = document.querySelector('.nav-menu');
const navItems = sports.map(sport => {
  const navItem = document.createElement('li');
  const link = document.createElement('a');
  link.textContent = sport.name;
  link.href = `#${sport.name}`;
  navItem.appendChild(link);
  return navItem;
});
navMenu.append(...navItems);

// Display sports sections
const sportsSection = document.querySelector('.sports-section');
const sections = sports.map(sport => {
  const section = document.createElement('section');
  section.id = sport.name;
  const heading = document.createElement('h2');
  heading.textContent = sport.name;
  section.appendChild(heading);
  const img = document.createElement('img');
  img.src = `images/${sport.image}`;
  img.alt = sport.name;
  section.appendChild(img);
  const p = document.createElement('p');
  p.textContent = sport.description;
  section.appendChild(p);
  return section;
});
sportsSection.append(...sections);

// Smooth scrolling to each section
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetSection = document.querySelector(link.hash);
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});

function scrollToSection(sectionId) {
  const section = document.querySelector(sectionId);
  section.scrollIntoView({ behavior: 'smooth', duration: 2000 });
}
