import React from "react";

function ActiveTabComponent() {
  const [activeTab, setactiveTabs] = React.useState(0);

  const dataTabs = [
    {
      title: "HTML",
      content:
        "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.",
    },
    {
      title: "CSS",
      content:
        "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.",
    },
    {
      title: "JavaScript",
      content:
        "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.",
    },
  ];

  function handleActiveTab(tabTitle) {
    setactiveTabs(tabTitle);
    console.log(tabTitle);
  }

  return (
    <div>
      {dataTabs.map((item, index) => (
        <button
          type="button"
          key={index}
          className={`${
            activeTab === index
              ? "bg-violet-700 text-white"
              : "bg-white text:-black"
          } mx-2 p-2 border border-black rounded-lg`}
          onClick={() => handleActiveTab(index)}
        >
          {item.title}
        </button>
      ))}

      {dataTabs.map((item, index) => (
        activeTab === index ? <div>{item.content}</div> : ""
      ))}
    </div>
  );
}

export default ActiveTabComponent;
