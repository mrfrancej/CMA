import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

export const Home = () => {
    const [contactList, setContactList] = useState([]);
    const getContactlist = () => {
        fetch("https://assets.breatheco.de/apis/fake/contact/agenda/france_agenda")
            .then(response => response.json())
            .then(res => setContactList(res));
    };
    {

        return (
            <div className="text-center mt-5">
                <h1>Hello Rigo!</h1>
                <p>
                    <img src={rigoImage} />
                </p>
                <a href="#" className="btn btn-success">
                    If you see this green button, bootstrap is working
				</a>
            </div>
        );

    }
