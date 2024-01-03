import React from 'react'
import { arr } from "./ScrollData.js";
import { newNotification } from "./ScrollData.js";
import "./NewsandEvent.css";

const NewsandEvents = () => {
  return (
    <div className="D1">
      <h1 className="H1">
        NEWS AND EVENTS{" "}
      </h1>

    <div className="M1" >
      {newNotification.map((item, i) => (
        <div>
          <a href={item.hypertext} target="_blank" rel="noreferrer">
            <div>
              {item.text}
              <img
                src="images/new.gif"
                alt="newimg"
                height="20vh"
                width="50vh"
              ></img>
              <hr />
            </div>
          </a>
        </div>
      ))}
      {arr.map((item, i) => (
        <div>
          <a href={item.hypertext}>
            <div>
              {item.text}
              <hr />
            </div>
          </a>
        </div>
      ))}
    </div>
  </div>
  )
}

export default NewsandEvents
