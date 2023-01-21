function createCalendar(year, month) {
    //créé l'élément de la table  
    const table = document.createElement('table');
  
    //créé l'élément head de la table
    const thead = document.createElement('thead');
    const weekdays = ['Mo', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    weekdays.forEach(weekday => {
      const th = document.createElement('th');
      th.textContent = weekday;
      thead.appendChild(th);
    });
    table.appendChild(thead);
  
    //créé l'élément body de la table
    const tbody = document.createElement('tbody');
  
    //Détermine le nombre de jour dans le mois
    const numDays = new Date(year, month + 1, 0).getDate();
  
    // trouver le jour de la semaine du premier jour du mois 
    const firstDay = new Date(year, month, 1).getDay();
  
    // créer des lignes pour les jours du mois
    let currentDay = 1;
    let currentWeek = 1;
    while (currentDay <= numDays) {
      // créer une nouvelle ligne pour chaque semaine
        const tr = document.createElement('tr');
    
        //créer des cellules pour chaque jour de la semaine
        for (let i = 0; i < 7; i++) {
            const td = document.createElement('td');
            if (currentWeek === 1 && i < firstDay) {
                 // laisser la cellule vide pendant des jours au cours du mois précédent                td.textContent = '';
            } else if (currentDay > numDays) {
                // laisser la cellule vide pendant des jours au cours du mois suivant
                td.textContent = '';
            } else {
               // remplit la cellule avec le jour courant
                td.textContent = currentDay;
                currentDay++;
            }
            tr.appendChild(td);
        }
  
        // ajouter la ligne au corps du tableau
        tbody.appendChild(tr);
        currentWeek++;
    }
  
    // ajoute le corps du tableau au tableau
    table.appendChild(tbody);
  
    return table;
}
const calendar = createCalendar(2022, 0);
document.getElementById('calendar').appendChild(calendar);
