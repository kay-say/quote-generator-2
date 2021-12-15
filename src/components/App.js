import React from "react"
import Quote from "./Quote"
import Footer from "./Footer"

export default class App extends React.Component{
    constructor(props){
        super(props)
        this.state={
            joke:""
        }
        this.getQuote=this.getQuote.bind(this)
        this.getColor=this.getColor.bind(this)
    }
    getColor(){
        const r=Math.floor(Math.random()*255)
        const g=Math.floor(Math.random()*255)
        const b=Math.floor(Math.random()*255)
        document.querySelector("#root").style.background=`rgb(${r},${g},${b})`
        document.querySelector(".quote").style.color=`rgb(${r},${g},${b})`
    }
    getQuote(){
        fetch("https://icanhazdadjoke.com/",{
            method: "GET",
            headers: {
                "Content-Type":"application/json",
                'Accept': 'application/json'
            }
        })
        .then(res=>res.json())
        .then(data=>{
            // const [joke, setQuote]=React.useState(data.joke)
            this.getColor()
            this.setState(prevState=>{
                return {
                    joke: data.joke
                }
            })
        })
        .catch(err=>console.log(err))
    }
    componentDidMount(){
        this.getQuote()
    }
    render(){
        return(
            <div className="app">
                <Quote joke={this.state.joke} />
                <Footer getQuote={this.getQuote} />
            </div>
        )
    }
    
    
}
