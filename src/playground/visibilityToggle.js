class Visibility extends React.Component{
    constructor(props){
        super(props);
        this.visibilityToggle=this.visibilityToggle.bind(this);
        this.state = {
            visibility: false
        };
    }
    visibilityToggle(){
        this.setState((prevState) => {
            return {
                visibility : !prevState.visibility
            };
        });
    }
    render(){
        return(
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.visibilityToggle}>{this.state.visibility ? 'Hide Details' : 'Show Details'}</button>
                {this.state.visibility && (<div>Here are some details</div>)}
            </div>
        );
    }
}

ReactDOM.render(<Visibility />, document.getElementById('app'));

// let visibility = false;

// const showDetail = () => {
//     visibility = !visibility;
//     render();
//     };

// const render = () => {

//     const template = <div>
//     <h1>Visibility Toggle</h1>
//     <button onClick={showDetail}>
//     {
//         visibility ? 'Hide Details' : 'Show Details'
//     }
//     </button>
//     {visibility && (
//         <div><p>Hey these are the details</p></div>
//     )}
//     </div>;

//     ReactDOM.render(template, appRoot);
// };
// const appRoot = document.getElementById('app');
// render();

