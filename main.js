// import "./style.css";
// import javascriptLogo from './javascript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.js'

// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector('#counter'))

import "./utils/bling.js";

// console.log($$('div'));

function app() {
    let state = {id: 0, todos: []};
  let ui = {
    input: $("input"),
    form: $("form"),
  };
    // console.log(ui);

  return mk("div", { id: "app" }, [
    mk("h1", null, ["Todo App: Altschool Frontend Version"]),
    (ui.form = mk("form", { id: "form" }, [
      (ui.input = mk("input", {
        className: "todo",
        type: "text",
        id: "todo",
        placeholder: "Enter a todo",
      })),
      mk("button", { type: "submit", onclick: add}, ["Add Todo"]),
    ])),
    (ui.todos = mk("ul", { id: "todos" }, [])),
  ]);

  function createTodo(todo) {
    let item, text;
    item = mk('li', {className: 'todo-item'}, [
        (text = mk('span', {}, [todo.text]))
    ]);

    return item;
  }
  //   createTodo({text: 'Buy milk'});

  function add(e) {
    e.preventDefault();
    const text = ui?.input.value;
    if (!text) return;
    const todo = {text, completed: false, id: Date.now()};
    console.log(todo);

    state.todos.push(todo);

    ui?.todos.prepend(createTodo(todo));
  }

}

function render() {
  document.body.prepend(app());
}

render();
