// import logo from './logo.svg';
import './App.css';
// import UncontrolledComponent from './components/2-10.Form/UncontrolledComponent'
// import ControlledComponent from './components/2-10.Form/ControlledComponent';
import State from './components/3-3.Hooks/State';
import Reducer from './components/3-3.Hooks/Reducer'
// import Event from './components/2-7.Event/Event'
// import List from './components/2-9.List/List'
// import Condition from './components/2-8.ConditionalRendering/Condition';
// import Composition from './components/2-4.Props/Composition';
// import ClassComponent from './components/2-5.State/ClassComponent';
// import ClassComponent2 from './components/2-6.LifeCycle/ClassComponent';
// import FunctionalComponent from './components/2-5.State/FunctionalComponent';

function App() {
  return (
    <div className="App">
      <State/>
      <Reducer/>
      {/* <UncontrolledComponent/> */}
      {/* <ControlledComponent/> */}
      {/* {<List/>} */}
      {/* <Condition/> */}
      {/* <Event/> */}
      {/* <ClassComponent2 /> */}
      {/* <FunctionalComponent/> */}
      {/* <ClassComponent/> */}
      {/* <Composition/> */}
    </div>
  );
}

export default App;
