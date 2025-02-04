// const parent=document.querySelector("#root");
// const root=ReactDOM.createRoot(parent);
// const h2=React.createElement("h2",{style:{color:'red'}},"hi react from dom");
// const li=React.createElement("li",{},"orange")
// const li2=React.createElement("li",{},"orange")
// const li3=React.createElement("li",{},"orange")
// const ul=React.createElement("ul",{},li,li2);
// const div=React.createElement("div",{style:{backgroundColor:"yellow8"}},h2,ul);


// root.render(div);


const parent=document.getElementById("root");
console.dir(parent);
const root=ReactDOM.createRoot(parent);
// const h2=React.createElement("h2",{style:{color:'red'}},"Hello React JS");
// const li1=React.createElement("li",{},"Orange");
// const li2=React.createElement("li",{},"Apple");
// const ul=React.createElement("ul",{},li1,li2);
// const div=React.createElement("div",{style:{backgroundColor:'cyan'}},h2,ul);

//JSX
const div=React.createElement("h2",{},"Heading Tag");
const h21=<h2>Hello JSX in JS</h2>;
const li1=<li>Orange</li>;
const li2=<li>Apple</li>;
const li3=<li>Banana</li>;
const li4=<li>Guava</li>;
const ul=<ul style={{color:'red',backgroundColor:'yellow'}}>{li1}{li2}{li3}{li4}</ul>
const container=(
    <div>
        <div>{ul}</div>
        <div>{h21}</div>
    </div>
)
root.render(container);
