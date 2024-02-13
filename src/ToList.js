import { Component } from "react";


export class ToList extends Component{
    state= {
        userInput: '',
        groceryList: []
    }

    onChangeEvent(e) {
        this.setState({ userInput :e});
    }

    addItem(input) {
        if (input==='') {
            alert('Please enter an item')
        }
        else {
        let listArray=this.state.groceryList;
        listArray.push(input);
        this.setState({groceryList:listArray, userInput: ''})
    }
}

deleteItem() {
    let listArray = this.state.groceryList;
    listArray = [];
    this.setState({groceryList: listArray})
}

    crosseWord(event) {
        const li = event.target;
        li.classList.toggle ('crossed'); 
    }

onFormSubmit(e) {
    e.preventDefault();
}


    render() {
        return(
            <div>
                <form onSubmit={this.onFormSubmit}>
                <div>
                    <input type="text" placeholder="My plan for today..." 
                    onChange={(e) =>{this.onChangeEvent(e.target.value)}}
                    value={this.state.userInput}/>
                </div>
                <div>
            <button className="buttonOne" onClick={() => this.addItem(this.state.userInput)}>Add</button>
            </div>

            <ul>
                {this.state.groceryList.map((item, index) => (
                    <li onClick={this.crosseWord} key={index}>{item}</li>
                ))}
            </ul>
            <div>
            <button className="buttonTwo" onClick={() => this.deleteItem()}>Delete</button>
            </div>
            </form>
            </div>
        )
    }
}