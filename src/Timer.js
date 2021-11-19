import React from "react";


class Timer extends React.Component {

    constructor(props){
        super(props);
        this.state={
            count:0
        }
    }

    componentDidMount(){
        setInterval(() => {
            this.setState({
                count: this.state.count + 1   //This will increase the count automatically by one sec as soon as the 
            }, 1000);                          // person enters into the program
        });

    }
  
    render() {

        const {count} = this.state;  //accepting the count value here. 
    
        return(
            <div>
                <p>This Program was started <b> {count} seconds</b> ago.</p> 
            </div>
    )
    
    }

}

export default Timer;