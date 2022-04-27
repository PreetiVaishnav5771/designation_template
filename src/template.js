import React from "react";
import { useState } from "react";
import "./template.css";
import Image from "./image";
import Facebook from "./logo";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const test = [
  {
    title: "Senior Software Engineer",
    lang: "Scoot",
    time: "5h ago . Full Time",
    country: "United kingdom",
  },
  {
    title: "Haskell and PureScript Dev",
    lang: "Blogr",
    time: "20h ago . Part Time",
    country: "United States",
  },
  {
    title: "Midlevel Back End Engineer",
    lang: "Vector",
    time: "1d ago . Part Time",
    country: "Russia",
  },
  {
    title: "Senior Application Engineer",
    lang: "Office Lite",
    time: "2d ago . Full Time",
    country: "Japan",
  },
  {
    title: "Remote DevOps Engineer",
    lang: "Pod",
    time: "2d ago . Part Time",
    country: "Thailand",
  },
  {
    title: "Desktop support Manager",
    lang: "Creative",
    time: "4d ago . Part Time",
    country: "Germany",
  },
  {
    title: "iOs Engineer",
    lang: "Pomodoro",
    time: "1w ago . Full Time",
    country: "United States",
  },
  {
    title: "Senior EjB Developer",
    lang: "Maker",
    time: "1w ago . Full Time",
    country: "United kingdom",
  },
  {
    title: "Senior Frontend Developer",
    lang: "Coffeeroasters",
    time: "1w ago . Part Time",
    country: "Singapore",
  },
];

// const user = test.filter(
//   (item) => item.name === user.title ||  item.country === user.country || item.time === user.time
//   );

// console.log(user);

const Template = () => {
  const [state, setstate] = useState(test);
 
  const [user, setuser] = useState({
    title: "",
    country: "",
  }); 

  const filterItem = (title) => {
    const updatedItem = title.filter((item) => {
      return item.title === title;
    });
    setuser(updatedItem);
  }

  const handleChange = (e) => {
    console.log(test);
    setuser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  // const [myName, setMyName] = useState();

  const handleSearch = (e) => {
    e.preventDefault();
    const design = test.filter(
      (item) => item.name === user.title ||  item.country === user.country
      );
      setstate(design);
    // console.log(user);
    // const newUser = { ...user, id: new Date().getTime().toString() };
    // console.log(newUser);
    // setuser([...user, newUser]);
    // console.log(user);
    
  };
  console.log(user);

  return (
    <div class="container-fluid">
      <div className="herobanner">
        <Image />
        <p className="main">devjobs</p>
      </div>

      <form class="main-div">
        <div class="form-row align-items-center">
          <div class="d-md-flex">
            <label class="input-form1">
              <input
                type="text"
                name="title"
                class="form-control mb-2"
                id="inlineFormInput"
                onChange={handleChange}
                value={user.title}
                placeholder="Filter by title, companies, expertise..."
              />
            </label>
            <label class="input-form2">
              <input
                type="text"
                name="country"
                class="form-control"
                id="inlineFormInputGroup"
                onChange={handleChange}
                value={user.country}
                placeholder="Filter by Location..."
              />
            </label>

            <label class="input-form3">
              <input
                class="form-check-input tick-box"
                type="checkbox"
                id="autoSizingCheck"
              />
              <label
                class="form-check-label option-check"
                for="autoSizingCheck"
              >
                <b>Full Time only</b>
              </label>
              <button
                type="submit"
                class="btn btn-primary mb-2 boot"
                onClick={() => handleSearch("title")}
              >
                Search
              </button>
            </label>
          </div>
        </div>
      </form>

      <div className="row sub-container">
        {state.map((item) => {
          return (
            <div className="col-12 col-md-6 col-lg-4 boxes">
              <Facebook />
              <p className="para">{item.time}</p>
              <h4>{item.title}</h4>
              <p className="para">{item.lang}</p>
              <p className="para1">{item.country}</p>
            </div>
          );
        })}
      </div>

      <button className="btn1">Load More</button>
    </div>
  );
};

export default Template;
