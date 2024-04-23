import "./styles.css"
import { userData } from "./userData";



function ProfileCard() {

    const hobbiesArray = userData.hobbies?.map((hobbie) => {
        return <p>{hobbie}</p>
    })

    return (
        <div className="profile-card">
            <img className="picture" src={userData.avatar} alt="person" />

            <div className="user-data">
                <h4>{userData.userName}</h4>
                <div>{userData.occupation}</div>
                <div>Hobby:</div>
                <div className="hobby">{hobbiesArray}</div>
            </div>
        </div>
    )
}

export default ProfileCard;