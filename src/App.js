import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Listing from './components/Listing';

function App() {
  let data = [
    {
      /* AA RITE IMAGE NE EXCESS KARI SAKAY JO APRE ANE IMPORT NAI KARVU HOI TO REQIRE LAKHI AMA PATH API LAKHI SAKAY */
      img : require('../src/assets/images/img1.jpeg'),
      title : "Title-1",
      description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quisquam corporis, labore aspernatur ab soluta."
    },
    {
      img : require('../src/assets/images/img2.jpeg'),
      title : "Title-2",
      description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quisquam corporis, labore aspernatur ab soluta."
    },
    {
      img : require('../src/assets/images/img3.jpeg'),
      title : "Title-3",
      description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quisquam corporis, labore aspernatur ab soluta."
    },
    {
      img : require('../src/assets/images/img4.webp'),
      title : "Title-4",
      description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quisquam corporis, labore aspernatur ab soluta."
    }
  ]
  return (
    <div className="App">
      <div style={{display:"flex", justifyContent:"space-evenly"}}>
        {
          data.map((x,i)=>{
            return  <Listing obj = {x} key = {i} />
          })
        }
      </div>
    
    </div>
  );
}

export default App;
