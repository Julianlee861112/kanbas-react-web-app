import Labs from "./Labs";
import HelloWorld from "./Labs/a3/HelloWorld";
import Kanbas from "./Kanbas";
import VariablesAndConstants from "./Labs/a3/VariablesAndConstants";
import VariableTypes from "./Labs/a3/VariableTypes";
import BooleanVariables from "./Labs/a3/BooleanVariables";
import IfElse from "./Labs/a3/IfElse";
import TernaryOperator from "./Labs/a3/TernaryOperator";
//2.2.6
import ES5Functions from "./Labs/a3/ES5Functions";
import ArrowFunctions from "./Labs/a3/ArrowFunctions";
import ImpliedReturn from "./Labs/a3/ImpliedReturn";
import FunctionParenthesisAndParameters from "./Labs/a3/FunctionParenthesisAndParameters";
//2.2.7
import WorkingWithArrays from "./Labs/a3/WorkingWithArrays";
import ArrayIndexAndLength from "./Labs/a3/ArrayIndexAndLength";
import AddingAndRemovingDataToFromArrays from "./Labs/a3/AddingAndRemovingDataToFromArrays";
import ForLoops from "./Labs/a3/ForLoops";
import Mapfuntion from "./Labs/a3/MapFunction";
import JsonStringify from "./Labs/a3/JsonStringify";
import FindFunctions from "./Labs/a3/FindFunction";
import FindIndex from "./Labs/a3/FindIndex";
import FilterFunction from "./Labs/a3/FilterFunctions";
//2.2.8
import TemplateLiterals from "./Labs/a3/TemplateLiterals";
//2.2.9
import House from "./Labs/a3/House";
//2.2.10
import Spread from "./Labs/a3/Spread";
//2.2.11
import Destructing from "./Labs/a3/Destructing";
//2.2.12
import FunctionDestructing from "./Labs/a3/FunctionDestructing";
//2.3
import {HashRouter} from "react-router-dom";
import {Routes, Route, Navigate} from "react-router";
function App() {
   return (
      <HashRouter>
         <div>
            <Routes>
               <Route path="/"         element={<Navigate to="/Labs"/>}/>
               <Route path="/hello"    element={<HelloWorld/>}/>
               <Route path="/Labs/*"   element={<Labs/>}/>
               <Route path="/Kanbas/*" element={<Kanbas/>}/>
            </Routes>
            {/* 2.2.2 */}
            <VariablesAndConstants/>
            {/* 2.2.3 */}
            <VariableTypes/>
            {/* 2.2.4 */}
            <BooleanVariables/>
            {/* 2.2.5 */}
            <IfElse/>
            <TernaryOperator/>
            {/* 2.2.6 */}
            <ES5Functions/>
            <ArrowFunctions/>
            <ImpliedReturn/>
            <FunctionParenthesisAndParameters/>
            {/* 2.2.7 */}
            <WorkingWithArrays/>
            <ArrayIndexAndLength/>
            <AddingAndRemovingDataToFromArrays/>
            <ForLoops/>
            <Mapfuntion/>
            <JsonStringify/>
            <FindFunctions/>
            <FindIndex/>
            <FilterFunction/>
            {/* 2.2.8 */}
            <TemplateLiterals/>
            {/* 2.2.9 */}
            <House/>
            {/* 2.2.10 */}
            <Spread/>
            {/* 2.2.11 */}
            <Destructing/>
            {/* 2.2.12 */}
            <FunctionDestructing/>

         </div>
      </HashRouter>
   );
}

export default App;