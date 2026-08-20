// ===== PROGRAM DAY TOGGLE =====
// activación de cada día del programa

document.querySelectorAll('.program-day').forEach((day) => {
  day.addEventListener('click', () => {
    document.querySelectorAll('.program-day').forEach((d) => d.classList.remove('active'));
    day.classList.add('active');
  });
});
