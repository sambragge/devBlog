import React from "react";
import "./style/index.scss";

import Header from "./components/header.jsx";
import Footer from "./components/footer.jsx";

class App extends React.Component {
    render(){
        return(
            <div className="App" >
                <Header/>
                <div className="body" >
                  <p>
                    Hi, my name is Samuel Bragge and I like building things with code. I recently started learning Unity3D and C# \n\n
                  </p>
                  <p>
                    I would like to use this as a platform to showcase various projects I am working on. And hopefully develop a community of people who enjoy my work.
                  </p>
                  <p>
                    There will be a blog on the Home page, Games on another, and a portfolio of various projects on yet another. The footer will contain all my contact details, and the header has a pretty picture of me, and some other bullshit. Below that is the Navigation bar, use that to navigate through the site...duh.
                  </p>
                </div>
                <Footer/>
            </div>
        );
    };
};

export default App;
