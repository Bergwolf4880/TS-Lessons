import { useContext } from 'react'
import { ContentComponent, DataItem } from "./styles"
import { MainContext } from '../MainContent/MainContent'




function Content() {
    const userData = useContext(MainContext);

  return (
      <ContentComponent>
          <DataItem>First name: {userData.firstName}</DataItem>
          <DataItem>Second name: {userData.secondName}</DataItem>
          <DataItem>Age: {userData.age}</DataItem>
    </ContentComponent>

  )
}

export default Content