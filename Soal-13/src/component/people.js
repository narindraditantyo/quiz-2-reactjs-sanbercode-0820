import React from 'react';

const data = [
    { name: "John", age: 25, gender: "Male", profession: "Engineer", photo: "https://media.istockphoto.com/photos/portarit-of-a-handsome-older-man-sitting-on-a-sofa-picture-id1210237745" },
    { name: "Sarah", age: 22, gender: "Female", profession: "Designer", photo: "https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083378_960_720.jpg" },
    { name: "David", age: 30, gender: "Male", profession: "Programmer", photo: "https://media.istockphoto.com/photos/handsome-mexican-hipster-man-sending-email-with-laptop-picture-id1182472756" },
    { name: "Kate", age: 27, gender: "Female", profession: "Model", photo: "https://cdn.pixabay.com/photo/2015/05/17/20/07/fashion-771505_960_720.jpg" }
]

class PeopleCard extends React.Component {
    render() {
        return (
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                <>
                    {data.map(people => {
                        return (
                            <div style={{ border: "1px solid #DEDEDE" }}>
                                <img src={people.photo} style={{ width: "240px", height: "240px", objectFit: "cover" }}></img>
                                <div style={{ padding: "0 16px" }}>
                                    <h3 style={{ textAlign: "left" }}>{people.name}</h3>
                                    <p style={{ textAlign: "left" }}>{people.profession}</p>
                                    <p style={{ textAlign: "left" }}>{people.age} years old</p>
                                </div>
                            </div>
                        )
                    })}
                </>
            </div>
        )
    }
}

export default PeopleCard;