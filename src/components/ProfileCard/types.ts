import styled from '@emotion/styled';

export interface User {
  avatar: string;
  userName: string;
  occupation: string;
  hobbies: string[];
}

export const ProfileCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 300px;
  height: 300px;
  background: rgb(187, 212, 210);
  border: 2px solid rgb(24, 55, 62);
  font-size: 20px;
`;

export const PropertyName = styled.span`
  font-weight: bold;
  font-size: 24px;
`;

export const AvatarImage = styled.img`
  width: 100px;
`;

export const UserNameHeader = styled.h3`
  font-size: 28px;
`;
export const Paragraph = styled.p`

`
