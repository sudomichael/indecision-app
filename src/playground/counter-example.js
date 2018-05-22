console.log('App.js is running huzzah!');

const app = {
  title: 'Lord of the Rings',
  subtitle: 'A few innocent hobbits save middle earth.',
  options: ['One', 'Two']
}
// JSX - JavaScript XML
const template = (
  <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      {app.options.length > 0 ? 
        <p>Here are your options: {app.options}</p> :
        <p>No Options</p>
      }
  </div>
);

const user = {
  name: 'Michael',
  age: 24,
  location: 'Philadelphia'
};

function getLocation(location){
  if (location){
    return <p>Location: {location}</p>;
  } 
}

/*
const templateTwo = (
  <div>
    <h1>{user.name ? user.name : 'Anonymous'}</h1>
    {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
  </div>
)
*/
let count = 0;
const addOne = () => {
  count++;
  renderCounterApp()
};

const minusOne = () => {
  count--;
  renderCounterApp()
}

const reset = () => {
  count = 0;
  renderCounterApp()
}

const appRoot = document.getElementById('app');

const renderCounterApp = () => {
  const templateTwo = (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={addOne}>+1</button>
        <button onClick={minusOne}>-1</button>
        <button onClick={reset}>reset</button>
    </div>
  );

ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();