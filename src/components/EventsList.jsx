import "./EventList.css";
import arrow_right from "../assets/arrow-right.png";
import arrow_right_dark from "../assets/arrow-right_dark.png";

const EventsList = () => {
  const listData = [
    {
      day: "MAY",
      day_num: 4,
      event: "Computer Hardware Desktops And Notebooks And Handhelds Oh My",
      time: "15:00 - 17:00",
      online: "Online",
    },
    {
      day: "MAY",
      day_num: 2,
      event: "Compatible Inkjet Cartridge",
      time: "12:00 - 14:00",
      online: "Online",
    },
    {
      day: "MAY",
      day_num: 8,
      event: "Choosing The Best Audio Player Software For Your Computer",
      time: "14:00 - 15:00",
      online: "Online",
    },
    {
      day: "MAY",
      day_num: 11,
      event: "Microsoft Patch Management For Home Users",
      time: "09:00 - 11:00",
      online: "Online",
    },
    {
      day: "MAY",
      day_num: "14 - 16",
      event: "Help Finding Information Online",
      time: "11:00 - 13:00",
      online: "Online",
    },
    {
      day: "MAY",
      day_num: "18 - 20",
      event: "Steps In Installing Rack Mount Lcd Monitors",
      time: "13:00 - 14:00",
      online: "Online",
    },
  ];

  return (
    <section className="main-section">
      <div className="lists">
        {listData.map((data, index) => (
          <div
            className={`event-list-container  ${
              index % 2 === 0 ? "purple-bg" : "gray-bg"
            }`}
            key={index}
          >
            <p
              className={`month ${
                index % 2 === 0 ? "text-white" : "text-dark"
              }`}
            >
              {data.day}
            </p>
            <h1
              className={`day ${index % 2 === 0 ? "text-white" : "text-dark"}`}
            >
              {data.day_num}
            </h1>
            <p
              className={`event ${
                index % 2 === 0 ? "text-white" : "text-dark"
              }`}
            >
              {data.event}
            </p>
            <div className="bottom-container">
              <div className="time-online">
                <p
                  className={`${index % 2 === 0 ? "text-white" : "text-dark"}`}
                >
                  {data.time}
                </p>
                <p
                  className={` ${index % 2 === 0 ? "text-white" : "text-dark"}`}
                >
                  {data.online}
                </p>
              </div>
              <img
                src={index % 2 === 0 ? arrow_right : arrow_right_dark}
                alt="arrow right"
              />
            </div>
          </div>
        ))}
      </div>

      <button className="load-more-btn">LOAD MORE EVENTS</button>
    </section>
  );
};

export default EventsList;
