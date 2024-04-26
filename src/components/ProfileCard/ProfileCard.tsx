import './styles.css';
import {
  ProfileCardContainer,
  PropertyName,
  AvatarImage,
  UserNameHeader,
  User,
  Paragraph,
} from './types';

function ProfileCard() {
  const userData: User = {
    avatar:
      'https://img.freepik.com/premium-vector/men-women-different-poses-sitting-standing-isolated-white-background-cute-flat-style-vector-illustration_71599-9116.jpg?w=740',
    userName: 'John Doe',
    occupation: 'Web Developer',
    hobbies: ['Reading', 'Traveling', 'Photography'],
  };

  return (
    <ProfileCardContainer>
      <AvatarImage src="{userData.avatar}" />
      <UserNameHeader>{userData.userName}</UserNameHeader>
      <Paragraph>
        <PropertyName>Occupation:{userData.occupation}</PropertyName>
      </Paragraph>
      <Paragraph>
        <PropertyName>Hobby:{userData.hobbies[0]}</PropertyName>
      </Paragraph>
    </ProfileCardContainer>
  );
}

export default ProfileCard;
