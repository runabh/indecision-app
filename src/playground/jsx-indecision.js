console.log("App.js is running");

//JSX

const objApp = {
    title: 'Indecison App',
    subtitle: 'Let your decisions in hands of a computer',
    options: []
};

const onFormSubmit = (e) => {
e.preventDefault();

const option = e.target.elements.options.value;
if(option)
{
    objApp.options.push(option);
    e.target.elements.options.value = '';
    render();
}
};

const clearAll = () => {
objApp.options = [];
render();
};

const onMakeDecision = () => {
const randomNum = Math.floor(Math.random() * objApp.options.length);
const option = objApp.options[randomNum];
alert(option);
};

const render = () => {

const template = <div>
    <h1>{objApp.title}</h1>
    {objApp.subtitle && <p>{objApp.subtitle}</p>}
    <p>{objApp.options.length>0 ? 'Here are your options' : 'There are no option'}</p>
    
    <button disabled={objApp.options.length === 0} onClick={onMakeDecision}>What Should I do?</button>
    <button onClick={clearAll}>Remove All</button>
    <ol>
    {objApp.options.map((option) => <li key = {option}>{option}</li>)}
    </ol>
    <form onSubmit={onFormSubmit}>
    <input type="text" name="options"/>
    <button>Add options!</button>
    </form>
</div>;
ReactDOM.render(template, appRoot);
}


const appRoot = document.getElementById('app');
render();


