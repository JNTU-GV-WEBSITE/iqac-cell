import React, { useRef, useEffect, useState } from "react";
import "./Notifications.css"; // Import your CSS file

const Notifications = () => {
  const jsonData = [
    {
      title:
        "Example Link 1444444444444444444444444444444444444444444444444444444444444444444",
      link: "https://example.com/link1",
    },
    { title: "Example Link 2", link: "https://example.com/link2" },
    { title: "Example Link 3", link: "https://example.com/link3" },
    { title: "Example Link 1", link: "https://example.com/link1" },
    { title: "Example Link 2", link: "https://example.com/link2" },
    { title: "Example Link 3", link: "https://example.com/link3" },
    { title: "Example Link 1", link: "https://example.com/link1" },
    { title: "Example Link 2", link: "https://example.com/link2" },
    { title: "Example Link 3", link: "https://example.com/link3" },
    { title: "Example Link 1", link: "https://example.com/link1" },
    { title: "Example Link 2", link: "https://example.com/link2" },
    { title: "Example Link 3", link: "https://example.com/link3" },
  ];

  const listRef = useRef(null);
  const [isPaused, setPaused] = useState(false);

  useEffect(() => {
    const list = listRef.current;
    let scrollPosition = 0;

    const scrollList = () => {
      if (!isPaused) {
        scrollPosition += 1;
        if (scrollPosition >= list.scrollHeight - list.clientHeight) {
          scrollPosition = 0;
        }
        list.scrollTop = scrollPosition;
      }
    };

    const intervalId = setInterval(scrollList, 50); // Adjust the interval for scrolling speed

    return () => clearInterval(intervalId);
  }, [isPaused]);

  return (
    <div className="link-list">
      <ul
        className="marquee-list"
        ref={listRef}
        onMouseEnter={() => setPaused(true)} // Pause animation on hover
        onMouseLeave={() => setPaused(false)} // Resume animation when leaving hover
      >
        {jsonData.map((item, index) => (
          <li key={index}>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              title={item.title} // Add title attribute for tooltip
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;
