import React from "react";
import axios from "axios";
class UserClass extends React.Component {
    constructor(props) {
        super(props);
       
        this.state={
             count:0,
             count1:2,
             data:[]
        }
    }
    componentDidMount(){
              axios.get('https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.01420&lng=76.99410&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING').then(res=>{
                this.setState({
                    data:res.data
                })
              }).catch(err=>{console.log(err)});

              console.log("mounted")
   
    }
    componentDidUpdate()
    {
        console.log("update")
    }
    componentWillUnmount()
    {
        console.log("unmount")
    }
    render() {
        console.log("body rendered")
        return (
            <div>
                <h4>{this.props.name}</h4>
                <h6>{this.props.bro}</h6>
                <button onClick={()=>{
                    this.setState(
                        {
                            count : this.state.count +1
                        }
                    )
                }}>click</button>
                <p>{this.state.count}</p>
            </div>
        )
    }
}
export default UserClass;