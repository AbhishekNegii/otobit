import React, { useState, useEffect } from "react";
import axios from "axios";
import Capital from "./Capital";
import "./Search.css";
import LogOut from "./LogOut";
const Search = () => {
  const [posts, setPosts] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");
  const [data, setData] = useState("");

  useEffect(() => {
    let arr = [];

    const loadPosts = async () => {
      const response = await axios.get("https://restcountries.com/v2/all");
      // console.log( response.data)

      for (let i = 0; i < 250; i++) {
        if (!response.data[i].capital || !response.data[i].currencies) {
          arr.push({
            name: response.data[i].name,
            Capital: "no capital",
            currency: "no currency",
          });
        } else if (!response.data[i].currencies) {
          arr.push({
            name: response.data[i].name,
            Capital: response.data[i].capital,
            currency: "no currency",
          });
        } else {
          arr.push({
            name: response.data[i].name,
            Capital: response.data[i].capital,
            currency: response.data[i].currencies[0].name,
          });
        }
      }
      console.log(arr);

      setPosts(arr);
    };

    loadPosts();
  }, []);

  return (
    <div>
      <div >
        <LogOut />
      </div>
      <h4>Type here to search....</h4>
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearchTitle(e.target.value)}
      />

      <div className="containerSearch">
        <table>
          <thead>
            <tr>
              <th>Country </th>
              <th>Currency</th>
              <th>Capital</th>
            </tr>
          </thead>

          {posts
            .filter((value) => {
              // console.log(value)
              if (searchTitle === "") {
                return value;
              } else {
                console.log(value.name);
                return value.name
                  .toLowerCase()
                  .includes(searchTitle.toLowerCase());
              }
            })
            .map((item) => {
              return (
                <thead>
                  <th>
                    <a onClick={() => setData(item.Capital)}>
                      
                      <h4>{item.name}</h4>
                    </a>
                  </th>
                  <th>
                    <h5>{item.currency}</h5>
                  </th>
                  <th>
                    <h5>{item.Capital}</h5>
                  </th>
                </thead>
              );
            })}
        </table>

        <Capital data={data} />
      </div>
    </div>
  );
};

export default Search;
