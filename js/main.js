let answerArray = [
  {
    "name": "fear",
    "value": undefined,
  },
  {
    "name": "comfort",
    "value": undefined,
  },
  {
    "name": "dateOfBirth",
    "value": undefined,
  },
  {
    "name": "sleep",
    "value": undefined,
  },
  {
    "name": "track",
    "value": undefined,
  }

]
let currentItem = 0;

let testItems = document.querySelectorAll(".test-list__item");
function changeBlocksActivity() {
  currentItem++;
  for (let i = 0; i < testItems.length; i++) {
    testItems[i].classList.remove("active");
  }
  testItems[currentItem].classList.add("active");
  console.log(currentItem)
}


let testBtns = document.querySelectorAll("button.btn");
for (let i = 0; i < testBtns.length; i++) {
  testBtns[i].onclick = function () {
    switch (currentItem) {
      case 5: {
        answerArray[currentItem - 1].value = testBtns[i].textContent;
        console.log(answerArray);
        changeBlocksActivity();
        setTimeout(changeBlocksActivity, 2000);
        break
      }
      case 4: {
        answerArray[currentItem - 1].value = testBtns[i].textContent;
        console.log(answerArray);
        changeBlocksActivity();
        break
      }
      case 2: {
        let swithchCase = switchFunctionIfInputs();
        if (swithchCase === 1) {
          changeBlocksActivity();
          setTimeout(changeBlocksActivity, 2000);
          findAge()
          break
        } else {
          break
        }
      }
      default: {
        answerArray[currentItem].value = testBtns[i].textContent;
        changeBlocksActivity();
        break
      }

    }
  }
}


function switchFunctionIfInputs() {
  let inputsValue = [];
  let checker = 0;
  let thisBtn = testItems[currentItem].querySelector("button.btn")

  let inputs = thisBtn.parentNode.querySelectorAll("input.inp");
  for (let index = 0; index < inputs.length; index++) {
    if (inputs[index].value !== "") {
      for (let index = 0; index < inputs.length; index++) {
        let currentInputValue = inputs[index].value;
        inputsValue[index] = currentInputValue;
      }
      answerArray[currentItem].value = inputsValue;
      checker = 1;
      return checker;
    } else {
      inputs[index].classList.add("incorrect");
      checker = 0
      return checker
    }
  }
}

function findAge() {
  let yearOutput = document.querySelector(".track-quote__text");
  console.log(yearOutput)
  let yearReplyArray = [
    "По вам скучает очень близкий человек, которого больше нет в мире живых. Возможно это дедушка или бабушка.",
    "По вам скучает очень близкий человек, которого больше нет в мире живых. Возможно это кто-то из Ваших родителей."
  ]
  let yearOfBirth = answerArray[2].value[2];
  let yearCurrent = 2022;
  let yearsFull = yearCurrent - yearOfBirth;
  console.log(yearsFull)

  if (yearsFull > 45) {
    yearOutput.innerHTML = yearReplyArray[1]
  } else if (yearsFull > 35 && yearsFull < 46) {
    yearOutput.innerHTML = yearReplyArray[0]
  } else {

  }
}