function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  //////////////////////////////////1//////////////////////////////////

  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 
    18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

    function calendario() {
        const days = document.getElementById('days');

        for (i = 0; i < dezDaysList.length; i +=1){
            const li = document.createElement('li');
            li.innerText = dezDaysList[i];
            li.className = 'day'

            if(dezDaysList[i] == 24 || dezDaysList[i] == 31) {
                li.classList.add('holiday')
            } else if (dezDaysList[i] == 4 || dezDaysList[i] == 11 || dezDaysList[i] == 18) {
                li.classList.add('friday')
            } else if (dezDaysList[i] == 25) {
                li.classList.add('holiday')
                li.classList.add('friday')
            } 

            days.appendChild(li)
        }
    }
    calendario();
    //////////////////////////////////////2/////////////////////////////////////////////

    const string = 'Feriados'
    const buttonsContainer = document.querySelector('.buttons-container')

    function botao(string) {
        const button = document.createElement('button')
        button.innerText = string
        button.id = 'btn-holiday'
        buttonsContainer.appendChild(button)
    }
    botao(string)
    //////////////////////////////////////3///////////////////////////////////////

    function displayHolidays() {
        let getHolidayButton = document.querySelector('#btn-holiday');
        let getHolidays = document.querySelectorAll('.holiday')
        let backgroundColor = 'rgb(238,238,238)';
        let setNewColor = 'white';
      
        getHolidayButton.addEventListener('click', function() {
          for (let index = 0; index < getHolidays.length; index += 1) {
            if (getHolidays[index].style.backgroundColor === setNewColor) {
              getHolidays[index].style.backgroundColor = backgroundColor;
            } else {
              getHolidays[index].style.backgroundColor = setNewColor;
            }
          }
        })
      };
      
      displayHolidays();
    ////////////////////////////////////////4///////////////////////////////////

    const string2 = 'Sexta-feira'

    function botao2(string2) {
        const button = document.createElement('button')
        button.innerText = string2
        button.id = 'btn-friday'
        buttonsContainer.appendChild(button)
    }
    botao2(string2)
    ////////////////////////////////////5/////////////////////////////////////

    function displayFridays(fridaysArray) {
        let getFridayButton = document.querySelector('#btn-friday');
        let fridays = document.getElementsByClassName('friday');
        let newFridayText = 'SEXTOU o/';
      
        getFridayButton.addEventListener('click', function() {
        for (let index = 0; index < fridays.length; index += 1) {
          if (fridays[index].innerHTML !== newFridayText) {
              fridays[index].innerHTML = newFridayText;
          } else {
              fridays[index].innerHTML = fridaysArray[index];
            }
          }
        })
      };
      
      let dezFridays = [ 4, 11, 18, 25 ];
      displayFridays(dezFridays);
      //////////////////////////////////6////////////////////////////////////

      function dayMouseOver() {
        let days = document.querySelector('#days');
      
        days.addEventListener('mouseover', function(event) {
          event.target.style.fontSize = '30px';
          event.target.style.fontWeight = '600';
        })
      };
      
      function dayMouseOut() {
        let days = document.querySelector('#days');
      
        days.addEventListener('mouseout', function(event) {
          event.target.style.fontWeight = '200';
          event.target.style.fontSize = '20px';
        })
      };
      
      dayMouseOver();
      dayMouseOut();
      //////////////////////////////////7///////////////////////////////////

      function newTaskSpan(task) {

        let tasksContainer = document.querySelector('.my-tasks');
        let taskName = document.createElement('span');
      
        taskName.innerHTML = task;
        tasksContainer.appendChild(taskName);
      };
      
      newTaskSpan('Projeto:');
      /////////////////////////////////8////////////////////////////////////

      function newTaskDiv(color) {

        let tasksContainer = document.querySelector('.my-tasks');
        let newTask = document.createElement('div');
      
        newTask.className = 'task';
        newTask.style.backgroundColor = color;
        tasksContainer.appendChild(newTask);
      };
      
      newTaskDiv('green');
      /////////////////////////////////9////////////////////////////////////

      function setTaskClass() {
        let selectedTask = document.getElementsByClassName('task selected');
        let myTasks = document.querySelector('.task');
      
        myTasks.addEventListener('click', function(event) {
          if (selectedTask.length === 0) {
            event.target.className = 'task selected';
          } else {
            event.target.className = 'task';
          }
        });
      };
      
      setTaskClass();
      /////////////////////////////////10///////////////////////////////////

      function setDayColor() {
        let selectedTask = document.getElementsByClassName('task selected');
        let days = document.querySelector('#days');
        let taskDiv = document.querySelector('.task');
        let taskColor = taskDiv.style.backgroundColor;
        
        days.addEventListener('click', function(event){
          let eventTargetColor = event.target.style.color;
          if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
            let color = selectedTask[0].style.backgroundColor;
            event.target.style.color = color;
          } else if (eventTargetColor === taskColor && selectedTask.length !== 0) {
            event.target.style.color = 'rgb(119,119,119)';
          }
        });
      };
      
      setDayColor();

