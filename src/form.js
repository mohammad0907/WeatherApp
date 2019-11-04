import React, {Component} from "react"



class Forms extends Component{
    constructor(){
        super()
    }





    render(props){
      



        const show = {
            display : this.props.disp,
            width: "40%"
   
          }
          const iconUrl = "http://openweathermap.org/img/w/" + this.props.iconCode + ".png"
           return (
               <div style = {{backgroundColor: "red", display: "flex", flexDirection: "column",  }} >
                   <form onSubmit = {this.props.data}>
   
   
                   
                     
                       
                         <input type="text" className="form-control" placeholder="city" name = "city" onChange = {this.props.change} style = {{width: "40%"}} required />
                       
                         <input type="text" className="form-control " placeholder="Country" name ="country" onChange = {this.props.change} style = {{width: "40%"}} required />
                     
                         <button type="submit" className="btn btn-primary " >Submit</button>
                      
                     
                   
                   </form>
   
                   
                   
                   
                   
                   
                   
                   
                   
                   
                   
                   
                   
                   
                   
                   
                   
                   
                   
                   
                   
                   
                   
                   
                   
                   
                   
                   
                   
                   
                   <div className="card  " style = {show} >
                     <div className="card-header">
                       Weather : {this.props.description}  <img src= {iconUrl}/>
                     </div>
                     <ul className="list-group list-group-flush">
                       <li className="list-group-item">Temperature : {this.props.weatherObject.temp} F </li>
                       <li className="list-group-item">humidity : {this.props.weatherObject.humidity}%</li>
                       <li className="list-group-item">Temperature Low : {this.props.weatherObject.temp_min} F</li>
                       <li className="list-group-item">Temperature High : {this.props.weatherObject.temp_max} F</li>
                     </ul>
                   </div>
   
   
               </div>
           )
    }
}

export default Forms