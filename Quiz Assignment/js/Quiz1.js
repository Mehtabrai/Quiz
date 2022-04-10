
// creating an array and passing the number, questions, options, and answers
let questions = [
    {
    numb: 1,
    question: "What does HTML stand for?",
    answer: "Hyper Text Markup Language",
    options: [
      "Hyper Text Preprocessor",
      "Hyper Text Markup Language",
      "Hyper Text Multiple Language",
      "Hyper Tool Multi Language"
    ]
  },
    {
    numb: 2,
    question: "What does CSS stand for?",
    answer: "Cascading Style Sheet",
    options: [
      "Common Style Sheet",
      "Colorful Style Sheet",
      "Computer Style Sheet",
      "Cascading Style Sheet"
    ]
  },
    {
    numb: 3,
    question: "What does PHP stand for?",
    answer: "Hypertext Preprocessor",
    options: [
      "Hypertext Preprocessor",
      "Hypertext Programming",
      "Hypertext Preprogramming",
      "Hometext Preprocessor"
    ]
  },
    {
    numb: 4,
    question: "What does SQL stand for?",
    answer: "Structured Query Language",
    options: [
      "Stylish Question Language",
      "Stylesheet Query Language",
      "Statement Question Language",
      "Structured Query Language"
    ]
  },
    {
    numb: 5,
    question: "What does XML stand for?",
    answer: "eXtensible Markup Language",
    options: [
      "eXtensible Markup Language",
      "eXecutable Multiple Language",
      "eXTra Multi-Program Language",
      "eXamine Multiple Language"
    ]
  },
  // you can uncomment the below codes and make duplicate as more as you want to add question
  // but remember you need to give the numb value serialize like 1,2,3,5,6,7,8,9.....

  //   {
  //   numb: 6,
  //   question: "Your Question is Here",
  //   answer: "Correct answer of the question is here",
  //   options: [
  //     "Option 1",
  //     "option 2",
  //     "option 3",
  //     "option 4"
  //   ]
  // },
];



































































// function showQuetions(index){
//     const que_text = document.querySelector(".que_text");

//     //creating a new span and div tag for question and option and passing the value using array index
//     let que_tag = '<span>'+ questions[index].numb + ". " + questions[index].question +'</span>';
//     let option_tag = '<div class="option"><span>'+ questions[index].options[0] +'</span></div>'
//     + '<div class="option"><span>'+ questions[index].options[1] +'</span></div>'
//     + '<div class="option"><span>'+ questions[index].options[2] +'</span></div>'
//     + '<div class="option"><span>'+ questions[index].options[3] +'</span></div>';
//     que_text.innerHTML = que_tag; //adding new span tag inside que_tag
//     option_list.innerHTML = option_tag; //adding new div tag inside option_tag
    
//     const option = option_list.querySelectorAll(".option");

//     // set onclick attribute to all available options
//     for(i=0; i < option.length; i++){
//         option[i].setAttribute("onclick", "optionSelected(this)");
//     }
// }

