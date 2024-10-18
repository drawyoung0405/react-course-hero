import React from "react";

function AccordionComponent() {
  const [activeAccordion, setActiveAccordion] = React.useState([]);

  const accordDatas = [
    {
      title: "Contruction",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },

    {
      title: "Internal Gain",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },

    {
      title: "Airflow",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },

    {
      title: "Heating & Cooling",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },

    {
      title: "Location, Climate & Weather",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];

  function handleActive(accordTitle) {
    setActiveAccordion((prevState) => {
      if (prevState.includes(accordTitle)) {
        return prevState.filter((item) => item !== accordTitle);
      }
      return [...prevState, accordTitle];
    });
  }

  return (
    <>
      <h1 className="mb-2">Accordion</h1>
      {accordDatas.map((item, index) => (
        <div className="m-0">
          <button
            type="text"
            className="bg-gray-200 w-full text-left p-2 border-b border-gray-300"
            onClick={() => handleActive(index)}
          >
            {item.title}
          </button>
          {activeAccordion.includes(index) ? (
            <div className="ml-2 my-2">{item.content}</div>
          ) : null}
        </div>
      ))}
    </>
  );
}

export default AccordionComponent;
