// const heading=React.createElement("h1",{id:"heading"},"hello from reactjs CDN");

const parent=React.createElement("div",{id:"parent"},
React.createElement("div",{id:"child"},[

    React.createElement("h1",{id:"heading1"},"heading1"),
    React.createElement("h1",{id:"heading2"},"heading2"),
]
));
console.log(typeof(heading));


const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);