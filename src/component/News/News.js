import React,{Component} from 'react'
import NewSingle from './NewSingle';


class News extends Component{
    state={
   news:[]


    }
componentDidMount(){
const url="https://newsapi.org/v2/everything?q=bitcoin&from=2019-07-11&sortBy=publishedAt&apiKey=ec0650ea932749619fe9d04375fe9f23";

fetch(url).then((respone)=>{

return respone.json();

}).then((data)=>

this.setState({news:data.articles})

).catch((errors)=>console.log(errors))


}
renderItems(){

return this.state.news.map((item)=>


<NewSingle key={item.url}  item={item}/>

)
    
}

render(){

return(
<div className="row">

{this.renderItems()}


</div>


)
}
}
export default News;