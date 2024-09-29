import React from 'react'
import styles from './css.module.css';

/*
css module
- *.module.css extensions
- just apply for component itself
*/

function CSS() {
  const stylesCard = {
    fontSize: 20
  }

  return (
    <div>
      <h1>
        CSS
      </h1>

      <div
        // inline css
        // style={{
        //   color: '#f00',
        //   fontSize: 20
        // }}
        style={stylesCard}
        className={styles.heading}
      >
        this is demo inline css
      </div>
    </div>
  )
}

export default CSS