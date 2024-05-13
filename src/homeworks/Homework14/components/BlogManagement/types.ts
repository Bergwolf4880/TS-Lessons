import { Dispatch, SetStateAction } from 'react'

export interface MessageType{
    userInput: string,
    onChange: Dispatch<SetStateAction<string>>,
    setMessage: Dispatch<SetStateAction<string>>
}