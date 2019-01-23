class IndecisionApp extends React.Component{
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOPtions =  this.handleAddOPtions.bind(this);
        this.handleDeleteOption =  this.handleDeleteOption.bind(this);
        this.state = {
            options : []
        };
    }
    componentDidMount(){
        try
        {
        const json = localStorage.getItem('options');
        const options = JSON.parse(json);
        if(options){
            this.setState(() => ({ options }));
        }
    }
    catch(e)
    {

    }

    }
    componentDidUpdate(prevProps, prevState){
        
        if(prevState.options.length !== this.state.options.length)
        {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }
    handlePick(){
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    }
    handleDeleteOptions(){
        this.setState(() => ({options : []}) );
    }
    handleDeleteOption(optionToDelete){
        this.setState((prevState) => ({
            options : prevState.options.filter((option) => optionToDelete !== option )
        }));
    }
    handleAddOPtions(option){
        if(!option){
            return 'Please enter a valid value';
        }
        else if(this.state.options.indexOf(option) > -1)
        {
            return 'Item already exists';
        }
        this.setState((prevState) => ({ options: prevState.options.concat([option]) }) );
            
    }
    render(){
        const subtitle = 'Put your life in the hands of a computer.';
        
        return(
            <div>
            <Header subtitle={subtitle} />
            <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick}/>
            <Options 
            options={this.state.options} 
            handleDeleteOptions={this.handleDeleteOptions} 
            handleDeleteOption={this.handleDeleteOption}
            />
            <AddOptions handleAddOPtions={this.handleAddOPtions}/>
            </div>
        );
    }
}


const Header = (props) => {
    return (
            <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
            </div>
        );
}

Header.defaultProps = {
    title: 'Indecision'
};

const Action = (props) =>{
    
        return(
            <div>
            <button 
            onClick={props.handlePick}
            disabled={!props.hasOptions}
            >
            What should i do?
            </button>
            </div>
        );
}

const Options = (props) => {
   return(
            <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {props.options.length === 0 && <p>Please add an option to get started.</p>}
                {props.options.map((option) => (
                    <Option 
                    key={option} 
                    optionText={option} 
                    handleDeleteOption={props.handleDeleteOption}
                    />)
                )}
                
            </div>
        );
}

const Option = (props) => {
   return(
            <div>
            {props.optionText}
            <button onClick= {(e) => {props.handleDeleteOption(props.optionText)}}>Remove</button>
            </div>
        );
}

class AddOptions extends React.Component{
    constructor(props){
        super(props);
        this.handleAddOPtions = this.handleAddOPtions.bind(this);
        this.state = {
            error : undefined
        };
    }
    handleAddOPtions(e){
        e.preventDefault();
        const option = e.target.elements.options.value.trim();
        const error = this.props.handleAddOPtions(option);
        this.setState(() => ({error}) );
        if(!error){
            e.target.elements.options.value = '';
        }
        
    }
    render(){
        return(
            <div>
            {this.state.error && <p>{this.state.error}</p>}
            <form onSubmit={this.handleAddOPtions}>
                <input type="text" name="options" />
                <button>Add Options!</button>
            </form>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));