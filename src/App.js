import React, {Component} from "react"
import Form from "./form"
import NewForms from "./newForms"
import Info from './info'
import Forecast from "./forecast"
import thunder from './thunder.png'
import clouds from './clouds.png'
import drizzle from "./drizzle.png"
import rain from './rain.png'
import fog from './fog.png'
import clear from "./clear.png"
import snow from './snow.png'

class App extends Component {
    constructor() {
        super()
        this.state = {
         
          weatherObject: {},
          description: "",
          disp: "none", 
          iconCode: "",
          height: 0,
          width: 0,
          city: "Detroit",
          forecast: {},
          week : ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ],
          nextThreeDays : [],

        }
        this.fetchData = this.fetchData.bind(this)
    }

    componentDidMount(){
      fetch("http://api.openweathermap.org/data/2.5/weather?q=detroit,us&APPID=bbc91554f4a4cbcd99a566c6f47c4244&units=imperial")
      .then(response => response.json())
      .then(data =>{
          if (data.cod === 200){

          this.setState({
            weatherObject : data.main,
            description: data.weather[0].main,
            iconCode: data.weather[0].icon,
            disp: "block"
          

          })
        }else{
          alert("enter a valid city")
          this.setState({
            disp : "none"
          })
        }
        
      })

      this.setState({
        height: window.innerHeight,
        width: window.innerWidth, 
      })

      this.handleDay()

     fetch("http://api.openweathermap.org/data/2.5/forecast?q=detroit,us&APPID=bbc91554f4a4cbcd99a566c6f47c4244&units=imperial")
      .then(response => response.json())
      .then(data => {
       
        this.setState({
          forecast: data
        })
      })
      
    }

  
   fetchData = (event) => {
     event.preventDefault()
     const city = event.target.elements.city.value
     const country = event.target.elements.country.value

     console.log(city)
     
    fetch("http://api.openweathermap.org/data/2.5/weather?q=" + city + ","+ country + "&APPID=bbc91554f4a4cbcd99a566c6f47c4244&units=imperial")
      .then(response => response.json())
      .then(data =>{
          if (data.cod === 200){

          this.setState({
            weatherObject : data.main,
            description: data.weather[0].main,
            iconCode: data.weather[0].icon,
            disp: "block",
            city : city

          })
        }else{
          alert("enter a valid city")
          this.setState({
            disp : "none"
          })
        }
      })

      fetch("http://api.openweathermap.org/data/2.5/forecast?q="+ city + "," + country + "&APPID=bbc91554f4a4cbcd99a566c6f47c4244&units=imperial")
      .then(response => response.json())
      .then(data => {
       
        this.setState({
          forecast: data
        })
      })
   }

    handleResize = () => {
      this.setState({
        height: window.innerHeight,
        width: window.innerWidth
      })
    }

    handleDay = () =>{
      let date = new Date()
      let today = date.getDay()

      if(today === 4 ){
          this.setState({
            nextThreeDays :[this.state.week[5], this.state.week[6], this.state.week[0] ]
          })
      }else if (today === 5) {
        this.setState({
          nextThreeDays :[this.state.week[6], this.state.week[0], this.state.week[1] ]
        })
      }else if (today === 6) {
        this.setState({
          nextThreeDays :[this.state.week[0], this.state.week[1], this.state.week[2] ]
        })
      }else{
        let threeDays = [];
        for(let i = today; i < today + 3; i++){
          threeDays.push(this.state.week[i+1])
        }

        this.setState({
          nextThreeDays: threeDays
        })
      }


     
     
    }

    
    render() {
      if(window.addEventListener){
        window.addEventListener("resize", this.handleResize, true)
      }

      console.log(this.state.height)
      let conditions;
      if(this.state.description === "Thunderstorm"){
        conditions = thunder
      }else if(this.state.description === "Clouds"){
        conditions = clouds
      }else if(this.state.description === "Drizzle"){
        conditions = drizzle
      }else if(this.state.description === "Rain"){
        conditions = rain
      }else if(this.state.description === "Snow"){
        conditions = snow
      }else if(this.state.description === "Clear"){
        conditions = clear
      }else{
        conditions = fog
      }
      let d = new Date()
     
      
      return(

        <div className = "mainContainerBox" style = {{height: this.state.height,}}>
           
            <div className = "containerBox" style = {{height: this.state.height * .75}} >

              <div className = "desc"> 
                <div className = "cityTitle" > 
                      <h1>{this.state.city}</h1>
                      <h1>{this.state.week[d.getDay()]}</h1>
                </div>
                <div className = "photo" >
                  <img src = {conditions} width = "200px" height= "200px" style = {{position: "relative", top: "40px", marginBottom: "100px", }} />
                </div>

                <div className = "mainDesc">
                    
                    <div style = {{ display: "flex", justifyContent:"center",}}>
                      <h1>{this.state.weatherObject.temp} F</h1>
                    </div>
                    <div style = {{ display: "flex", justifyContent:"center",}} >
                      <h1>{this.state.description}</h1>
                    </div>
                </div>
              </div>

              <div className = "information">
                <div className = "searchField">
                  <NewForms data = {this.fetchData}  weatherObject = {this.state.weatherObject} description ={this.state.description} iconCode = {this.state.iconCode} disp = {this.state.disp} />
                </div>
                <div className = "info">
                    <Info   weatherObject = {this.state.weatherObject} description ={this.state.description} iconCode = {this.state.iconCode} disp = {this.state.disp}   />
                </div>

                <div className = "forecast">
                   
                    <Forecast nextThreeDays = {this.state.nextThreeDays} forecast = {this.state.forecast.list}  />
                </div>
               
              </div>
             
            </div>
          
        </div>
      )
      
      
    }
}

export default App
