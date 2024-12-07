import React from 'react';

const config = {
    red: {
        backgroundColor: 'red',
        next: 'green',
        duration: 5000
    },
    yellow: {
        backgroundColor: 'yellow',
        next: 'red',
        duration: 3000
    },
    green: {
        backgroundColor: 'green',
        next: 'yellow',
        duration: 4000
    },
}

function TrafficLight() {
    const [currenLight, setCurrentLight] = React.useState("green");

    // React.useEffect(() => {
    //     let timerId;

    //     switch(currenLight) { 
    //         case 'green':
    //         timerId = setTimeout(() => {
    //             setCurrentLight('yellow');
    //         },3000);
    //         break;

    //         case 'yellow':
    //         timerId = setTimeout(() => {
    //             setCurrentLight('red');
    //         },500);
    //         break;

    //         case 'red':
    //         timerId = setTimeout(() => {
    //             setCurrentLight('green');
    //         }, 4000);
    //         break;

    //         default:
    //         break;
    //     }

    //     return () => {
    //         clearTimeout(timerId);
    //     };
    // },[currenLight]);

    React.useEffect(() => {
        const { duration, next } = config[currenLight];

        const timerId = setTimeout(() => {
            setCurrentLight(next);
        }, duration)

        return () => {
            clearTimeout(timerId)
        }
    }, [currenLight])

  return (
    <>
        <h1>Traffic Light</h1>
        <div className='traffic-container'>
            {/* <div className="traffic-light" 
            style={currenLight === "red" ? {backgroundColor: 'red'} : {backgroundColor: "#555555"}}
            ></div>
            <div className='traffic-light' 
            style={currenLight === "yellow" ? {backgroundColor: 'yellow'} : {backgroundColor: "#555555"} }
            ></div>
            <div className='traffic-light'
            style={currenLight === "green" ? {backgroundColor: 'green'} : {backgroundColor: "#555555"} }></div> */}
            
            <div className="traffic-light-container">
                {Object.keys(config).map(color => {
                    return (
                        <div 
                            className="traffic-light" 
                            key={color}
                            style={{
                                backgroundColor: currenLight === color ? config[color].backgroundColor : '#555'
                            }}
                        />
                    )
                })}
            </div>
        </div>
    </>
  )
}

export default TrafficLight